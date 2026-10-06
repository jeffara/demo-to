#!/usr/bin/env python3
"""Synchronize the extracted baseline into an existing clone. Default: preview. Preserves .git and environment configuration."""
from pathlib import Path
import argparse,hashlib,shutil,json
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--target',type=Path,required=True);p.add_argument('--apply',action='store_true');args=p.parse_args();source=Path(__file__).resolve().parents[1];target=args.target.resolve()
if target==source or source in target.parents or target in source.parents:p.error('O clone de destino deve estar fora da pasta extraída da baseline.')
if not (target/'.git').exists():p.error('Destino precisa ser um clone existente com .git.')
managed=['blocks','scripts','styles','fonts','models','src','tools','tests','docs','drafts','content','assets','icons'];skip={'node_modules','.git','__pycache__'}
preserve={'fstab.yaml','.hlxignore','.gitignore'};obsoleteRoot=['config/paths-legacy.json','GUIA-DESENVOLVIMENTO-EDS.md','RUNBOOK-TORANJA-EDS.md','authoring-guide.md','index.html','demo-toranja.html','header.html','footer.html'];delete=[];copy=[]
for directory in managed:
 base=target/directory
 if base.exists():
  for file in base.rglob('*'):
   if file.is_file() and not any(k in skip for k in file.relative_to(target).parts) and not (source/file.relative_to(target)).exists():delete.append(file.relative_to(target))
for name in obsoleteRoot:
 if (target/name).is_file() and not (source/name).exists():delete.append(Path(name))
for file in source.rglob('*'):
 rel=file.relative_to(source)
 if any(k in skip for k in rel.parts) or file.is_symlink() or not file.is_file():continue
 if rel.parts[0] in ['config','.well-known'] and (target/rel).exists():continue
 if str(rel) in preserve and (target/rel).exists():continue
 dest=target/rel
 if not dest.exists() or hashlib.sha256(file.read_bytes()).digest()!=hashlib.sha256(dest.read_bytes()).digest():copy.append(rel)
# Configuration files preserve the live site's owner, technical account references and mountpoint.
print(json.dumps({'target':str(target),'mode':'apply' if args.apply else 'preview','remove':[str(x) for x in delete],'copy':[str(x) for x in copy],'preserved':['.git','existing fstab.yaml','existing config files','existing .well-known','existing .gitignore/.hlxignore']},ensure_ascii=False,indent=2))
if args.apply:
 for rel in delete:(target/rel).unlink()
 for rel in copy:
  dest=target/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(source/rel,dest)
 for directory in managed:
  base=target/directory
  if base.exists():
   for d in sorted((x for x in base.rglob('*') if x.is_dir() and not x.is_symlink()),key=lambda x:len(x.parts),reverse=True):
    if not any(d.iterdir()):d.rmdir()
 print('Baseline sincronizada. Revise git diff e configurações do ambiente antes do commit.')
