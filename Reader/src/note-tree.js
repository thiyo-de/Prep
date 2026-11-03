export const noteSubjects = [
  { name: 'General Awareness', icon: 'globe', label: 'GA / GK', aliases: ['general awareness', 'ga', 'gk'] },
  { name: 'Reasoning', icon: 'brain', label: 'Reasoning', aliases: ['reasoning'] },
  { name: 'English', icon: 'book', label: 'English', aliases: ['english'] }
];

export function buildNoteTree(documents) {
  const subjects = noteSubjects.map(subject => ({ ...subject, folders: new Map(), documents: [], count: 0 }));
  for (const doc of documents) {
    let node = subjects.find(subject => subject.name === doc.subject);
    if (!node) continue;
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
