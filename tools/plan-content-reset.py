#!/usr/bin/env python3
"""Plan replacement from an AEM backup. Read-only: never contacts the server."""
import argparse,json,zipfile
from pathlib import Path
from xml.etree import ElementTree as E
root=Path(__file__).resolve().parents[1];p=argparse.ArgumentParser(description=__doc__);p.add_argument('--backup',type=Path,required=True);p.add_argument('--output',type=Path,default=Path('baseline-reset-plan.json'));a=p.parse_args();config=json.loads((root/'content/aem-config.json').read_text());site=config['siteRoot'].rstrip('/');pages=json.loads((root/'content/pages.json').read_text());existing=set()
with zipfile.ZipFile(a.backup) as z:
 for name in z.namelist():
  if name.startswith('jcr_root'+site+'/') and name.endswith('/.content.xml'):
   doc=E.fromstring(z.read(name))
   if doc.get('{http://www.jcp.org/jcr/1.0}primaryType')=='cq:Page':existing.add(name.removeprefix('jcr_root'+site+'/').removesuffix('/.content.xml'))
removed=sorted(existing-set(pages));result={'siteRoot':site,'existingPagesInBackup':len(existing),'baselinePages':len(pages),'removeFromAuthorAfterImport':removed,'unpublishBeforeImport':[{'aem':site+'/'+name,'eds':'/'+('' if name=='index' else name)} for name in removed],'republishAfterImport':['/'+('' if name=='index' else name) for name in sorted(pages)],'preserved':[site+'/jcr:content','/conf','technical account configuration','other sites'],'warning':'Only pages found in the supplied backup can be compared. Review its coverage. Unpublish removed paths before importing the baseline; FileVault removal alone does not remove old EDS delivery copies.'};a.output.write_text(json.dumps(result,ensure_ascii=False,indent=2));print('Plano gerado:',a.output,'—',len(removed),'páginas fora da baseline. Nenhuma alteração remota.')
