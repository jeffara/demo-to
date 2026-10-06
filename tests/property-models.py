"""Verifica descritores escalares e opções nos modelos; não prova comportamento visual."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
read=lambda f:json.loads((root/f).read_text())
schemas=read('docs/property-mapping.json')
models={m['id']:{f['name']:f for f in m['fields']} for m in read('component-models.json')}
missing=[];enum_missing=[];counts={'descriptors':0,'enumFields':0,'enumValues':0}
for block,schema in schemas.items():
    scopes=[(models[block],schema['descriptors'])]+[(models[c['model']],c['descriptors']) for c in schema.get('collections',[])]
    for fields,descriptors in scopes:
        for d in descriptors:
            counts['descriptors']+=1
            if d['key'] not in fields:
                # Conteúdo composto/coleções tem modelos próprios, conferidos nos demais gates.
                if d['kind'] not in ['array','json','slot']:missing.append([block,d['name'],d['key']])
                continue
            if d['kind']=='enum' and d.get('values'):
                counts['enumFields']+=1;counts['enumValues']+=len(d['values']);field=fields[d['key']]
                if field['component']=='select':
                    options={str(o['value']) for o in field['options']}
                    absent=[v for v in d['values'] if str(v) not in options]
                    if absent:enum_missing.append([block,d['name'],absent])
report={'scope':'Mapeamento estático, incluindo campos aninhados e coleções. Não é homologação de todas as combinações de propriedades.',**counts,'missingFields':missing,'missingEnumOptions':enum_missing,'pass':not missing and not enum_missing}
(root/'docs/property-model-validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False));raise SystemExit(0 if report['pass'] else 1)
