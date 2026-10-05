/** Somente leitura: diferencia Code Bus, conteúdo e mapeamento. */
const base=process.argv[2]||'https://main--demo-to--jeffara.aem.page';
const paths=['/scripts/aem.js','/component-models.json','/','/index','/index.html','/demo-toranja','/nav.plain.html','/footer.plain.html','/config.json'];
for(const path of paths){try{const r=await fetch(base+path,{signal:AbortSignal.timeout(15000)});console.log(JSON.stringify({path,status:r.status,error:r.headers.get('x-error')}));}catch(e){console.log(JSON.stringify({path,error:e.message}));}}
console.log('Código 200 + página 404 Content Bus: publique para Preview e confira o mapeamento. .html no EDS consulta Code Bus e não substitui publicação.');
