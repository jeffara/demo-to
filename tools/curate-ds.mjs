/** Políticas editoriais explícitas, aplicadas sobre o inventário sem alterar o vendor. */
const key=p=>'p'+Buffer.from(p.join('.')).toString('hex');
const get=(o,p)=>p.reduce((v,k)=>v?.[k],o);
const labels={label:'Rótulo',title:'Título',description:'Descrição',state:'Estado',variant:'Variante',size:'Tamanho',checked:'Selecionado inicialmente',selected:'Selecionado',value:'Valor',defaultValue:'Valor inicial',children:'Conteúdo',icon:'Ícone',leadingIcon:'Ícone inicial',src:'Imagem',placeholder:'Texto de exemplo',hints:'Mensagens de ajuda',error:'Mensagens de erro',tags:'Tags',categories:'Categorias',values:'Valores',forceColor:'Cores das séries',showHelper:'Exibir ajuda',onClick:'Ação ao clicar',onBackClick:'Voltar',onCloseClick:'Fechar',onHelper:'Ajuda',helperOnClick:'Ajuda',onActionTrailing:'Ação final'};
const title=p=>p.map(x=>labels[x]||x.replace(/([a-z])([A-Z])/g,'$1 $2')).join(' › ');
function leaves(fields,prefix=[]){return fields.flatMap(f=>f.kind==='object'&&f.fields?leaves(f.fields,[...prefix,f.name]):[{...f,path:[...prefix,f.name],key:key([...prefix,f.name])}]).filter(f=>!['event','function','technical'].includes(f.kind));}
function collectEvents(fields,prefix=[]){return fields.flatMap(f=>f.kind==='event'?[{...f,path:[...prefix,f.name]}]:f.kind==='object'?collectEvents(f.fields||[],[...prefix,f.name]):[]);}
function field(d){
 const f={name:d.key,label:title(d.path),component:'text',valueType:'string'};
 if(d.kind==='number')Object.assign(f,{component:'number',valueType:'number',valueFormat:'double'});
 if(d.kind==='boolean')Object.assign(f,{component:'select',options:[{name:'Padrão',value:''},{name:'Sim',value:'true'},{name:'Não',value:'false'}]});
 if(d.kind==='enum')Object.assign(f,{component:'select',options:[{name:'Padrão',value:''},...(d.values||[]).map(v=>({name:String(v),value:String(v)}))]});
 if(d.kind==='link')f.component='aem-content';
 if(d.kind==='slot')f.component='richtext';
 if(d.kind==='json'){f.component='textarea';f.description='Objeto JSON declarativo; não aceita JavaScript.';}
 if(d.kind==='array'){f.component='text';f.multi=true;f.valueType='string[]';f.description='Adicione um valor por entrada. Os valores numéricos são convertidos e validados.';}
 return f;
}
function choice(name,label,values){return {name,label,component:'select',valueType:'string',options:values.map(v=>({name:labels[v]||v,value:v}))};}
const when=(name,value)=>({'===':[{var:name},value]});
export function curate(schema,partial,samples){
 for(const [id,s] of Object.entries(schema)){
  const model=partial.models.find(m=>m.id===id),def=partial.definitions.find(d=>d.id===id),tmpl=def.plugins.xwalk.page.template;
  const sample=samples.find(b=>b.block===id);s.collections=[];
  const add=(d,f)=>{s.descriptors.push(d);model.fields.push(f||field(d));};
  for(const e of s.events.filter(e=>e.kind==='function'&&e.name!=='close')){const name='behavior'+Buffer.from(e.path.join('.')).toString('hex');add({name,path:['$behaviors',e.path.join('.')],key:name,kind:'string'},{name,label:title(e.path)+' — comportamento cadastrado',component:'text',valueType:'string',description:'Nome registrado pelo time técnico com registerDSBehavior. Não aceita JavaScript no conteúdo.'});}
  // Eventos HTML úteis são contratos do runtime, não campos de JavaScript.
  if(['TextArea'].includes(s.name)&&!s.events.some(e=>e.name==='onChange'))s.events.push({name:'onChange',kind:'event',path:['onChange']});
  if(s.name==='Link'&&!s.events.some(e=>e.name==='onClick'))s.events.push({name:'onClick',kind:'event',path:['onClick']});
  const topObjects=[...new Set(s.descriptors.filter(d=>d.path.length>1&&!d.path[0].startsWith('$')).map(d=>d.path[0]))];
  for(const object of topObjects){
   const control='enable'+Buffer.from(object).toString('hex');
   add({name:control,path:['$enabled',object],key:control,kind:'enum',values:['auto','true','false']},{...choice(control,'Exibir '+title([object]),['auto','true','false']),description:'Automático usa as propriedades configuradas. Não remove a configuração salva.',value:'auto'});
   for(const f of model.fields){const d=s.descriptors.find(x=>x.key===f.name);if(d?.path[0]===object&&d.path.length>1)f.condition={'!':when(control,'false')};}
  }
  if(s.name==='ListItem')for(const side of ['leading','trailing']){
   const variants=[...new Set(s.descriptors.map(d=>d.path[0]).filter(n=>n.startsWith(side)))];
   const name=side+'Choice';add({name,path:['$'+name],key:name,kind:'enum',values:['auto','none',...variants]},choice(name,side==='leading'?'Elemento inicial':'Elemento final',['auto','none',...variants]));
   for(const f of model.fields){const d=s.descriptors.find(x=>x.key===f.name);if(variants.includes(d?.path[0]))f.condition={or:[when(name,''),when(name,'auto'),when(name,d.path[0])]};}
  }
  for(const f of model.fields){const d=s.descriptors.find(d=>d.key===f.name);if(!d)continue;
   if(d.path[0]==='leadingProps'&&d.path.length>2){const type=d.path[1].replace(/Props$/,'');f.condition=when(key(['leadingProps','type']),type);}
   if(d.path[0]==='trailingProps'&&d.path.length>1){const member=d.path[1],variantKey=key(['trailingVariant']);if(member==='checked')f.condition={in:[{var:variantKey},['checkbox','switch','radio']]};if(['min','max','step'].includes(member))f.condition=when(variantKey,'stepper');}
   if(s.name==='DatePicker'&&['value','defaultValue'].includes(d.path[0]))f.condition=when(key(['selectionMode']),'range');
  }
  // Ações independentes para callbacks na raiz e aninhados.
  const actions=s.events.filter(e=>/click|action|helper|back|edit/i.test(e.name)&&!e.path.some(x=>['checked','value'].includes(x)));
  if(s.name==='FloatingActionButton')actions.push({name:'onClick',path:['onClick']});
  const generic=new Set(['actionLink','actionTarget','accessibleLabel','triggerLabel']);
  for(const f of model.fields){
   const d=s.descriptors.find(x=>x.key===f.name);
   if(!d)continue;
   f.label=title(d.path);delete f.value;delete tmpl[f.name];
   if(d.kind==='enum'&&d.values?.length>100){f.component='select';f.options=[{name:'Padrão',value:''},...d.values.map(v=>({name:String(v),value:String(v)}))];f.description='Selecione um ícone do catálogo oficial.';}
   if(d.kind==='number'){f.valueFormat='double';if(/count|progress|steps|counter|maxLength|width|height/i.test(d.name))f.validation={numberMin:0};}
   if(d.name==='className'||d.name==='testId'||d.name==='data-testid')f.hidden=true;
   if(generic.has(f.name)){
    f.label=({actionLink:'Destino padrão',actionTarget:'Abrir destino padrão em',accessibleLabel:'Nome acessível (opcional)',triggerLabel:'Texto do acionador'})[f.name];
    if(['actionLink','actionTarget'].includes(f.name)&&!actions.length&&s.name!=='Link')f.hidden=true;
    if(f.name==='triggerLabel'&&!['BottomSheet','BottomSheetCountry','Snackbar','ModalDialog','SideSheet','MenuPopup','TooltipDescription'].includes(s.name))f.hidden=true;
   }
  }
  for(const e of actions){const code=Buffer.from(e.path.join('.')).toString('hex');
   for(const [prop,kind,values] of [['kind','enum',['none','navigate','open','close','submit','reset','back','custom']],['link','link'],['target','enum',['_self','_blank']],['id','string']]){
    const d={name:prop,path:['$actions',e.path.join('.'),prop],key:'action'+code+prop,kind,...(values?{values}:{})};const f=field(d);f.label=title(e.path)+' — '+({kind:'Tipo de ação',link:'Página, URL ou âncora',target:'Abrir em',id:'Identificador do painel, formulário ou ação'})[prop];
    if(prop==='link'||prop==='target')f.condition=when('action'+code+'kind','navigate');
    if(prop==='id')f.condition={in:[{var:'action'+code+'kind'},['open','close','submit','reset','custom']]};
    add(d,f);
   }
  }
  if(['BottomSheet','BottomSheetCountry','Snackbar','ModalDialog','SideSheet','MenuPopup','TooltipDescription'].includes(s.name)){
   add({name:'overlayId',path:['$overlayId'],key:'overlayId',kind:'string'}, {component:'text',name:'overlayId',label:'Identificador do painel',valueType:'string',description:'Use o mesmo identificador na ação que abre este painel.'});
   add({name:'showTrigger',path:['$showTrigger'],key:'showTrigger',kind:'boolean'},field({key:'showTrigger',path:['Exibir botão de abertura'],kind:'boolean'}));
  }
  if(s.name==='DatePicker')add({name:'defaultDate',path:['$defaultDate'],key:'defaultDate',kind:'string'},{component:'text',name:'defaultDate',label:'Data inicial única',valueType:'string',validation:{regExp:'^$|^\\d{4}-\\d{2}-\\d{2}$'},description:'AAAA-MM-DD; usada somente no modo de data única.'});
  const collections=[];
  if(s.item)collections.push({id:s.item.property,path:[s.item.property],...s.item,primary:true});
  for(const d of s.descriptors.filter(d=>d.kind==='array')){
   let spec=d.item||{kind:'string'};
   if(d.path[0]==='$options')spec={kind:'object',fields:[{name:'label',kind:'string'},{name:'value',kind:'string'},{name:'disabled',kind:'boolean'}]};
   const descriptors=spec.kind==='object'?leaves(spec.fields||[]):[{name:'value',path:['value'],key:key(['value']),kind:spec.kind||'string'}];
   collections.push({id:d.path.join('.'),path:d.path,property:d.path.join('.'),primitive:spec.kind!=='object',descriptors,events:spec.kind==='object'?collectEvents(spec.fields||[]):[],maxItems:d.name==='hints'?3:undefined});
   const f=model.fields.find(f=>f.name===d.key);if(f){f.hidden=true;f.description='Representação interna da coleção; edite pelos itens do componente.';}
  }
  // Conteúdo composto: itens tipados, sem contêineres arbitrários incompatíveis com XWalk.
  const slots=s.descriptors.filter(d=>['Card','Accordion','BottomSheet','Widget','FeedbackScreen','Banner','ModalDialog','SideSheet','Panel'].includes(s.name)&&d.kind==='slot'&&d.path.length===1&&['children','slot','webContent'].includes(d.name));
  for(const d of slots){collections.push({id:'content:'+d.path.join('.'),path:d.path,composition:true,primitive:false,events:[],descriptors:[
   {name:'kind',path:['kind'],key:'contentKind',kind:'enum',values:['text','image','button','divider','card']},
   {name:'body',path:['body'],key:'contentBody',kind:'slot'},
   {name:'title',path:['title'],key:'contentHeading',kind:'string'},
   {name:'src',path:['src'],key:'contentAsset',kind:'string'},
   {name:'alt',path:['alt'],key:'contentDescription',kind:'string'},
   {name:'label',path:['label'],key:'contentLabel',kind:'string'},
   {name:'href',path:['href'],key:'contentLink',kind:'link'}]});}
  if(s.name==='Carousel'&&collections[0]){
   const c=collections[0];c.composition=true;c.primitive=false;c.descriptors.push(
    {name:'kind',path:['kind'],key:'slideKind',kind:'enum',values:['text','image','button','card']},
    {name:'title',path:['title'],key:'slideHeading',kind:'string'},
    {name:'src',path:['src'],key:'slideAsset',kind:'string'},
    {name:'alt',path:['alt'],key:'slideDescription',kind:'string'},
    {name:'label',path:['label'],key:'slideLabel',kind:'string'},
    {name:'href',path:['href'],key:'slideLink',kind:'link'});
  }
  // Todos os dados de uma barra/fatia ficam na mesma linha.
  if(['ChartBar','ChartDonut','ChartMeter'].includes(s.name))collections.push({id:'chartData',path:['$chartData'],primitive:false,events:[],descriptors:[{name:'label',path:['label'],key:'chartLabel',kind:'string'},{name:'value',path:['value'],key:'chartValue',kind:'number'},{name:'color',path:['color'],key:'chartColor',kind:'string'}]});
  if(s.name==='Tabs')collections.find(c=>c.id==='tabs')?.descriptors.push({name:'panelContent',path:['$panel'],key:'panelContent',kind:'slot'});
  const aligned=collections.findIndex(c=>c.id==='chartData');if(aligned>=0)collections.unshift(...collections.splice(aligned,1));
  if(collections.length){
   const modelId=id+'-item';let itemModel=partial.models.find(m=>m.id===modelId);
   if(!itemModel){itemModel={id:modelId,fields:[]};partial.models.push(itemModel);partial.definitions.push({id:modelId,title:s.name+' — item',plugins:{xwalk:{page:{resourceType:'core/franklin/components/block/v1/block/item',template:{name:modelId,model:modelId}}}}});partial.filters.push({id,components:[modelId]});}
   const existing=new Map(itemModel.fields.map(f=>[f.name,f]));itemModel.fields=[choice('collection','Tipo de item',collections.map(c=>c.id))];
   for(const c of collections){c.model=modelId;c.descriptors=c.descriptors.map(d=>({...d,key:c.primary?d.key:'c'+Buffer.from(c.id).toString('hex')+d.key}));
    for(const d of c.descriptors){const f=c.primary&&existing.has(d.key)?existing.get(d.key):field(d);delete f.value;f.condition=c.primary?{or:[when('collection',''),when('collection',c.id)]}:when('collection',c.id);if(d.kind==='array'){Object.assign(f,{component:'text',multi:true,valueType:'string[]'});}
     if(c.composition&&d.name==='src')f.component='reference';itemModel.fields.push(f);
    }
   }
   itemModel.fields.push({component:'aem-content',name:'itemLink',label:'Destino da ação do item',valueType:'string'},choice('itemTarget','Abrir ação do item em',['_self','_blank']));
   const itemDef=partial.definitions.find(d=>d.id===modelId);itemDef.plugins.xwalk.page.template={name:modelId,model:modelId,collection:collections[0].id};tmpl.filter=id;
   s.collections=collections;s.item={model:modelId,property:collections[0].property||collections[0].id,descriptors:collections[0].descriptors,events:collections[0].events||[],primitive:collections[0].primitive};
  }
  for(const f of model.fields){const d=s.descriptors.find(d=>d.key===f.name);if(d?.path.length===1&&!d.path[0].startsWith('$')&&!['array','json','slot'].includes(d.kind)&&sample?.properties[f.name]!==undefined){f.value=sample.properties[f.name];tmpl[f.name]=f.value;}}
  // Required insertion defaults follow the upstream contract, including nested button content.
  for(const f of model.fields){const d=s.descriptors.find(d=>d.key===f.name);if(d&&((s.name==='ListItemAction'&&d.path[0]==='trailingProps')||(s.name==='Pagination'&&d.path[0]==='pageSizeOptions'))&&sample?.properties[f.name]!==undefined){f.value=sample.properties[f.name];tmpl[f.name]=f.value;}}
  if(s.name.startsWith('Chart')||['InputCountry','BottomSheetCountry'].includes(s.name)){
   add({name:'dataSource',path:['$dataSource'],key:'dataSource',kind:'string'},{name:'dataSource',label:'Fonte de dados cadastrada (opcional)',component:'text',valueType:'string',description:'Identificador definido pelo time técnico. Em branco, utiliza os itens editáveis.'});
   add({name:'dataParameter',path:['$dataParameter'],key:'dataParameter',kind:'string'},{name:'dataParameter',label:'Parâmetro da fonte',component:'text',valueType:'string',condition:{'!!':{var:'dataSource'}}});
  }
  const mode={name:'editorMode',path:['$editorMode'],key:'editorMode',kind:'enum',values:['basic','advanced']};
  add(mode,{...choice('editorMode','Opções do painel',['basic','advanced']),value:'basic'});tmpl.editorMode='basic';
  const basic=new Set(['label','title','description','paragraph','paragraphSupport','state','variant','size','children','slot','webContent','src','url','icon','asset','leadingIcon','trailingIcon','checked','selected','isSelected','value','defaultValue','placeholder','showLeading','showTrailing','showDivider','showHeader','trailingVariant','contentDescription','contentScale','alt','selectionMode','minDate','maxDate','min','max','step','isOpen','show']);
  for(const f of model.fields){const d=s.descriptors.find(d=>d.key===f.name);if(!d||f.hidden||d.path[0].startsWith('$')||basic.has(d.path[0])||f.name.startsWith('enable'))continue;const advanced=when('editorMode','advanced');f.condition=f.condition?{and:[advanced,f.condition]}:advanced;}
  // Namespaced configuração editorial com prefixos estáveis; não sobrescreve IDs de conteúdo existente.
  s.version=3;
  if(sample){sample.items=sample.items||[];for(const item of sample.items)if(!item.collection)item.collection=collections[0]?.id;}
 }
 return {schema,partial,samples};
}
