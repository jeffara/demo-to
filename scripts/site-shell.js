/** Shared content uses the same V3 components as pages; no separate header/footer component model. */
import {getMetadata,decorateSections,decorateBlocks,loadSections} from './aem.js';
import {resolveLink} from './links.js';
import {loadDSRuntime} from './ds-adapter.js';
import {cleanup,uid} from './toranja.js';
export async function loadShared(target,kind){
 const path=getMetadata(kind)||'/'+kind;if(path==='none')return;
 const url=resolveLink(path).replace(/\.html$/,'')+'.plain.html';
 const response=await fetch(url);if(!response.ok){target.dataset.sharedError=String(response.status);return;}
 const doc=new DOMParser().parseFromString(await response.text(),'text/html');
 const content=document.createElement(kind==='nav'?'nav':'div');content.className='site-'+kind+'-content';content.id=uid(kind);if(kind==='nav')content.setAttribute('aria-label','Navegação principal');
 content.append(...(doc.querySelector('main')||doc.body).children);target.append(content);
 decorateSections(content);decorateBlocks(content);await loadSections(content);
 for(const a of content.querySelectorAll('a[href]'))a.href=resolveLink(a.getAttribute('href'));
 if(kind==='nav'){const host=document.createElement('div');host.className='site-menu-toggle ds-official';target.prepend(host);const {mountMenuButton}=await loadDSRuntime();cleanup(host,mountMenuButton(host,content));}
 target.dataset.sharedReady='true';
}
