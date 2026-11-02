export const noteSubjects = [
  { name: 'Maths', icon: 'math' },
  { name: 'English', icon: 'book' },
  { name: 'Reasoning', icon: 'brain' },
  { name: 'General Awareness', icon: 'globe' }
];

export function buildNoteTree(documents) {
  const subjects = noteSubjects.map(subject => ({ ...subject, folders: new Map(), documents: [], count: 0 }));
  for (const doc of documents) {
    let node = subjects.find(subject => subject.name === doc.subject) || subjects[3];
    node.count++;
    for (const name of doc.folders || []) {
      if (!node.folders.has(name)) node.folders.set(name, { name, icon: 'folder', folders: new Map(), documents: [], count: 0 });
      node = node.folders.get(name);
      node.count++;
    }
    node.documents.push(doc);
  }
  return subjects;
}
