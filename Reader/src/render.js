import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import katex from 'katex';
import { tasksIn } from './core.js';
import { documents, githubUrl } from '../config.js';

export function formatMathForPdf(tex) {
  let s = tex.trim();
  while (/\\frac\{([^{}]+)\}\{([^{}]+)\}/.test(s)) {
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/$2');
  }
  return s
    .replace(/\\sqrt\{([^{}]+)\}/g, '√($1)')
    .replace(/\\sqrt\s*([0-9a-zA-Z]+)/g, '√$1')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\text\{([^{}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^{}]+)\}/g, '$1')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\approx/g, '≈')
    .replace(/\\neq/g, '≠')
    .replace(/\\le(q)?/g, '≤')
    .replace(/\\ge(q)?/g, '≥')
    .replace(/\\(long)?rightarrow/g, '→')
    .replace(/\\to/g, '→')
    .replace(/\\implies/g, '⇒')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\cup/g, '∪')
    .replace(/\\cap/g, '∩')
    .replace(/\\sum/g, 'Σ')
    .replace(/\\,/g, ' ')
    .replace(/\\;/g, ' ')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>')
    .replace(/\^([0-9a-zA-Z])/g, '<sup>$1</sup>')
    .replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>')
    .replace(/_([0-9a-zA-Z])/g, '<sub>$1</sub>')
    .replace(/[{}]/g, '')
    .trim();
}

export function renderDocument(text, doc, interactive = true, forPdf = false) {
  const md = new MarkdownIt({ html: true, linkify: false });
  const taskMap = new Map(tasksIn(text).map(t => [t.line, t]));

  // Inline Math: $...$
  md.inline.ruler.before('escape', 'math_inline', (state, silent) => {
    const start = state.pos;
    if (state.src.charCodeAt(start) !== 0x24 /* $ */) return false;
    if (state.src.charCodeAt(start + 1) === 0x24) return false;
    let pos = start - 1;
    let backslashes = 0;
    while (pos >= 0 && state.src.charCodeAt(pos) === 0x5c) {
      backslashes++;
      pos--;
    }
    if (backslashes % 2 !== 0) return false;
    const next = state.src.charCodeAt(start + 1);
    if (next === 0x20 || next === 0x09 || isNaN(next)) return false;
    let match = start + 1;
    while ((match = state.src.indexOf('$', match)) !== -1) {
      let p = match - 1;
      let b = 0;
      while (p >= 0 && state.src.charCodeAt(p) === 0x5c) {
        b++;
        p--;
      }
      if (b % 2 === 0) break;
      match++;
    }
    if (match === -1) return false;
    const prev = state.src.charCodeAt(match - 1);
    if (prev === 0x20 || prev === 0x09) return false;
    if (!silent) {
      const token = state.push('math_inline', 'math', 0);
      token.content = state.src.slice(start + 1, match);
    }
    state.pos = match + 1;
    return true;
  });

  // Block Math: $$...$$
  md.block.ruler.before('fence', 'math_block', (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (start + 2 > max || state.src.slice(start, start + 2) !== '$$') return false;
    const sameLineEnd = state.src.indexOf('$$', start + 2);
    if (sameLineEnd !== -1 && sameLineEnd <= max) {
      if (!silent) {
        const token = state.push('math_block', 'math', 0);
        token.block = true;
        token.content = state.src.slice(start + 2, sameLineEnd).trim();
        token.map = [startLine, startLine + 1];
      }
      state.line = startLine + 1;
      return true;
    }
    let nextLine = startLine;
    let found = false;
    while (!found && nextLine < endLine) {
      nextLine++;
      if (nextLine >= endLine) break;
      const nextStart = state.bMarks[nextLine] + state.tShift[nextLine];
      const nextMax = state.eMarks[nextLine];
      if (nextStart + 2 <= nextMax && state.src.slice(nextStart, nextStart + 2) === '$$') {
        found = true;
        break;
      }
    }
    if (!found) return false;
    if (!silent) {
      const token = state.push('math_block', 'math', 0);
      token.block = true;
      token.content = state.getLines(startLine + 1, nextLine, state.tShift[startLine], true).trim();
      token.map = [startLine, nextLine + 1];
    }
    state.line = nextLine + 1;
    return true;
  });

  if (forPdf) {
    md.renderer.rules.math_inline = (tokens, idx) => formatMathForPdf(tokens[idx].content);
    md.renderer.rules.math_block = (tokens, idx) => `<p>${formatMathForPdf(tokens[idx].content)}</p>`;
  } else {
    md.renderer.rules.math_inline = (tokens, idx) => {
      try {
        return katex.renderToString(tokens[idx].content, { throwOnError: false, displayMode: false });
      } catch {
        return `<span class="math-fallback">${md.utils.escapeHtml(tokens[idx].content)}</span>`;
      }
    };
    md.renderer.rules.math_block = (tokens, idx) => {
      try {
        return `<div class="math-block">${katex.renderToString(tokens[idx].content, { throwOnError: false, displayMode: true })}</div>`;
      } catch {
        return `<div class="math-block math-fallback">${md.utils.escapeHtml(tokens[idx].content)}</div>`;
      }
    };
  }

  md.core.ruler.after('inline', 'checklist-controls', state => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.map) continue;
      const task = taskMap.get(token.map[0]);
      if (!task || !token.children?.[0] || token.children[0].type !== 'text') continue;
      token.children[0].content = token.children[0].content.replace(/^\[[ xX]\]\s/, '');
      if (interactive) {
        const input = new state.Token('html_inline', '', 0);
        input.content = `<input type="checkbox" class="task-check" data-task-line="${task.line}" aria-label="${md.utils.escapeHtml(task.label)}"${task.checked ? ' checked' : ''}>`;
        token.children.unshift(input);
      } else {
        token.children[0].content = `${task.checked ? '[x]' : '[ ]'} ${token.children[0].content}`;
      }
    }
  });
  const container = document.createElement('div');
  container.innerHTML = DOMPurify.sanitize(md.render(text), {
    ALLOWED_TAGS: [
      'h1','h2','h3','h4','h5','h6','p','a','strong','em','b','i','s','del','sub','sup','mark','span','div',
      'ul','ol','li','blockquote','pre','code','hr','br','table','thead','tbody','tr','th','td','input',
      'math','semantics','mrow','msup','mfrac','mn','mo','mi','mspace','annotation'
    ],
    ALLOWED_ATTR: ['href','title','start','align','type','class','style','data-task-line','aria-label','aria-hidden','checked','xmlns','encoding'],
    ALLOW_DATA_ATTR: false
  });
  // Source-authored HTML inputs must never masquerade as editable tasks.
  for (const input of container.querySelectorAll('input')) {
    const task = taskMap.get(Number(input.dataset.taskLine));
    if (!interactive || input.type !== 'checkbox' || input.className !== 'task-check' || !task || input.getAttribute('aria-label') !== task.label) input.remove();
  }
  for (const input of container.querySelectorAll('.task-check')) {
    const li = input.closest('li');
    li?.classList.add('task-item');
    li?.classList.toggle('done', input.checked);
  }
  for (const link of container.querySelectorAll('a')) {
    const raw = link.getAttribute('href');
    if (!raw) continue;
    if (raw.startsWith('#')) continue;
    try {
      const resolved = new URL(raw, `https://content.invalid/${doc.path}`);
      if (resolved.hostname === 'content.invalid') {
        const target = documents.find(d => d.path === decodeURIComponent(resolved.pathname.slice(1)));
        link.href = target ? `#${target.id}` : `https://github.com/thiyo-de/Prep/blob/main${resolved.pathname}${resolved.hash}`;
      } else if (['https:', 'http:', 'mailto:'].includes(resolved.protocol)) link.href = resolved.href;
      else { link.removeAttribute('href'); continue; }
      if (!link.getAttribute('href').startsWith('#')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    } catch { link.removeAttribute('href'); }
  }
  return container;
}

export function sectionsFrom(container) {
  const sections = [];
  let current = document.createElement('section');
  current.className = 'doc-section introduction';
  current.dataset.title = 'Overview';
  for (const child of [...container.children]) {
    if (child.tagName === 'H2' || (child.tagName === 'H1' && current.children.length > 0)) {
      if (current.children.length) sections.push(current);
      current = document.createElement('section');
      current.className = 'doc-section';
      current.dataset.title = child.textContent;
    }
    current.append(child);
  }
  if (current.children.length) sections.push(current);
  sections.forEach((section, i) => {
    section.id = `section-${i}`;
    for (const table of section.querySelectorAll('table')) {
      const wrap = document.createElement('div');
      wrap.className = 'table-scroll'; wrap.tabIndex = 0; wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-label', 'Scrollable table');
      table.before(wrap); wrap.append(table);
    }
  });
  return sections;
}
