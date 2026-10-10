"""Package the React Adapter release with current validation evidence and no dependencies."""
from pathlib import Path
import json,shutil,sys,zipfile,hashlib
root=Path(__file__).resolve().parents[1]
out=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else root.parent/'output'
out.mkdir(parents=True,exist_ok=True)
package=json.loads((root/'package.json').read_text());config=json.loads((root/'content/aem-config.json').read_text());version=package['version']
for file in ['namespace-validation.json','compliance-v5.1.0.json','property-model-validation.json']:
 report=json.loads((root/'docs'/file).read_text());assert report['pass'],file
for file,key in [('package-audit.json','checks'),('baseline-package-validation.json','tests')]:
 assert all(x['pass'] for x in json.loads((root/'docs'/file).read_text())[key]),file
keep_docs={'content-root-migration-validation.json','toranja-contract.json','property-mapping.json','vendor-snapshot-sha256.json','vendor-provenance-v4.0.0.json','THIRD-PARTY.md','font-sources.json','AUTORIA-LAYOUTS.md','INTEGRACOES-V3.md','baseline-conversion.json','react-scope-migration.json','namespace-migration.json','namespace-validation.json','compliance-v5.1.0.json','property-model-validation.json','package-audit.json','baseline-package-validation.json','cobertura-propriedades.csv'}
archive=out/(package['name']+'-'+version+'.zip')
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for file in sorted(root.rglob('*')):
  rel=file.relative_to(root)
  if not file.is_file() or file.is_symlink() or set(rel.parts)&{'node_modules','.git','__pycache__','__MACOSX'}:continue
  if file.name=='.DS_Store' or file.suffix in {'.pyc','.log'}:continue
  if rel.parts[0]=='docs' and (len(rel.parts)!=2 or file.name not in keep_docs):continue
  z.write(file,Path(package['name'])/rel)
content=out/(config['packageName']+'-'+package['contentVersion']+'.zip')
shutil.copy2(root/'content'/(config['packageName']+'.zip'),content)
for file in [archive,content]:
 with zipfile.ZipFile(file) as z:assert z.testzip() is None
 print(file.name,file.stat().st_size,hashlib.sha256(file.read_bytes()).hexdigest())
