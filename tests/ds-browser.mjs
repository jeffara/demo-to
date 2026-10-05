import fs from 'node:fs';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
import {blockHTML} from '../tools/render-content.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox']});
const server=await serve(4175);const page=await browser.newPage({viewport:{width:Number(process.env.QA_WIDTH)||1280,height:900}});
const samples=JSON.parse(fs.readFileSync('content/ds-samples.json'));
const report={width:Number(process.env.QA_WIDTH)||1280,scope:'Chromium local; fixture semântica XWalk. Não é homologação na instância AEM.',tests:[]};
let errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:4175/');await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
for(const b of samples) {
 errors=[];
 try {
 const result=await page.evaluate(async ({markup,id})=>{
  document.querySelector('main').replaceChildren();const tmp=document.createElement('div');tmp.innerHTML=markup;const block=tmp.firstElementChild;block.classList.add('block');document.querySelector('main').append(block);
  await(await import(`/blocks/${id}/${id}.js`)).default(block);
  await new Promise(r=>setTimeout(r,100));
  return {error:block.dataset.dsError,html:block.querySelector('.ds-official')?.innerHTML.slice(0,130),overflow:document.documentElement.scrollWidth>innerWidth+1,controls:block.querySelectorAll('input,button,a,select').length};
 },{markup:blockHTML(b),id:b.block});
 report.tests.push({name:b.block,pass:!result.error&&!errors.length&&!result.overflow,...result,errors});
 console.log(result.error||errors.length?'FAIL':'OK',b.block,result.error||errors.join(' | '));
 }catch(e){report.tests.push({name:b.block,pass:false,error:e.message});console.log('FAIL',b.block,e.message);}
}
await page.screenshot({path:'docs/ds-last-component.png'});
fs.writeFileSync(`docs/validation-${process.env.QA_ROUND||'development'}.json`,JSON.stringify(report,null,2));
await browser.close();await new Promise(r=>server.close(r));
process.exitCode=report.tests.some(t=>!t.pass)?1:0;
