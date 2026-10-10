/** Compare emitted CSS/JS changes with an extracted previous release. */
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {chromium} from 'playwright';import {serve} from '../tools/serve.mjs';
const baseline=process.env.BASELINE_ROOT;if(!baseline)throw Error('Set BASELINE_ROOT to the extracted previous release');
const servers=[await serve(4380,path.resolve(baseline)),await serve(4381)];
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,args:['--no-sandbox']});
const report={scope:'Computed styles and official component tree; animations paused identically; prior release versus current delivery.',checks:[]};
try{for(const width of [393,1440])for(const route of ['/','/demo-toranja','/showcase/layouts']){
 const samples=[];
 for(const port of [4380,4381]){
  const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
  await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
  await page.goto('http://127.0.0.1:'+port+route);await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
  await page.evaluate(()=>document.fonts.ready);
  // Let the supplier's JavaScript entrance motion settle before comparing geometry.
  await page.waitForTimeout(1000);await page.addStyleTag({content:'*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}'});
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  samples.push(await page.evaluate(()=>{
   const properties=['display','position','color','backgroundColor','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','padding','margin','gap','borderWidth','borderColor','borderRadius','width','height','opacity','overflow','boxShadow','textAlign','transform'];
   return [...document.querySelectorAll('.ds-official,.ds-official *')].map(node=>({tag:node.tagName,classes:node.getAttribute('class'),text:node.children.length?null:node.textContent,style:Object.fromEntries(properties.map(p=>[p,getComputedStyle(node)[p]]))}));
  }));
  if(route!=='/demo-toranja')await page.screenshot({path:`docs/equivalence-${port}-${route==='/'?'home':'layouts'}-${width}.png`,fullPage:true});
  await page.close();
 }
 const differences=[];for(let i=0;i<Math.max(samples[0].length,samples[1].length);i++)if(JSON.stringify(samples[0][i])!==JSON.stringify(samples[1][i]))differences.push({index:i,before:samples[0][i],after:samples[1][i]});
 report.checks.push({route,width,nodes:samples[0].length,pass:differences.length===0,differences});console.log(route,width,samples[0].length,'nodes',differences.length,'differences');
}}finally{await browser.close();for(const server of servers)await new Promise(r=>server.close(r));fs.writeFileSync('docs/delivery-equivalence-v3.1.8.json',JSON.stringify(report,null,2));}
assert.ok(report.checks.every(c=>c.pass),'Delivery changed computed styles or component tree; inspect report.');
