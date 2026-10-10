/** New reference: complete model coverage, deferred delivery, search, keyboard and mobile layout. */
import fs from 'node:fs';import assert from 'node:assert/strict';import {chromium} from 'playwright';import {serve} from '../tools/serve.mjs';
const data=JSON.parse(fs.readFileSync('scripts/eds-reference.json')),models=JSON.parse(fs.readFileSync('component-models.json')),checks=[];
function record(name,pass,detail=''){checks.push({name,pass,detail});console.log(pass?'OK':'FAIL',name,detail)}
for(const c of Object.values(data.components)){
 const fields=[...c.fields,...c.collections.flatMap(g=>g.fields)];const expected=models.filter(m=>[c.id,c.id+'-item'].includes(m.id)).flatMap(m=>m.fields.filter(f=>!f.hidden));
 record('Coverage '+c.id,expected.every(f=>fields.some(d=>d.key===f.name&&d.help.length>15))&&fields.every(f=>!f.options||data.enums[f.options]?.length));
}
const server=await serve(4306),browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,args:['--no-sandbox']}),page=await browser.newPage({viewport:{width:393,height:852}});const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
try{
 for(const route of ['/','/demo-toranja','/showcase/layouts']){await page.goto('http://127.0.0.1:4306'+route);await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');assert.equal(await page.locator('#eds-properties').count(),0);}
 record('No reference payload on Home, catalogue or layouts',!requests.some(u=>u.includes('eds-reference.json')));
 await page.goto('http://127.0.0.1:4306/showcase/button');await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');
 assert.equal(await page.locator('main #eds-properties').count(),0);record('Reference is outside authored content',true);
 record('Reference data loads only on request',!requests.some(u=>u.includes('eds-reference.json')));
 const summary=page.locator('#eds-properties>details>summary');await summary.focus();await page.keyboard.press('Enter');await page.waitForSelector('[data-reference-ready="true"]');
 record('Keyboard opens reference with official search',await page.locator('#eds-properties .ds-official [data-testid="input-search"]').count()>0);
 const input=page.locator('#eds-property-search-control');await input.fill('largura');await page.waitForTimeout(100);record('Search explains hug and fill',await page.locator('.eds-reference-field:not([hidden])').count()>=2);
 await input.fill('zzzz-nao-existe');await page.waitForTimeout(100);assert.match(await page.locator('.eds-reference-count').innerText(),/^0 de/);await page.getByRole('button',{name:'Limpar busca',exact:true}).click();assert.equal(await input.inputValue(),'');record('Empty search and reset',true);
 for(const width of [393,1440]){await page.setViewportSize({width,height:1000});for(const route of ['/showcase/button','/showcase/select','/showcase/table','/showcase/custom/formulario']){await page.goto('http://127.0.0.1:4306'+route);await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');await page.locator('#eds-properties>details>summary').click();await page.waitForSelector('[data-reference-ready="true"]');await page.locator('#eds-property-search-control').fill(route.includes('table')?'coluna':'');const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);record('Layout '+route+' '+width,!overflow);if(route.endsWith('button')){await page.locator('#eds-properties').scrollIntoViewIfNeeded();await page.screenshot({path:`docs/eds-reference-${width}.png`});}}}
 // Every component route has a generated, available reference; validate routing without reloading React 77 times.
 record('77 routes correspond to generated fixtures',Object.keys(data.routes).length===77&&Object.entries(data.routes).every(([route,id])=>fs.existsSync('drafts'+route+'.html')&&data.components[id]));
 record('No browser exceptions',errors.length===0,errors.join('; '));
}catch(e){record('Browser validation',false,e.stack)}finally{await browser.close();await new Promise(r=>server.close(r));fs.writeFileSync('docs/component-reference-validation-v4.1.0.json',JSON.stringify({scope:'Model coverage plus deferred delivery, search, keyboard and responsive reference UI',checks},null,2));}process.exitCode=checks.some(c=>!c.pass)?1:0;
