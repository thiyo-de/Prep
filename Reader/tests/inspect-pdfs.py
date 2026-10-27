from pathlib import Path
import pymupdf as fitz

root = Path('.qa/pdf')
failures = []
for path in sorted(root.glob('*.pdf')):
    doc = fitz.open(path)
    outside = []
    missing = []
    for i, page in enumerate(doc):
        for word in page.get_text('words'):
            rect = fitz.Rect(word[:4])
            if rect.x0 < 0 or rect.y0 < 0 or rect.x1 > page.rect.width + 1 or rect.y1 > page.rect.height + 1:
                outside.append(i + 1)
        if any(char[1] == 0 for span in page.get_texttrace() for char in span['chars']):
            missing.append(i + 1)
    print(f'{path.stem}: {len(doc)} pages; text outside page: {sorted(set(outside))}; missing glyph pages: {missing}')
    if outside or missing:
        failures.append(path.stem)
    if path.stem in ('plan', 'maths', 'english', 'gk', 'reasoning'):
        selected = sorted(set([0, len(doc)//2, len(doc)-1]))
        sheet = fitz.open()
        page = sheet.new_page(width=900, height=430)
        for j, number in enumerate(selected):
            target = fitz.Rect(j*300+8, 20, (j+1)*300-8, 425)
            page.show_pdf_page(target, doc, number)
            page.insert_text((j*300+12, 12), f'{path.stem} / page {number+1}', fontsize=9)
        page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)).save(f'.qa/{path.stem}-preview.png')
        sheet.close()
    doc.close()
if failures:
    raise SystemExit('PDF validation failed: ' + ', '.join(failures))
