import fs from 'node:fs';
const schema=JSON.parse(fs.readFileSync('scripts/ds-schema.json'));
export const escape=v=>String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function ds(id,props={},groups={}){
 const s=schema[id];if(!s)throw Error('Componente inexistente: '+id);
 const b={block:id,properties:{schemaVersion:'toranja-v3'},items:[]};
 for(const [path,value] of Object.entries(props)){if(value===undefined)continue;const d=s.descriptors.find(d=>d.path.join('.')===path);if(!d)throw Error(id+' propriedade ausente '+path);b.properties[d.key]=value;}
 for(const [id,values] of Object.entries(groups)){const c=s.collections.find(c=>c.id===id);if(!c)throw Error('Coleção ausente '+id);for(const value of values){const row={collection:id};for(const d of c.descriptors){const v=d.path.reduce((v,k)=>v?.[k],value);if(v!==undefined)row[d.key]=v;}b.items.push(row);}}
 return b;
}
export const paragraph=(value,as='p')=>ds('ds-react-text',{children:value,as,textType:as.startsWith('h')?'heading':'body',textWeight:'regular'});
export const card=body=>ds('ds-react-card',{children:body,state:'enabled'});
export const action=(label,href,target='_self')=>ds('ds-react-button',{label,'$actions.onClick.kind':'navigate','$actions.onClick.link':href,'$actions.onClick.target':target});
