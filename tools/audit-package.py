"""Gates de pacote: referências AEM, enumerações, cobertura e orçamento de entrega."""
from pathlib import Path
import json,zipfile,xml.etree.ElementTree as ET,fnmatch,re
root=Path(__file__).resolve().parents[1]
read=lambda p:json.loads((root/p).read_text())
checks=[]
def check(name,ok,detail=''):
 checks.append({'name':name,'pass':bool(ok),'detail':detail})
 print('OK' if ok else 'FAIL',name,detail)
contract=read('docs/toranja-contract.json');schemas=read('docs/property-mapping.json');models={m['id']:m for m in read('component-models.json')};pages=read('content/pages.json')
check('73 exports públicos representados',len(contract['components'])==73 and all(c['block'] in schemas for c in contract['components']))
missing=[]
for c in contract['components']:
 schema=schemas[c['block']]
 roots={d['path'][0] for d in schema['descriptors']+schema['events']+schema['technical']}
 if schema.get('item'):roots.add(schema['item']['property'])
 for prop in c['properties']:
  if prop['name'] not in roots:missing.append(c['name']+'.'+prop['name'])
check('878 propriedades próprias classificadas',not missing,', '.join(missing))
def valid(props,values,path):
 errs=[]
 for prop in props:
  if prop['name'] not in values:continue
  value=values[prop['name']];name=path+'.'+prop['name']
  if prop['kind']=='enum' and value not in prop['values']:errs.append(name+'='+str(value))
  if prop['kind']=='object' and isinstance(value,dict):errs+=valid(prop['fields'],value,name)
  if prop['kind']=='array' and prop.get('item',{}).get('kind')=='object':
   for item in value:
    if isinstance(item,dict):errs+=valid(prop['item']['fields'],item,name+'[]')
 return errs
samples=read('src/ds-samples.json');errors=[]
for c in contract['components']:errors+=valid(c['properties'],samples[c['name']],c['name'])
check('Valores de exemplo pertencem às enumerações oficiais',not errors,', '.join(errors))
for name in pages:
 for i in range(1,len(name.split('/'))):assert '/'.join(name.split('/')[:i]) in pages,'Página pai ausente'
check('Hierarquia de páginas completa',True,str(len(pages))+' páginas')
with zipfile.ZipFile(root/'content/demo-to-content.zip') as z:
 docs={n:ET.fromstring(z.read(n)) for n in z.namelist() if n.endswith('.xml')}
 check('XML do pacote válido',True,str(len(docs))+' documentos')
 check('Sem alteração em /conf ou /apps',not any('/conf/' in n or '/apps/' in n for n in z.namelist()))
 ns='{http://www.jcp.org/jcr/1.0}'
 refs=[]
 for name,node in docs.items():
  if not name.startswith('jcr_root/content/demo-to/'):continue
  for el in node.iter():
   for key,value in el.attrib.items():
    if value.startswith('/content/demo-to/') and not value.startswith('/content/demo-to/showcase/') and '<' not in value:
     ref=value.split('?')[0].split('#')[0].removesuffix('.html').removeprefix('/content/demo-to/')
     if ref not in pages:refs.append(value)
 check('Referências de páginas no pacote resolvem conteúdo existente',not refs,str(refs[:5]))
 filters=ET.fromstring(z.read('META-INF/vault/filter.xml'))
 check('DAM limitado aos assets importados',all(f.attrib['root']!='/content/dam/toranja-eds-demo' for f in filters))
patterns=[x.strip().lstrip('/') for x in (root/'.hlxignore').read_text().splitlines() if x.strip()]
files=[p for p in root.rglob('*') if p.is_file() and not p.is_symlink() and not any(fnmatch.fnmatch(p.relative_to(root).as_posix(),x) for x in patterns) and 'node_modules' not in p.parts]
size=sum(p.stat().st_size for p in files)
check('Code Bus abaixo de 500 arquivos e 10 MB',len(files)<500 and size<10_000_000,f'{len(files)} arquivos / {size} bytes')
(root/'docs/package-audit.json').write_text(json.dumps({'checks':checks},ensure_ascii=False,indent=2))
raise SystemExit(0 if all(c['pass'] for c in checks) else 1)
