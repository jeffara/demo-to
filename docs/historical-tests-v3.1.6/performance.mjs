/** Runtime regression checks and comparable local resource inventory, not Lighthouse scores. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox']});
const root=path.resolve(process.env.QA_ROOT||'.');const server=await serve(4397,root);
const results=[];
try{
 for(const width of [390,1280]){
  const page=await browser.newPage({viewport:{width,height:900}});const errors=[],requests=[],responses=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  page.on('response',r=>responses.push({url:r.url(),status:r.status()}));page.on('request',r=>requests.push(r.url()));
  await page.addInitScript(()=>{window.__shifts=[];new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__shifts.push({value:e.value,time:e.startTime})}).observe({type:'layout-shift',buffered:true});});
  await page.goto('http://127.0.0.1:4397/');
  await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
  await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700);
  const state=await page.evaluate(()=>({
   width:innerWidth,scrollWidth:document.documentElement.scrollWidth,
   cls:window.__shifts.reduce((n,s)=>n+s.value,0),shifts:window.__shifts,
   cards:[...document.querySelectorAll('[data-testid="card-component"]')].map(c=>({role:c.getAttribute('role'),selected:c.getAttribute('aria-selected')})),
   hero:document.querySelector('main .ds-image img')?.outerHTML,
   preload:document.querySelector('link[as=image]')?.href,
   headerHeight:document.querySelector('header').getBoundingClientRect().height,
   buttonStyles:[...document.querySelectorAll('.btn__primary--default')].map(b=>({background:getComputedStyle(b).backgroundColor,color:getComputedStyle(b).color})),
   homeLink:document.querySelector('.site-home-link')?.getAttribute('href'),
   resources:performance.getEntriesByType('resource').map(r=>({name:r.name,start:r.startTime,duration:r.duration})),
  }));
  const files=[...new Set(requests.map(u=>new URL(u).pathname))].filter(u=>/\.(js|css)$/.test(u)).map(u=>{const p=path.join(root,u);return fs.existsSync(p)?{path:u,bytes:fs.statSync(p).size,gzip:gzipSync(fs.readFileSync(p)).length}:null}).filter(Boolean);
  results.push({...state,errors,responses:responses.filter(r=>r.status>=400),files,totalJSgzip:files.filter(f=>f.path.endsWith('.js')).reduce((n,f)=>n+f.gzip,0),totalCSSgzip:files.filter(f=>f.path.endsWith('.css')).reduce((n,f)=>n+f.gzip,0)});
  if(!process.env.QA_BASELINE){
   assert.equal(errors.length,0,errors.join('\n'));assert.ok(state.scrollWidth<=width+1,'horizontal overflow');
   assert.equal(state.homeLink,'/');assert.ok(state.preload,'hero preload absent');
   assert.ok(state.hero.includes('fetchpriority="high"'));assert.ok(state.cards.every(c=>!c.role&&!c.selected),'static cards interactive');
   if(width===390){const toggle=page.getByRole('button',{name:'Abrir menu'});await toggle.click();await page.locator('nav[data-open=true]').waitFor();await page.keyboard.press('Escape');await page.locator('nav[data-open=false]').waitFor();assert.ok(await toggle.evaluate(b=>b===document.activeElement));}
  }
  fs.mkdirSync('docs/performance-v3.1.6',{recursive:true});
  await page.screenshot({path:`docs/performance-v3.1.6/${process.env.QA_BASELINE?'before':'after'}-${width}.png`,fullPage:false});
  await page.close();
 }
}finally{fs.mkdirSync('docs/performance-v3.1.6',{recursive:true});fs.writeFileSync(`docs/performance-v3.1.6/${process.env.QA_BASELINE?'before':'after'}.json`,JSON.stringify(results,null,2));await browser.close();await new Promise(r=>server.close(r));}
console.log(JSON.stringify(results.map(r=>({width:r.width,cls:r.cls,jsGzip:r.totalJSgzip,cssGzip:r.totalCSSgzip,errors:r.errors,header:r.headerHeight,buttons:r.buttonStyles})),null,2));
