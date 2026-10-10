// Final app assets are not consumed by a second bundler; keep exports, remove whitespace.
import fs from 'node:fs';import {minify} from 'terser';
for(const file of fs.readdirSync('scripts/ds-runtime').filter(f=>f.endsWith('.js'))){const path='scripts/ds-runtime/'+file;const result=await minify(fs.readFileSync(path,'utf8'),{module:true,compress:{passes:2},mangle:true,format:{comments:/@license|@preserve/}});fs.writeFileSync(path,result.code);}

// Minify emitted CSS only; all vendor sources, selectors and variants remain available.
const {transform}=await import('lightningcss');
for(const file of ['styles/styles.css',...fs.readdirSync('scripts/ds-runtime').filter(f=>f.endsWith('.css')).map(f=>'scripts/ds-runtime/'+f)]){const result=transform({filename:file,code:fs.readFileSync(file),minify:true,targets:{safari:(15<<16)|(4<<8),chrome:100<<16,firefox:100<<16}});fs.writeFileSync(file,result.code);}

// JSON serialization changes whitespace only; preserve every model field and option.
for(const file of ['component-definition.json','component-models.json','component-filters.json'])fs.writeFileSync(file,JSON.stringify(JSON.parse(fs.readFileSync(file))));
