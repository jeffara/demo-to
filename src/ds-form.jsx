import React,{useState,useRef,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';
import {Select,Stepper} from './ds-compat.jsx';
import {hasIntegration,runIntegration,registerIntegration,jsonEndpoint} from '../scripts/integrations.js';
export function validCPF(value){const s=String(value||'').replace(/\D/g,'');if(s.length!==11||/^(\d)\1+$/.test(s))return false;for(let n=9;n<11;n++){let sum=0;for(let i=0;i<n;i++)sum+=Number(s[i])*(n+1-i);const digit=(sum*10)%11%10;if(digit!==Number(s[n]))return false;}return true;}
const initial=f=>f.kind==='checkbox'||f.kind==='switch'?f.defaultValue===true||f.defaultValue==='true':f.defaultValue??'';
const shown=(f,values)=>!f.showWhenField||(f.showWhenOperator==='notEquals'?String(values[f.showWhenField])!==f.showWhenValue:String(values[f.showWhenField])===f.showWhenValue);
function validate(f,value){
 if(f.required&&(value===''||value==null||value===false))return f.errorMessage||'Preencha este campo.';
 if(value===''||value==null||value===false)return '';
 const text=String(value);
 if(f.kind==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))return 'Informe um e-mail válido.';
 if(f.kind==='cpf'&&!validCPF(text))return 'Informe um CPF válido.';
 if(f.minLength&&text.length<Number(f.minLength))return 'Use pelo menos '+f.minLength+' caracteres.';
 if(f.maxLength&&text.length>Number(f.maxLength))return 'Use no máximo '+f.maxLength+' caracteres.';
 if(f.pattern){try{if(!new RegExp('^(?:'+f.pattern+')$').test(text))return f.errorMessage||'Formato inválido.';}catch{return 'Configuração de validação inválida.';}}
 if(['number','stepper','money'].includes(f.kind)){const n=Number(value);if(!Number.isFinite(n)||f.min!==''&&f.min!=null&&n<Number(f.min)||f.max!==''&&f.max!=null&&n>Number(f.max))return 'Valor fora dos limites permitidos.';}
 return '';
}
function consentContent(html){
 const doc=new DOMParser().parseFromString(html||'','text/html');
 const convert=(node,i)=>{if(node.nodeType===3)return node.textContent;if(node.nodeType!==1)return null;const tag=node.tagName.toLowerCase();if(!['p','a','strong','em','br','span'].includes(tag))return node.textContent;const attrs={key:i};if(tag==='a'){const href=node.getAttribute('href')||'';if(/^(https?:|\/|#)/.test(href)&&!href.startsWith('//')){attrs.href=href;attrs.target='_blank';attrs.rel='noopener noreferrer';}}return React.createElement(tag,attrs,...[...node.childNodes].map(convert))};
 return [...doc.body.childNodes].map(convert);
}
function Form({config,host}){
 const fields=config.fields;const resetValues=()=>Object.fromEntries(fields.map(f=>[f.fieldName,initial(f)]));const [values,setValues]=useState(resetValues),[errors,setErrors]=useState({}),[status,setStatus]=useState(''),[busy,setBusy]=useState(false),[generation,setGeneration]=useState(0);const controller=useRef();
 useEffect(()=>()=>controller.current?.abort(),[]);
 const duplicate=fields.some((f,i)=>!f.fieldName||fields.findIndex(x=>x.fieldName===f.fieldName)!==i);
 const change=(f,input)=>{const value=input?.target?input.target.type==='checkbox'?input.target.checked:input.target.value:input;setValues(v=>({...v,[f.fieldName]:value}));setErrors(v=>({...v,[f.fieldName]:''}));host.dispatchEvent(new CustomEvent('toranja:field-change',{bubbles:true,detail:{form:config.id,field:f.fieldName,value}}));};
 const submit=async e=>{e.preventDefault();if(config.editing){setStatus('Envio desabilitado durante a edição.');return;}if(busy)return;if(duplicate){setStatus('Revise os nomes dos campos: precisam ser preenchidos e únicos.');return;}
  const visible=fields.filter(f=>shown(f,values)&&!f.disabled);const invalid=Object.fromEntries(visible.map(f=>[f.fieldName,validate(f,values[f.fieldName])]).filter(([,error])=>error));
  if(config.consent&&!values.consent)invalid.consent='Aceite o consentimento para continuar.';setErrors(invalid);
  if(Object.keys(invalid).length){setStatus('Revise os campos indicados.');requestAnimationFrame(()=>host.querySelector('[data-invalid="true"] input,[data-invalid="true"] textarea,[data-invalid="true"] [tabindex="0"]')?.focus());return;}
  if(!config.endpoint&&!hasIntegration(config.integrationId)){setStatus('Formulário preparado: integração de envio ainda não configurada.');return;}
  const payload=Object.fromEntries(visible.map(f=>[f.fieldName,values[f.fieldName]]));if(config.consent)payload.consent=true;
  let unregister;const id=config.endpoint?'form-'+config.id:config.integrationId;if(config.endpoint)unregister=registerIntegration(id,jsonEndpoint(config.endpoint));
  controller.current=new AbortController();setBusy(true);setStatus('Enviando…');
  try{await runIntegration(id,payload,{signal:controller.current.signal,timeout:config.timeout||15000});setStatus(config.successMessage||'Solicitação recebida.');setValues(resetValues());setGeneration(x=>x+1);host.dispatchEvent(new CustomEvent('toranja:form-success',{bubbles:true,detail:{form:config.id}}));}
  catch(error){setStatus(error.name==='AbortError'?'Tempo de envio excedido. Tente novamente.':config.failureMessage||'Não foi possível enviar. Tente novamente.');}
  finally{unregister?.();setBusy(false);}
 };
 return <form id={config.id} className="toranja-form ds-official" onSubmit={submit} noValidate onReset={()=>{setValues(resetValues());setErrors({});setGeneration(x=>x+1);setStatus('')}}>
  <div className="form-header">{React.createElement(/^h[1-6]$/.test(config.titleType)?config.titleType:'h2',null,config.title)}<p>{config.subtitle}</p></div>
  <div className="form-grid">{fields.map((f,i)=>{if(!config.editing&&!shown(f,values))return null;const id=config.id+'-field-'+i;const error=errors[f.fieldName];const attrs=f.instrumentation||{};const props={id,name:f.fieldName,label:f.label,placeholder:f.placeholder,state:f.disabled?'disabled':error?'error':'enabled',disabled:f.disabled,readOnly:f.readOnly,value:values[f.fieldName],defaultValue:initial(f),required:f.required,'aria-label':f.label,'aria-describedby':id+'-message','aria-invalid':!!error,onChange:v=>change(f,v),onDebouncedChange:()=>{}};let control;
   if(f.kind==='textarea')control=<DS.TextArea {...props}/>;
   else if(f.kind==='select')control=<Select {...props} options={f.options||[]}/>;
   else if(f.kind==='checkbox')control=<DS.Checkbox state={props.state} checked={!!values[f.fieldName]} onChange={v=>change(f,v)} aria-label={f.label}/>;
   else if(f.kind==='switch')control=<DS.Switch state={props.state} checked={!!values[f.fieldName]} onChange={v=>change(f,v)}/>;
   else if(f.kind==='radio')control=<fieldset><legend>{f.label}</legend>{(f.options||[]).map((o,j)=><DS.Radio.Option key={j} state={props.state} name={id} id={id+'-'+j} checked={values[f.fieldName]===o.value} value={o.value} onChange={()=>change(f,o.value)} variant="default">{o.label}</DS.Radio.Option>)}</fieldset>;
   else if(f.kind==='stepper')control=<Stepper {...props} value={Number(values[f.fieldName]||f.min||0)} min={Number(f.min||0)} max={Number(f.max||100)} step={Number(f.step||1)} onChange={v=>change(f,v)}/>;
   else if(f.kind==='money')control=<DS.InputMoney state={props.state} defaultValue={Number(values[f.fieldName]||0)} currency="BRL" onChange={v=>change(f,v)} minValue={f.min===''?undefined:Number(f.min)} maxValue={f.max===''?undefined:Number(f.max)}/>;
   else if(f.kind==='password')control=<DS.InputPassword {...props}/>;
   else control=<DS.InputText {...props} type={['email','tel','number','date'].includes(f.kind)?f.kind:'text'} mask={f.kind==='cpf'?'cpf':undefined}/>;
   return <div key={f.fieldName+'-'+generation} className="form-group" data-invalid={!!error} {...attrs}>{['checkbox','switch','stepper','money'].includes(f.kind)&&<label>{f.label}</label>}{control}<small id={id+'-message'} className={error?'form-error':''} role={error?'alert':undefined}>{error||f.hint}</small></div>;
  })}</div>
  {config.consent&&<label className="checkbox-label"><input type="checkbox" checked={!!values.consent} onChange={e=>setValues(v=>({...v,consent:e.target.checked}))} required/><span>{consentContent(config.consentHTML||config.consent)}</span><span role="alert">{errors.consent}</span></label>}
  <DS.Button type="submit" label={config.submitLabel||'Enviar'} state={busy?'loading':'enabled'} disabled={busy||duplicate} />
  <div className="form-status" role="status" aria-live="polite">{status}</div>
 </form>;
}
export function mountForm(host,config){const root=createRoot(host);flushSync(()=>root.render(<Form config={config} host={host}/>));return()=>root.unmount();}
