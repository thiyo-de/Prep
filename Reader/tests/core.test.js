import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { tasksIn, toggleTask, onlyTaskChanges, countChanges, encodeUtf8, decodeUtf8 } from '../src/core.js';
import { saveDocument, ConflictError } from '../src/github.js';
import { documents } from '../config.js';

test('checkbox patch preserves Unicode, CRLF, BOM and all surrounding content', () => {
  const source = '\uFEFF# Notes\r\n\r\n- [ ] Fractions — ½\r\n- [x] déjà vu\r\n';
  const edited = toggleTask(source, 2, true);
  assert.equal(edited, source.replace('- [ ]', '- [x]'));
  assert.equal(decodeUtf8(encodeUtf8(source)), source);
  assert.equal(countChanges(source, edited), 1);
  assert.equal(onlyTaskChanges(source, edited), true);
  assert.equal(onlyTaskChanges(source, edited.replace('Fractions', 'Changed')), false);
});
test('code examples and normal prose are not editable tasks', () => {
  const source = '# Example\n```md\n- [ ] example\n```\n\n[ ] prose\n\n- [ ] real\n';
  assert.deepEqual(tasksIn(source).map(t => t.line), [7]);
  assert.throws(() => toggleTask(source, 2, true));
});
test('every task in the six real checklists can be patched without changing other text', async () => {
  for (const doc of documents.filter(d => d.group === 'Subject checklists')) {
    const source = await readFile(new URL(`../../${doc.path}`, import.meta.url), 'utf8');
    const tasks = tasksIn(source);
    assert.ok(tasks.length > 10, doc.id);
    for (const task of tasks) {
      const edited = toggleTask(source, task.line, !task.checked);
      assert.ok(onlyTaskChanges(source, edited));
      assert.equal(countChanges(source, edited), 1);
    }
  }
});
test('GitHub save checks current SHA and only submits the exact intended tick', async () => {
  const realFetch = globalThis.fetch;
  const source = '- [ ] Task — Ω\r\n'; const edited = toggleTask(source, 0, true);
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return new Response(JSON.stringify(options.method === 'PUT' ? { content: { sha: 'next' }, commit: { sha: 'commit' } } : { encoding: 'base64', content: encodeUtf8(source), sha: 'original' }));
  };
  try {
    const saved = await saveDocument(documents[1], { text: source, sha: 'original' }, edited, 'test-only-token');
    assert.equal(saved.sha, 'next'); assert.equal(calls.length, 2);
    const body = JSON.parse(calls[1].options.body);
    assert.equal(body.sha, 'original'); assert.equal(body.branch, 'main'); assert.equal(decodeUtf8(body.content), edited);
    assert.ok(calls.every(c => c.url.startsWith('https://api.github.com/')));
    assert.equal(calls[1].options.credentials, 'omit');
  } finally { globalThis.fetch = realFetch; }
});
test('stale source prevents every write', async () => {
  const realFetch = globalThis.fetch; let writes = 0;
  globalThis.fetch = async (url, options) => { if (options.method === 'PUT') writes++; return new Response(JSON.stringify({ sha: 'new', encoding: 'base64', content: encodeUtf8('- [ ] Changed remotely\n') })); };
  try {
    await assert.rejects(saveDocument(documents[1], { text: '- [ ] Task\n', sha: 'old' }, '- [x] Task\n', 'test-only-token'), ConflictError);
    assert.equal(writes, 0);
  } finally { globalThis.fetch = realFetch; }
});
test('write-time conflict and denied permission remain failures, never successful saves', async () => {
  const realFetch = globalThis.fetch;
  try {
    for (const status of [409, 403, 422]) {
      globalThis.fetch = async (url, options) => options.method === 'PUT' ? new Response('{}', { status }) : new Response(JSON.stringify({ sha: 'old', encoding: 'base64', content: encodeUtf8('- [ ] Task\n') }));
      await assert.rejects(saveDocument(documents[1], { text: '- [ ] Task\n', sha: 'old' }, '- [x] Task\n', 'test-only-token'));
    }
  } finally { globalThis.fetch = realFetch; }
});
