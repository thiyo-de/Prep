import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fontRuns, inlineRuns, preparePdfText } from '../src/pdf.js';
const require = createRequire(import.meta.url);
const fontkit = require('@foliojs-fork/fontkit');

test('Tamil words stay intact in a Tamil font, including combining vowel marks', () => {
  const text = 'English (ஆங்கில மொழி அடிப்படை)';
  const runs = fontRuns(text);
  assert.equal(runs.map(run => run.text).join(''), text);
  assert.ok(runs.some(run => run.font === 'Tamil' && run.text.includes('ஆங்கில')));
  const tamil = fontkit.openSync('fonts/NotoSansTamil-Regular.ttf');
  for (const run of runs.filter(run => run.font === 'Tamil')) {
    assert.ok(tamil.layout(run.text).glyphs.every(glyph => glyph.id !== 0), 'Tamil shapes without missing glyphs');
  }
});

test('box diagrams use a fixed width font with real line and arrow glyphs', () => {
  const diagram = '┌──────┐\n│ Test │\n└──┬───┘\n   ▼';
  const runs = fontRuns(diagram, 'Mono');
  assert.equal(runs.map(run => run.text).join(''), diagram);
  assert.ok(runs.every(run => run.font === 'Mono'));
  const font = fontkit.openSync('fonts/NotoSansMono-Regular.ttf');
  const widths = [...'┌─│└┬┐┘▼ Test'].map(c => font.glyphForCodePoint(c.codePointAt(0)).advanceWidth);
  assert.equal(new Set(widths).size, 1);
});

test('font fallback keeps bold, italic and link formatting without nested arrays', () => {
  const result = inlineRuns([{ text: 'தமிழ் English', bold: true, italics: true, link: 'https://example.com' }]);
  assert.ok(result.every(run => typeof run.text === 'string' && run.bold && run.italics && run.link === 'https://example.com'));
  assert.equal(result.map(run => run.text).join(''), 'தமிழ் English');
  assert.equal(preparePdfText('✅ ❌ 🟢 🟡 🔴'), '[OK] [Wrong] Green: Amber: Red:');
});
