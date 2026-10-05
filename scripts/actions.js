import {resolveLink} from './links.js';
const handlers=globalThis.__toranjaActions??=new Map();
export function registerAction(id,handler){handlers.set(id,handler);return()=>handlers.delete(id);}
export function runAction(config={},host,editing=false){
 if(editing)return;
 const kind=config.kind||'navigate';
 if(kind==='none')return;
 if(kind==='navigate'){const to=resolveLink(config.link);if(!to)return;if(config.target==='_blank')window.open(to,'_blank','noopener,noreferrer');else location.assign(to);return;}
 if(kind==='open'||kind==='close'){document.dispatchEvent(new CustomEvent('toranja:overlay',{detail:{id:config.id,open:kind==='open'}}));return;}
 if(kind==='submit'||kind==='reset'){const form=host.closest('form')||(config.id?document.getElementById(config.id):null);if(form?.tagName==='FORM')kind==='submit'?form.requestSubmit():form.reset();return;}
 if(kind==='back'){history.back();return;}
 if(kind==='custom'){const fn=handlers.get(config.id);if(!fn)throw Error('Ação ainda não configurada.');return fn({host});}
}
/** Analytics tem contrato próprio: nunca copia valores de inputs, senha ou PIN. */
export function tagPayload(arg,component){
 let value;try{value=typeof arg==='function'?arg({screen_name:location.pathname}):arg;}catch{return null;}
 if(!value||typeof value!=='object')return null;
 const allowed=['component_name','variant','size','hierarchy','state','show_leading_icon','leading_icon','nested_in'];
 const properties=Object.fromEntries(Object.entries(value.ComponentProperties||{}).filter(([k,v])=>allowed.includes(k)&&['string','number','boolean'].includes(typeof v)));
 return {name:typeof value.name==='string'?value.name:'interaction',screen_name:location.pathname,ComponentProperties:{component_name:component,...properties}};
}
