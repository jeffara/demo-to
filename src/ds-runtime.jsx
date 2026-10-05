/** O pacote oficial é preservado. Esta camada converte conteúdo AEM em props declarativas. */
import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';
import '../vendor/@interco/inter-toranja/dist/assets/toranja.css';
import '../vendor/@interco/inter-toranja/dist/assets/fonts.css';
import './ds-runtime.css';
const h=React.createElement;
const allowed=new Set(['P','BR','STRONG','EM','B','I','UL','OL','LI','H2','H3','H4','H5','H6','SPAN','A','IMG','BLOCKQUOTE']);
function rich(value,key='root') {
 if(React.isValidElement(value))return value;
 if(typeof value!=='string')return value==null?null:String(value);
 if(/^ic_/.test(value))return h(DS.Icon,{asset:value,size:'medium',contentDescription:''});
 const doc=new DOMParser().parseFromString(value,'text/html');
 const convert=(n,i)=>{
  if(n.nodeType===3)return n.textContent;
  if(n.nodeType!==1||!allowed.has(n.tagName))return null;
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
 const [props,setProps]=useState(initial),[open,setOpen]=useState(!!(initial.isOpen||initial.show));
 const [status,setStatus]=useState('');
 useEffect(()=>{if(!open||!['BottomSheet','BottomSheetCountry'].includes(schema.name))return;const previous=document.activeElement;const close=host.querySelector('.ds-modal-close');close?.focus();const listener=e=>{if(e.key==='Escape'){e.preventDefault();setOpen(false);}if(e.key==='Tab'){const nodes=[...host.querySelectorAll('button,input,[tabindex="0"]')].filter(el=>el.offsetParent!==null&&!el.disabled&&!el.classList.contains('ds-launch'));if(!nodes.length)return;const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};document.addEventListener('keydown',listener);return()=>{document.removeEventListener('keydown',listener);previous?.focus();};},[open]);
 const emit=(event,args)=>{
  // Valores de formulário não são enviados para analytics automaticamente.
  host.dispatchEvent(new CustomEvent('toranja:interaction',{bubbles:true,detail:{component:schema.name,event,args}}));
 };
 function go(link){const to=options.resolveLink(link);if(!to||options.editing)return;if(props.$actionTarget==='_blank')window.open(to,'_blank','noopener,noreferrer');else location.assign(to);}
 const makeHandler=(path)=> (...args)=>{
  const name=path.at(-1),prefix=path.slice(0,-1);const val=args[0]?.target?(args[0].target.type==='checkbox'?args[0].target.checked:args[0].target.value):args[0];
  const copy=structuredClone(props);
  if(/^(onChange|onCheckboxChange|onSwitchChange|onRadioChange)$/.test(name)){
   if(['Checkbox','Switch','Radio'].includes(schema.name)||/Checkbox|Switch|Radio/.test(name))put(copy,[...prefix,'checked'],typeof val==='boolean'?val:!at(copy,[...prefix,'checked']));
   else if(schema.name==='DatePicker')put(copy,[...prefix,'value'],val);
   else if(typeof val==='string'||typeof val==='number')put(copy,[...prefix,'value'],val);
   setProps(copy);
  }
  if(name==='onCheckboxChange'&&schema.name==='CrossSelling')setProps({...props,isChecked:!!val});
  if(name==='onCountryChange'||name==='onSelect'&&schema.name==='BottomSheetCountry'){setProps({...props,selectedValue:val?.value||val,selectedCountryValue:val?.value||val});setOpen(false);}
  if(name==='onVisibleMonthChange')setProps({...props,visibleMonth:val});
  if(name==='onSearchOpenChange')setProps({...props,isSearchOpen:!!val});
  if(name==='onClick'&&['Chip','IconChip'].includes(schema.name))setProps({...props,selected:!props.selected});
  if(name==='onSelect'&&schema.name==='Card')setProps({...props,isSelected:!props.isSelected});
  if(name==='close'||name==='onClose')setOpen(false);
  if(/click|action|helper|back|edit/i.test(name)){
   const target=props.$eventLinks?.[path.join('.')]||at(props,[...prefix,'$itemLink'])||at(props,[...prefix,'href'])||props.$actionLink;
   if(target)go(target);else setStatus('Interação realizada.');
  }
  const serial=args.map(a=>typeof a==='function'||a?.nativeEvent||a?.target?undefined:a).filter(a=>a!==undefined);
  emit(path.join('.'),serial);
 };
 const p=structuredClone(props);
 function bind(value,spec,path) {
   if(value==null)return value;
   if(spec.kind==='slot')return rich(value);
   if(spec.kind==='array'&&Array.isArray(value))return value.map((v,i)=>bind(v,spec.item||{},[...path,i]));
   if(spec.kind==='object'&&typeof value==='object') { const obj={...value};for(const f of spec.fields||[]) {if(f.kind==='event')obj[f.name]=makeHandler([...path,f.name]);else if(obj[f.name]!==undefined)obj[f.name]=bind(obj[f.name],f,[...path,f.name]);}return obj;}
   return value;
 }
 for(const d of schema.descriptors)if(['array','json'].includes(d.kind)&&at(p,d.path)!==undefined)put(p,d.path,bind(at(p,d.path),d,d.path));
 for(const d of schema.descriptors){if(d.kind==='slot'&&at(p,d.path)!==undefined){const v=at(p,d.path);put(p,d.path,d.name==='IconSvg'?()=>rich(v):rich(v));}}
 for(const event of schema.events){if(event.kind==='event'||['close','valueBuilder'].includes(event.name))put(p,event.path,makeHandler(event.path));}
 if(schema.item&&p[schema.item.property])p[schema.item.property]=p[schema.item.property].map((item,index)=>{
  if(schema.item.primitive)return rich(item,'item'+index);
  const obj={...item};for(const d of schema.item.descriptors)if(d.kind==='slot'&&at(obj,d.path)!==undefined)put(obj,d.path,rich(at(obj,d.path)));
  for(const e of schema.item.events)put(obj,e.path,makeHandler([schema.item.property,index,...e.path]));
  delete obj.$resource;delete obj.$itemLink;return obj;
 });
 for(const k of Object.keys(p))if(k.startsWith('$'))delete p[k];
 p['aria-label']??=props.$accessibleLabel;
 let Component=DS[schema.name];
 if(['BottomSheet','BottomSheetCountry'].includes(schema.name)){p.isOpen=open;p.close=()=>setOpen(false);}
 if(schema.name==='Snackbar'){p.show=open;p.onClose=()=>setOpen(false);}
 
 if(schema.name==='Radio'){p.id||=host.id+'-radio';Component=DS.Radio.Option;}
 if(schema.name==='FloatingActionButton')p.onClick=makeHandler(['onClick']);
 if(schema.name==='Header'&&props.$scrollContainerSelector){try{p.scrollContainer=document.querySelector(props.$scrollContainerSelector);}catch{p.scrollContainer=null;}}
 if(schema.name==='DatePicker'){
  if(props.$dateValue&&!p.value)p.value=new Date(props.$dateValue+'T12:00:00');
  for(const key of ['value','defaultValue'])if(p[key]&&!(p[key] instanceof Date)&&typeof p[key]==='object')for(const k of ['start','end'])if(typeof p[key][k]==='string')p[key][k]=new Date(p[key][k]+'T12:00:00');
  if(Array.isArray(props.$disabledDates))p.disabledDates=date=>props.$disabledDates.includes([date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-'));
  for(const key of ['minDate','maxDate','visibleMonth'])if(typeof p[key]==='string')p[key]=new Date(p[key]+'T12:00:00');
  for(const key of ['value','defaultValue'])if(typeof p[key]==='string')p[key]=new Date(p[key]+'T12:00:00');
 }
 if(schema.name==='Link'&&options.editing)p.onClick=e=>e.preventDefault();
 if(props.$actionLink&&schema.name==='Link'){p.href=options.resolveLink(props.$actionLink);p.target=props.$actionTarget||'_self';if(p.target==='_blank')p.rel='noopener noreferrer';}
 if(schema.name==='Link'&&['disabled','skeleton'].includes(p.state)){p.href=undefined;p['aria-disabled']=true;p.tabIndex=-1;p.onClick=e=>e.preventDefault();}
 if(schema.name==='Tag'&&typeof p.icon==='string')p.icon=rich(p.icon);
 // Select oficial é um acionador; lista de opções é conteúdo declarativo EDS.
 const [selectOpen,setSelectOpen]=useState(false);
 if(schema.name==='Select')p.onClick=()=>setSelectOpen(true);
 // Conteúdo e callbacks internos permanecem no componente original.
 if(schema.item&&!(p[schema.item.property]?.length))return h('p',{className:'ds-empty'},'Nenhum item. Adicione itens a este componente.');
 return h(React.Fragment,null,
  ['BottomSheet','BottomSheetCountry','Snackbar'].includes(schema.name)&&h('button',{className:'ds-launch',type:'button',onClick:()=>setOpen(true)},props.$triggerLabel||'Abrir '+schema.name),
  h(Component,p),
  open&&['BottomSheet','BottomSheetCountry'].includes(schema.name)&&h('button',{className:'ds-modal-close',type:'button',onClick:()=>setOpen(false),'aria-label':'Fechar painel'},'Fechar'),
  schema.name==='Select'&&selectOpen&&h('ul',{className:'ds-options',role:'listbox','aria-label':props.label||'Opções'},...(props.$options||[]).map((v,i)=>h('li',{key:i},h('button',{type:'button',role:'option','aria-selected':props.value===(v.value||v),onClick:()=>{setProps({...props,value:v.value||v});setSelectOpen(false);emit('onChange',[v.value||v]);}},v.label||v)))),
  h('span',{className:'ds-status','aria-live':'polite'},status));
}
class Boundary extends React.Component {
 constructor(p){super(p);this.state={error:null};}
 static getDerivedStateFromError(error){return {error};}
 componentDidCatch(error){this.props.host.closest('.block').dataset.dsError=error.message;}
 render(){return this.state.error?h('p',{role:'alert'},'Não foi possível exibir este componente. Revise as propriedades.'):this.props.children;}
}
export function mount(host,schema,props,options){const root=createRoot(host);root.render(h(Boundary,{host},h(App,{schema,initial:props,host,options})));return()=>root.unmount();}
