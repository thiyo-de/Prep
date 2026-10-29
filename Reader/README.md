# Prep Reader

A browser reader for the existing study plan, checklists, notes and posts guide. Markdown remains the source; your syllabus and timetable are unchanged.

Open **Reference → Study resources** (or `#resources`) for the [resource guide](../Plan/STUDY-RESOURCES.md). Links from the master plan and checklist index open it inside Reader. The Tamil-medium reminder remains in the master plan's motivation section. The guide preserves Testbook's **confirmation pending** label.

## Run locally

Requires Node.js 22 or newer. From the repository root:

```powershell
cd Reader
npm ci
npm run dev
```

Open the URL printed by Vite. Normal development mode reads Markdown from your local checkout and deliberately disables GitHub connection/saving.

To use live GitHub documents and the Connect GitHub button locally, open `http://127.0.0.1:5173/?remote=1#maths` (use the printed port if different). Production builds always use GitHub.

## Connect and save

1. Choose **Connect GitHub** in the sidebar.
2. Create a fine-grained personal access token with resource owner `thiyo-de`, repository access limited to **Prep**, and repository **Contents: Read and write**. Use an expiry date.
3. Paste it into the reader's password field, then connect. Do not put tokens in chat, source files, URLs or Actions secrets for this reader.
4. The reader verifies your GitHub identity and repository read access. It shows your username. This does not prove write permission: GitHub checks token scope and branch rules on the actual save.
5. Tick completed items, then explicitly click **Save to GitHub**. A successful save shows its commit ID. Each save edits only checklist markers in that document on `main`.

The token stays in page memory; reload, close the tab or disconnect to clear it. Browser drafts contain Markdown and progress, never the token. Repository access must belong to your account; connecting cannot grant new permissions. Reading and PDF downloads need no token for a public repository. For private repositories, connect first and reload the source.

After a web save, `git pull` before editing those same Markdown files on your computer. A protected branch may reject direct saves; this reader does not bypass protection or create PRs.

## Draft recovery and PDFs

- Checkbox edits are saved locally in this browser until you save them to GitHub. Clearing browser storage removes these local drafts.
- If a source request fails after the app has loaded, an existing draft can still open, be edited, and be exported as Markdown or PDF. This is draft recovery, not a fully offline-installable app: initial page/assets and the first PDF download may still need connectivity.
- **Check connection / reload** checks the source without discarding your draft. If the source changed, saving is blocked and your draft is preserved. Export it before choosing **Discard draft & load latest**.
- Damaged draft data is locked against overwriting and can be downloaded exactly as stored using **Download recovery data**. Discard requires confirmation and a successful source reload.
- **Download PDF** generates the complete selected document at that moment, including unsaved ticks and sections hidden by search. No PDF is hard-coded or committed.
- PDF exports embed Tamil, monospace diagram and symbol fonts. The first export loads the font bundle; subsequent exports reuse it. See [font licenses and build details](fonts/README.md).
- Completion percentages apply only to checklists. Notes show estimated reading time, not mastery.

## Publish on GitHub Pages

The workflow is [reader-pages.yml](../.github/workflows/reader-pages.yml). It tests and builds Reader, then publishes `Reader/dist` for pushes affecting Reader on `main`. Pull requests run checks only. No personal token is needed in the workflow.

1. Commit/push Reader and the workflow to the repository.
2. In GitHub **Settings > Pages > Build and deployment > Source**, choose **GitHub Actions**.
3. Run **Reader checks and Pages deployment** from Actions, or push a Reader change to `main`.
4. Use the URL reported by the successful deployment. With the default project domain it should be `https://thiyo-de.github.io/Prep/`; that URL is not evidence of deployment until the workflow succeeds.

Markdown-only checklist saves appear on the next source load; they do not need a site rebuild. Add new document entries in `config.js` when you want them in the sidebar. This workflow publishes the repository's Pages site at its root, not `/Reader/`.

Official references: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [authenticated-user API](https://docs.github.com/en/rest/users/users#get-the-authenticated-user), [file contents API](https://docs.github.com/en/rest/repos/contents#create-or-update-file-contents).

## Checks

```powershell
npm test
npm run build
npm audit
npm run test:pdf
```

`npm test` runs core and simulated DOM/API tests, including draft recovery, conflicts, token errors and exact checkbox patches. These are not real browser tests or real GitHub writes. PDF QA creates ignored files under `.qa/`. Optional `py tests/inspect-pdfs.py` requires PyMuPDF and checks page bounds plus sample renders.

Before release, manually check desktop/mobile, both themes, navigation, keyboard focus, PDF downloads and a genuine checklist save with your own token. A successful connection alone is not proof that saving works.
