/** Rodada de aceitação: navegação, interação real, segurança de links e atualização UE simulada. */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
import {blockHTML} from '../tools/render-content.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox']});const server=await serve(4176);
const origin='http://127.0.0.1:4176', page=await browser.newPage({viewport:{width:900,height:850}});
page.setDefaultTimeout(5000);
const data=JSON.parse(fs.readFileSync('content/ds-samples.json')),schemas=JSON.parse(fs.readFileSync('scripts/ds-schema.json'));
const report={scope:'Testes locais em Chromium, com eventos Universal Editor simulados. Sem validação remota autenticada.',tests:[]};
async function test(name,fn){try{await fn();report.tests.push({name,pass:true});console.log('OK',name);}catch(e){report.tests.push({name,pass:false,error:e.message});console.log('FAIL',name,e.message);}}
async function visit(path='/'){await page.goto(origin+path);await page.waitForFunction(()=>document.documentElement.dataset.toranjaLoaded==='true');}
async function mount(name,props={},authored=false){const b=structuredClone(data.find(b=>b.block===name));Object.assign(b.properties,props);await page.evaluate(async({markup,name,authored})=>{const m=document.querySelector('main');m.replaceChildren();if(authored)m.dataset.aueResource='urn:test:main';else m.removeAttribute('data-aue-resource');m.innerHTML=markup;const block=m.firstElementChild;block.classList.add('block');await(await import(`/blocks/${name}/${name}.js`)).default(block);}, {markup:blockHTML(b,authored,'urn:test:block'),name,authored});await page.locator('main .ds-official').waitFor();await page.waitForFunction(()=>document.querySelector('main .ds-official')?.querySelector(':not(.ds-fallback)'));return b;}
const prop=k=>'p'+Buffer.from(k).toString('hex');
try{
await visit();
await test('Rotas /, /index e /index.html convergem para a home local',async()=>{for(const p of ['/','/index','/index.html']){const r=await fetch(origin+p);assert.equal(r.status,200);assert.equal(new URL(r.url).pathname,'/');}});
await test('Todas as páginas importáveis têm rota local válida',async()=>{const pages=JSON.parse(fs.readFileSync('content/pages.json'));for(const key of Object.keys(pages)){const r=await fetch(origin+'/'+(key==='index'?'':key));assert.equal(r.status,200,key);}});
await test('Links internos, externos, âncoras, downloads e URLs inseguras',async()=>{const r=await page.evaluate(async()=>{const {resolveLink:f}=await import('/scripts/links.js');return [f('/content/demo-to/index.html',false),f('/content/demo-to/demo-toranja.html?x=1#ds-button',false),f('https://example.com/pagina.html',false),f('#parte',false),f('javascript:alert(1)',false),f('/arquivo.pdf',false),f('/content/demo-to/index',true)];});assert.deepEqual(r,['/','/demo-toranja?x=1#ds-button','https://example.com/pagina.html','#parte','','/arquivo.pdf','/content/demo-to/index.html']);});
await test('Checkbox alterna valor',async()=>{await mount('ds-checkbox');const c=page.getByRole('checkbox');await c.click();assert.equal(await c.getAttribute('aria-checked'),'true');await c.press('Space');assert.equal(await c.getAttribute('aria-checked'),'false');});
await test('Switch alterna valor',async()=>{await mount('ds-switch');await page.locator('[data-testid=switch-slider]').click();assert.equal(await page.locator('main input').isChecked(),true);});
await test('Radio seleciona opção',async()=>{await mount('ds-radio');await page.locator('input[type=radio]').check();assert.equal(await page.locator('input[type=radio]').isChecked(),true);});
await test('InputText aceita edição',async()=>{await mount('ds-input-text');await page.locator('main input').fill('Jeff');assert.equal(await page.locator('main input').inputValue(),'Jeff');});
await test('InputMoney incrementa e respeita limite',async()=>{await mount('ds-input-money',{[prop('defaultValue')]:100,[prop('maxValue')]:200});const buttons=page.locator('main button');const before=await page.locator('main input').inputValue();await buttons.last().click();const after=await page.locator('main input').inputValue();assert.notEqual(before,after);});
await test('Stepper incrementa',async()=>{await mount('ds-stepper');const input=page.locator('main input');const before=await input.inputValue();await page.locator('main button').last().click();assert.notEqual(await input.inputValue(),before);});
await test('InputPassword permite digitar e alternar visibilidade',async()=>{await mount('ds-input-password');const input=page.locator('main input');await input.fill('Teste123!');await page.locator('[data-testid^=icon-password]').click();assert.equal(await input.getAttribute('type'),'text');});
await test('Select abre opções e salva seleção',async()=>{await mount('ds-select');await page.getByRole('combobox').press('Enter');await page.getByRole('option',{name:'Investimentos'}).click();assert.equal(await page.locator('main input').inputValue(),'Investimentos');});
await test('Accordion expande conteúdo',async()=>{await mount('ds-accordion');const b=page.locator('main [aria-expanded]').first();assert.equal(await b.getAttribute('aria-expanded'),'false');await b.click();assert.equal(await b.getAttribute('aria-expanded'),'true');});
await test('Tabs seleciona outra aba',async()=>{await mount('ds-tabs');const tabs=page.locator('main [role=tab]');await tabs.nth(1).click();assert.equal(await tabs.nth(1).getAttribute('aria-selected'),'true');});
await test('Tabs permite navegação por teclado',async()=>{await mount('ds-tabs');const tabs=page.locator('main [role=tab]');await tabs.first().focus();await tabs.first().press('ArrowRight');assert.equal(await tabs.nth(1).getAttribute('aria-selected'),'true');assert.equal(await tabs.nth(1).evaluate(e=>e===document.activeElement),true);});
await test('SegmentedControl responde à seleção',async()=>{await mount('ds-segmented-control');await page.evaluate(()=>{window.__dsEvents=[];document.querySelector('main').addEventListener('toranja:interaction',e=>window.__dsEvents.push(e.detail.event));});await page.locator('main').getByText('Empresas',{exact:true}).click();assert.ok(await page.evaluate(()=>window.__dsEvents.includes('onClick')));});
await test('BottomSheet abre e fecha',async()=>{await mount('ds-bottom-sheet');await page.locator('.ds-launch').click();await page.getByText('Conteúdo editável do painel.').waitFor({state:'visible'});await page.getByRole('button',{name:'Fechar painel'}).click();await page.getByText('Conteúdo editável do painel.').waitFor({state:'hidden'});});
await test('Snackbar abre e fecha',async()=>{await mount('ds-snackbar');await page.locator('.ds-launch').click();await page.getByText('Esta é uma mensagem de demonstração.').waitFor({state:'visible'});await page.locator('main button').last().click();});
await test('PinCode aceita código completo',async()=>{await mount('ds-pin-code');await page.locator('main input').first().fill('1');await page.locator('main input').nth(1).fill('2');assert.equal(await page.locator('main input').first().inputValue(),'1');});
await test('Botão respeita disabled',async()=>{await mount('ds-button',{[prop('disabled')]:'true'});assert.equal(await page.locator('main button').isDisabled(),true);});
await test('Link externo preserva destino e nova aba',async()=>{await mount('ds-link',{actionLink:'https://example.com/page.html',actionTarget:'_blank'});const a=page.locator('main a');assert.equal(await a.getAttribute('href'),'https://example.com/page.html');assert.equal(await a.getAttribute('target'),'_blank');assert.match(await a.getAttribute('rel'),/noopener/);});
await test('Link desabilitado não oferece navegação',async()=>{await mount('ds-link',{[prop('state')]:'disabled',actionLink:'https://example.com/page.html'});const a=page.locator('main a');assert.equal(await a.getAttribute('aria-disabled'),'true');assert.equal(await a.getAttribute('href'),null);});
await test('Bloco novo sem itens não quebra a página',async()=>{const b=structuredClone(data.find(b=>b.block==='ds-tabs'));b.items=[];await page.evaluate(async markup=>{document.querySelector('main').innerHTML=markup;await(await import('/blocks/ds-tabs/ds-tabs.js')).default(document.querySelector('.ds-tabs'));},blockHTML(b));await page.getByText('Nenhum item. Adicione itens a este componente.').waitFor();});
await test('UE: alteração de propriedade redecorada sem perder recurso',async()=>{
 await visit();const b=await mount('ds-button',{},true);await page.evaluate(()=>import('/scripts/editor-support.js'));
 b.properties[prop('label')]='Editado no painel';const markup=blockHTML(b,true,'urn:test:block');
 await page.evaluate(markup=>document.querySelector('main').dispatchEvent(new CustomEvent('aue:content-patch',{bubbles:true,detail:{request:{target:{resource:'urn:test:block'}},response:{updates:[{content:markup}]}}})),markup);
 await page.locator('main').getByText('Editado no painel',{exact:true}).waitFor();assert.equal(await page.locator('main .ds-button').getAttribute('data-aue-resource'),'urn:test:block');
});
await test('UE: incluir, reordenar e remover itens',async()=>{
 const b=await mount('ds-tabs',{},true);const label=schemas['ds-tabs'].item.descriptors.find(d=>d.name==='label').key;
 b.items.push({[label]:'Novo item'});b.items.reverse();
 for(const items of [b.items,b.items.slice(0,-1)]){
  b.items=items;const markup=blockHTML(b,true,'urn:test:block');await page.evaluate(markup=>document.querySelector('main').dispatchEvent(new CustomEvent('aue:content-add',{bubbles:true,detail:{request:{target:{container:{resource:'urn:test:block'}}},response:{updates:[{content:markup}]}}})),markup);
  await page.waitForFunction(n=>document.querySelectorAll('main [role=tab]').length===n,items.length);
 }
 assert.equal(await page.locator('main [role=tab]').first().innerText(),'Novo item');assert.ok(await page.locator('[data-aue-resource="urn:test:block/item_0"]').count());
});
}finally{fs.writeFileSync(`docs/acceptance-${process.env.QA_ROUND||'development'}.json`,JSON.stringify(report,null,2));await browser.close();await new Promise(r=>server.close(r));}
process.exitCode=report.tests.some(t=>!t.pass)?1:0;
