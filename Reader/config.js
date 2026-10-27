export const repo = { owner: 'thiyo-de', name: 'Prep', branch: 'main' };
export const documents = [
  { id: 'plan', title: 'The study plan', label: 'Master plan', icon: 'compass', group: 'Your roadmap', path: 'Plan/FINAL-PLAN-NOV2026-MAY2027.md', subtitle: 'One plan. A little progress, every day.' },
  { id: 'maths', title: 'Maths', icon: 'math', group: 'Subject checklists', path: 'Plan/Subject-Checklists/MATHS-CHECKLIST.md', subtitle: 'Understand the method. Build accuracy. Then speed.' },
  { id: 'english', title: 'English', icon: 'book', group: 'Subject checklists', path: 'Plan/Subject-Checklists/ENGLISH-CHECKLIST.md', subtitle: 'Build meaning, one sentence at a time.' },
  { id: 'reasoning', title: 'Reasoning', icon: 'puzzle', group: 'Subject checklists', path: 'Plan/Subject-Checklists/REASONING-CHECKLIST.md', subtitle: 'Find the relationship. Explain the answer.' },
  { id: 'gk', title: 'General awareness', label: 'GK / General awareness', icon: 'globe', group: 'Subject checklists', path: 'Plan/Subject-Checklists/GK-GA-CHECKLIST.md', subtitle: 'Connect the facts. Recall them without notes.' },
  { id: 'computers', title: 'Computers', icon: 'screen', group: 'Subject checklists', path: 'Plan/Subject-Checklists/COMPUTERS-CHECKLIST.md', subtitle: 'Learn the concepts. Put them into practice.' },
  { id: 'typing', title: 'Typing', icon: 'keyboard', group: 'Subject checklists', path: 'Plan/Subject-Checklists/TYPING-CHECKLIST.md', subtitle: 'Accuracy first. A steady rhythm follows.' },
  { id: 'notes-reasoning', title: 'Reasoning personal notes', label: 'Reasoning notes', icon: 'brain', group: 'Study notes', subgroup: 'Reasoning', path: 'Notes/Reasoning/Reasoning-Notes.md', subtitle: 'Concepts, patterns, traps, and exam-day decision rules.' },
  { id: 'notes-english-ef1', title: 'English: Sentences & parts of speech (EF1)', label: 'EF1: Sentences & speech', icon: 'book-open', group: 'Study notes', subgroup: 'English Grammar', path: 'Notes/English/01-EF1-English-Basics-Sentences-and-Parts-of-Speech.md', subtitle: 'Sentence foundations, phrases, clauses, and parts of speech.' },
  { id: 'notes-english-ef2', title: 'English: Nouns & modifiers (EF2)', label: 'EF2: Nouns & modifiers', icon: 'text-aa', group: 'Study notes', subgroup: 'English Grammar', path: 'Notes/English/02-EF2-Grammar-Basics-Nouns-Pronouns-and-Modifiers.md', subtitle: 'Nouns, pronouns, adjectives, and adverbs.' },
  { id: 'notes-english-ef3', title: 'English: Verbs, tenses & agreement (EF3)', label: 'EF3: Verbs & tenses', icon: 'pencil-line', group: 'Study notes', subgroup: 'English Grammar', path: 'Notes/English/03-EF3-Grammar-Basics-Verbs-Tenses-and-Agreement.md', subtitle: 'Finite verbs, tense consistency, and subject-verb agreement.' },
  { id: 'notes-biology-01', title: 'Biology: Food & nutrition', label: 'Biology: Nutrition', icon: 'dna', group: 'Study notes', subgroup: 'Biology', path: 'Notes/General Awareness/Biology/01-Food-and-Nutrition.md', subtitle: 'Components of food, balanced diet, deficiencies, and tests.' },
  { id: 'notes-biology-02', title: 'Biology: Fibre to fabric', label: 'Biology: Fibre to fabric', icon: 'plant', group: 'Study notes', subgroup: 'Biology', path: 'Notes/General Awareness/Biology/02-Fibre-to-Fabric.md', subtitle: 'Plant and animal fibres, silk and wool processing cycles.' },
  { id: 'posts', title: 'Posts & salaries', icon: 'briefcase', group: 'Reference', path: 'Posts/POSTS-AND-SALARY-GUIDE.md', subtitle: 'Keep your target in sight.' },
  { id: 'guide', title: 'How to use the checklists', label: 'Completion rules', icon: 'help', group: 'Reference', path: 'Plan/Subject-Checklists/README.md', subtitle: 'A tick records learning. Evidence shows readiness.' }
];
export function documentById(id) { return documents.find(d => d.id === id) || documents[0]; }
export function githubUrl(doc) { return `https://github.com/${repo.owner}/${repo.name}/blob/${repo.branch}/${doc.path.split('/').map(encodeURIComponent).join('/')}`; }
