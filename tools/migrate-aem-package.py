#!/usr/bin/env python3
"""Atualiza um pacote de BACKUP exportado do AEM. Não conecta, instala ou publica nada.
Uso: python3 tools/migrate-aem-package.py --input backup.zip --output backup-v3.zip
Preserva caminhos e binários; marca o contrato V3 e converte listas legadas em itens editáveis.
As propriedades V2 continuam suportadas pelo adaptador. Revise o filtro antes de instalar.
"""
import argparse,zipfile,json,re
from xml.etree import ElementTree as ET
from pathlib import Path
from importlib.util import spec_from_file_location,module_from_spec
spec=spec_from_file_location('exporter',Path(__file__).with_name('export-aem.py'));exporter=module_from_spec(spec);spec.loader.exec_module(exporter)
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--input',required=True,type=Path);p.add_argument('--output',required=True,type=Path);args=p.parse_args()
if args.input.resolve()==args.output.resolve():p.error('Use um arquivo de saída diferente do backup.')
schemas=json.loads((Path(__file__).resolve().parents[1]/'scripts/ds-schema.json').read_text())
definitions=json.loads((Path(__file__).resolve().parents[1]/'component-definition.json').read_text())
known={d['id'] for g in definitions['groups'] for d in g['components'] if d.get('plugins',{}).get('xwalk',{}).get('page',{}).get('resourceType')=='core/franklin/components/block/v1/block'}
count=0

with zipfile.ZipFile(args.input) as src,zipfile.ZipFile(args.output,'w',zipfile.ZIP_DEFLATED) as dst:
 for entry in src.infolist():
  data=src.read(entry)
  if entry.filename.endswith('.content.xml') and entry.filename.startswith('jcr_root/content/'):
   root=ET.fromstring(data)
   for n in root.iter():
    resource=n.get('{http://sling.apache.org/jcr/sling/1.0}resourceType')
    if resource=='core/franklin/components/block/v1/block' and (n.get('model') or n.get('name')) in known:
     n.set('schemaVersion','toranja-v3');count+=1
     schema=schemas.get(n.get('model') or n.get('name'),{})
     collections=schema.get('collections',[])
     if not collections:continue
     for child in n:
      if child.get('model')==schema.get('item',{}).get('model') and not child.get('collection'):child.set('collection',collections[0]['id'])
     for c in collections:
      if c.get('legacy') or c.get('composition') or c['id']=='chartData':continue
      descriptor=next((d for d in schema.get('descriptors',[]) if d['path']==c['path']),None)
      if not descriptor:continue
      raw=n.get(descriptor['key'])
      if raw is None or raw=='':continue
      if raw.startswith('\\['):raw=raw[1:]
      try:values=json.loads(raw)
      except (ValueError,TypeError):values=[raw]
      if not isinstance(values,list):values=[values]
      if any(child.get('collection')==c['id'] for child in n):continue
      for value in values:
       obj={'value':value} if c.get('primitive') else {'label':value,'value':value} if c['id']=='$options' and not isinstance(value,dict) else value
       props={'jcr:primaryType':'nt:unstructured','sling:resourceType':'core/franklin/components/block/v1/block/item','name':c['model'],'model':c['model'],'collection':c['id']}
       for d in c['descriptors']:
        v=obj
        for part in d['path']:v=v.get(part) if isinstance(v,dict) else None
        if v is not None:props[d['key']]=v
       i=0
       while any(child.tag=='v3item_'+str(i) for child in n):i+=1
       exporter.node('v3item_'+str(i),props,n)
      del n.attrib[descriptor['key']]

   data=exporter.xml(root)
  dst.writestr(entry,data)
print(f'{count} blocos marcados. Pacote gerado: {args.output}. Não instalado.')
