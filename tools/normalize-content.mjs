/** Normaliza as coleções dos exemplos gerados pelo inventário oficial. */
import fs from 'node:fs';
const schemas=JSON.parse(fs.readFileSync('scripts/ds-schema.json'));
const get=(o,p)=>p.reduce((v,k)=>v?.[k],o);
export function normalizeBlock(b){
 b.properties.schemaVersion='toranja-v3';const s=schemas[b.block];if(!s)return b;
 if(b.properties.accessibleLabel===s.name)delete b.properties.accessibleLabel;
 b.items||=[];for(const row of b.items)if(!row.collection&&s.collections?.length)row.collection=s.collections[0].id;
 for(const c of s.collections||[]){
  if(c.primary||c.composition||c.id==='chartData')continue;
  const descriptor=s.descriptors.find(d=>d.path.join('.')===c.path.join('.'));if(!descriptor)continue;
  const raw=b.properties[descriptor.key];if(raw==null||raw==='')continue;
  let values=raw;if(!Array.isArray(values)){try{values=JSON.parse(raw)}catch{values=[raw]}}
  if(!Array.isArray(values))values=[values];
  if(!b.items.some(row=>row.collection===c.id))for(const value of values){const obj=c.primitive?{value}:c.id==='$options'&&typeof value!=='object'?{label:value,value}:value;const row={collection:c.id};for(const d of c.descriptors){const v=get(obj,d.path);if(v!==undefined)row[d.key]=v;}b.items.push(row);}
  delete b.properties[descriptor.key];
 }
 for(const row of b.items){const c=s.collections?.find(x=>x.id===row.collection);for(const d of c?.descriptors||[])if(d.kind==='array'&&typeof row[d.key]==='string'){try{row[d.key]=JSON.parse(row[d.key])}catch{row[d.key]=row[d.key].split(/\r?\n|,\s*/).filter(Boolean)}}}
 return b;
}
const pages=JSON.parse(fs.readFileSync('content/pages.json'));for(const page of Object.values(pages))for(const section of page.sections)for(const b of section.content)if(b.block)normalizeBlock(b);
const models=JSON.parse(fs.readFileSync('component-models.json'));for(const page of Object.values(pages))for(const section of page.sections)for(const b of section.content)if(b.block){const fields=new Set(models.find(m=>m.id===b.block)?.fields.map(f=>f.name));for(const k of Object.keys(b.properties))if(!fields.has(k))delete b.properties[k];}
fs.writeFileSync('content/pages.json',JSON.stringify(pages,null,2));
const samples=JSON.parse(fs.readFileSync('content/ds-samples.json')).map(normalizeBlock);fs.writeFileSync('content/ds-samples.json',JSON.stringify(samples,null,2));
console.log('Conteúdo da baseline V3 normalizado.');
