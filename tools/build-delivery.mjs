/** Build delivery files without altering any vendor declaration or asset. */
import fs from 'node:fs';import path from 'node:path';import postcss from 'postcss';
const root=process.cwd();
function flatten(file,seen=new Set()){
 const css=postcss.parse(fs.readFileSync(file,'utf8'),{from:file});
 css.walkAtRules('import',rule=>{const name=rule.params.match(/["']([^"']+)["']/)?.[1];if(!name)throw Error('Unexpected import '+rule.params);const next=path.resolve(path.dirname(file),name);if(seen.has(next)){rule.remove();return;}seen.add(next);rule.replaceWith(flatten(next,seen).nodes);});return css;
}
const css=flatten('styles/style-source.css');css.walkComments(n=>n.remove());
fs.writeFileSync('styles/styles.css',css.toString());
fs.mkdirSync('scripts/ds-schema',{recursive:true});const schemas=JSON.parse(fs.readFileSync('scripts/ds-schema.json'));
for(const [id,schema] of Object.entries(schemas))fs.writeFileSync(`scripts/ds-schema/${id}.json`,JSON.stringify(schema));
console.log('CSS imports flattened and '+Object.keys(schemas).length+' on-demand models generated.');

// Vite library mode does not emit CSS imports. Attach styles to their actual chunks.
const dir='scripts/ds-runtime';const manifest=JSON.parse(fs.readFileSync(dir+'/.vite/manifest.json'));
const critical=new Set(),visited=new Set();
function collect(key){if(visited.has(key))return;visited.add(key);const m=manifest[key];if(!m)return;for(const x of m.css||[])critical.add(x);for(const x of m.imports||[])collect(x);}
for(const [key,m] of Object.entries(manifest))if(m.isEntry||m.name==='site-menu')collect(key);
fs.appendFileSync('styles/styles.css','\n'+[...critical].map(f=>fs.readFileSync(dir+'/'+f,'utf8')).join('\n'));
fs.writeFileSync(dir+'/style-loader.js',`const loaded=new Map();export function loadStyles(files){return Promise.all(files.map(file=>{if(!loaded.has(file))loaded.set(file,new Promise((resolve,reject)=>{const link=document.createElement('link');link.rel='stylesheet';link.href=new URL(file,import.meta.url);link.onload=resolve;link.onerror=()=>{loaded.delete(file);link.remove();reject(Error('Estilo indisponível: '+file));};document.head.append(link);}));return loaded.get(file);}));}\n`);
for(const m of Object.values(manifest)){const css=(m.css||[]).filter(f=>!critical.has(f));if(!css.length||!m.file.endsWith('.js'))continue;const file=dir+'/'+m.file;fs.writeFileSync(file,`import {loadStyles as __dsStyles} from './style-loader.js';await __dsStyles(${JSON.stringify(css)});\n`+fs.readFileSync(file,'utf8'));}
console.log('Critical styles: '+critical.size+'; other styles load with their component.');
