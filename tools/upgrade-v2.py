"""Migração reproduzível dos exemplos 1.x; executar uma vez sobre o ZIP de entrada."""
import json,re,copy
from pathlib import Path
root=Path('.')
read=lambda p:json.loads(Path(p).read_text())
def write(p,v):Path(p).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
pages=read('content/pages.json'); ds=read('content/ds-samples.json'); contract=read('docs/toranja-contract.json')
if 'composicoes' not in pages:pages['composicoes']=copy.deepcopy(pages['demo-toranja']);pages['composicoes']['title']='Composições Toranja para EDS'
# QR verdadeiro; conteúdo visual importável para o DAM.
import qrcode
Path('assets/demo').mkdir(exist_ok=True,parents=True)
qrcode.make('https://inter.co/').save('assets/demo/inter-qr.png')
for name,page in pages.items():
 for section in page['sections']:
  for b in section['content']:
   if b.get('block')=='app-download':b['properties'].update(qrCodeImage='/assets/demo/inter-qr.png',qrCodeImageAlt='QR Code para acessar o site Inter')
   if b.get('block')=='footer':
    b['properties']['seals']='<ul><li>NASDAQ: INTR</li><li>Autorizado Banco Central</li><li>Garantia FGC &amp; FDIC</li></ul>'
    b['properties']['copyright']=b['properties']['copyright'].replace(' Instagram LinkedIn X / Twitter YouTube','')
    b['properties']['socialLinks']='<ul><li><a href="https://www.instagram.com/inter/">Instagram</a></li><li><a href="https://www.linkedin.com/company/bancointer/">LinkedIn</a></li></ul>'
# Links do catálogo também ficam no conteúdo autorável.
nav=pages['nav']['sections'][0]['content'][0]
if not any(i['label']=='Design System' for i in nav['items']):nav['items'].append({'label':'Design System','link':'/demo-toranja','children':'<ul><li><a href="/composicoes">Composições de página</a></li></ul>'})
sections=[{'id':'catalogo','content':[{'text':'<h1>Toranja: catálogo de componentes</h1><p>64 componentes oficiais para criar experiências. Abra cada exemplo para explorar estados e variantes.</p><p><a href="/">Página inicial</a> · <a href="/composicoes">Composições de página</a></p>'},{'text':'<ul class="ds-catalog-links">'+''.join(f'<li><a href="/showcase/{c["block"][3:]}">{c["name"]}</a></li>' for c in contract['components'])+'</ul>'}]}]
for c,b in zip(contract['components'],ds):
 sections.append({'id':c['block'],'content':[{'text':f'<h2>{c["name"]}</h2><p><a href="/showcase/{c["block"][3:]}">Abrir exemplo e variantes</a></p>'},copy.deepcopy(b)]})
 variants=[]
 for prop in ['state','hierarchy','variant','size']:
  p=next((x for x in c['properties'] if x['name']==prop and x['kind']=='enum'),None)
  if not p or len(p.get('values',[]))>10:continue
  # Apenas variações de estado são independentes de outros campos obrigatórios.
  if prop!='state':continue
  for value in p['values']:
   if value not in ['disabled','skeleton','loading']:continue
   item=copy.deepcopy(b);item['properties']['p'+prop.encode().hex()]=value
   variants.append({'content':[{'text':f'<h2>Estado: {value}</h2>'},item]})
 pages['showcase/'+c['block'][3:]]={'title':c['name']+' | Toranja','description':'Exemplo editável do componente oficial '+c['name'], 'sections':[{'content':[{'text':f'<p><a href="/demo-toranja">← Catálogo Toranja</a></p><h1>{c["name"]}</h1>'},copy.deepcopy(b)]},*variants]}
pages['demo-toranja']={'title':'Toranja | Showcase completo','description':'Catálogo oficial do Design System Toranja 1.13.3 em EDS','sections':sections}
# Seções de showcase não dependem de HTML arbitrário para suas propriedades.
# Páginas de destino dos exemplos: todos os links locais têm conteúdo importável.
paths=set()
for page in list(pages.values()):
 for match in re.findall(r'(?:href=\\?"|"(?:link|cta|primaryCta|secondaryCta)":\s*")(/[^"#? ]*)',json.dumps(page,ensure_ascii=False)):
  match=match.replace('\\','').removesuffix('.html').strip('/')
  if match and not Path(match).suffix and not match.startswith(('content/','assets/')):paths.add(match)
for path in sorted(paths):
 if path in pages:continue
 title=path.split('/')[-1].replace('-',' ').capitalize()
 pages[path]={'title':title+' | Demonstração','description':'Página de destino editável da demonstração Toranja','sections':[{'content':[{'text':f'<p><a href="/">Início</a></p><h1>{title}</h1><p>Página demonstrativa. Personalize este conteúdo no Universal Editor.</p><p><a href="/demo-toranja">Explorar componentes</a></p>'}]}]}
# Cria os pais cq:Page para navegação correta no Sites.
for path in list(pages):
 parts=path.split('/')
 for i in range(1,len(parts)):
  parent='/'.join(parts[:i])
  if parent not in pages:pages[parent]={'title':parent.replace('-',' ').title(),'sections':[{'content':[{'text':'<h1>'+parent.replace('-',' ').title()+'</h1><p><a href="/demo-toranja">Catálogo Toranja</a></p>'}]}]}
write('content/pages.json',pages)
# Campos complementares dos blocos legados; anexados para manter o contrato anterior.
for p in list(Path('blocks').glob('*/_*.json')):
 data=read(p)
 for model in data.get('models',[]):
  existing={f['name'] for f in model['fields']}
  for f in list(model['fields']):
   if f['component']=='aem-content' and f['name']+'Target' not in existing:
    model['fields'].append({'component':'select','name':f['name']+'Target','label':f['label']+' — abrir em','valueType':'string','value':'_self','options':[{'name':'Mesma aba','value':'_self'},{'name':'Nova aba','value':'_blank'}]})
  if model['id']=='footer' and 'socialLinks' not in existing:model['fields'].append({'component':'richtext','name':'socialLinks','label':'Redes sociais','valueType':'string'})
 write(p,data)
section=read('models/_section.json')
section['filters'][0]['components']=list(dict.fromkeys(section['filters'][0]['components']+[c['block'] for c in contract['components']]))
write('models/_section.json',section)
print(len(pages),'páginas; incluindo 64 páginas individuais de showcase.')
