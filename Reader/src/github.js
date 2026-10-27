import { repo, documents } from '../config.js';
import { encodeUtf8, decodeUtf8, onlyTaskChanges } from './core.js';

export class ConflictError extends Error {}
function endpoint(doc) {
  if (!documents.some(d => d.path === doc.path && d.id === doc.id)) throw new Error('Unknown document.');
  return `https://api.github.com/repos/${repo.owner}/${repo.name}/contents/${doc.path.split('/').map(encodeURIComponent).join('/')}`;
}
async function request(url, token, options = {}) {
  const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (options.body) headers['Content-Type'] = 'application/json';
  let response;
  try { response = await fetch(url, { ...options, headers, cache: 'no-store', credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(25000) }); }
  catch { throw new Error('Could not reach GitHub. Your draft is kept on this device. Check your connection, then refresh before retrying a save.'); }
  if (response.status === 409) throw new ConflictError('The repository changed while saving.');
  if (!response.ok) {
    if (response.status === 401) throw new Error('The token is invalid or expired. Disconnect and connect with a valid token.');
    if (response.status === 403 || response.status === 429) throw new Error('GitHub refused this request. Check the token permissions, branch rules or API rate limit. Your draft is safe.');
    if (response.status === 404) throw new Error('Document or repository unavailable. Check repository access and token permissions.');
    if (response.status === 422) throw new Error('GitHub could not accept this save. Check branch protection and refresh the source before retrying.');
    throw new Error(`GitHub returned ${response.status}. Your draft is kept on this device.`);
  }
  return response.json();
}
export async function fetchDocument(doc, token = '') {
  const data = await request(`${endpoint(doc)}?ref=${encodeURIComponent(repo.branch)}`, token);
  if (data.encoding !== 'base64' || typeof data.content !== 'string' || !data.sha) throw new Error('GitHub did not return a supported Markdown file.');
  return { text: decodeUtf8(data.content), sha: data.sha };
}
export async function validateToken(token) {
  if (!token?.trim()) throw new Error('Enter a GitHub access token.');
  const identity = await request('https://api.github.com/user', token);
  if (!identity.login) throw new Error('GitHub did not confirm your signed-in account.');
  const data = await request(`https://api.github.com/repos/${repo.owner}/${repo.name}`, token);
  if (data.permissions && data.permissions.push === false) throw new Error('This account cannot write to the Prep repository.');
  // Fine-grained token Contents scope is enforced by GitHub at save time.
  await fetchDocument(documents[0], token);
  return { login: identity.login };
}
export async function saveDocument(doc, base, edited, token) {
  if (!token) throw new Error('Connect GitHub before saving.');
  if (!onlyTaskChanges(base.text, edited)) throw new Error('Only checklist tick changes are permitted.');
  const latest = await fetchDocument(doc, token);
  if (latest.sha !== base.sha || latest.text !== base.text) throw new ConflictError('A newer version exists on GitHub.');
  const result = await request(endpoint(doc), token, {
    method: 'PUT',
    body: JSON.stringify({ message: `Update ${doc.title} checklist progress`, content: encodeUtf8(edited), sha: base.sha, branch: repo.branch })
  });
  if (!result.content?.sha || !result.commit?.sha) throw new Error('Save response was incomplete. Refresh to verify the repository before retrying.');
  return { text: edited, sha: result.content.sha, commit: result.commit.sha };
}
