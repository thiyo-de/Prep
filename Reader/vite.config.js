import { defineConfig } from 'vite';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { documents } from './config.js';
import { syncNotes } from './scripts/sync-notes.mjs';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'local-markdown-preview-and-auto-sync',
    configureServer(server) {
      const notesDir = fileURLToPath(new URL('../Notes', import.meta.url));
      const planDir = fileURLToPath(new URL('../Plan', import.meta.url));
      const postsDir = fileURLToPath(new URL('../Posts', import.meta.url));

      // Watch parent content directories so edits trigger auto-sync and live reload
      server.watcher.add([notesDir, planDir, postsDir]);

      let dynamicNoteDocuments = [];

      let debounceTimer = null;
      const onFileChange = (filePath) => {
        if (!filePath || !filePath.endsWith('.md')) return;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
          const normalized = filePath.replace(/\\/g, '/');
          const isNote = normalized.includes('/Notes/');
          if (isNote) {
            try {
              dynamicNoteDocuments = await syncNotes();
              server.config.logger.info(`[auto-sync] Synced ${dynamicNoteDocuments.length} study notes (${basename(filePath)} changed).`, { timestamp: true });
              const mod = server.moduleGraph.getModuleById(fileURLToPath(new URL('./notes.generated.js', import.meta.url)));
              if (mod) server.moduleGraph.invalidateModule(mod);
            } catch (err) {
              server.config.logger.error(`[auto-sync] Error syncing notes: ${err.message}`, { timestamp: true });
            }
          } else {
            server.config.logger.info(`[auto-sync] Content updated (${basename(filePath)}).`, { timestamp: true });
          }
          server.ws.send({ type: 'full-reload' });
        }, 150);
      };

      server.watcher.on('add', onFileChange);
      server.watcher.on('change', onFileChange);
      server.watcher.on('unlink', onFileChange);

      server.middlewares.use('/local-content', async (req, res) => {
        const id = new URL(req.url, 'http://localhost').searchParams.get('id');
        const doc = dynamicNoteDocuments.find(d => d.id === id) || documents.find(d => d.id === id);
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
