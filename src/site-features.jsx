/** Funcionalidades V3: controles oficiais, dados e comportamento próprios do site. */
import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';
import {loadIndex,searchRecords} from '../scripts/search-index.js';
import {resolveLink} from '../scripts/links.js';
function Search({config}){
 const [query,setQuery]=useState(''),[matches,setMatches]=useState([]),[status,setStatus]=useState('');const sequence=useRef(0),abort=useRef();
 useEffect(()=>()=>{sequence.current++;abort.current?.abort()},[]);
 const run=async()=>{const request=++sequence.current;abort.current?.abort();abort.current=new AbortController();if(query.trim().length<Number(config.minChars||2)){setMatches([]);setStatus('Digite pelo menos '+(config.minChars||2)+' caracteres.');return}setStatus('Buscando…');try{const rows=await loadIndex(config.indexEndpoint||'/query-index.json',abort.current.signal);if(request!==sequence.current)return;const found=searchRecords(rows,query,{root:config.searchRoot||'/',limit:Number(config.maxResults||8)});setMatches(found);setStatus(found.length?found.length+' resultados encontrados.':'Nenhum resultado encontrado.')}catch(e){if(e.name!=='AbortError'&&request===sequence.current){setMatches([]);setStatus('Busca indisponível no momento. Tente novamente.')}}};
 useEffect(()=>{sequence.current++;setMatches([]);setStatus('');if(!config.instantSearch||!query.trim())return;const timer=setTimeout(run,250);return()=>clearTimeout(timer)},[query]);
 return <form className="v3-search-form" onSubmit={e=>{e.preventDefault();run()}}><DS.InputSearch id={config.id} label={config.label||'Buscar no site'} placeholder={config.placeholder||'Digite sua busca'} value={query} onChange={v=>setQuery(v?.target?.value??v)} onDebouncedChange={()=>{}} state="enabled"/><div className="v3-actions"><DS.Button type="submit" label="Buscar"/><DS.Button type="button" label="Limpar" hierarchy="secondary" onClick={()=>{sequence.current++;setQuery('');setMatches([]);setStatus('')}}/></div><p role="status">{status}</p><ul className="v3-search-results">{matches.map(m=><li key={m.path}><DS.Link label={m.title||m.path} href={resolveLink(m.path)} role="link"/><DS.Text textType="body" textSize="medium">{m.description||''}</DS.Text></li>)}</ul></form>;
}
function Simulator({config}){
 const min=Math.max(0,Number(config.minValue)||0),max=Math.max(min,Number(config.maxValue)||100000),[value,setValue]=useState(Math.max(min,Math.min(max,Number(config.defaultValue)||min)));
 const rate=Math.max(0,Number(config.annualRate)||0)/100,reference=Math.max(0,Number(config.referenceRate)||0)/100;
 const fmt=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
 return <div className="v3-simulator-panel"><DS.Text as="h2" textType="title" textSize="large">{config.title}</DS.Text><DS.Text textType="body" textSize="medium">{config.subtitle}</DS.Text><DS.InputMoney label="Valor da simulação" defaultValue={value} currency="BRL" minValue={min} maxValue={max} onChange={v=>setValue(Math.max(min,Math.min(max,Number(v)||min)))}/><div className="v3-simulation-results" aria-live="polite"><DS.Card><div className="ds-card-content"><DS.Text textType="body" textSize="medium">{config.resultLabel||'Cenário configurado · 1 ano'}</DS.Text><DS.Text as="strong" textType="body" textSize="large" textWeight="bold">{fmt(value*(1+rate))}</DS.Text></div></DS.Card><DS.Card><div className="ds-card-content"><DS.Text textType="body" textSize="medium">{config.referenceLabel||'Referência configurada · 1 ano'}</DS.Text><DS.Text as="strong" textType="body" textSize="large" textWeight="bold">{fmt(value*(1+reference))}</DS.Text></div></DS.Card></div><DS.Text textType="body" textSize="small">{config.disclaimer||'Simulação ilustrativa, sem impostos. As taxas são parâmetros editoriais e não representam uma oferta.'}</DS.Text>{config.cta&&<DS.Link role="link" label={config.ctaText||'Saiba mais'} href={resolveLink(config.cta)}/>}</div>;
}
const mount=(host,element)=>{const root=createRoot(host);flushSync(()=>root.render(element));return()=>root.unmount()};
export const mountSearch=(host,config)=>mount(host,<Search config={config}/>);
export const mountSimulator=(host,config)=>mount(host,<Simulator config={config}/>);

