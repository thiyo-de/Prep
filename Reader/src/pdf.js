import { renderDocument } from './render.js';
import { githubUrl } from '../config.js';
import { vfs, definitions, coverage } from './generated/pdf-fonts.js';

const glyphs = Object.fromEntries(Object.entries(coverage).map(([name, codes]) => [name, new Set(codes)]));
export function fontRuns(value, primary = 'Roboto') {
  const runs = [];
  for (const character of value) {
    const code = character.codePointAt(0);
    const family = /[\s\u200c\u200d]/u.test(character) ? (runs.at(-1)?.font || primary)
      : code >= 0x0b80 && code <= 0x0bff && glyphs.Tamil.has(code) ? 'Tamil'
      : [primary, 'Mono', 'Symbols', 'Tamil'].find(name => glyphs[name]?.has(code));
    if (!family) throw new Error(`PDF font does not support U+${code.toString(16).toUpperCase()}.`);
    if (runs.at(-1)?.font === family) runs.at(-1).text += character;
    else runs.push({ text: character, font: family });
  }
  return runs;
}

export function preparePdfText(value) {
  return value.replace(/🟢/gu, 'Green:').replace(/🟡/gu, 'Amber:').replace(/🔴/gu, 'Red:')
    .replace(/✅/gu, '[OK]').replace(/❌/gu, '[Wrong]').replace(/⚠️?/gu, '[Note]')
    .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '');
}

// pdfmake 0.2 flattens nested text arrays without keeping all parent formatting.
// Flatten explicitly so bold, italic, links and code spacing survive font fallback.
export function inlineRuns(value, inherited = {}) {
  if (typeof value === 'string') return fontRuns(value, inherited.font || 'Roboto').map(run => ({ ...inherited, ...run }));
  if (Array.isArray(value)) return value.flatMap(item => inlineRuns(item, inherited));
  if (!value || typeof value !== 'object') return [];
  const { text, ...attributes } = value;
  const style = { ...inherited, ...attributes };
  if (attributes.style?.includes?.('html-code')) { style.font = 'Mono'; style.fontSize = Math.min(style.fontSize || 8, 8); }
  return inlineRuns(text, style);
}

export async function createPdfBlob(text, doc, draft = false) {
  const [{ default: pdfMake }, { default: fonts }, { default: htmlToPdfmake }] = await Promise.all([
    import('pdfmake/build/pdfmake.js'), import('pdfmake/build/vfs_fonts.js'), import('html-to-pdfmake')
  ]);
  pdfMake.addVirtualFileSystem({ ...fonts, ...vfs });
  pdfMake.addFonts({ Roboto: { normal: 'Roboto-Regular.ttf', bold: 'Roboto-Medium.ttf', italics: 'Roboto-Italic.ttf', bolditalics: 'Roboto-MediumItalic.ttf' }, ...definitions });
  const html = renderDocument(text, doc, false, true);
  html.querySelectorAll('a').forEach(a => { if (a.getAttribute('href')?.startsWith('#')) a.removeAttribute('href'); });
  // Keep meaningful status markers as text; decorative emoji are not PDF fonts.
  const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) walker.currentNode.textContent = preparePdfText(walker.currentNode.textContent);
  // Mixed inline text + nested lists otherwise becomes one line per bold span
  // in html-to-pdfmake. Wrap each inline paragraph before converting it.
  const blocks = new Set(['UL', 'OL', 'P', 'PRE', 'TABLE', 'BLOCKQUOTE', 'DIV']);
  for (const li of html.querySelectorAll('li')) {
    if (![...li.children].some(child => blocks.has(child.tagName))) continue;
    let paragraph = null;
    for (const child of [...li.childNodes]) {
      if (blocks.has(child.nodeName)) { paragraph = null; continue; }
      if (!paragraph && !child.textContent.trim()) { child.remove(); continue; }
      if (!paragraph) {
        paragraph = document.createElement('p');
        paragraph.setAttribute('data-pdfmake', JSON.stringify({ margin: [0, 0, 0, 3] }));
        li.insertBefore(paragraph, child);
      }
      paragraph.append(child);
    }
  }
  for (const pre of html.querySelectorAll('pre')) {
    const longest = Math.max(1, ...pre.textContent.split('\n').map(line => [...line].length));
    const available = (doc.id === 'plan' ? 841.89 : 595.28) - 100;
    const fontSize = Math.min(8, available / (longest * 0.6));
    const fitsPage = pre.textContent.split('\n').length * fontSize * 1.6 < (doc.id === 'plan' ? 480 : 700);
    pre.setAttribute('data-pdfmake', JSON.stringify({ font: 'Mono', fontSize, lineHeight: 1.1, preserveLeadingSpaces: true, unbreakable: fitsPage, margin: [0, 6, 0, 10] }));
  }
  const content = htmlToPdfmake(html.innerHTML, {
    window,
    defaultStyles: {
      h1: { fontSize: 23, bold: true, color: '#254f48', margin: [0, 0, 0, 15] },
      h2: { fontSize: 15, bold: true, color: '#254f48', margin: [0, 16, 0, 8] },
      h3: { fontSize: 12, bold: true, margin: [0, 10, 0, 6] },
      p: { margin: [0, 0, 0, 8] },
      th: { bold: true, fillColor: '#eaf0ed' },
      td: { margin: [3, 4, 3, 4] },
      a: { color: '#285d8a', decoration: 'underline' }
    }
  }).filter(node => node.nodeName || typeof node.text !== 'string' || node.text.trim());
  function polish(node, inheritedFont = 'Roboto', inheritedSize = 10) {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(item => polish(item, inheritedFont, inheritedSize)); return; }
    const code = node.style?.includes?.('html-code') || node.style?.includes?.('html-pre');
    const family = code ? 'Mono' : node.font || inheritedFont;
    if (code) { node.font = family; node.fontSize = Math.min(node.fontSize || inheritedSize, 8); }
    if (node.table) {
      const columns = Math.max(...node.table.body.map(row => row.length));
      // Star columns expand to the widest unbroken word. Long Tamil words in
      // wide tables can therefore force the entire table beyond the page.
      const pageWidth = doc.id === 'plan' ? 841.89 : 595.28;
      node.table.widths = Array(columns).fill(Math.floor((pageWidth - 80 - columns * 16) / columns));
      node.table.headerRows = 1;
      node.fontSize = columns >= 5 ? 8 : 9;
      node.layout = 'lightHorizontalLines';
      node.margin = [0, 4, 0, 12];
    }
    for (const [key, value] of Object.entries(node)) {
      if (key !== 'text' && typeof value === 'object') polish(value, family, node.fontSize || inheritedSize);
    }
    if (node.text !== undefined) node.text = inlineRuns(node.text, { font: family, ...(code ? { fontSize: node.fontSize } : {}) });
  }
  polish(content);
  // Keep a diagram with its heading when the block fits a page.
  for (let i = content.length - 1; i > 0; i--) {
    if (content[i].nodeName === 'PRE' && content[i].unbreakable && ['H2', 'H3'].includes(content[i - 1].nodeName)) {
      content.splice(i - 1, 2, { stack: [content[i - 1], content[i]], unbreakable: true });
    }
  }
  const definition = {
    info: { title: `${doc.title} — Prep`, author: 'Prep study reader' },
    pageSize: 'A4', pageOrientation: doc.id === 'plan' ? 'landscape' : 'portrait',
    pageMargins: [40, 44, 40, 42],
    pageBreakBefore: (node, following) => node.style?.some?.(style => ['html-h1', 'html-h2', 'html-h3'].includes(style)) && following.length === 0,
    defaultStyle: { font: 'Roboto', fontSize: 10, lineHeight: 1.25, color: '#202a31' },
    header: { text: `PREP / 2027     ${doc.title.toUpperCase()}${draft ? '     • LOCAL DRAFT' : ''}`, margin: [40, 18, 40, 0], fontSize: 8, color: '#64716c' },
    footer: (page, pages) => ({ columns: [
      { text: `Generated ${new Date().toLocaleDateString('en-GB')} · ${draft ? 'Unsaved changes included' : 'From Markdown source'}`, width: '*' },
      { text: `${page} / ${pages}`, alignment: 'right', width: 60 }
    ], margin: [40, 15, 40, 0], fontSize: 8, color: '#64716c' }),
    content: [...(draft ? [{ text: 'LOCAL DRAFT — checklist changes in this copy have not been saved to GitHub.', color: '#895b18', margin: [0, 0, 0, 12] }] : []), ...content, { text: 'Original document on GitHub', link: githubUrl(doc), fontSize: 8, color: '#285d8a', margin: [0, 18, 0, 0] }]
  };
  return new Promise((resolve, reject) => {
    try { pdfMake.createPdf(definition).getBlob(resolve); } catch (error) { reject(error); }
  });
}
