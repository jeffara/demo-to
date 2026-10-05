"""Compare a V2 backup with its locally migrated V3 package. Does not contact AEM."""
import zipfile,json,sys
from xml.etree import ElementTree as E
old,new=map(zipfile.ZipFile,sys.argv[1:3]);assert old.namelist()==new.namelist()
schemas=json.load(open('scripts/ds-schema.json'));unchanged=props=blocks=items=converted=0
for name in old.namelist():
 a,b=old.read(name),new.read(name)
 if not name.endswith('.content.xml') or not name.startswith('jcr_root/content/'):
  assert a==b;unchanged+=1;continue
 def walk(x,path=''):
  yield path,x
  for ch in x:yield from walk(ch,path+'/'+ch.tag)
 da,db=dict(walk(E.fromstring(a))),dict(walk(E.fromstring(b)))
 for path,node in da.items():
  assert path in db,path
  schema=schemas.get(node.get('model') or node.get('name'),{})
  for key,value in node.attrib.items():
   if key in db[path].attrib:assert db[path].get(key)==value,(path,key)
   else:
    desc=next(d for d in schema['descriptors'] if d['key']==key)
    collection=next(c for c in schema['collections'] if c['path']==desc['path'])
    raw=value[1:] if value.startswith('\\[') else value
    values=json.loads(raw);values=values if isinstance(values,list) else [values]
    children=[ch for ch in db[path] if ch.get('collection')==collection['id']]
    assert len(children)==len(values),(path,key)
    for item,ch in zip(values,children):
     obj={'value':item} if collection.get('primitive') else {'label':item,'value':item} if collection['id']=='$options' and not isinstance(item,dict) else item
     for field in collection['descriptors']:
      v=obj
      for part in field['path']:v=v.get(part) if isinstance(v,dict) else None
      if v is not None:
       actual=ch.get(field['key']);expected=str(v).lower() if isinstance(v,bool) else str(v)
       assert actual in [expected,'{Boolean}'+expected,'{Long}'+expected,'{Double}'+expected],(path,field['key'],actual,v)
    converted+=1
   props+=1
 for _,node in db.items():
  blocks+=node.get('schemaVersion')=='toranja-v3';items+=node.get('collection') is not None
result={'pass':True,'existingPropertiesChecked':props,'convertedProperties':converted,'markedBlocks':blocks,'typedItems':items,'unchangedEntries':unchanged,'scope':'Original V2 backup migration; no AEM installation'}
open('docs/migration-v3-test.json','w').write(json.dumps(result,indent=2));print(result)
