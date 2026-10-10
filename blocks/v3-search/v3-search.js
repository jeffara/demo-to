import {read,text,el,uid,cleanup} from '../../scripts/toranja.js';
import {loadDSRuntime} from '../../scripts/page.js';
export default async function decorate(block){const {fields}=read(block);const config=Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,text(v)]));config.id=uid('site-search');config.instantSearch=block.classList.contains('instant-search');const host=el('div','ds-official');block.replaceChildren(host);const {mountSearch}=await loadDSRuntime();cleanup(block,await mountSearch(host,config));block.dataset.toranjaReady='true';}
