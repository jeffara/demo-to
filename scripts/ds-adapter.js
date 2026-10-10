/** Ponte XWalk: conteúdo semântico e seleção do bloco continuam pertencendo ao AEM. */
import { read, el, uid } from './toranja.js';
import { resolveLink } from './links.js';
import {parseList, scalar, normalizeProps, put as set} from './ds-values.js';
let runtimePromise;const schemaPromises=new Map();
const schemas=id=>{if(!schemaPromises.has(id))schemaPromises.set(id,fetch(new URL('./ds-schema/'+id+'.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Modelo DS indisponível: '+id);return r.json();}));return schemaPromises.get(id);};
const runtime=()=>runtimePromise??=import('./ds-runtime/toranja-runtime.js');
export function preloadDS(){return runtime();}
function decode(cell,d) {
 const value=cell?.textContent.trim()||'';
 if(d.kind==='link'||d.path.at(-1)==='href')return resolveLink(cell?.querySelector('a')?.getAttribute('href')||value);
 const img=cell?.querySelector('img'); if(img)return img.getAttribute('src');
 if(!value)return undefined;
 if(d.kind==='boolean')return value==='true';
 if(d.kind==='number')return scalar(value,d);
 if(d.kind==='enum'&&d.values?.every(v=>typeof v==='number'))return Number(value);
 if(d.kind==='json')return JSON.parse(value);
 if(d.kind==='array'){const entries=[...cell.querySelectorAll(':scope > ul > li, :scope > ol > li')];return parseList(entries.length?entries.map(n=>n.textContent.trim()):value,d.item||{kind:'string'});}
 if(d.kind==='slot'&&!/icon/i.test(d.path.at(-1)))return cell.innerHTML;
 return value;
}
export async function mountDS(block,id,schemaOverride) {
 const schema=schemaOverride||await schemas(id);const {fields,items}=read(block,id,schema.cellNames,schema.itemCellNames);let props={};
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
 const dispose=await mount(host,schema,props,{resolveLink,editing:!!document.querySelector('main[data-aue-resource]')});
 // SVGs oficiais podem repetir ids de filtros; isola referências por instância.
 const svgMaps=new WeakMap();let svgCount=0;
 const localIds=new Map();
 const normalizeSVG=()=>{
  

  for(const a of host.querySelectorAll('a[href]')){const raw=a.getAttribute('href');const mapped=resolveLink(raw);if(mapped&&mapped!==raw)a.setAttribute('href',mapped);if(a.target==='_blank')a.rel='noopener noreferrer';}
  for(const node of host.querySelectorAll('[id]'))if(!node.closest('svg')&&!node.id.startsWith(host.id+'-')){localIds.set(node.id,host.id+'-'+node.id);node.id=host.id+'-'+node.id;}
  for(const node of host.querySelectorAll('[for],[aria-labelledby],[aria-describedby],[aria-controls]'))for(const attr of ['for','aria-labelledby','aria-describedby','aria-controls']){const raw=node.getAttribute(attr);if(raw){const next=raw.split(' ').map(id=>localIds.get(id)||id).join(' ');if(next!==raw)node.setAttribute(attr,next);}}
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

export async function loadDSRuntime(){return runtime();}
