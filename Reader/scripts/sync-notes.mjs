import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { noteSubjects } from '../src/note-tree.js';

// Keep existing routes and draft keys stable while discovering files from disk.
const knownNotes = {
  'Reasoning/Reasoning-Notes.md': { id: 'notes-reasoning', title: 'Reasoning personal notes', label: 'Reasoning notes', icon: 'brain', subtitle: 'Concepts, patterns, traps, and exam-day decision rules.' },
  'English/01-EF1-English-Basics-Sentences-and-Parts-of-Speech.md': { id: 'notes-english-ef1', title: 'English: Sentences & parts of speech (EF1)', label: 'EF1: Sentences & speech', icon: 'book-open', subtitle: 'Sentence foundations, phrases, clauses, and parts of speech.' },
  'English/02-EF2-Grammar-Basics-Nouns-Pronouns-and-Modifiers.md': { id: 'notes-english-ef2', title: 'English: Nouns & modifiers (EF2)', label: 'EF2: Nouns & modifiers', icon: 'text-aa', subtitle: 'Nouns, pronouns, adjectives, and adverbs.' },
  'English/03-EF3-Grammar-Basics-Verbs-Tenses-and-Agreement.md': { id: 'notes-english-ef3', title: 'English: Verbs, tenses & agreement (EF3)', label: 'EF3: Verbs & tenses', icon: 'pencil-line', subtitle: 'Finite verbs, tense consistency, and subject-verb agreement.' },
  'General Awareness/Biology/01-Food-and-Nutrition.md': { id: 'notes-biology-01', title: 'Biology: Food & nutrition', label: 'Biology: Nutrition', icon: 'dna', subtitle: 'Components of food, balanced diet, deficiencies, and tests.' },
  'General Awareness/Biology/02-Fibre-to-Fabric.md': { id: 'notes-biology-02', title: 'Biology: Fibre to fabric', label: 'Biology: Fibre to fabric', icon: 'plant', subtitle: 'Plant and animal fibres, silk and wool processing cycles.' }
};

export async function readNoteDocuments(notesRoot) {
  const paths = [];
  async function walk(relative = '') {
    for (const entry of await readdir(join(notesRoot, relative), { withFileTypes: true })) {
      if (entry.name.startsWith('.') || ['templates', 'assets', 'materials - pdf'].includes(entry.name.toLowerCase())) continue;
      const path = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile() && /\.md$/i.test(entry.name) && !/^readme\.md$/i.test(entry.name)) {
        const top = path.split('/')[0];
        if (noteSubjects.some(s => s.name === top || s.aliases?.includes(top.toLowerCase()))) {
          paths.push(path);
        }
      }
    }
  }
  await walk();
  const rank = path => {
    const top = path.split('/')[0];
    const index = noteSubjects.findIndex(subject => subject.name === top || subject.aliases?.includes(top.toLowerCase()));
    return index < 0 ? noteSubjects.length : index;
  };
  paths.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, 'en', { numeric: true }));
  return Promise.all(paths.map(async path => {
    const parts = path.split('/');
    const folders = parts.slice(0, -1);
    const topFolder = folders[0] || '';
    const subjectDef = noteSubjects.find(item => item.name === topFolder || item.aliases?.includes(topFolder.toLowerCase())) || noteSubjects[0];
    const subject = subjectDef.name;
    folders.shift();
    const source = await readFile(join(notesRoot, path), 'utf8');
    const title = source.replace(/^\uFEFF/, '').match(/^#\s+(.+?)\s*#*\s*$/m)?.[1]
      || basename(path, '.md').replace(/^\d+[-_ ]*/, '').replace(/[-_]/g, ' ');
    const metadata = knownNotes[path];
    const fullTitle = metadata?.title || title;
    const prefix = `${folders.at(-1) || subject}:`;
    const noteLabel = fullTitle.startsWith(prefix) ? fullTitle.slice(prefix.length).trim() : fullTitle;
    return {
      id: `notes-${createHash('sha256').update(path).digest('hex').slice(0, 12)}`,
      title,
      icon: subject === 'Reasoning' ? 'brain' : folders.includes('Biology') ? 'dna' : 'book-open',
      subtitle: 'Study notes from your Notes folder.',
      ...metadata,
      group: 'Study notes',
      subject,
      folders,
      noteLabel,
      path: `Notes/${path}`
    };
  }));
}

export async function syncNotes() {
  const notesRoot = fileURLToPath(new URL('../../Notes/', import.meta.url));
  const notes = await readNoteDocuments(notesRoot);
  // Bundle only local PNG/JPEG study assets. Markdown cannot load arbitrary URLs.
  const images = {};
  async function collectImages(relative = '') {
    for (const entry of await readdir(join(notesRoot, relative), { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const path = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isDirectory()) await collectImages(path);
      else if (entry.isFile() && path.split('/').some(part => part.toLowerCase() === 'assets') && /\.(png|jpe?g)$/i.test(path)) {
        const bytes = await readFile(join(notesRoot, path));
        const mime = bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) ? 'image/png'
          : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255 ? 'image/jpeg' : null;
        if (!mime || bytes.length > 3 * 1024 * 1024) throw new Error(`Invalid or oversized note image: ${path}`);
        images[`Notes/${path}`] = `data:${mime};base64,${bytes.toString('base64')}`;
      }
    }
  }
  await collectImages();
  const generated = new URL('../src/generated/', import.meta.url);
  await mkdir(generated, { recursive: true });
  await writeFile(new URL('note-images.js', generated), `// Generated by npm run notes.\nexport const noteImages = ${JSON.stringify(images)};\n`);
  const output = new URL('../notes.generated.js', import.meta.url);
  const content = `// Generated by npm run notes from the Notes folder. Do not edit by hand.\nexport const noteDocuments = ${JSON.stringify(notes, null, 2)};\n`;
  const previous = await readFile(output, 'utf8').catch(error => {
    if (error.code !== 'ENOENT') throw error;
    return '';
  });
  if (previous !== content) await writeFile(output, content);
  return notes;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const notes = await syncNotes();
  console.log(`Synced ${notes.length} study notes from Notes/.`);
}
