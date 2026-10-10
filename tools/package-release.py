"""Package the tested source, runtime, content and current evidence; never node_modules."""
from pathlib import Path
import json, shutil, sys, zipfile

root = Path(__file__).resolve().parents[1]
output = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else root.parent / 'output'
output.mkdir(parents=True, exist_ok=True)
version = json.loads((root / 'package.json').read_text())['version']
guide = f'EDS_AEM_Universal_Editor_Arquitetura_Deploy_{version}_FINAL.html'
assert (root / 'docs' / guide).exists(), 'Generate the release guide first'
assert (root / f'docs/performance-v{version}/summary.json').exists()
archive = output / f'aem-eds-inter-toranja_v{version}.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for file in sorted(root.rglob('*')):
        if not file.is_file():
            continue
        rel = file.relative_to(root)
        if set(rel.parts) & {'node_modules', '.git', '__pycache__', '__MACOSX'}:
            continue
        if file.name == '.DS_Store' or file.suffix == '.pyc':
            continue
        if rel.parts[:2] == ('docs', 'reference-runtime'):
            continue
        if rel.parts[0] == 'docs':
            if file.name.startswith(('parity-diff-', 'font-raster-')):
                continue
            if len(rel.parts) > 2 and rel.parts[1].startswith('performance-'):
                if rel.parts[1] != f'performance-v{version}' and file.name != 'summary.json':
                    continue
        z.write(file, Path(root.name) / rel)
shutil.copy2(root / 'content/demo-to-content.zip', output / f'demo-to-content-{version}.zip')
shutil.copy2(root / 'docs' / guide, output / guide)
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    assert json.loads(z.read(f'{root.name}/package.json'))['version'] == version
for file in sorted(output.iterdir()):
    if file.is_file():
        print(file.name, file.stat().st_size)
