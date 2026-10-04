import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const read=p=>JSON.parse(fs.readFileSync(p));
const groups=read('component-definition.json').groups;
const definitions=groups.flatMap(g=>g.components);
const models=read('component-models.json');
const filters=read('component-filters.json');
const {cells,containers}=read('content/contracts.json');
for(const list of [definitions,models,filters])assert.equal(new Set(list.map(x=>x.id)).size,list.length,'ID duplicado');
for(const filter of filters)for(const id of filter.components)assert.ok(definitions.some(d=>d.id===id),'Componente ausente no filtro: '+id);
for(const model of models){const names=model.fields.map(f=>f.name);assert.equal(new Set(names).size,names.length);for(const f of model.fields){assert.ok(f.valueType,model.id+'.'+f.name+' sem valueType');if(!['section','page-metadata'].includes(model.id))assert.ok(!['name','model','filter','key-value'].includes(f.name),'Propriedade reservada: '+model.id+'.'+f.name);for(const suffix of ['Text','Type','Alt','Title','MimeType'])if(f.name.endsWith(suffix))assert.ok(names.includes(f.name.slice(0,-suffix.length)),'Campo colapsado sem origem: '+f.name);}}
for(const [block,item] of Object.entries(containers)){assert.ok(cells[item]);assert.ok(definitions.find(d=>d.id===item).plugins.xwalk.page.resourceType.endsWith('/item'));assert.deepEqual(filters.find(f=>f.id===block).components,[item]);}
const all=read('content/pages.json');const found=new Set();
for(const page of Object.values(all))for(const s of page.sections)for(const b of s.content){if(!b.block)continue;found.add(b.block);const names=new Set(models.find(m=>m.id===b.block).fields.map(f=>f.name));for(const name of Object.keys(b.properties))assert.ok(names.has(name),'Campo sem modelo: '+b.block+'.'+name);for(const item of b.items||[]){const children=new Set(models.find(m=>m.id===containers[b.block]).fields.map(f=>f.name));for(const name of Object.keys(item))assert.ok(children.has(name),'Campo filho sem modelo: '+b.block+'.'+name);}}
const blocks=fs.readdirSync('blocks');assert.equal(found.size,31);assert.equal(blocks.length,31);
let syntax=0;for(const dir of ['blocks','scripts','tools','tests'])for(const file of fs.readdirSync(dir,{recursive:true}).filter(n=>/\.(m?js)$/.test(n))){execFileSync(process.execPath,['--check',dir+'/'+file],{stdio:'pipe'});syntax++;}
console.log(`${blocks.length} blocos; ${Object.keys(containers).length} tipos de item; ${models.length} modelos; ${models.reduce((n,m)=>n+m.fields.length,0)} campos; ${syntax} arquivos JS válidos.`);
