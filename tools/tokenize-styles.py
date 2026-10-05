"""Centraliza cores das composições EDS nos tokens oficiais e registra conversões."""
from pathlib import Path
import re,json,shutil
root=Path(__file__).resolve().parents[1]; official=root/'vendor/@interco/inter-toranja/dist/assets';dest=root/'styles/official'
# Distribuição pública compacta: resolve imports, preserva tokens oficiais e inclui fontes.
import base64,mimetypes
seen=set()
def bundle(p):
 p=p.resolve()
 if p in seen:return ''
 seen.add(p);text=p.read_text()
 text=re.sub(r"@import\s+['\"]([^'\"]+)['\"];",lambda m:bundle(p.parent/m[1]),text)
 def asset(m):
  raw=m[1].strip('\"\'')
  if raw.startswith(('data:','http','#')):return m[0]
  file=p.parent/raw
  if not file.exists():return m[0]
  mime=mimetypes.guess_type(file.name)[0] or 'application/octet-stream'
  return 'url(data:'+mime+';base64,'+base64.b64encode(file.read_bytes()).decode()+')'
 return re.sub(r'url\(([^)]+)\)',asset,text)
(root/'styles/official-tokens.css').write_text(bundle(official/'toranja.css')+'\n'+bundle(official/'fonts.css'))
if dest.exists():shutil.rmtree(dest)
tokens=dict(re.findall(r'(--color-[\w-]+):\s*(#[0-9a-fA-F]+)',(official/'themes/PF/light.css').read_text()))
def rgba(raw):
 if raw.startswith('#'):
  x=raw[1:];x=''.join(c*2 for c in x) if len(x) in [3,4] else x
  return tuple(int(x[i:i+2],16) for i in (0,2,4))+(int(x[6:8],16)/255 if len(x)==8 else 1,)
 nums=[float(v) for v in re.findall(r'[\d.]+',raw)];return tuple(nums[:3])+(nums[3] if len(nums)>3 else 1,)
entries=[(k,rgba(v)) for k,v in tokens.items() if len(v)==7]
conversions={}
def convert(m):
 raw=m[0];r,g,b,a=rgba(raw);best=min(entries,key=lambda e:sum((v-w)**2 for v,w in zip((r,g,b),e[1][:3])))[0];conversions[raw]=best
 return 'var('+best+')' if a==1 else 'color-mix(in srgb, var('+best+') '+str(round(a*100,2))+'%, transparent)'
for p in list((root/'blocks').glob('*/*.css'))+[root/'styles/styles.css',root/'src/ds-runtime.css']:
 s=p.read_text();s=re.sub(r'#[0-9a-fA-F]{3,8}\b|rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+(?:\s*,\s*[\d.]+)?\s*\)',convert,s)
 s=re.sub(r'(?<=:)\s*white\b',' var(--color-surface-static-white-default)',s);s=re.sub(r'(?<=:)\s*black\b',' var(--color-background-static-black)',s)
 p.write_text(s)
(root/'docs/token-migration.json').write_text(json.dumps(conversions,indent=2))
