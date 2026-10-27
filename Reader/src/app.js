import './styles.css';
import { documents, documentById, githubUrl } from '../config.js';
import { tasksIn, toggleTask, countChanges, onlyTaskChanges, decodeUtf8 } from './core.js';
import { fetchDocument, saveDocument, validateToken, ConflictError } from './github.js';
import { renderDocument, sectionsFrom } from './render.js';

const $ = id => document.getElementById(id);
const local = import.meta.env.DEV && new URLSearchParams(location.search).get('remote') !== '1';
const iconMap = {
  compass: 'compass',
  math: 'calculator',
  book: 'book-bookmark',
  puzzle: 'puzzle-piece',
  globe: 'globe',
  screen: 'desktop',
  keyboard: 'keyboard',
  briefcase: 'briefcase',
  help: 'question',
  search: 'magnifying-glass',
  download: 'download-simple',
  save: 'floppy-disk',
  moon: 'moon',
  sun: 'sun',
  focus: 'corners-out',
  menu: 'list',
  github: 'github-logo',
  brain: 'brain',
  'book-open': 'book-open-text',
  'text-aa': 'text-aa',
  'pencil-line': 'pencil-line',
  dna: 'dna',
  plant: 'plant',
  'arrow-up': 'arrow-up',
  'caret-right': 'caret-right',
  check: 'check',
  clock: 'clock',
  sidebar: 'sidebar-simple',
  x: 'x'
};
function icon(name) {
  const ph = iconMap[name] || name || 'book-bookmark';
  return `<i class="ph ph-${ph}" aria-hidden="true"></i>`;
}
let token = '', connectedUser = '', authVersion = 0, offline = false, damagedDraft = null, pdfBusy = false, current = null, base = null, text = '', conflict = false, busy = false, loadVersion = 0, sections = [];
const draftKey = id => `prep:draft:v1:${id}`;
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } },
  remove(key) { try { localStorage.removeItem(key); } catch { /* no persistent storage */ } }
};
function notice(message = '', error = false) {
  $('notice').textContent = message; $('notice').hidden = !message; $('notice').classList.toggle('error', error);
}
function dirty() { return !!base && text !== base.text; }
function persistDraft() {
  if (!current || !base || damagedDraft !== null) return;
  if (dirty()) {
    const ok = storage.set(draftKey(current.id), JSON.stringify({ version: 1, base, text, at: new Date().toISOString() }));
    if (!ok) notice('Browser storage is unavailable. Keep this tab open, or export your draft before leaving.', true);
  } else storage.remove(draftKey(current.id));
  updateNavDrafts();
}
function updateNavDrafts() {
  for (const doc of documents) {
    const item = document.querySelector(`[data-nav="${doc.id}"]`);
    item?.classList.toggle('has-draft', !!storage.get(draftKey(doc.id)));
  }
}
function createNavLink(doc) {
  const a = document.createElement('a');
  a.href = `#${doc.id}`;
  a.dataset.nav = doc.id;
  a.innerHTML = `${icon(doc.icon)}<span>${doc.label || doc.title}</span><span class="draft-dot" title="Local draft" aria-label="Local draft"></span>`;
  return a;
}

function buildNav() {
  $('navigation').replaceChildren();
  const groups = new Map();
  for (const doc of documents) {
    if (!groups.has(doc.group)) groups.set(doc.group, []);
    groups.get(doc.group).push(doc);
  }

  let index = 0;
  for (const [groupName, docs] of groups.entries()) {
    if (index > 0) {
      const divider = document.createElement('div');
      divider.className = 'nav-divider';
      $('navigation').append(divider);
    }
    index++;

    const details = document.createElement('details');
    details.className = 'nav-section';
    details.open = true;

    const summary = document.createElement('summary');
    summary.className = 'nav-summary';
    summary.innerHTML = `
      <div class="nav-summary-left">
        <i class="ph ph-caret-right nav-caret" aria-hidden="true"></i>
        <span>${groupName}</span>
      </div>
      <span class="nav-count">${docs.length}</span>
    `;
    details.append(summary);

    const body = document.createElement('div');
    body.className = 'nav-section-body';

    const hasSubgroups = docs.some(d => d.subgroup);
    if (hasSubgroups) {
      const subgroups = new Map();
      for (const doc of docs) {
        const sub = doc.subgroup || 'General';
        if (!subgroups.has(sub)) subgroups.set(sub, []);
        subgroups.get(sub).push(doc);
      }
      for (const [subName, subDocs] of subgroups.entries()) {
        const subDetails = document.createElement('details');
        subDetails.className = 'nav-subgroup';
        subDetails.open = true;

        const subSummary = document.createElement('summary');
        subSummary.className = 'nav-sub-summary';
        const subIcon = subName === 'Reasoning' ? 'brain' : subName === 'English Grammar' ? 'book-open' : 'dna';
        subSummary.innerHTML = `
          <div class="nav-summary-left">
            <i class="ph ph-caret-right nav-caret" aria-hidden="true"></i>
            ${icon(subIcon)}
            <span>${subName}</span>
          </div>
          <span class="nav-sub-count">${subDocs.length}</span>
        `;
        subDetails.append(subSummary);

        const subBody = document.createElement('div');
        subBody.className = 'nav-sub-body';
        for (const doc of subDocs) {
          subBody.append(createNavLink(doc));
        }
        subDetails.append(subBody);
        body.append(subDetails);
      }
    } else {
      for (const doc of docs) {
        body.append(createNavLink(doc));
      }
    }

    details.append(body);
    $('navigation').append(details);
  }
  updateNavDrafts();
}
function updateConnection() {
  $('connect').innerHTML = `${icon('github')}<span>${token ? 'Disconnect GitHub' : 'Connect GitHub'}</span>`;
  $('connection-note').textContent = token ? `Signed in as ${connectedUser}. Write access checked on save.` : local ? 'Local preview · saving disabled.' : 'Read freely. Connect to save.';
  $('connect').disabled = local;
  if (base) updateStatus();
}
function updateStatus(saved = '') {
  if (!base) return;
  const tasks = tasksIn(text), done = tasks.filter(t => t.checked).length;
  const changes = countChanges(base.text, text);
  $('progress').hidden = !tasks.length;
  if (tasks.length) {
    $('metric-label').textContent = 'CHECKLIST PROGRESS';
    $('metric').textContent = `${done} / ${tasks.length}`;
    $('metric-detail').textContent = 'skills ticked · learning in progress';
    $('progress-label').textContent = 'One skill at a time';
    $('percentage').textContent = `${Math.round(done / tasks.length * 100)}%`;
    $('progress').value = (done / tasks.length) * 100;
    $('progress-note').textContent = 'Coverage is a first step. Keep testing and revising.';
  } else if (current?.group?.endsWith('notes') || current?.group === 'Study notes') {
    const words = text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const readMinutes = Math.max(1, Math.ceil(words / 200));
    $('metric-label').textContent = 'COMPREHENSIVE NOTES';
    $('metric').textContent = `~${readMinutes} min read`;
    $('metric-detail').textContent = `${words.toLocaleString()} words · Active revision resource`;
    $('progress-label').textContent = 'Self-study reference';
    $('percentage').textContent = '';
    $('progress').value = 0;
    $('progress-note').textContent = 'Revise in 4 layers. Test yourself without looking.';
  } else if (current?.id === 'posts') {
    $('metric-label').textContent = 'CAREER ROADMAP';
    $('metric').textContent = 'SSC & RRB Pay';
    $('metric-detail').textContent = 'Starting basic pay to in-hand monthly estimates';
    $('progress-label').textContent = 'Reference guide';
    $('percentage').textContent = '';
    $('progress').value = 0;
    $('progress-note').textContent = 'Keep your post preferences in sight.';
  } else {
    $('metric-label').textContent = 'PREPARATION WINDOW';
    $('metric').textContent = 'Nov ’26 — May ’27';
    $('metric-detail').textContent = 'Follow the plan. Keep showing up.';
    $('progress-label').textContent = 'Your study companion';
    $('percentage').textContent = '';
    $('progress').value = 0;
    $('progress-note').textContent = 'The source stays in your repository.';
  }
  $('save-status').textContent = busy ? 'Saving to GitHub…' : damagedDraft !== null ? 'Damaged draft preserved · recovery required' : offline ? 'Offline draft · reconnect before saving' : conflict ? 'Source changed · draft preserved' : changes ? `${changes} unsaved ${changes === 1 ? 'change' : 'changes'} · draft on this device` : saved || `${local ? 'Local preview' : 'Loaded from GitHub'} · ${base.sha.slice(0, 7)}`;
  $('save-status').classList.toggle('unsaved', changes > 0);
  $('save').disabled = !changes || conflict || busy || local || offline || damagedDraft !== null;
  $('save').innerHTML = `${icon('save')}<span>${busy ? 'Saving…' : token ? 'Save to GitHub' : 'Connect to save'}</span>`;
  $('remaining').disabled = !tasks.length;
  $('refresh').disabled = busy;
  $('pdf').disabled = pdfBusy; $('export').disabled = false;
  for (const input of $('content').querySelectorAll('.task-check')) input.disabled = busy || conflict || damagedDraft !== null;
  $('conflict').hidden = !conflict;
  for (const section of sections) {
    const inputs = [...section.querySelectorAll('.task-check')];
    const link = $('outline').querySelector(`[data-section="${section.id}"] small`);
    if (link) link.textContent = inputs.length ? `${inputs.filter(i => i.checked).length}/${inputs.length}` : '';
  }
}
function applyFilter() {
  const query = $('search').value.toLocaleLowerCase().trim();
  const unfinished = $('remaining').checked && !$('remaining').disabled;
  let visible = 0;
  for (const section of sections) {
    const tasks = [...section.querySelectorAll('.task-check')];
    const matches = !query || section.textContent.toLocaleLowerCase().includes(query);
    const hasRemaining = !unfinished || tasks.some(t => !t.checked);
    section.hidden = !matches || !hasRemaining;
    for (const task of tasks) task.closest('li').hidden = unfinished && task.checked;
    if (!section.hidden) visible++;
  }
  let empty = $('empty-search');
  if (!empty) { empty = document.createElement('p'); empty.id = 'empty-search'; empty.className = 'empty'; $('content').append(empty); }
  empty.hidden = visible > 0;
  empty.textContent = unfinished && !query ? 'No unfinished items to show. You can turn off the filter to review the full document.' : 'No matching sections. Try a shorter word or turn off the unfinished filter.';
}
function render() {
  const html = renderDocument(text, current);
  sections = sectionsFrom(html);
  $('content').replaceChildren(...sections);
  $('outline').replaceChildren();
  sections.forEach(section => {
    const a = document.createElement('a'); a.href = `#${section.id}`; a.dataset.section = section.id;
    const label = document.createElement('span'); label.textContent = section.dataset.title;
    a.append(label, document.createElement('small'));
    a.addEventListener('click', event => {
      event.preventDefault();
      if (section.hidden) { $('search').value = ''; $('remaining').checked = false; applyFilter(); }
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $('outline').append(a);
  });
  $('content').querySelectorAll('a[href^="#"]').forEach(a => {
    const hash = a.getAttribute('href').slice(1);
    if (documents.some(d => d.id === hash)) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = [...$('content').querySelectorAll('h1,h2,h3,h4')].find(h => h.textContent.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-') === hash);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  updateStatus(); applyFilter();
}
function parseDraft(raw) {
  const draft = JSON.parse(raw);
  if (draft?.version !== 1 || typeof draft.base?.sha !== 'string' || !draft.base.sha || typeof draft.base.text !== 'string' || typeof draft.text !== 'string' || !onlyTaskChanges(draft.base.text, draft.text)) throw new Error('Invalid draft');
  return draft;
}
function showDamagedDraft(raw) {
  damagedDraft = raw;
  $('recovery').hidden = false;
  notice('Your stored draft could not be read. Download the original recovery data before discarding it. Checklist edits are locked to protect that data.', true);
}
async function loadDocument(id, { discard = false } = {}) {
  if (busy) return;
  const version = ++loadVersion;
  current = documentById(id); base = null; text = ''; conflict = false; offline = false; damagedDraft = null;
  $('recovery').hidden = true; $('progress').hidden = true; $('percentage').textContent = ''; $('metric').textContent = 'Loading…';
  const doc = current;
  $('title').textContent = current.title; $('subtitle').textContent = current.subtitle;
  $('eyebrow').textContent = current.group.toUpperCase(); $('breadcrumb').textContent = current.label || current.title;
  document.title = `${current.title} / Prep`;
  $('source').href = githubUrl(current);
  $('search').value = ''; $('remaining').checked = false; $('conflict').hidden = true;
  $('save').disabled = true; $('pdf').disabled = true; $('export').disabled = true;
  $('save-status').textContent = 'Loading document…'; $('content').innerHTML = '<div class="loading">Opening your study document…</div>';
  $('outline').replaceChildren(); notice();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const isCurrent = a.dataset.nav === current.id;
    a.classList.toggle('active', isCurrent);
    if (isCurrent) {
      a.setAttribute('aria-current', 'page');
      a.closest('.nav-subgroup')?.setAttribute('open', '');
      a.closest('.nav-section')?.setAttribute('open', '');
    } else {
      a.removeAttribute('aria-current');
    }
  });
  closeMenu();
  try {
    let latest;
    if (local) {
      const response = await fetch(`/local-content?id=${current.id}`, { cache: 'no-store' });
      if (!response.ok) throw new Error('Cannot open the local document.');
      const data = await response.json(); latest = { text: decodeUtf8(data.content), sha: data.sha };
    } else latest = await fetchDocument(current, token);
    if (version !== loadVersion) return;
    base = latest; text = latest.text;
    if (discard) storage.remove(draftKey(current.id));
    const stored = storage.get(draftKey(current.id));
    if (stored !== null) {
      try {
        const draft = parseDraft(stored);
        if (draft.text === latest.text) storage.remove(draftKey(current.id));
        else {
          base = draft.base; text = draft.text;
          conflict = latest.sha !== base.sha || latest.text !== base.text;
          if (!conflict) notice('Your unsaved checklist changes were restored from this device.');
        }
      } catch { showDamagedDraft(stored); }
    }
    render(); updateNavDrafts();
    $('footer-mode').textContent = local ? 'Local preview · source files on this computer' : 'Live source · thiyo-de / Prep';
  } catch (error) {
    if (version !== loadVersion) return;
    // A failed source request must never remove the only local copy.
    const stored = storage.get(draftKey(doc.id));
    if (stored !== null) {
      try {
        const draft = parseDraft(stored);
        base = draft.base; text = draft.text; offline = true;
        render(); updateNavDrafts();
        $('footer-mode').textContent = 'Local draft · source could not be checked';
        notice('Source unavailable. Your local draft is open; you can keep studying and export Markdown or PDF. Use Check connection when online. Saving stays blocked until the source is checked.', true);
        return;
      } catch { showDamagedDraft(stored); }
    }
    $('content').innerHTML = '<div class="empty"><h2>Couldn’t open this document</h2><p>Use Refresh to try again, or open View source above. Any saved local draft remains on this device.</p></div>';
    $('save-status').textContent = 'Document unavailable'; if (damagedDraft === null) notice(error.message, true);
  }
}
function download(blob, name) {
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function exportMarkdown() { if (base) download(new Blob([text], { type: 'text/markdown;charset=utf-8' }), `${current.id}${dirty() ? '-draft' : ''}.md`); }
function confirmDiscard() {
  return new Promise(resolve => {
    $('confirm-copy').textContent = 'This removes the local draft for this document. Export it first if you want to keep a copy. The GitHub file will not be changed.';
    const dialog = $('confirm-dialog');
    const finish = answer => { dialog.close(); cleanup(); resolve(answer); };
    const yes = () => finish(true), no = () => finish(false);
    const cancel = event => { event.preventDefault(); finish(false); };
    const cleanup = () => { $('confirm-ok').removeEventListener('click', yes); $('confirm-cancel').removeEventListener('click', no); dialog.removeEventListener('cancel', cancel); };
    $('confirm-ok').addEventListener('click', yes); $('confirm-cancel').addEventListener('click', no); dialog.addEventListener('cancel', cancel); dialog.showModal();
  });
}
async function refresh() {
  if (busy) return;
  if ((dirty() || conflict || damagedDraft !== null) && !await confirmDiscard()) return;
  await loadDocument(current?.id || 'plan', { discard: true });
}
function closeMenu() { document.body.classList.remove('menu-open'); $('overlay').hidden = true; $('menu').setAttribute('aria-expanded', 'false'); }
function openConnect() { $('auth-error').textContent = ''; $('token').value = ''; $('connect-dialog').showModal(); }

buildNav();
$('search-icon').innerHTML = icon('search'); $('menu').innerHTML = icon('menu'); $('focus').innerHTML = icon('focus');
if ($('sidebar-collapse')) $('sidebar-collapse').innerHTML = '<i class="ph ph-sidebar-simple desktop-icon" aria-hidden="true"></i><i class="ph ph-x mobile-icon" aria-hidden="true"></i>';
if ($('sidebar-expand')) $('sidebar-expand').innerHTML = icon('sidebar');
$('pdf').innerHTML = `${icon('download')}<span>Download PDF</span>`; $('save').innerHTML = `${icon('save')}<span>Save to GitHub</span>`;

function toggleSidebar(force) {
  const isCollapsed = force !== undefined ? force : !document.body.classList.contains('sidebar-collapsed');
  document.body.classList.toggle('sidebar-collapsed', isCollapsed);
  if ($('sidebar-collapse')) $('sidebar-collapse').setAttribute('aria-expanded', String(!isCollapsed));
  if ($('sidebar-expand')) $('sidebar-expand').setAttribute('aria-expanded', String(!isCollapsed));
  storage.set('prep:sidebar-collapsed', String(isCollapsed));
}

if (window.innerWidth > 760 && storage.get('prep:sidebar-collapsed') === 'true') {
  document.body.classList.add('sidebar-collapsed');
  if ($('sidebar-collapse')) $('sidebar-collapse').setAttribute('aria-expanded', 'false');
  if ($('sidebar-expand')) $('sidebar-expand').setAttribute('aria-expanded', 'false');
}

if ($('sidebar-collapse')) {
  $('sidebar-collapse').addEventListener('click', () => {
    if (window.innerWidth <= 760) closeMenu();
    else toggleSidebar();
  });
}
if ($('sidebar-expand')) {
  $('sidebar-expand').addEventListener('click', () => toggleSidebar(false));
}
const sidebarEl = $('sidebar');
if (sidebarEl) {
  sidebarEl.addEventListener('wheel', event => {
    const nav = $('navigation');
    if (!nav) return;
    if (!nav.contains(event.target)) {
      nav.scrollTop += event.deltaY;
      event.preventDefault();
    }
  }, { passive: false });
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $('theme').innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  $('theme').setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  storage.set('prep:theme', theme);
}
setTheme(storage.get('prep:theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
$('theme').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
$('focus').addEventListener('click', () => { const active = document.body.classList.toggle('focus-mode'); $('focus').setAttribute('aria-pressed', String(active)); closeMenu(); });
$('menu').addEventListener('click', () => { document.body.classList.add('menu-open'); $('overlay').hidden = false; $('menu').setAttribute('aria-expanded', 'true'); });
$('overlay').addEventListener('click', closeMenu);
$('search').addEventListener('input', applyFilter); $('remaining').addEventListener('change', applyFilter);
$('refresh').addEventListener('click', () => loadDocument(current?.id || 'plan')); $('discard').addEventListener('click', refresh);
$('recovery-export').addEventListener('click', () => { if (damagedDraft !== null) download(new Blob([damagedDraft], { type: 'application/json;charset=utf-8' }), `${current.id}-draft-recovery.json`); });
$('recovery-discard').addEventListener('click', refresh);
$('export').addEventListener('click', exportMarkdown); $('conflict-export').addEventListener('click', exportMarkdown);
$('content').addEventListener('change', event => {
  if (!event.target.matches('.task-check') || busy || conflict || damagedDraft !== null || !base) return;
  text = toggleTask(text, event.target.dataset.taskLine, event.target.checked);
  event.target.closest('li').classList.toggle('done', event.target.checked);
  persistDraft(); updateStatus(); applyFilter();
});
$('save').addEventListener('click', async () => {
  if (busy || !base || !dirty() || conflict || local || offline || damagedDraft !== null) return;
  if (!token) { openConnect(); return; }
  busy = true; updateStatus(); notice();
  try {
    const saved = await saveDocument(current, base, text, token);
    base = { text: saved.text, sha: saved.sha }; persistDraft();
    notice(`Saved to GitHub. Commit ${saved.commit.slice(0, 7)}. Pull the latest changes before editing your local checkout.`);
  } catch (error) {
    if (error instanceof ConflictError) conflict = true;
    notice(error.message, true);
  } finally { busy = false; updateStatus(); }
});
$('connect').addEventListener('click', () => {
  if (token) { token = ''; connectedUser = ''; authVersion++; updateConnection(); notice('Disconnected. Your token has been cleared from this tab.'); }
  else openConnect();
});
document.querySelector('.dialog-close').addEventListener('click', () => $('connect-dialog').close());
$('connect-dialog').addEventListener('close', () => { authVersion++; $('token').value = ''; $('auth-submit').disabled = false; });
$('connect-form').addEventListener('submit', async event => {
  event.preventDefault();
  const candidate = $('token').value.trim();
  const attempt = ++authVersion;
  $('token').value = ''; $('auth-submit').disabled = true; $('auth-error').textContent = '';
  try {
    const identity = await validateToken(candidate);
    if (attempt !== authVersion || !$('connect-dialog').open) return;
    token = candidate; connectedUser = identity.login; $('connect-dialog').close(); updateConnection();
    await loadDocument(current?.id || 'plan');
    if (!offline && damagedDraft === null && !conflict) notice(`Signed in as ${connectedUser}. Repository access verified. Write permission will be checked when you save.`);
  } catch (error) { if (attempt === authVersion) $('auth-error').textContent = error.message; }
  finally { if (attempt === authVersion) $('auth-submit').disabled = false; }
});
$('pdf').addEventListener('click', async () => {
  if (!base || pdfBusy) return;
  pdfBusy = true;
  const exportDoc = current, exportText = text, exportDraft = dirty();
  $('pdf').disabled = true; $('pdf').textContent = 'Preparing PDF…'; notice();
  try {
    const { createPdfBlob } = await import('./pdf.js');
    const blob = await createPdfBlob(exportText, exportDoc, exportDraft);
    download(blob, `Prep-${exportDoc.id}${exportDraft ? '-draft' : ''}.pdf`);
    notice(exportDraft ? 'PDF downloaded with your local draft ticks. They have not been saved to GitHub.' : 'PDF generated from the full document, including sections hidden by your filters.');
  } catch { notice('PDF generation failed. Try again, or export Markdown to keep a copy.', true); }
  finally { pdfBusy = false; $('pdf').disabled = !base; $('pdf').innerHTML = `${icon('download')}<span>Download PDF</span>`; }
});
window.addEventListener('hashchange', () => {
  if (busy) { history.replaceState(null, '', `#${current.id}`); return; }
  loadDocument(location.hash.slice(1)); window.scrollTo(0, 0);
});
window.addEventListener('beforeunload', event => { if (dirty() || busy) { event.preventDefault(); event.returnValue = ''; } });
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeMenu(); document.body.classList.remove('focus-mode'); $('focus').setAttribute('aria-pressed', 'false'); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'b') {
    event.preventDefault();
    toggleSidebar();
  }
  if (event.key === '[' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !document.querySelector('dialog[open]')) {
    event.preventDefault();
    toggleSidebar();
  }
  if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !document.querySelector('dialog[open]')) { event.preventDefault(); $('search').focus(); }
});
const btt = $('back-to-top');
if (btt) {
  btt.innerHTML = icon('arrow-up');
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    btt.hidden = window.scrollY < 360;
  }, { passive: true });
}
updateConnection();
loadDocument(location.hash.slice(1) || 'plan');
