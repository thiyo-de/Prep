import { defineConfig } from 'vite';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { documents } from './config.js';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'local-markdown-preview',
    configureServer(server) {
      server.middlewares.use('/local-content', async (req, res) => {
        const id = new URL(req.url, 'http://localhost').searchParams.get('id');
        const doc = documents.find(d => d.id === id);
        if (!doc) { res.statusCode = 404; return res.end('Unknown document'); }
        try {
          const buffer = await readFile(fileURLToPath(new URL(`../${doc.path}`, import.meta.url)));
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify({ content: buffer.toString('base64'), sha: createHash('sha256').update(buffer).digest('hex') }));
        } catch { res.statusCode = 500; res.end('Cannot read local document'); }
      });
    }
  }]
});
