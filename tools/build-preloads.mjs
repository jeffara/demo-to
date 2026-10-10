import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('scripts/ds-runtime/.vite/manifest.json'));
const seen=new Set(),files=new Set();function visit(key){if(seen.has(key))return;seen.add(key);const m=manifest[key];if(!m)return;if(m.file.endsWith('.js'))files.add('/scripts/ds-runtime/'+m.file);for(const i of m.imports||[])visit(i);}
for(const [key,m] of Object.entries(manifest))if(m.isEntry)visit(key);
function staticImports(file){if(files.has('/'+file))return;files.add('/'+file);for(const match of fs.readFileSync(file,'utf8').matchAll(/(?:from|import)\s*["'](\.\/page-[^"']+)["']/g))staticImports('scripts/'+match[1].slice(2));}
staticImports('scripts/page.js');files.delete('/scripts/page.js');
files.clear();staticImports('scripts/page.js');files.delete('/scripts/page.js');files.add('/scripts/ds-runtime/toranja-runtime.js');for(const m of Object.values(manifest))if(['toranja-core','rolldown-runtime'].includes(m.name)&&m.file.endsWith('.js'))files.add('/scripts/ds-runtime/'+m.file);
for(const name of ['text','button','link','image'])files.add(`/blocks/ds-react-${name}/ds-react-${name}.js`);
files.add('/scripts/ds-behaviors.js');
const hints='<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin.woff2" crossorigin>\n<link rel="preload" as="font" type="font/woff2" href="/fonts/citrina-regular.woff2" crossorigin>\n'+[...files].map(file=>`<link rel="modulepreload" href="${file}">`).join('\n');
const marker=/<!-- generated preloads -->[\s\S]*?<!-- end preloads -->/;
let head=fs.readFileSync('head.html','utf8').replace(/<link rel="modulepreload"[^>]*>\s*/g,'');head=head.replace(marker,'').trim()+'\n<!-- generated preloads -->\n'+hints+'\n<!-- end preloads -->\n';fs.writeFileSync('head.html',head);
for(const entry of fs.readdirSync('drafts',{recursive:true}).filter(f=>f.endsWith('.html')&&!f.endsWith('.plain.html'))){const file='drafts/'+entry;let html=fs.readFileSync(file,'utf8').replace(marker,'').replace(/<link rel="modulepreload"[^>]*>\s*/g,'');html=html.replace('</head>','<!-- generated preloads -->'+hints+'<!-- end preloads --></head>');fs.writeFileSync(file,html);}
console.log(files.size+' common modules discovered in the head; no optional components preloaded.');
