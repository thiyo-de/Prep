import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import { encodeUtf8, decodeUtf8 } from '../src/core.js';

const bundled = await build({ entryPoints: ['src/app.js'], bundle: true, write: false, format: 'iife', loader: { '.css': 'empty' }, define: { 'import.meta.env.DEV': 'false' } });
const app = bundled.outputFiles[0].text;
const html = await readFile('index.html', 'utf8');
const fixture = '# Test Maths\n\n## MF1 — Basics\n\n- [ ] Fractions\n- [ ] Signs\n\n## M01 — Numbers\n\n- [ ] Primes\n';
async function waitFor(check) { for (let i=0;i<100;i++) { if (check()) return; await new Promise(r => setTimeout(r, 10)); } throw new Error('UI state did not settle'); }
async function setup({ stored, rawStored, source = fixture, sha = 'sha1', deny = false, offline = false, invalidToken = false, id = 'maths', settle = true } = {}) {
  const dom = new JSDOM(html, { url: `http://localhost/#${id}`, runScripts: 'outside-only', pretendToBeVisual: true });
  const w = dom.window; const calls = [], downloads = [];
  const network = { offline, sha, source };
  w.Blob = Blob;
  w.URL.createObjectURL = blob => { downloads.push(blob); return 'blob:test'; };
  w.URL.revokeObjectURL = () => {};
  w.HTMLAnchorElement.prototype.click = function() {};
  w.TextEncoder = TextEncoder; w.TextDecoder = TextDecoder; w.AbortSignal = AbortSignal;
  w.matchMedia = () => ({ matches: false }); w.scrollTo = () => {};
  w.Element.prototype.scrollIntoView = () => {};
  w.HTMLDialogElement.prototype.showModal = function() { this.setAttribute('open', ''); };
  w.HTMLDialogElement.prototype.close = function() { this.removeAttribute('open'); this.dispatchEvent(new w.Event('close')); };
  w.fetch = async (url, options) => {
    calls.push({ url, options });
    if (network.offline) throw new Error('offline');
    if (url === 'https://api.github.com/user') return invalidToken ? new Response('{}', { status: 401 }) : new Response(JSON.stringify({ login: 'test-user' }));
    if (options.method === 'PUT') {
      if (deny) return new Response('{}', { status: 403 });
      network.source = decodeUtf8(JSON.parse(options.body).content); network.sha = 'sha2';
      return new Response(JSON.stringify({ content: { sha: network.sha }, commit: { sha: 'commit123' } }));
    }
    if (!url.includes('/contents/')) return new Response(JSON.stringify({ permissions: { push: true } }));
    return new Response(JSON.stringify({ encoding: 'base64', content: encodeUtf8(network.source), sha: network.sha }));
  };
  if (stored) w.localStorage.setItem(`prep:draft:v1:${id}`, JSON.stringify(stored));
  if (rawStored !== undefined) w.localStorage.setItem(`prep:draft:v1:${id}`, rawStored);
  w.eval(app);
  if (settle) await waitFor(() => w.document.getElementById('save-status').textContent !== 'Loading document…');
  const $ = id => w.document.getElementById(id);
  async function connect() {
    $('connect').click(); $('token').value = 'test-only-token';
    $('connect-form').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    await waitFor(() => !$('connect-dialog').open && $('save-status').textContent !== 'Loading document…');
  }
  return { w, $, calls, downloads, network, connect, close: () => w.close() };
}
test('study UI: tick, local draft, chapter filter, theme and exact authenticated save', async () => {
  const { w, $, calls, connect, close } = await setup();
  try {
    assert.equal($('metric').textContent, '0 / 3');
    w.document.querySelector('.task-check').click();
    assert.equal($('metric').textContent, '1 / 3');
    assert.match($('save-status').textContent, /1 unsaved/);
    assert.ok(w.localStorage.getItem('prep:draft:v1:maths'));
    $('search').value = 'Primes'; $('search').dispatchEvent(new w.Event('input'));
    assert.equal(w.document.querySelectorAll('.doc-section:not([hidden])').length, 1);
    $('theme').click(); assert.equal(w.document.documentElement.dataset.theme, 'dark');
    await connect();
    assert.equal($('token').value, '');
    assert.ok(!JSON.stringify(w.localStorage).includes('test-only-token'));
    $('save').click();
    await waitFor(() => $('notice').textContent.startsWith('Saved to GitHub'));
    assert.equal(w.localStorage.getItem('prep:draft:v1:maths'), null);
    const write = calls.find(c => c.options.method === 'PUT');
    assert.equal(decodeUtf8(JSON.parse(write.options.body).content), fixture.replace('[ ] Fractions', '[x] Fractions'));
    assert.equal($('save').disabled, true);
    $('connect').click(); assert.match($('connection-note').textContent, /Connect to save/);
  } finally { close(); }
});
test('draft restoration and stale-source conflict preserve local changes', async () => {
  const draft = { version: 1, base: { text: fixture, sha: 'old' }, text: fixture.replace('[ ] Signs', '[x] Signs') };
  const { w, $, close } = await setup({ stored: draft });
  try {
    assert.equal($('conflict').hidden, false); assert.equal($('save').disabled, true);
    assert.equal(w.document.querySelectorAll('.task-check:checked').length, 1);
    assert.ok([...w.document.querySelectorAll('.task-check')].every(c => c.disabled));
    $('discard').click(); assert.equal($('confirm-dialog').open, true);
    $('confirm-cancel').click(); assert.ok(w.localStorage.getItem('prep:draft:v1:maths'));
    $('discard').click(); $('confirm-ok').click();
    await waitFor(() => $('conflict').hidden);
    assert.equal(w.localStorage.getItem('prep:draft:v1:maths'), null);
  } finally { close(); }
});
test('permission failure retains draft and reports error', async () => {
  const { w, $, connect, close } = await setup({ deny: true });
  try {
    w.document.querySelector('.task-check').click(); await connect(); $('save').click();
    await waitFor(() => $('notice').textContent.includes('refused'));
    assert.ok(w.localStorage.getItem('prep:draft:v1:maths'));
    assert.match($('save-status').textContent, /unsaved/);
  } finally { close(); }
});
test('Markdown rendering removes executable HTML and external resource loads', async () => {
  const source = `${fixture}\n<script>window.compromised=true</script><img src="https://evil.invalid/a"><iframe src="https://evil.invalid"></iframe><a href="javascript:alert(1)">bad link</a>`;
  const { w, $, close } = await setup({ source });
  try {
    assert.equal(w.compromised, undefined);
    assert.equal($('content').querySelectorAll('script,img,iframe,[onclick]').length, 0);
    assert.ok(![...$('content').querySelectorAll('a')].some(a => a.href.startsWith('javascript:')));
  } finally { close(); }
});

test('offline drafts remain editable and exportable, then reconnect without losing ticks', async () => {
  const draft = { version: 1, base: { text: fixture, sha: 'sha1' }, text: fixture.replace('[ ] Signs', '[x] Signs') };
  const { w, $, network, downloads, close } = await setup({ stored: draft, offline: true });
  try {
    assert.match($('save-status').textContent, /Offline draft/);
    assert.equal($('save').disabled, true);
    assert.equal($('pdf').disabled, false);
    w.document.querySelector('.task-check').click();
    $('export').click();
    assert.equal(await downloads[0].text(), draft.text.replace('[ ] Fractions', '[x] Fractions'));
    network.offline = false;
    $('refresh').click();
    await waitFor(() => $('save-status').textContent.includes('2 unsaved'));
    assert.equal(w.document.querySelectorAll('.task-check:checked').length, 2);
    assert.equal($('confirm-dialog').open, false);
  } finally { close(); }
});

test('reconnecting to a newer source keeps the draft and blocks saving', async () => {
  const draft = { version: 1, base: { text: fixture, sha: 'sha1' }, text: fixture.replace('[ ] Signs', '[x] Signs') };
  const { $, network, w, close } = await setup({ stored: draft, offline: true });
  try {
    network.offline = false; network.sha = 'new-sha';
    $('refresh').click();
    await waitFor(() => !$('conflict').hidden);
    assert.equal($('save').disabled, true);
    assert.equal(JSON.parse(w.localStorage.getItem('prep:draft:v1:maths')).text, draft.text);
  } finally { close(); }
});

test('damaged drafts are downloadable exactly and cannot be overwritten by ticks', async () => {
  const raw = '{"version":1,"text":"unfinished';
  const { w, $, downloads, close } = await setup({ rawStored: raw });
  try {
    assert.equal($('recovery').hidden, false);
    assert.ok([...w.document.querySelectorAll('.task-check')].every(c => c.disabled));
    $('recovery-export').click();
    assert.equal(await downloads[0].text(), raw);
    $('refresh').click();
    await waitFor(() => !$('recovery').hidden);
    assert.equal(w.localStorage.getItem('prep:draft:v1:maths'), raw);
    $('recovery-discard').click(); $('confirm-cancel').click();
    assert.equal(w.localStorage.getItem('prep:draft:v1:maths'), raw);
    $('recovery-discard').click(); $('confirm-ok').click();
    await waitFor(() => w.localStorage.getItem('prep:draft:v1:maths') === null);
    assert.ok([...w.document.querySelectorAll('.task-check')].every(c => !c.disabled));
  } finally { close(); }
});

test('damaged data stays recoverable offline and failed discard keeps it', async () => {
  const raw = 'broken draft';
  const { w, $, downloads, close } = await setup({ rawStored: raw, offline: true });
  try {
    $('recovery-export').click(); assert.equal(await downloads[0].text(), raw);
    $('recovery-discard').click(); $('confirm-ok').click();
    await new Promise(resolve => setTimeout(resolve, 0));
    await waitFor(() => !$('recovery').hidden);
    assert.equal(w.localStorage.getItem('prep:draft:v1:maths'), raw);
    assert.equal($('save').disabled, true);
  } finally { close(); }
});

test('reference notes show reading time without invented completion', async () => {
  const { $, close } = await setup({ id: 'notes-english-ef1', source: '# Notes\n\n## Grammar\n\nA noun names something.' });
  try {
    assert.match($('metric').textContent, /min read/);
    assert.equal($('percentage').textContent, '');
    assert.equal($('progress').hidden, true);
  } finally { close(); }
});

test('invalid tokens never connect and are cleared from the input', async () => {
  const { w, $, calls, close } = await setup({ invalidToken: true });
  try {
    $('connect').click(); $('token').value = 'bad-test-token';
    $('connect-form').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    await waitFor(() => $('auth-error').textContent.includes('invalid'));
    assert.equal($('connect-dialog').open, true);
    assert.equal($('token').value, '');
    assert.match($('connect').textContent, /Connect GitHub/);
    assert.ok(!calls.some(c => c.options.method === 'PUT'));
    assert.ok(!JSON.stringify(w.localStorage).includes('bad-test-token'));
  } finally { close(); }
});

test('switching document renders frosted overlay spinner over existing content without blank flash', async () => {
  const { w, $, close } = await setup();
  try {
    assert.ok($('content').querySelector('.doc-section'));
    assert.equal($('content').querySelector('.loading'), null);

    w.location.hash = '#reasoning';
    w.dispatchEvent(new w.Event('hashchange'));

    const overlay = $('content').querySelector('.paper-overlay');
    assert.ok(overlay, 'Frosted overlay must be present during document switch');
    assert.ok(overlay.querySelector('.spinner'), 'Spinner must be present in overlay');
    assert.match(overlay.querySelector('.loading-title').textContent, /Loading document/);
    assert.ok($('content').querySelector('.doc-section'), 'Existing content must not be blanked out during transition');

    await waitFor(() => $('save-status').textContent !== 'Loading document…');
    assert.equal($('content').querySelector('.paper-overlay'), null, 'Overlay must be removed once document is rendered');
  } finally { close(); }
});

