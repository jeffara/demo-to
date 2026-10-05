/** Ponte XWalk: conteúdo semântico e seleção do bloco continuam pertencendo ao AEM. */
import { read, el, uid } from './toranja.js';
import { resolveLink } from './links.js';
import {parseList, scalar, normalizeProps, put as set} from './ds-values.js';
let schemaPromise, runtimePromise;
const schemas=()=>schemaPromise??=fetch(new URL('./ds-schema.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Modelo DS indisponível');return r.json();});
const runtime=()=>runtimePromise??=import('./ds-runtime/toranja-runtime.js');
function decode(cell,d) {
 const value=cell?.textContent.trim()||'';
 if(d.kind==='link'||d.path.at(-1)==='href')return resolveLink(cell?.querySelector('a')?.getAttribute('href')||value);
 const img=cell?.querySelector('img'); if(img)return img.getAttribute('src');
 if(!value)return undefined;
 if(d.kind==='boolean')return value==='true';
 if(d.kind==='number')return scalar(value,d);
 if(d.kind==='enum'&&d.values?.every(v=>typeof v==='number'))return Number(value);
 if(['array','json'].includes(d.kind)){const entries=[...cell.querySelectorAll(':scope > ul > li, :scope > ol > li')];return parseList(entries.length?entries.map(n=>n.textContent.trim()):value,d.item||{kind:'string'});}
 if(d.kind==='slot'&&!/icon/i.test(d.path.at(-1)))return cell.innerHTML;
 return value;
}
export async function mountDS(block,id) {
 const schema=(await schemas())[id];const {fields,items}=read(block,id);let props={};
 try {
 for(const d of schema.descriptors){const v=decode(fields[d.key],d);if(v!==undefined)set(props,d.path,v);}
 if(schema.collections?.length){
  const touched=new Set();
  for(const item of items){
   const collection=item.collection?.textContent.trim()||schema.collections[0].id;
   const spec=schema.collections.find(c=>c.id===collection);if(!spec)continue;
   if(!touched.has(collection)){set(props,spec.path,[]);touched.add(collection);}
   const obj={};for(const d of spec.descriptors){const v=decode(item[d.key],d);if(v!==undefined)set(obj,d.path,v);}
   obj.$itemLink=resolveLink(item.itemLink?.querySelector('a')?.getAttribute('href')||item.itemLink?.textContent);
   obj.$itemTarget=item.itemTarget?.textContent.trim()||'_self';
   const value=spec.composition?{$composition:true,...obj}:spec.primitive?obj.value:obj;
   const dest=spec.path.reduce((v,k)=>v[k],props);dest.push(value);
  }
  for(const spec of schema.collections.filter(c=>c.composition&&c.path[0]!=='items')){const value=spec.path.reduce((v,k)=>v?.[k],props);if(Array.isArray(value))set(props,spec.path,{$compositionGroup:value});}
 }
 props=normalizeProps(props,schema);
 } catch(error){block.dataset.dsError=error.message;block.append(el('p','ds-error',error.message));return;}
 const host=el('div','ds-official');host.id=uid('ds');
 const fallback=el('div','ds-fallback');
 const title=props.label||props.title||props.description||schema.name;
 fallback.append(el('p','',typeof title==='string'?title:schema.name));
 if(props.$actionLink){const a=el('a','',props.label||'Saiba mais');a.href=props.$actionLink;fallback.append(a);}
 // Mantém os itens selecionáveis em autoria; painel do bloco expõe todos os campos.
 if(schema.collections?.length&&document.querySelector('main[data-aue-resource]')) {
  const authorItems=el('div','ds-author-items');
  items.forEach((item,i)=>{const label=el('div','ds-author-item',item.row.textContent.trim().slice(0,70)||`Item ${i+1}`);for(const a of [...item.row.attributes])if(a.name.startsWith('data-aue-'))label.setAttribute(a.name,a.value);authorItems.append(label);});
  block.replaceChildren(host,authorItems);
 } else block.replaceChildren(host);
 if(document.querySelector('main[data-aue-resource]'))host.addEventListener('click',e=>{if(e.target.closest('a'))e.preventDefault()},true);
 host.append(fallback);block.dataset.toranjaReady='true';
 const {mount}=await runtime();
 const css=new URL('./ds-runtime/toranja-runtime.css',import.meta.url).href;
 if(!document.querySelector('link[data-ds-css]')){const l=document.createElement('link');l.rel='stylesheet';l.href=css;l.dataset.dsCss='true';document.head.append(l);await new Promise(resolve=>{l.onload=resolve;l.onerror=resolve;});}
 const dispose=mount(host,schema,props,{resolveLink,editing:!!document.querySelector('main[data-aue-resource]')});
 // SVGs oficiais podem repetir ids de filtros; isola referências por instância.
 const svgMaps=new WeakMap();let svgCount=0;
 const localIds=new Map();
 const normalizeSVG=()=>{
  for(const a of host.querySelectorAll('a[href]')){const raw=a.getAttribute('href');const mapped=resolveLink(raw);if(mapped&&mapped!==raw)a.setAttribute('href',mapped);if(a.target==='_blank')a.rel='noopener noreferrer';}
  for(const node of host.querySelectorAll('[id]'))if(!node.closest('svg')&&!node.id.startsWith(host.id+'-')){localIds.set(node.id,host.id+'-'+node.id);node.id=host.id+'-'+node.id;}
  for(const node of host.querySelectorAll('[for],[aria-labelledby],[aria-describedby],[aria-controls]'))for(const attr of ['for','aria-labelledby','aria-describedby','aria-controls']){const raw=node.getAttribute(attr);if(raw){const next=raw.split(' ').map(id=>localIds.get(id)||id).join(' ');if(next!==raw)node.setAttribute(attr,next);}}
  const tabs=[...host.querySelectorAll('[data-testid=tab]')];
  if(tabs.length){host.querySelector('[data-testid=container-tabs]')?.setAttribute('role','tablist');tabs.forEach((tab,i)=>{tab.setAttribute('role','tab');tab.tabIndex=tab.getAttribute('aria-selected')==='true'?0:-1;if(!tab.dataset.dsKeys){tab.dataset.dsKeys='true';tab.addEventListener('keydown',event=>{const available=tabs.filter(t=>t.getAttribute('aria-disabled')!=='true');let index=available.indexOf(tab);if(event.key==='ArrowRight')index++;else if(event.key==='ArrowLeft')index--;else if(event.key==='Home')index=0;else if(event.key==='End')index=available.length-1;else return;event.preventDefault();const next=available[(index+available.length)%available.length];next?.click();next?.focus();});}});}
  const select=host.querySelector('.select-wrapper:not(.ds-select .select-wrapper)');if(select&&!select.dataset.dsKeys){select.dataset.dsKeys='true';select.tabIndex=0;select.setAttribute('role','button');select.setAttribute('aria-haspopup','listbox');select.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();select.click();}});}
  for(const input of host.querySelectorAll('input:not([aria-label])'))if(!host.querySelector('label[for="'+CSS.escape(input.id)+'"]'))input.setAttribute('aria-label',props.$accessibleLabel||props.label||props.title||'Campo');
  for(const svg of host.querySelectorAll('svg')){
  let record=svgMaps.get(svg);if(!record){record={prefix:host.id+'-svg'+(++svgCount)+'-',ids:new Map()};svgMaps.set(svg,record);}
  for(const node of svg.querySelectorAll('[id]'))if(!node.id.startsWith(record.prefix)){const old=node.id;const next=record.prefix+old;record.ids.set(old,next);node.id=next;}
  for(const node of [svg,...svg.querySelectorAll('*')])for(const attr of [...node.attributes]){let value=attr.value;for(const [old,next] of record.ids){value=value.replaceAll('url(#'+old+')','url(#'+next+')');if(['href','xlink:href'].includes(attr.name)&&value==='#'+old)value='#'+next;}if(value!==attr.value)node.setAttribute(attr.name,value);}
 }};
 const svgObserver=new MutationObserver(normalizeSVG);svgObserver.observe(host,{childList:true,subtree:true,attributes:true,attributeFilter:['id','fill','filter','clip-path','mask','href','aria-selected','for','aria-labelledby','aria-describedby','aria-controls']});
 normalizeSVG();
 block.dataset.dsMounted='true';
 const observer=new MutationObserver(()=>{if(!block.isConnected){svgObserver.disconnect();dispose();observer.disconnect();}});
 observer.observe(document.body,{childList:true,subtree:true});
}

export async function loadDSRuntime(){const result=await runtime();if(!document.querySelector('link[data-ds-css]')){const l=document.createElement('link');l.rel='stylesheet';l.href=new URL('./ds-runtime/toranja-runtime.css',import.meta.url).href;l.dataset.dsCss='true';document.head.append(l);}return result;}
