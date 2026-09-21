const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'CHSL', 'Tracker', 'tracker.html'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'CHSL', 'README.md'), 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function harness(markdown = readme) {
  function element() {
    return {style: {}, dataset: {}, value: '', children: [], classList: {add() {}, remove() {}},
      appendChild(child) { this.children.push(child); }, focus() {}};
  }
  const elements = Object.fromEntries([...html.matchAll(/id="([^"]+)"/g)].map(m => [m[1], element()]));
  const disk = {text: markdown, writes: 0, fail: false};
  const handle = {
    name: 'README.md',
    async getFile() { return {text: async () => disk.text}; },
    async createWritable() {
      let pending;
      return {async write(text) { if (disk.fail) throw new Error('simulated failure'); pending = text; },
        async close() { disk.text = pending; disk.writes++; }, async abort() {}};
    }
  };
  const context = vm.createContext({console, setTimeout() {},
    window: {addEventListener() {}, showOpenFilePicker: async () => [handle]},
    document: {getElementById(id) { assert.ok(elements[id], `Missing real HTML element: ${id}`); return elements[id]; },
      createElement: element, querySelectorAll: () => []},
    navigator: {clipboard: {writeText: async () => {}}}
  });
  const run = code => vm.runInContext(code, context);
  run(source);
  return {run, elements, disk, async connect() { await run('connectFile()'); assert.equal(run('state.connected'), true); }};
}

test('initial render requires connection and does not expose stale sample progress', () => {
  const h = harness();
  assert.equal(h.elements.valCoverage.innerText, '—');
  assert.match(h.elements.subjectPanels.textContent, /Connect README/);
  h.run("toggleStatus('reasoning', 2)");
  assert.equal(h.run('state.dirty.size'), 0);
  assert.throws(() => h.run('generateUpdatedMarkdown()'), /Connect/);
});

test('imports actual progress, retains bare score, calculates only recorded fraction scores', async () => {
  const h = harness(); await h.connect();
  assert.equal(h.run('state.subjects[0].topics[2].status'), 'COMPLETED');
  assert.equal(h.run('state.subjects[0].topics[2].score'), '90');
  assert.equal(h.elements.valAccuracy.innerText, '94.1%');
  assert.equal(h.elements.valCoverage.innerText, '10%');
  assert.equal(h.run('generateUpdatedMarkdown()'), readme);
});

test('saving a topic preserves mock scores, extra notes, other rows and reloads saved progress', async () => {
  const original = readme.replace('*Baseline Diagnostic Test*', '*Baseline Diagnostic Test: 152 marks*') + '\nPersonal notes: preserve exactly.\n';
  const h = harness(original); await h.connect();
  h.run("toggleStatus('quant', 0)"); await h.run('saveQueue');
  assert.equal(h.disk.writes, 1);
  assert.ok(h.disk.text.includes('*Baseline Diagnostic Test: 152 marks*'));
  assert.ok(h.disk.text.endsWith('Personal notes: preserve exactly.\n'));
  assert.ok(h.disk.text.includes('| ✅ | **A** | **Analogy** | Week 3 | 90 | Pending |'));
  const before = original.split('\n'), after = h.disk.text.split('\n');
  const changed = before.filter((line, i) => line !== after[i]);
  assert.equal(changed.length, 1); // One topic row only (status is IN PROGRESS; completion and accuracy metrics unchanged).
  const fresh = harness(h.disk.text); await fresh.connect();
  assert.equal(fresh.run('state.subjects[1].topics[0].status'), 'IN PROGRESS');
});

test('validates new scores, saves them and recomputes accuracy', async () => {
  const h = harness(); await h.connect();
  h.run("editScore('reasoning', 2)");
  h.elements.scoreInput.value = '90'; h.run('confirmScore()');
  assert.equal(h.disk.writes, 0);
  assert.equal(h.run('activeScoreTarget !== null'), true);
  h.elements.scoreInput.value = '4/3'; h.run('confirmScore()');
  assert.equal(h.run('state.dirty.size'), 0);
  h.elements.scoreInput.value = '9 / 10'; h.run('confirmScore()'); await h.run('saveQueue');
  assert.equal(h.elements.valAccuracy.innerText, '92.6%');
  assert.ok(h.disk.text.includes('| Week 3 | 9 / 10 | Pending |'));
  assert.ok(h.disk.text.includes('**92.6%** (25 / 27 Correct)'));
});

test('external changes block overwrites and retain unsaved edits', async () => {
  const h = harness(); await h.connect(); h.disk.text += '\nExternal edit\n';
  h.run("toggleStatus('quant', 0)"); await h.run('saveQueue');
  assert.equal(h.disk.writes, 0);
  assert.equal(h.run('state.dirty.size'), 1);
  assert.match(h.elements.toastMsg.innerText, /File changed externally/);
  assert.ok(h.disk.text.endsWith('External edit\n'));
});

test('failed writes remain retryable and rapid changes are serialized', async () => {
  const h = harness(); await h.connect(); h.disk.fail = true;
  h.run("toggleStatus('quant', 0)"); await h.run('saveQueue');
  assert.equal(h.disk.writes, 0); assert.equal(h.run('state.dirty.size'), 1);
  h.disk.fail = false;
  h.run("toggleStatus('quant', 1); toggleStatus('english', 1)"); await h.run('saveQueue');
  assert.equal(h.run('state.dirty.size'), 0);
  const fresh = harness(h.disk.text); await fresh.connect();
  assert.equal(fresh.run('state.subjects[1].topics[0].status'), 'IN PROGRESS');
  assert.equal(fresh.run('state.subjects[1].topics[1].status'), 'IN PROGRESS');
  assert.equal(fresh.run('state.subjects[2].topics[1].status'), 'IN PROGRESS');
});

test('rejects missing/duplicate rows without importing partial state', async () => {
  const h = harness(readme.replace('**Analogy**', '**Unknown**'));
  await h.run('connectFile()');
  assert.equal(h.run('state.connected'), false);
  assert.match(h.elements.toastMsg.innerText, /Missing or duplicate topic/);
  const row = readme.split('\n').find(line => line.includes('**Analogy**'));
  const duplicate = harness(readme.replace(row, row + '\n' + row));
  await duplicate.run('connectFile()');
  assert.equal(duplicate.run('state.connected'), false);
});

test('preserves CRLF and subject filter across renders; escapes imported HTML', async () => {
  const h = harness(readme.replace('Golden Rule (Group of 3)', '<img src=x onerror=alert(1)>').replace(/\r?\n/g, '\r\n'));
  await h.connect();
  h.run("filterSubject('quant', {classList: {add() {}}}); toggleStatus('quant', 0)"); await h.run('saveQueue');
  assert.equal(h.run('state.activeFilter'), 'quant');
  assert.ok(h.elements.subjectPanels.children.filter(s => s.dataset.subjectId === 'reasoning').at(-1).innerHTML.includes('&lt;img'));
  assert.equal(h.elements.subjectPanels.children.filter(s => s.dataset.subjectId === 'reasoning').at(-1).style.display, 'none');
  assert.equal(h.disk.text.replace(/\r\n/g, '').includes('\n'), false);
});

test('all 13 mock dates are Sundays', () => {
  const dates = [...readme.matchAll(/\| \*\*#\d+\*\* \| ([A-Z][a-z]+ \d{2}, 2026) \|/g)];
  assert.equal(dates.length, 13);
  dates.forEach(([, date]) => assert.equal(new Date(date + ' 12:00:00').getDay(), 0));
});
