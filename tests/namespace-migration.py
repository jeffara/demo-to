"""Release gate: namespace closure across source, emitted modules and authored content."""
from pathlib import Path
import json,re,zipfile,xml.etree.ElementTree as ET,hashlib
from urllib.parse import urljoin,urlsplit
root=Path(__file__).resolve().parents[1]
read=lambda name:json.loads((root/name).read_text())
migration=read('docs/namespace-migration.json');mapping=migration['mapping'];checks=[]
def check(name,condition):
 checks.append({'name':name,'pass':bool(condition)})
 if not condition:raise AssertionError(name)
package=read('package.json');config=read('content/aem-config.json')
check('Code and content package names',package['name']==migration['codePackage'] and config['packageName']==migration['contentPackage'])
check('Version pair',package['version']==package['contentVersion']=='5.1.0')
blocks={p.name for p in (root/'blocks').iterdir() if p.is_dir()}
check('Exactly 73 React DS blocks and no custom demos',blocks==set(mapping.values()) and len([b for b in blocks if b.startswith('ds-react-')])==73)
groups=read('component-definition.json')['groups']
check('Exact React Adapter group',any(g['title']=='Toranja — React Adapter' and len(g['components'])==73 for g in groups))
check('No Custom models or filters',all(not x['id'].startswith(('c-','v3-')) for file in ['component-models.json','component-filters.json'] for x in read(file)))
check('No Custom showcase pages',not any(p.startswith('showcase/custom') for p in read('content/pages.json')))
check('No custom composition entrypoints',not any(name in (root/'src/ds-runtime.jsx').read_text() for name in ['mountForm','mountSearch','mountSimulator']))
schemas=read('scripts/ds-schema.json')
check('On-demand schema filenames match their new identifiers',{p.stem for p in (root/'scripts/ds-schema').glob('*.json')}==set(schemas))
for block in blocks:
 p=root/'blocks'/block/(block+'.js')
 check('Block module '+block,p.is_file())
 if block.startswith('ds-react-'):
  text=p.read_text();check('Adapter registration '+block,block in schemas and re.search(r"mountDS\(block,\s*['\"]"+re.escape(block)+r"['\"]",text))
models={m['id'] for m in read('component-models.json')};filters={f['id'] for f in read('component-filters.json')}
with zipfile.ZipFile(root/'content'/ (config['packageName']+'.zip')) as z:
 props={e.get('key'):e.text for e in ET.fromstring(z.read('META-INF/vault/properties.xml'))}
 check('FileVault identity',props['name']==config['packageName'] and props['version']==package['contentVersion'])
 count=0
 for name in z.namelist():
  if not name.startswith('jcr_root'+config['siteRoot']+'/') or not name.endswith('/.content.xml'):continue
  for el in ET.fromstring(z.read(name)).iter():
   for key in ['name','model','filter']:
    value=el.get(key)
    check('No legacy identifier in '+name+':'+key,not any(value==old or (value or '').startswith(old+'-') for old in mapping))
    if key=='model' and value:check('Model resolves '+value,value in models)
    if key=='filter' and value:check('Filter resolves '+value,value in filters)
   if el.get('name') in blocks:count+=1
 check('Serialized block coverage',count>73)
# Look for stale block identifiers (internal ds-official/ds-adapter names are not block IDs).
old=re.compile(r'(?<![a-zA-Z0-9_-])(?:'+ '|'.join(map(re.escape,sorted(mapping,key=len,reverse=True)))+r')(?![a-zA-Z0-9_])')
stale=[];missing=[];custom=[]
for directory in ['blocks','scripts','styles','content','models','drafts']:
 for file in (root/directory).rglob('*'):
  if not file.is_file() or file.suffix not in ['.js','.json','.html','.css']:continue
  text=file.read_text()
  if re.search(r'''["']c-(?:form|search|simulator|video)(?:-item)?["']''',text):custom.append(str(file.relative_to(root)))
  if old.search(text):stale.append(str(file.relative_to(root)))
  if file.suffix=='.js':
   # Emitted and source ES modules: resolve quoted local imports, including chunk paths.
   for match in re.finditer(r'(?:\bfrom\s*|\bimport\s*\(?\s*)[\'\"]([^\'\"]+)[\'\"]',text):
    dep=match[1]
    if dep.startswith('.'):
     published_url=urljoin('https://eds.test/'+file.relative_to(root).as_posix(),dep)
     target=root/urlsplit(published_url).path.lstrip('/')
     if not target.exists():missing.append([str(file.relative_to(root)),dep])
check('No legacy block names in active source/runtime/content',not stale)
check('No retired Custom identifiers in active source/runtime/content',not custom)
check('All static local JS module imports resolve',not missing)
reference=read('docs/vendor-snapshot-sha256.json')
check('Official vendor unchanged',all(hashlib.sha256((root/file).read_bytes()).hexdigest()==sha for file,sha in reference.items()))
report={'version':package['version'],'officialBlocks':73,'customDemoBlocks':0,'pages':len(read('content/pages.json')),'serializedBlocks':count,'vendorFiles':len(reference),'checksPassed':len(checks),'staleFiles':stale,'missingModuleImports':missing,'pass':True,'limits':'Static/build verification only. No browser, remote AEM, UE or Lighthouse validation.'}
(root/'docs/namespace-validation.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
