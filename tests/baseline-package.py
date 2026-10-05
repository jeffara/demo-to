"""Local contracts for replacement scope, obsolete content and migration helpers; no remote AEM calls."""
from pathlib import Path
import json,re,zipfile,tempfile,subprocess,shutil
from xml.etree import ElementTree as E
root=Path(__file__).resolve().parents[1];checks=[]
def test(name,fn):
 try:fn();checks.append({'name':name,'pass':True});print('OK',name)
 except Exception as e:checks.append({'name':name,'pass':False,'error':str(e)});print('FAIL',name,e)
def require(value,message):
 if not value:raise AssertionError(message)
pages=json.loads((root/'content/pages.json').read_text());site=json.loads((root/'content/aem-config.json').read_text())['siteRoot'];removed=json.loads((root/'docs/baseline-conversion.json').read_text())['removedBlockIds']
with zipfile.ZipFile(root/'content/demo-to-content.zip') as z:
 names=z.namelist();filters=E.fromstring(z.read('META-INF/vault/filter.xml'));f=next(f for f in filters if f.get('root')==site)
 def included(path):
  value=False
  for rule in f:
   if re.fullmatch(rule.get('pattern'),path):value=rule.tag=='include'
  return value
 test('Replacement covers every delivered page and obsolete descendants',lambda:require(f.get('mode')=='replace' and all(included(site+'/'+p+'/jcr:content/root') for p in pages) and included(site+'/obsolete/jcr:content'),'Replacement filter incomplete'))
 test('Site configuration, site root and other sites excluded',lambda:require(not any(included(p) for p in [site,site+'/jcr:content',site+'/jcr:content/settings','/conf/demo-to','/content/other/index']) and not any(n.startswith(('jcr_root/conf/','jcr_root/apps/')) for n in names),'Protected scope is covered'))
 docs=[E.fromstring(z.read(n)) for n in names if n.startswith('jcr_root'+site+'/') and n.endswith('/.content.xml')]
 test('Exactly 119 pages; old block names absent from serialized content',lambda:require(len(docs)==119 and not [(n.tag,n.get('name')) for d in docs for n in d.iter() if n.get('name') in removed or n.get('model') in removed],'Old block or missing pages'))
 test('Assets scoped individually',lambda:require(len(filters)==12 and all(f.get('root').startswith('/content/dam/toranja-eds-demo/') and not list(f) for f in list(filters)[1:]),'Broad asset replacement'))
with tempfile.TemporaryDirectory() as directory:
 tmp=Path(directory)
 def planner():
  backup=tmp/'backup.zip'
  with zipfile.ZipFile(backup,'w') as z:
   for name in ['index','obsolete','obsolete/child']:
    z.writestr('jcr_root'+site+'/'+name+'/.content.xml','<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" jcr:primaryType="cq:Page"/>')
  output=tmp/'plan.json';subprocess.run(['python3',str(root/'tools/plan-content-reset.py'),'--backup',str(backup),'--output',str(output)],check=True,capture_output=True)
  plan=json.loads(output.read_text());require(plan['removeFromAuthorAfterImport']==['obsolete','obsolete/child'] and len(plan['republishAfterImport'])==119,'Incorrect reset plan')
 test('Read-only planner identifies obsolete URLs and all publication paths',planner)
 def sync():
  source=tmp/'baseline';target=tmp/'clone';(source/'tools').mkdir(parents=True);(source/'blocks/ds-button').mkdir(parents=True);(source/'blocks/ds-button/ds-button.js').write_text('new');(source/'fstab.yaml').write_text('source-config');(source/'config').mkdir();(source/'config/public-paths.json').write_text('source-paths');shutil.copy(root/'tools/sync-baseline.py',source/'tools/sync-baseline.py')
  for p in ['.git','node_modules/local','blocks/hero','config']:(target/p).mkdir(parents=True,exist_ok=True)
  for p,content in {'.git/HEAD':'keep-git','node_modules/local/a':'keep-deps','blocks/hero/hero.js':'old','fstab.yaml':'keep-env','config/public-paths.json':'keep-config','config/paths-legacy.json':'old','index.html':'old','private-note.txt':'keep-user'}.items():(target/p).write_text(content)
  command=['python3',str(source/'tools/sync-baseline.py'),'--target',str(target)];subprocess.run(command,check=True,capture_output=True);require((target/'blocks/hero/hero.js').exists(),'Preview mutated clone')
  subprocess.run(command+['--apply'],check=True,capture_output=True);require(not (target/'blocks/hero').exists() and not (target/'index.html').exists() and not (target/'config/paths-legacy.json').exists() and (target/'blocks/ds-button/ds-button.js').read_text()=='new','Old implementation remained')
  for p,content in {'.git/HEAD':'keep-git','node_modules/local/a':'keep-deps','fstab.yaml':'keep-env','config/public-paths.json':'keep-config','private-note.txt':'keep-user'}.items():require((target/p).read_text()==content,'Lost '+p)
  repeat=json.loads(subprocess.run(command,check=True,capture_output=True,text=True).stdout);require(not repeat['remove'] and not repeat['copy'],'Sync not idempotent')
 test('Local sync removes old code, preserves Git/configuration and is idempotent',sync)
(root/'docs/baseline-package-validation.json').write_text(json.dumps({'scope':'Local ZIP/filter contract and helper fixtures; not an AEM import execution','tests':checks},indent=2))
raise SystemExit(0 if all(c['pass'] for c in checks) else 1)
