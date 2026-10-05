import {read,text,el,uid,editing,cleanup} from '../../scripts/toranja.js';
import {loadDSRuntime} from '../../scripts/ds-adapter.js';
export default async function decorate(block){
 const {fields,items}=read(block);const config=Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,text(v)]));config.consentHTML=fields.consent?.innerHTML||'';config.id=config.formId||uid('v3-form');config.editing=editing()||block.hasAttribute('data-aue-resource');
 config.fields=items.map((item,i)=>{const f=Object.fromEntries(Object.entries(item).filter(([k])=>k!=='row').map(([k,v])=>[k,text(v)]));for(const k of ['required','disabled','readOnly'])f[k]=f[k]==='true';f.fieldName||='field'+i;
  f.options=[...(item.options?.querySelectorAll('li')||[])].map(li=>{const [label,value]=li.textContent.trim().split('|').map(s=>s.trim());return {label,value:value??label}});
  f.instrumentation=Object.fromEntries([...item.row.attributes].filter(a=>a.name.startsWith('data-aue-')).map(a=>[a.name,a.value]));return f;});
 const host=el('div','ds-v3-form-host');block.replaceChildren(host);const {mountForm}=await loadDSRuntime();const dispose=mountForm(host,config);cleanup(block,dispose);block.dataset.toranjaReady='true';
}
