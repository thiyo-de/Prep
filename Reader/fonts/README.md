# PDF fonts

Unmodified static TrueType fonts from [Noto Fonts](https://github.com/notofonts/noto-fonts/tree/main/hinted/ttf), distributed under the included SIL Open Font License (`LICENSE`).

- `NotoSansTamil`: Tamil text and shaping; regular and bold. The same upright faces are used for italic Tamil because these families provide no italic faces.
- `NotoSansMono`: code blocks, box-drawing diagrams and additional phonetic characters; regular and bold.
- `NotoSansSymbols2`: fallback for symbols missing from the other families.

Source paths are `hinted/ttf/<family>/<filename>` in that upstream repository. Roboto remains supplied by pdfmake.

`npm run fonts` generates the ignored virtual-font module from these local files and their glyph maps. The npm dev, build, test and PDF QA commands run it automatically. No external font server is contacted during PDF export. Fonts are lazy-loaded with the PDF exporter and embedded in generated PDFs.
