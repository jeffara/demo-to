/** Regression for mobile spacing, clipped footer text and overflow navigation. */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
import {blockHTML} from '../tools/render-content.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const server=await serve(4396),browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,args:['--no-sandbox']});
const page=await browser.newPage(),report={scope:'Local Chromium viewport checks; not physical iOS Safari or authenticated Universal Editor',tests:[]};
page.setDefaultTimeout(7000);
async function test(name,fn){try{await fn();report.tests.push({name,pass:true});console.log('OK',name)}catch(e){report.tests.push({name,pass:false,error:e.message});console.log('FAIL',name,e.message)}}
async function loaded(){await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');await page.evaluate(()=>document.fonts.ready)}
async function selectedVisible(){await page.waitForFunction(()=>{const rail=document.querySelector('main .tabs-navigation--scrollable'),tab=rail.querySelector('[aria-selected=true]');const r=rail.getBoundingClientRect(),t=tab.getBoundingClientRect();return t.left>=r.left-1&&t.right<=r.right+1})}
try{
for(const width of [320,390,430,768,1280]){
 await page.setViewportSize({width,height:844});await page.goto('http://127.0.0.1:4396/');await loaded();
 await test(`${width}: no page overflow`,async()=>assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false));
 await test(`${width}: selected tabs are fully revealed by keyboard`,async()=>{const tabs=page.locator('main .ds-tabs [role=tab]');await tabs.first().focus();await tabs.first().press('End');await selectedVisible();assert.equal(await tabs.last().getAttribute('aria-selected'),'true');assert.equal(await tabs.last().evaluate(n=>n===document.activeElement),true);await tabs.last().press('Home');await selectedVisible();assert.equal(await tabs.first().getAttribute('aria-selected'),'true')});
 if(width<=430)await test(`${width}: next control and click reveal Global Account`,async()=>{const control=page.getByRole('button',{name:'Mostrar próximas abas'});await control.click();const tab=page.locator('main .ds-tabs [role=tab]').filter({hasText:'Global Account'});await tab.click();await selectedVisible();await page.locator('main .ds-tabs [role=tabpanel]').getByText('Sua Vida Financeira Global em Dólar',{exact:true}).waitFor();assert.equal(await page.getByRole('button',{name:'Mostrar abas anteriores'}).isEnabled(),true)});
 await test(`${width}: accordion content spacing and clean internal header`,async()=>{const accordion=page.getByRole('region',{name:'Inter Digital',exact:true}),header=accordion.locator('.accordion__summary');await header.click();await page.waitForTimeout(400);const css=await accordion.evaluate(n=>({top:parseFloat(getComputedStyle(n.querySelector('.accordion__content')).paddingTop),border:getComputedStyle(n.querySelector('.accordion__summary')).borderBottomWidth,gap:parseFloat(getComputedStyle(n.querySelector('.accordion__slot')).gap)}));assert.ok(css.top>=16);assert.equal(css.border,'0px');assert.ok(css.gap>=16);await header.click();assert.equal(await accordion.locator('[aria-expanded]').first().getAttribute('aria-expanded'),'false')});
 await test(`${width}: footer cards cannot clip titles`,async()=>{const cards=await page.locator('.site-footer-content [data-testid=card-component]').evaluateAll(ns=>ns.map(n=>({overflow:getComputedStyle(n).overflow,radius:getComputedStyle(n).borderRadius,min:getComputedStyle(n).minHeight})));assert.ok(cards.length>=3);for(const c of cards){assert.equal(c.overflow,'visible');assert.equal(c.radius,'0px');assert.equal(c.min,'0px')}});
}
await test('Resize keeps last tab visible and hides unused controls',async()=>{await page.setViewportSize({width:390,height:844});const tabs=page.locator('main .ds-tabs [role=tab]');await tabs.first().focus();await tabs.first().press('End');await selectedVisible();await page.setViewportSize({width:1280,height:844});await page.getByRole('button',{name:'Mostrar próximas abas'}).waitFor({state:'hidden'});await page.setViewportSize({width:320,height:844});await selectedVisible()});
await test('Non-scrollable authored tabs wrap with complete labels',async()=>{const b=structuredClone(JSON.parse(fs.readFileSync('content/pages.json')).index.sections.flatMap(s=>s.content).find(b=>b.block==='ds-tabs'));b.properties['p'+Buffer.from('scrollable').toString('hex')]='false';await page.evaluate(async markup=>{document.querySelector('main').innerHTML=markup;const block=document.querySelector('main').firstElementChild;block.classList.add('block');await(await import('/blocks/ds-tabs/ds-tabs.js')).default(block)},blockHTML(b));await page.locator('main [role=tab]').first().waitFor();assert.equal(await page.locator('.tabs-navigation--scrollable').count(),0);const rects=await page.locator('main [role=tab]').evaluateAll(ns=>ns.map(n=>({top:n.getBoundingClientRect().top,width:n.clientWidth,scroll:n.scrollWidth,textOverflow:getComputedStyle(n.querySelector('.text')).whiteSpace})));assert.ok(new Set(rects.map(r=>r.top)).size>=2);for(const r of rects){assert.ok(r.scroll<=r.width+1);assert.equal(r.textOverflow,'normal')}});
await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:4396/');await loaded();
const tabs=page.locator('main .ds-tabs [role=tab]');await tabs.first().focus();await tabs.first().press('End');await selectedVisible();
fs.mkdirSync('docs/mobile-v3.1.6',{recursive:true});
await page.locator('main .ds-tabs').screenshot({path:'docs/mobile-v3.1.6/tabs-390.png'});
const accordion=page.getByRole('region',{name:'Inter Digital',exact:true});await accordion.locator('.accordion__summary').click();await page.waitForTimeout(400);await accordion.screenshot({path:'docs/mobile-v3.1.6/accordion-390.png'});
await page.locator('.site-footer-content .footer-columns').screenshot({path:'docs/mobile-v3.1.6/footer-390.png'});
}finally{fs.writeFileSync('docs/mobile-spacing-v3.1.6.json',JSON.stringify(report,null,2));await browser.close();await new Promise(r=>server.close(r))}
process.exitCode=report.tests.some(t=>!t.pass)?1:0;
