import { noteDocuments } from './notes.generated.js';

export const repo = { owner: 'thiyo-de', name: 'Prep', branch: 'main' };
export const documents = [
  { id: 'plan', title: 'The study plan', label: 'Master plan', icon: 'compass', group: 'Your roadmap', path: 'Plan/FINAL-PLAN-NOV2026-MAY2027.md', subtitle: 'One plan. A little progress, every day.' },
  { id: 'daily-drills', title: 'Daily foundation drills', label: 'Daily drills', icon: 'compass', group: 'Your roadmap', path: 'Plan/DAILY-FOUNDATION-DRILLS.md', subtitle: 'A 45-minute routine for recall, calculation, vocabulary and revision within your study time.' },
  { id: 'maths', title: 'Maths', icon: 'math', group: 'Subject checklists', path: 'Plan/Subject-Checklists/MATHS-CHECKLIST.md', subtitle: 'Understand the method. Build accuracy. Then speed.' },
  { id: 'english', title: 'English', icon: 'book', group: 'Subject checklists', path: 'Plan/Subject-Checklists/ENGLISH-CHECKLIST.md', subtitle: 'Build meaning, one sentence at a time.' },
  { id: 'reasoning', title: 'Reasoning', icon: 'puzzle', group: 'Subject checklists', path: 'Plan/Subject-Checklists/REASONING-CHECKLIST.md', subtitle: 'Find the relationship. Explain the answer.' },
  { id: 'gk', title: 'General awareness', label: 'GK / General awareness', icon: 'globe', group: 'Subject checklists', path: 'Plan/Subject-Checklists/GK-GA-CHECKLIST.md', subtitle: 'Connect the facts. Recall them without notes.' },
  { id: 'computers', title: 'Computers', icon: 'screen', group: 'Subject checklists', path: 'Plan/Subject-Checklists/COMPUTERS-CHECKLIST.md', subtitle: 'Learn the concepts. Put them into practice.' },
  { id: 'typing', title: 'Typing', icon: 'keyboard', group: 'Subject checklists', path: 'Plan/Subject-Checklists/TYPING-CHECKLIST.md', subtitle: 'Accuracy first. A steady rhythm follows.' },
  ...noteDocuments,
  { id: 'resources', title: 'Study resources', icon: 'book', group: 'Reference', path: 'Plan/STUDY-RESOURCES.md', subtitle: 'Use what you have. Resolve the gap. Keep studying.' },
  { id: 'posts', title: 'Posts & salaries', icon: 'briefcase', group: 'Reference', path: 'Posts/POSTS-AND-SALARY-GUIDE.md', subtitle: 'Keep your target in sight.' },
  { id: 'guide', title: 'How to use the checklists', label: 'Completion rules', icon: 'help', group: 'Reference', path: 'Plan/Subject-Checklists/README.md', subtitle: 'A tick records learning. Evidence shows readiness.' }
];
export function documentById(id) { return documents.find(d => d.id === id) || documents[0]; }
export function githubUrl(doc) { return `https://github.com/${repo.owner}/${repo.name}/blob/${repo.branch}/${doc.path.split('/').map(encodeURIComponent).join('/')}`; }
