/** Gera modelos XWalk a partir do contrato oficial, mantendo nomes sem field-collapse. */
import fs from 'node:fs';
import {curate} from './curate-ds.mjs';
const contract=JSON.parse(fs.readFileSync('docs/toranja-contract.json'));
const samples=JSON.parse(fs.readFileSync('src/ds-samples.json'));
const primary={Tabs:'tabs',Timeline:'items',Carousel:'items',SegmentedControl:'segments',BottomSheetCountry:'items',InputCountry:'countryItems',ChartLine:'series',FeedbackScreen:'contentItems'};
const get=(o,p)=>p.reduce((x,k)=>x?.[k],o);
const key=p=>'p'+Buffer.from(p.join('.')).toString('hex');
const schema={};const partial={definitions:[],models:[],filters:[]};
const common=['id','name','placeholder','required','disabled','readOnly','value','defaultValue','min','max','minLength','maxLength','autoComplete','inputMode','href','target','title','aria-label','aria-describedby','tabIndex','rows','cols'];
const sampleBlocks=[];
function flatten(props,prefix=[],out=[]) {
 for(const p of props) {
  const at=[...prefix,p.name];
  if(p.kind==='object'&&p.fields?.length)flatten(p.fields,at,out);
  else out.push({...p,path:at,key:key(at)});
 }
 return out;
}
function field(d,sample) {
 let component='text',valueType='string',options;
 if(d.kind==='boolean') {component='select';options=[{name:'Padrão do componente',value:''},{name:'Sim',value:'true'},{name:'Não',value:'false'}];}
 if(d.kind==='number') {component='number';valueType='number';}
 if(d.kind==='enum'&&d.values?.length<=100) {component='select';options=[{name:'Padrão do componente',value:''},...d.values.map(v=>({name:String(v),value:String(v)}))];}
 if(['array','json'].includes(d.kind))component='textarea';
 if(d.kind==='slot')component=/icon/i.test(d.path.at(-1))?'text':'richtext';
 if(/^(src|url|local|light|dark)$/.test(d.path.at(-1))&&(/src|image|url/i.test(d.path.join('.'))))component='reference';
 if(d.kind==='link'||['href'].includes(d.path.at(-1)))component='aem-content';
 let value=get(sample,d.path);
 if(value!==undefined&&['array','json'].includes(d.kind)) value=JSON.stringify(value);
 if(value!==undefined&&(d.kind==='boolean'||component==='select'))value=String(value);
 let description=d.description||'';
 if(['array','json'].includes(d.kind))description+=' Lista/estrutura JSON. Exemplo e contrato em docs/toranja-contract.json.';
 if(d.kind==='enum'&&d.values?.length>100)description+=' Consulte os nomes no catálogo de ícones e na matriz de propriedades.';
 const f={component,name:d.key,label:d.path.join(' › '),valueType,description:description.slice(0,900)};
 if(options)f.options=options;if(value!==undefined)f.value=value;
 return f;
}
for(const c of contract.components) {
 const sample=samples[c.name]||{};
 for(const k of common)if(c.inheritedHTML.includes(k)&&!c.properties.some(p=>p.name===k))c.properties.push({name:k,kind:['disabled','required','readOnly'].includes(k)?'boolean':['min','max','minLength','maxLength','tabIndex','rows','cols'].includes(k)?'number':'string',inherited:true,optional:true});
 let leaves=flatten(c.properties);const arrayName=primary[c.name];
 const arrayProp=c.properties.find(p=>p.name===arrayName);
 const events=leaves.filter(p=>['event','function'].includes(p.kind));
 const technical=leaves.filter(p=>p.kind==='technical');
 leaves=leaves.filter(p=>!['event','function','technical'].includes(p.kind)&&p.path[0]!==arrayName);
 const action={name:'actionLink',path:['$actionLink'],key:'actionLink',kind:'link',description:'Página interna do AEM, URL externa ou âncora para a ação principal.'};
 const extras=[action,{name:'actionTarget',path:['$actionTarget'],key:'actionTarget',kind:'enum',values:['_self','_blank']},{name:'accessibleLabel',path:['$accessibleLabel'],key:'accessibleLabel',kind:'string'}, {name:'triggerLabel',path:['$triggerLabel'],key:'triggerLabel',kind:'string'}];
 // Cada callback de clique de uma composição possui um destino próprio.
 for(const e of events.filter(e=>/click|action|helper|back|edit/i.test(e.name)&&e.path.length>1))extras.push({name:e.name,path:['$eventLinks',e.path.join('.')],key:'a'+key(e.path),kind:'link'});
 if(c.name==='DatePicker') extras.push({name:'dateValue',path:['$dateValue'],key:'dateValue',kind:'string',description:'Data única YYYY-MM-DD. Para intervalo, use value › start/end.'},{name:'disabledDates',path:['$disabledDates'],key:'disabledDates',kind:'array',description:'Datas bloqueadas em JSON, por exemplo ["2026-12-25"].'});
 if(c.name==='Header')extras.push({name:'scrollContainerSelector',path:['$scrollContainerSelector'],key:'scrollContainerSelector',kind:'string',description:'Seletor CSS opcional do contêiner com rolagem.'});
 if(c.name==='Select')extras.push({name:'options',path:['$options'],key:'selectOptions',kind:'array'});
 const fields=[...leaves,...extras].map(d=>field(d,sample));
 fields.find(f=>f.name==='accessibleLabel').value=c.name;
 if(['Button','FloatingActionButton','IconButton','NeutralIconButton','MenuItem','SectionTitle','ListItemAction','Widget'].includes(c.name))fields.find(f=>f.name==='actionLink').value='/demo-toranja';
 if(['BottomSheet','BottomSheetCountry','Snackbar'].includes(c.name))fields.find(f=>f.name==='triggerLabel').value='Abrir '+c.name;
 if(c.name==='Select')fields.find(f=>f.name==='selectOptions').value='["Conta digital","Investimentos","Crédito"]';
 const template={name:c.block,model:c.block};
 for(const f of fields)if(f.value!==undefined)template[f.name]=f.value;
 const model={id:c.block,fields};partial.models.push(model);
 let item;
 if(arrayProp) {
   let descriptors=arrayProp.item?.kind==='object'?flatten(arrayProp.item.fields):[{name:'value',path:['value'],key:key(['value']),kind:arrayProp.item?.kind||'string'}];
   const itemEvents=descriptors.filter(d=>['event','function'].includes(d.kind));
   descriptors=descriptors.filter(d=>!['event','function','technical'].includes(d.kind));
   const first=sample[arrayName]?.[0];const firstObj=arrayProp.item?.kind==='object'?first:{value:first};
   const itemFields=descriptors.map(d=>field(d,firstObj||{}));
   itemFields.push({component:'aem-content',name:'itemLink',label:'Destino do item (opcional)',valueType:'string'});
   const id=c.block+'-item';const tmpl={name:id,model:id};
   for(const f of itemFields)if(f.value!==undefined)tmpl[f.name]=f.value;
   partial.models.push({id,fields:itemFields});
   partial.definitions.push({id,title:c.name+' — item',plugins:{xwalk:{page:{resourceType:'core/franklin/components/block/v1/block/item',template:tmpl}}}});
   partial.filters.push({id:c.block,components:[id]});template.filter=c.block;
   item={model:id,property:arrayName,descriptors,events:itemEvents,primitive:arrayProp.item?.kind!=='object'};
 }
 partial.definitions.push({id:c.block,title:'DS oficial: '+c.name,plugins:{xwalk:{page:{resourceType:'core/franklin/components/block/v1/block',template}}}});
 schema[c.block]={name:c.name,descriptors:[...leaves,...extras],events,technical,item};
 const properties=Object.fromEntries(fields.filter(f=>f.value!==undefined).map(f=>[f.name,f.value]));
 const items=item?(sample[arrayName]||[]).map(v=>{
   const obj=item.primitive?{value:v}:v;return Object.fromEntries(item.descriptors.filter(d=>get(obj,d.path)!==undefined).map(d=>[d.key,['array','json'].includes(d.kind)?JSON.stringify(get(obj,d.path)):get(obj,d.path)]));
 }):undefined;
 sampleBlocks.push({block:c.block,properties,...(items?{items}:{})});
 fs.mkdirSync('blocks/'+c.block,{recursive:true});
 fs.writeFileSync(`blocks/${c.block}/${c.block}.js`,`import { mountDS } from '../../scripts/ds-adapter.js';\nexport default block => mountDS(block, '${c.block}');\n`);
 fs.writeFileSync(`blocks/${c.block}/${c.block}.css`,`.${c.block} { min-width: 0; }\n`);
}
curate(schema,partial,sampleBlocks);
fs.writeFileSync('models/_official-ds.json',JSON.stringify(partial,null,2));
const compact=JSON.parse(JSON.stringify(schema,(key,value)=>['type','description','optional','inherited','values'].includes(key)?(key==='values'&&value.every(v=>typeof v==='number')?value:undefined):value));
fs.writeFileSync('scripts/ds-schema.json',JSON.stringify(compact));
fs.writeFileSync('content/ds-samples.json',JSON.stringify(sampleBlocks,null,2));
fs.writeFileSync('docs/property-mapping.json',JSON.stringify(schema,null,2));
console.log(`${contract.components.length} componentes oficiais e ${Object.values(schema).reduce((n,s)=>n+s.descriptors.length+(s.item?.descriptors.length||0),0)} campos mapeados.`);
