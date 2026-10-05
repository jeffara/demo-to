/** O pacote oficial é preservado. Esta camada converte conteúdo AEM em props declarativas. */
import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';
import '../vendor/@interco/inter-toranja/dist/assets/toranja.css';
import '../vendor/@interco/inter-toranja/dist/assets/fonts.css';
import './ds-runtime.css';
import {runAction, tagPayload} from '../scripts/actions.js';
import {runIntegration} from '../scripts/integrations.js';
import {normalizeProps} from '../scripts/ds-values.js';
import {Stepper, ListItemControl, ListItemCompatibility, Select} from './ds-compat.jsx';
const h=React.createElement;
const allowed=new Set(['P','BR','STRONG','EM','B','I','UL','OL','LI','H2','H3','H4','H5','H6','SPAN','A','IMG','BLOCKQUOTE','DIV','TABLE','THEAD','TBODY','TR','TH','TD']);
function rich(value,key='root',inline=false) {
 if(React.isValidElement(value))return value;
 if(value?.$compositionGroup)return h(React.Fragment,null,...value.$compositionGroup.map((v,i)=>rich(v,key+i)));
 if(value?.$composition){const v=value,body=rich(v.body||v.value||'',key+'body');
  if(v.kind==='divider')return h(DS.Divider);
  if(v.kind==='image')return h(DS.Image,{src:{local:v.src},contentDescription:v.alt||''});
  const button=v.href?h(DS.Link,{role:'link',href:v.href,target:v.$itemTarget||'_self',rel:'noopener noreferrer',label:v.label||'Saiba mais'}):null;
  if(v.kind==='button')return button;
  const children=h(React.Fragment,null,v.title&&h(DS.Text,{as:'h3',textType:'heading'},v.title),v.src&&h(DS.Image,{src:{local:v.src},contentDescription:v.alt||''}),body,button);
  return v.kind==='card'?h(DS.Card,{state:'enabled'},h('div',{className:'ds-card-content'},children)):children;
 }

 if(typeof value!=='string')return value==null?null:String(value);
 if(/^ic_/.test(value))return h(DS.Icon,{asset:value,size:'medium',contentDescription:''});
 const doc=new DOMParser().parseFromString(value,'text/html');
 const convert=(n,i)=>{
  if(n.nodeType===3)return n.textContent;
  if(n.nodeType!==1||!allowed.has(n.tagName))return null;
  if(inline&&['P','DIV','H2','H3','H4','H5','H6','UL','OL','LI','BLOCKQUOTE'].includes(n.tagName))return h(React.Fragment,{key:key+'-'+i},i>0&&h('br'),...[...n.childNodes].map(convert));
  const attrs={key:key+'-'+i};
  if(n.tagName==='A'){const url=n.getAttribute('href')||'';if(/^(https?:|mailto:|tel:|\/|#)/.test(url)&&!url.startsWith('//'))attrs.href=url;}
  if(n.tagName==='IMG'){const src=n.getAttribute('src')||'';if(/^(https?:|\/)/.test(src)&&!src.startsWith('//'))attrs.src=src;attrs.alt=n.getAttribute('alt')||'';}
  return h(n.tagName.toLowerCase(),attrs,...[...n.childNodes].map(convert));
 };
 return h(React.Fragment,null,...[...doc.body.childNodes].map(convert));
}
function at(o,p){return p.reduce((v,k)=>v?.[k],o);}
function put(o,p,v){let x=o;for(const k of p.slice(0,-1))x=x[k]??={};x[p.at(-1)]=v;}
function App({schema,initial,host,options}) {
 const [props,setProps]=useState(()=>normalizeProps(initial,schema)),[open,setOpen]=useState(!!(initial.isOpen||initial.show));
 const [status,setStatus]=useState(''),[dataState,setDataState]=useState(initial.$dataSource?'loading':'ready');
 useEffect(()=>{if(!initial.$dataSource)return;const controller=new AbortController();let active=true;
  const allowed={ChartBar:['categories','values','valueLabels'],ChartDonut:['slice','label','value'],ChartMeter:['bars','legend','value'],ChartLine:['series','categories','yLabels'],Select:['$options'],InputCountry:['countryItems','featuredCountryItems'],BottomSheetCountry:['items','featuredItems']}[schema.name]||[];
  runIntegration(initial.$dataSource,{parameter:initial.$dataParameter||''},{signal:controller.signal}).then(data=>{if(!active)return;if(!data||typeof data!=='object')throw Error('Resposta de dados inválida');const next={...initial};for(const k of allowed)if(data[k]!==undefined)next[k]=data[k];delete next.$chartData;setProps(normalizeProps(next,schema));setDataState('ready')}).catch(error=>{if(active){setStatus(error.message);setDataState('error')}});return()=>{active=false;controller.abort()};
 },[]);

 useEffect(()=>{const listener=e=>{if(props.$overlayId&&e.detail?.id===props.$overlayId)setOpen(!!e.detail.open)};document.addEventListener('toranja:overlay',listener);return()=>document.removeEventListener('toranja:overlay',listener)},[props.$overlayId]);
 useEffect(()=>{if(schema.name!=='Radio'||!props.name)return;const listener=e=>{if(e.detail.name===props.name&&e.detail.host!==host)setProps(p=>({...p,checked:false}))};document.addEventListener('toranja:radio',listener);return()=>document.removeEventListener('toranja:radio',listener)},[props.name]);

 useEffect(()=>{if(!open||!['BottomSheet','BottomSheetCountry'].includes(schema.name))return;const previous=document.activeElement;const close=host.querySelector('.ds-modal-close');close?.focus();const listener=e=>{if(e.key==='Escape'){e.preventDefault();setOpen(false);}if(e.key==='Tab'){const nodes=[...host.querySelectorAll('button,input,[tabindex="0"]')].filter(el=>el.offsetParent!==null&&!el.disabled&&!el.classList.contains('ds-launch'));if(!nodes.length)return;const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};document.addEventListener('keydown',listener);return()=>{document.removeEventListener('keydown',listener);previous?.focus();};},[open]);
 const emit=(event,args)=>{
  // Valores de formulário não são enviados para analytics automaticamente.
  host.dispatchEvent(new CustomEvent('toranja:interaction',{bubbles:true,detail:{component:schema.name,event,args}}));
 };
 const makeHandler=(path)=> (...args)=>{
  const name=path.at(-1),prefix=path.slice(0,-1);
  if(name==='onTag'){const payload=tagPayload(args[0],schema.name);if(payload){host.dispatchEvent(new CustomEvent('toranja:tagging',{bubbles:true,detail:payload}));emit(path.join('.'),[payload]);}return;}
  const val=args[0]?.target?(['checkbox','radio'].includes(args[0].target.type)?args[0].target.checked:args[0].target.value):args[0];
  const copy=structuredClone(props);
  if(/^(onChange|onCheckboxChange|onSwitchChange|onRadioChange|onStepperChange)$/.test(name)){
   if(['Checkbox','Switch','Radio'].includes(schema.name)||/checkbox|switch|radio/i.test(path.join('.')))put(copy,[...prefix,'checked'],typeof val==='boolean'?val:!at(copy,[...prefix,'checked']));
   else if(schema.name==='DatePicker')put(copy,[...prefix,'value'],val);
   else if(typeof val==='string'||typeof val==='number')put(copy,[...prefix,'value'],val);
   if(schema.name==='Radio'&&props.name)document.dispatchEvent(new CustomEvent('toranja:radio',{detail:{name:props.name,host}}));
   setProps(copy);
  }
  if(name==='onCheckboxChange'&&schema.name==='CrossSelling')setProps({...props,isChecked:!!val});
  if(name==='onCountryChange'||name==='onSelect'&&schema.name==='BottomSheetCountry'){setProps({...props,selectedValue:val?.value||val,selectedCountryValue:val?.value||val});setOpen(false);}
  if(name==='onVisibleMonthChange')setProps({...props,visibleMonth:val});
  if(name==='onSearchOpenChange')setProps({...props,isSearchOpen:!!val});
  if(schema.name==='Tabs'&&name==='onClick'&&path[0]==='tabs'){copy.tabs=copy.tabs.map((t,i)=>({...t,selected:i===path[1]}));setProps(copy);}
  if(name==='onClick'&&prefix.at(-1)==='chip'){put(copy,[...prefix,'selected'],!at(copy,[...prefix,'selected']));setProps(copy);}
  if(name==='onClick'&&['Chip','IconChip'].includes(schema.name))setProps({...props,selected:!props.selected});
  if(name==='onSelect'&&schema.name==='Card')setProps({...props,isSelected:!props.isSelected});
  if(name==='close'||name==='onClose')setOpen(false);
  if(/click|action|helper|back|edit/i.test(name)){
   const configured=props.$actions?.[path.join('.')];
   const target=props.$eventLinks?.[path.join('.')]||at(props,[...prefix,'$itemLink'])||at(props,[...prefix,'href'])||props.$actionLink;
   const action=configured?.kind?configured:target?{kind:'navigate',link:target,target:at(props,[...prefix,'$itemTarget'])||props.$actionTarget}:null;
   if(action)try{runAction(action,host,options.editing)}catch(error){setStatus(error.message)}
  }
  const serial=args.map(a=>typeof a==='function'?undefined:a?.target?val:a?.nativeEvent?undefined:a).filter(a=>a!==undefined);
  emit(path.join('.'),serial);
 };
 const p=normalizeProps(props,schema);
 function bind(value,spec,path) {
   if(value==null)return value;
   if(spec.kind==='slot')return rich(value);
   if(spec.kind==='array'&&Array.isArray(value))return value.map((v,i)=>bind(v,spec.item||{},[...path,i]));
   if(spec.kind==='object'&&typeof value==='object') { const obj={...value};for(const f of spec.fields||[]) {if(f.kind==='event')obj[f.name]=makeHandler([...path,f.name]);else if(obj[f.name]!==undefined)obj[f.name]=bind(obj[f.name],f,[...path,f.name]);}return obj;}
   return value;
 }
 for(const d of schema.descriptors)if(['array','json'].includes(d.kind)&&at(p,d.path)!==undefined)put(p,d.path,bind(at(p,d.path),d,d.path));
 for(const d of schema.descriptors){if(d.kind==='slot'&&at(p,d.path)!==undefined){const v=at(p,d.path);put(p,d.path,d.name==='IconSvg'?()=>rich(v):rich(v,'root',schema.name==='Text'&&d.name==='children'));}}
 for(const event of schema.events){if((event.kind==='event'||event.name==='close')&&(event.path.length===1||at(p,event.path.slice(0,-1))!=null))put(p,event.path,makeHandler(event.path));}
 for(const collection of schema.collections||[]){const values=at(p,collection.path);if(!Array.isArray(values))continue;put(p,collection.path,values.map((item,index)=>{
  if(collection.primitive)return item;
  const obj={...item};for(const d of collection.descriptors)if(d.kind==='slot'&&at(obj,d.path)!==undefined)put(obj,d.path,rich(at(obj,d.path)));
  for(const e of collection.events||[])if(e.path.length===1||at(obj,e.path.slice(0,-1))!=null)put(obj,e.path,makeHandler([...collection.path,index,...e.path]));
  delete obj.$resource;delete obj.$itemLink;delete obj.$itemTarget;return obj;
 }));}
 if(schema.name==='Carousel')p.items=(p.items||[]).map((v,i)=>rich(v,'slide'+i));
 for(const k of Object.keys(p))if(k.startsWith('$'))delete p[k];
 if(props.$accessibleLabel)p['aria-label']??=props.$accessibleLabel;
 p.id ||= host.id+'-control';
 let Component=({Stepper,ListItemControl,ListItem:ListItemCompatibility,Select})[schema.name]||DS[schema.name];
 if(['BottomSheet','BottomSheetCountry'].includes(schema.name)){p.isOpen=open;p.close=makeHandler(['close']);}
 if(schema.name==='Snackbar'){p.show=open;p.onClose=makeHandler(['onClose']);}
 
 if(schema.name==='Radio'){p.id||=host.id+'-radio';if(p.hasError)p.variant='error';const change=p.onChange;p.onChange=e=>{change?.(e);p.onSelect?.();p.onTag?.({name:'interaction',ComponentProperties:{component_name:'Radio',state:p.state}})};Component=DS.Radio.Option;}
 if(schema.name==='FloatingActionButton')p.onClick=makeHandler(['onClick']);
 if(schema.name==='Header'&&props.$scrollContainerSelector){try{p.scrollContainer=document.querySelector(props.$scrollContainerSelector);}catch{p.scrollContainer=null;}}
 if(schema.name==='DatePicker'){
  if(p.selectionMode!=='range'){if(p.value&&typeof p.value==='object'&&!(p.value instanceof Date))delete p.value;if(p.defaultValue&&typeof p.defaultValue==='object'&&!(p.defaultValue instanceof Date))delete p.defaultValue;}
  if(props.$defaultDate&&!p.defaultValue)p.defaultValue=new Date(props.$defaultDate+'T12:00:00');
  if(props.$dateValue&&!p.value)p.value=new Date(props.$dateValue+'T12:00:00');
  for(const key of ['value','defaultValue'])if(p[key]&&!(p[key] instanceof Date)&&typeof p[key]==='object')for(const k of ['start','end'])if(typeof p[key][k]==='string')p[key][k]=new Date(p[key][k]+'T12:00:00');
  if(Array.isArray(props.$disabledDates))p.disabledDates=date=>props.$disabledDates.includes([date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-'));
  for(const key of ['minDate','maxDate','visibleMonth'])if(typeof p[key]==='string')p[key]=new Date(p[key]+'T12:00:00');
  for(const key of ['value','defaultValue'])if(typeof p[key]==='string')p[key]=new Date(p[key]+'T12:00:00');
 }
 if(schema.name==='Card')p.children=h('div',{className:'ds-card-content'},p.children);
 if(schema.name==='Link')p.role='link';
 if(schema.name==='Link'&&options.editing)p.onClick=e=>e.preventDefault();
 if(props.$actionLink&&schema.name==='Link'){p.href=options.resolveLink(props.$actionLink);p.target=props.$actionTarget||'_self';if(p.target==='_blank')p.rel='noopener noreferrer';}
 if(schema.name==='Link'&&['disabled','skeleton'].includes(p.state)){p.href=undefined;p['aria-disabled']=true;p.tabIndex=-1;p.onClick=e=>e.preventDefault();}
 if(schema.name==='Tag'&&typeof p.icon==='string')p.icon=rich(p.icon);
 if(schema.name==='Select'){p.options=props.$options||[];p.onChange=makeHandler(['onChange']);}
 if(schema.name==='FloatingActionButton')host.closest('.block')?.classList.toggle('fab-inline',props.$placement==='inline');
 if(dataState!=='ready')return h('p',{className:'ds-data-status',role:dataState==='error'?'alert':'status'},dataState==='loading'?'Carregando dados…':status);
 if((schema.name==='ChartBar'&&!p.values.length)||(schema.name==='ChartMeter'&&!p.bars.length))return h('p',{className:'ds-empty'},'Nenhum dado. Adicione itens a este gráfico.');
 if(['Tabs','Carousel','SegmentedControl','Timeline','ChartLine'].includes(schema.name)&&!p[schema.item?.property]?.length)return h('p',{className:'ds-empty'},'Nenhum item. Adicione itens a este componente.');
 return h(React.Fragment,null,
  ['BottomSheet','BottomSheetCountry','Snackbar'].includes(schema.name)&&props.$showTrigger!==false&&(props.$showTrigger||props.$triggerLabel)&&h('button',{className:'ds-launch',type:'button',onClick:()=>setOpen(true)},props.$triggerLabel||'Abrir '+schema.name),
  h(Component,p),
  schema.name==='Tabs'&&props.tabs?.some(t=>t.$panel)&&h('div',{role:'tabpanel',className:'ds-tab-panel'},rich((props.tabs.find(t=>t.selected)||props.tabs[0])?.$panel)),
  open&&['BottomSheet','BottomSheetCountry'].includes(schema.name)&&h('button',{className:'ds-modal-close',type:'button',onClick:()=>setOpen(false),'aria-label':'Fechar painel'},'Fechar'),
  h('span',{className:'ds-status','aria-live':'polite'},status));
}
class Boundary extends React.Component {
 constructor(p){super(p);this.state={error:null};}
 static getDerivedStateFromError(error){return {error};}
 componentDidCatch(error){(this.props.host.closest('.block')||this.props.host).dataset.dsError=error.message;}
 render(){return this.state.error?h('p',{role:'alert'},'Não foi possível exibir este componente. Revise as propriedades.'):this.props.children;}
}
export function mount(host,schema,props,options){const root=createRoot(host);root.render(h(Boundary,{host},h(App,{schema,initial:props,host,options})));return()=>root.unmount();}
export {mountMenuButton,mountSearch,mountSimulator} from './site-features.jsx';
export {mountForm} from './ds-form.jsx';
