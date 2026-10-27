import { JSDOM } from 'jsdom';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { documents } from '../config.js';
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.NodeFilter = dom.window.NodeFilter;
const { createPdfBlob } = await import('../src/pdf.js');
await mkdir('.qa/pdf', { recursive: true });
for (const doc of documents) {
  const text = await readFile(new URL(`../../${doc.path}`, import.meta.url), 'utf8');
  const blob = await createPdfBlob(text, doc);
  let bytes;
  if (blob.arrayBuffer) bytes = Buffer.from(await blob.arrayBuffer());
  else bytes = await new Promise((resolve, reject) => { const reader = new dom.window.FileReader(); reader.onload = () => resolve(Buffer.from(reader.result)); reader.onerror = reject; reader.readAsArrayBuffer(blob); });
  if (bytes.subarray(0, 4).toString() !== '%PDF') throw new Error(`Invalid PDF: ${doc.id}`);
  await writeFile(`.qa/pdf/${doc.id}.pdf`, bytes);
  console.log(`${doc.id}: ${bytes.length} bytes`);
}
dom.window.close();
