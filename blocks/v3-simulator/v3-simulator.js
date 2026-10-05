import {read,text,el,cleanup} from '../../scripts/toranja.js';
import {loadDSRuntime} from '../../scripts/ds-adapter.js';
export default async function decorate(block){const {fields}=read(block),config=Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,text(v)]));const host=el('div','ds-official');block.replaceChildren(host);const {mountSimulator}=await loadDSRuntime();cleanup(block,mountSimulator(host,config));block.dataset.toranjaReady='true';}
