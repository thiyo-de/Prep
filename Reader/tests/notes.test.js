import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, unlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { readNoteDocuments } from '../scripts/sync-notes.mjs';
import { documents } from '../config.js';

test('note discovery follows additions and deletions, excluding templates and indexes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'prep-notes-test-'));
  try {
    for (const directory of ['English', 'General Awareness/Biology', 'Templates', '.hidden']) {
      await mkdir(join(root, directory), { recursive: true });
    }
    const food = 'General Awareness/Biology/01-Food-and-Nutrition.md';
    const newNote = 'General Awareness/Biology/03-Cells.md';
    for (const [path, text] of [
      [food, '# Food'],
      [newNote, '# Cells / செல்கள்'],
      ['English/04-Practice.md', '# Grammar practice'],
      ['Templates/Prompt.md', '# A template'],
      ['.hidden/Draft.md', '# Hidden'],
      ['General Awareness/Biology/README.md', '# Index'],
      ['General Awareness/Biology/Diagram.png', 'not a note']
    ]) await writeFile(join(root, path), text);
    let notes = await readNoteDocuments(root);
    assert.equal(notes.length, 3);
    assert.equal(notes.find(note => note.path === `Notes/${food}`).id, 'notes-biology-01');
    const cells = notes.find(note => note.path === `Notes/${newNote}`);
    assert.equal(cells.title, 'Cells / செல்கள்');
    assert.equal(cells.subgroup, 'Biology');
    assert.equal(notes[0].subgroup, 'English Grammar');
    await unlink(join(root, food));
    await writeFile(join(root, newNote), '# Renamed title');
    notes = await readNoteDocuments(root);
    assert.equal(notes.length, 2);
    assert.ok(!notes.some(note => note.id === 'notes-biology-01'));
    assert.equal(notes.find(note => note.path === cells.path).id, cells.id);
    assert.equal(notes.find(note => note.path === cells.path).title, 'Renamed title');
  } finally {
    assert.equal(dirname(resolve(root)), resolve(tmpdir()));
    assert.ok(root.includes('prep-notes-test-'));
    await rm(root, { recursive: true, force: true });
  }
});

test('reader note paths and counts match the current Notes folder', async () => {
  const current = await readNoteDocuments(new URL('../../Notes/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
  const listed = documents.filter(doc => doc.group === 'Study notes');
  assert.deepEqual(listed, current);
  assert.equal(new Set(listed.map(doc => doc.id)).size, listed.length);
});
