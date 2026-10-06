/** Confere a fonte efetivamente utilizada pelo Chromium, não só font-family. */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const server=await serve(4292);
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:Number(process.env.QA_WIDTH)||1280,height:900}});
const report={scope:'Fontes reais via CDP; rede externa bloqueada; texto português com acentos.',tests:[]};
await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
try{
  await page.goto('http://127.0.0.1:4292/');
  await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
  const session=await page.context().newCDPSession(page);await session.send('DOM.enable');await session.send('CSS.enable');
  for(const [family,weights,expected] of [['Inter',[300,400,500,600,700],'Inter'],['Citrina VF',[400,500],'Citrina'],['Roboto Mono',[400,500],'Roboto Mono']]){
    for(const weight of weights){
      const name=family+' '+weight;
      try{
        await page.evaluate(async({family,weight})=>{
          document.getElementById('font-probe')?.remove();const p=document.createElement('p');p.id='font-probe';p.textContent='Crédito, ação e soluções para você — R$ 1.234,56';p.style.cssText=`font-family:"${family}";font-weight:${weight};font-size:24px`;
          document.querySelector('main').prepend(p);await document.fonts.load(`${weight} 24px "${family}"`,p.textContent);await document.fonts.ready;
        },{family,weight});
        const {root}=await session.send('DOM.getDocument');const {nodeId}=await session.send('DOM.querySelector',{nodeId:root.nodeId,selector:'#font-probe'});
        const {fonts}=await session.send('CSS.getPlatformFontsForNode',{nodeId});
        assert.ok(fonts.length>0);assert.ok(fonts.every(f=>f.isCustomFont&&f.familyName.includes(expected)),JSON.stringify(fonts));
        report.tests.push({name,pass:true,fonts});console.log('OK',name,fonts.map(f=>f.postScriptName).join(', '));
      }catch(e){report.tests.push({name,pass:false,error:e.message});console.log('FAIL',name,e.message)}
    }
  }
  for(const [name,selector,expected] of [['Corpo editorial','body','Inter'],['Título editorial','h1','Citrina VF']]){
    try{assert.ok((await page.locator(selector).first().evaluate(n=>getComputedStyle(n).fontFamily)).includes(expected));report.tests.push({name,pass:true})}catch(e){report.tests.push({name,pass:false,error:e.message})}
  }
}finally{
  fs.writeFileSync(`docs/typography-${process.env.QA_ROUND||'development'}.json`,JSON.stringify(report,null,2));await browser.close();await new Promise(r=>server.close(r));
}
process.exitCode=report.tests.some(t=>!t.pass)?1:0;
