import {siteConfig} from './site-config.js';
const cache=new Map();export const normalizeSearch=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
export async function loadIndex(endpoint=siteConfig.searchIndex,signal){
 const key=new URL(endpoint,location.href).href,cached=cache.get(key);if(cached&&Date.now()-cached.time<300000)return cached.data;
 const records=new Map();let offset=0;
 for(let page=0;page<100;page++){
  const url=new URL(key);if(offset){url.searchParams.set('offset',offset);url.searchParams.set('limit','500');}
  const res=await fetch(url,{signal});if(!res.ok)throw Error('Índice indisponível');const json=await res.json();const rows=json.data||[];
  const size=records.size;for(const row of rows)if(row.path)records.set(row.path,row);
  const next=(Number(json.offset)||offset)+rows.length;if(!rows.length||records.size===size||!json.total||next>=Number(json.total))break;offset=next;
 }
 const data=[...records.values()];cache.set(key,{time:Date.now(),data});return data;
}
export function searchRecords(records,query,{root='/',limit=8}={}){
 const words=normalizeSearch(query).trim().split(/\s+/).filter(Boolean);if(!words.length)return [];
 return records.filter(r=>{const path=String(r.path||'');if(!path.startsWith(root)||/noindex/i.test(r.robots||''))return false;return !siteConfig.searchExclude.some(p=>path===p||path.startsWith(p+'/'));})
 .map(r=>({...r,score:words.reduce((score,w)=>score+(normalizeSearch(r.title).includes(w)?5:0)+(normalizeSearch(r.description).includes(w)?2:0),0)}))
 .filter(r=>words.every(w=>normalizeSearch([r.title,r.description,r.body].join(' ')).includes(w)))
 .sort((a,b)=>b.score-a.score||String(a.title).localeCompare(String(b.title),'pt-BR')).slice(0,Math.max(1,Math.min(50,Number(limit)||8)));
}
