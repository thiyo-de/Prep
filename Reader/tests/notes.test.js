import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, unlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readNoteDocuments } from '../scripts/sync-notes.mjs';
import { documents } from '../config.js';
import { buildNoteTree } from '../src/note-tree.js';

test('note discovery follows additions and deletions, excluding templates and indexes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'prep-notes-test-'));
  try {
    for (const directory of ['English', 'General Awareness/Biology', 'General Awareness/Chemistry/Atoms', 'Templates', '.hidden']) {
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
    assert.equal(cells.subject, 'General Awareness');
    assert.deepEqual(cells.folders, ['Biology']);
    assert.equal(notes[0].subject, 'English');
    assert.deepEqual(notes[0].folders, []);
    const foodDoc = notes.find(note => note.path === `Notes/${food}`);
    assert.equal(foodDoc.noteLabel, 'Food & nutrition');
    const chemistry = 'General Awareness/Chemistry/Atoms/01-Structure.md';
    await writeFile(join(root, chemistry), '# Atomic structure');
    let tree = buildNoteTree(await readNoteDocuments(root));
    assert.deepEqual(tree.map(node => node.name), ['Maths', 'English', 'Reasoning', 'General Awareness']);
    assert.equal(tree[0].count, 0);
    assert.equal(tree[3].count, 3);
    assert.equal(tree[3].folders.get('Chemistry').folders.get('Atoms').documents[0].noteLabel, 'Atomic structure');
    await unlink(join(root, chemistry));
    tree = buildNoteTree(await readNoteDocuments(root));
    assert.ok(!tree[3].folders.has('Chemistry'), 'Empty folders should disappear');
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

test('four subjects remain available without notes', () => {
  const tree = buildNoteTree([]);
  assert.equal(tree.length, 4);
  assert.ok(tree.every(subject => subject.count === 0 && subject.folders.size === 0));
});

test('reader note paths and counts match the current Notes folder', async () => {
  const current = await readNoteDocuments(fileURLToPath(new URL('../../Notes/', import.meta.url)));
  const listed = documents.filter(doc => doc.group === 'Study notes');
  assert.deepEqual(listed, current);
  assert.equal(new Set(listed.map(doc => doc.id)).size, listed.length);
});
