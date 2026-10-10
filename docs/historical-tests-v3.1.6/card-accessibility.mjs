import {createRequire} from 'node:module';import assert from 'node:assert/strict';import fs from 'node:fs';
const p=new URL('..',import.meta.url).pathname.replace(/\/$/,'');
const require=createRequire(import.meta.url);const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const {serve}=await import(p+'/tools/serve.mjs');const server=await serve(4401);const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox']});const page=await browser.newPage();
try{
 await page.goto('http://127.0.0.1:4401/');await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
 await page.evaluate(async()=>{const host=document.createElement('div');host.className='ds-official';host.id='card-test';document.querySelector('main').prepend(host);const schema=await(await fetch('/scripts/ds-schema.json')).json();await(await import('/scripts/ds-runtime/toranja-runtime.js')).mount(host,schema['ds-card'],{children:'Cartão selecionável',state:'enabled',isSelected:false},{editing:false,resolveLink:x=>x});});
 const card=page.locator('#card-test [role=button]');assert.equal(await card.getAttribute('aria-pressed'),'false');await card.press('Space');assert.equal(await card.getAttribute('aria-pressed'),'true');await card.press('Enter');assert.equal(await card.getAttribute('aria-pressed'),'false');await card.click();assert.equal(await card.getAttribute('aria-pressed'),'true');
 fs.writeFileSync(p+'/docs/performance-v3.1.6/card-keyboard.json',JSON.stringify({pass:true,checks:['initial unselected','Space selects','Enter deselects','click selects']},null,2));console.log('Card: seleção por Space, Enter e clique aprovada.');
}finally{await browser.close();await new Promise(r=>server.close(r));}
