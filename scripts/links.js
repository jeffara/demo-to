import {siteConfig} from './site-config.js';
/** Normaliza apenas rotas do site; preserva URLs externas, query, hash e downloads. */
export function resolveLink(value, author = !!document.querySelector('main[data-aue-resource]')) {
 const root=siteConfig.contentRoot.replace(/\/$/,'');
 const raw=String(value||'').trim();
 if(!raw)return '';
 let url;try {url=new URL(raw,location.href);}catch{return '';}
 if(!['http:','https:','mailto:','tel:'].includes(url.protocol))return '';
 if(['mailto:','tel:'].includes(url.protocol)||raw.startsWith('#'))return raw;
 const sameSite=url.origin===location.origin;
 if(!sameSite&&!raw.startsWith(root+'/'))return raw;
 let p=url.pathname;
 if(p.startsWith(root+'/')) {
  if(author)return p.replace(/(?:\.html)?$/,'')+'.html'+url.search+url.hash;
  p=p.slice(root.length);
 } else if(author&&p.startsWith('/')&&!p.startsWith('/content/')&&!/\.[a-z0-9]+$/i.test(p.replace(/\.html$/,''))) {
  return root+(p==='/'?'/index':p).replace(/\.html$/,'')+'.html'+url.search+url.hash;
 }
 if(author)return raw;
 p=p.replace(/\.html$/,'').replace(/\/index$/,'/');
 return p+url.search+url.hash;
}
export function applyLink(a,value,target='_self') {
 const href=resolveLink(value); if(!href){a.removeAttribute('href');a.setAttribute('aria-disabled','true');return a;}
 a.href=href; a.target=target==='_blank'?'_blank':'_self';
 if(a.target==='_blank')a.rel='noopener noreferrer';
 return a;
}
