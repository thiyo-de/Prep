import MarkdownIt from 'markdown-it';

// Token source maps distinguish real tasks from examples inside fenced code.
export const parser = new MarkdownIt({ html: true, linkify: false, typographer: false });
export function tasksIn(text) {
  const lines = text.split('\n');
  let offset = 0;
  const starts = lines.map(line => { const start = offset; offset += line.length + 1; return start; });
  const tasks = [];
  for (const token of parser.parse(text, {})) {
    if (token.type !== 'inline' || !token.map || !/^\[[ xX]\]\s/.test(token.content)) continue;
    const line = token.map[0];
    const match = /^(\s*[-+*]\s+\[)([ xX])(\]\s+)(.*)/.exec(lines[line]);
    if (!match) continue;
    tasks.push({ line, offset: starts[line] + match[1].length, checked: match[2].toLowerCase() === 'x', label: match[4].replace(/\r$/, '') });
  }
  return tasks;
}
export function toggleTask(text, line, checked) {
  const task = tasksIn(text).find(task => task.line === Number(line));
  if (!task) throw new Error('This checklist item no longer matches the source. Refresh the document.');
  return text.slice(0, task.offset) + (checked ? 'x' : ' ') + text.slice(task.offset + 1);
}
export function onlyTaskChanges(original, edited) {
  if (original.length !== edited.length) return false;
  const positions = new Set(tasksIn(original).map(t => t.offset));
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== edited[i] && (!positions.has(i) || !/[ xX]/.test(edited[i]))) return false;
  }
  return true;
}
export function countChanges(original, edited) {
  if (!onlyTaskChanges(original, edited)) throw new Error('Only checklist ticks can be saved from this reader.');
  return tasksIn(original).filter(t => (original[t.offset].toLowerCase() === 'x') !== (edited[t.offset].toLowerCase() === 'x')).length;
}
export function encodeUtf8(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
export function decodeUtf8(base64) {
  return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(Uint8Array.from(atob(base64.replace(/\s/g, '')), c => c.charCodeAt(0)));
}
