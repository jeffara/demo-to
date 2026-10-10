/** Regressão do calendário nativo. showPicker é observado sem abrir UI do SO. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {serve} from '../tools/serve.mjs';
const require = createRequire(import.meta.url);
const {chromium} = require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
  ? process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + '/playwright' : 'playwright');
const server = await serve(4291, process.env.QA_PROJECT_ROOT);
const browser = await chromium.launch({headless:true,
  executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,args:['--no-sandbox']});
const page = await browser.newPage();
page.setDefaultTimeout(4000);
const report = {scope:'Chromium local; geometria capturada na chamada showPicker; UI nativa do SO não automatizada.',tests:[]};
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
async function setup({width=1280,scroll=false,id='ds-input-date',props={},two=false}={}) {
  await page.setViewportSize({width,height:900});
  await page.goto('http://127.0.0.1:4291/scripts/ds-schema.json');
  await page.evaluate(async ({scroll,id,props,two})=>{
    document.body.innerHTML='<main></main>';
    const style=document.createElement('style');
    style.textContent='body{margin:0}main{max-width:900px;margin:auto;padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:24px}main>div{min-width:0}@media(max-width:600px){main{grid-template-columns:1fr}}';
    document.head.append(style);
    const css=document.createElement('link');css.rel='stylesheet';css.href='/scripts/ds-runtime/toranja-runtime.css';document.head.append(css);
    await new Promise(r=>css.onload=r);
    document.documentElement.setAttribute('toranja-theme','pf-light');
    const schemas=await(await fetch('/scripts/ds-schema.json')).json();
    const runtime=await import('/scripts/ds-runtime/toranja-runtime.js');
    window.calls=[]; window.events=[]; window.disposes=[];
    document.addEventListener('toranja:interaction',e=>events.push(e.detail));
    HTMLInputElement.prototype.showPicker=function(){
      const box=this.getBoundingClientRect();
      calls.push({rect:{x:box.x,y:box.y,width:box.width,height:box.height},min:this.min,max:this.max,value:this.value,anchor:this.dataset.toranjaDateAnchor});
    };
    if(scroll){const spacer=document.createElement('div');spacer.style.height='1100px';document.body.prepend(spacer);document.body.style.paddingBottom='1200px';}
    for(let n=0;n<(two?2:1);n++){
      const host=document.createElement('div');host.className='ds-official';host.id='host-'+n;
      document.querySelector('main').append(host);
      disposes.push(runtime.mount(host,schemas[id],{label:'Data '+n,state:'enabled',...props},{resolveLink:x=>x,editing:false}));
    }
  },{scroll,id,props,two});
  await page.locator('main input').first().waitFor();
}
async function open(index=0,keyboard=false){
  const trigger=page.locator('[data-testid="calendar-icon"]').nth(index);
  await trigger.scrollIntoViewIfNeeded();
  if(keyboard){await trigger.focus();await trigger.press('Enter');}else await trigger.click();
  await page.waitForFunction(()=>calls.length>0);
  const result=await page.evaluate(index=>({call:calls.at(-1),rect:(()=>{const r=document.querySelectorAll('main .fieldset__container')[index].getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height}})()}),index);
  for(const key of ['x','y','width','height']) assert.ok(Math.abs(result.call.rect[key]-result.rect[key])<1,JSON.stringify(result));
  return result.call;
}
async function test(name,fn){try{await fn();assert.deepEqual(errors,[]);report.tests.push({name,pass:true});console.log('OK',name)}catch(e){report.tests.push({name,pass:false,error:e.message});console.log('FAIL',name,e.message)}}
try{
  for(const config of [{width:1280},{width:390},{width:1280,scroll:true},{width:390,scroll:true}])
    await test('Âncora antes de showPicker '+JSON.stringify(config),async()=>{await setup(config);await open()});
  await test('Ativação por teclado',async()=>{await setup();await open(0,true)});
  await test('Duas instâncias: segunda coluna tem âncora própria',async()=>{await setup({two:true});await open(1)});
  await test('InputText com máscara date compartilha a correção',async()=>{await setup({id:'ds-input-text',props:{mask:'date'}});await open()});
  await test('BR: min/max, valor inicial e callback preservados',async()=>{
    await setup({props:{dateType:'BR',value:'05/10/2026',pickerRange:{start:'01/10/2026',end:'31/10/2026'}}});
    const call=await open();assert.equal(call.value,'2026-10-05');assert.equal(call.min,'2026-10-01');assert.equal(call.max,'2026-10-31');
    await page.evaluate(()=>{const e=document.querySelector('body>input[type=date]');e.value='2026-10-15';e.dispatchEvent(new Event('change',{bubbles:true}))});
    assert.equal(await page.locator('main input').inputValue(),'15/10/2026');
    assert.ok(await page.evaluate(()=>events.some(e=>e.event==='onChange'&&e.args[0]==='15/10/2026')));
    await page.locator('body>input[type=date]').waitFor({state:'detached'});
  });
  await test('US: formato preservado',async()=>{
    await setup({props:{dateType:'US',value:'10/05/2026',pickerRange:{start:'10/01/2026',end:'10/31/2026'}}});
    const call=await open();assert.equal(call.value,'2026-10-05');assert.equal(call.min,'2026-10-01');assert.equal(call.max,'2026-10-31');
    await page.evaluate(()=>{const e=document.querySelector('body>input[type=date]');e.value='2026-10-15';e.dispatchEvent(new Event('change',{bubbles:true}))});
    assert.equal(await page.locator('main input').inputValue(),'10/15/2026');
    assert.ok(await page.evaluate(()=>events.some(e=>e.event==='onChange'&&e.args[0]==='10/15/2026')));
  });
  await test('US: digitação com máscara MM/DD/YYYY',async()=>{await setup({props:{dateType:'US'}});await page.locator('main input').pressSequentially('10152026');assert.equal(await page.locator('main input').inputValue(),'10/15/2026')});
  await test('Desabilitado não abre calendário',async()=>{await setup({props:{state:'disabled'}});assert.equal(await page.locator('main input').isDisabled(),true);assert.equal(await page.evaluate(()=>calls.length),0)});
  await test('Somente leitura desabilita o acionador',async()=>{await setup({props:{state:'readonly'}});assert.equal(await page.locator('main input').getAttribute('readonly'),'');assert.equal(await page.locator('[data-testid="calendar-icon"]').isDisabled(),true)});
  await test('Documento dentro de iframe mantém coordenadas locais',async()=>{
    await setup();
    await page.evaluate(()=>{document.body.innerHTML='<iframe src="/scripts/ds-schema.json" style="margin:80px;width:700px;height:500px"></iframe>'});
    const frame=await page.locator('iframe').elementHandle().then(e=>e.contentFrame());await frame.waitForLoadState();
    await frame.evaluate(async()=>{
      document.body.innerHTML='<div id="frame-host" class="ds-official" style="margin:80px;width:400px"></div>';
      const css=document.createElement('link');css.rel='stylesheet';css.href='/scripts/ds-runtime/toranja-runtime.css';document.head.append(css);await new Promise(r=>css.onload=r);
      document.documentElement.setAttribute('toranja-theme','pf-light');
      const schema=await(await fetch('/scripts/ds-schema.json')).json();const runtime=await import('/scripts/ds-runtime/toranja-runtime.js');
      HTMLInputElement.prototype.showPicker=function(){const a=this.getBoundingClientRect(),b=document.querySelector('.fieldset__container').getBoundingClientRect();window.aligned=Math.abs(a.left-b.left)<1&&Math.abs(a.top-b.top)<1};
      runtime.mount(document.getElementById('frame-host'),schema['ds-input-date'],{label:'Data no iframe',state:'enabled'},{resolveLink:x=>x,editing:true});
    });
    await frame.locator('[data-testid="calendar-icon"]').click();await frame.waitForFunction(()=>window.aligned===true);
  });
  await test('Desmontagem remove campo temporário',async()=>{await setup();await open();await page.evaluate(()=>disposes[0]());assert.equal(await page.locator('body>input[type=date]').count(),0)});
  await test('Input date externo não é alterado',async()=>{await setup();const style=await page.evaluate(()=>{const e=document.createElement('input');e.type='date';e.style.position='fixed';e.style.opacity='0';e.setAttribute('aria-hidden','true');document.body.append(e);return new Promise(r=>setTimeout(()=>r(e.style.left),30))});assert.equal(style,'')});
}finally{
  fs.writeFileSync(`docs/input-date-anchor-${process.env.QA_ROUND||'validation'}.json`,JSON.stringify(report,null,2));
  await browser.close();await new Promise(r=>server.close(r));
}
process.exitCode=report.tests.some(t=>!t.pass)?1:0;
