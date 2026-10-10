/** Documentation UI only; uses model data and the original Toranja search control. */
import {loadDSRuntime} from './ds-adapter.js';
const element=(tag,text,className)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(className)n.className=className;return n;};
const normalize=value=>String(value).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
let source;
const controls={text:'Texto',textarea:'Texto / JSON',richtext:'Texto formatado',select:'Lista de opções',number:'Número',reference:'Asset do DAM','aem-content':'Página ou URL',boolean:'Sim / Não'};
const display=v=>typeof v==='object'?JSON.stringify(v):v===''?'Padrão / em branco':String(v);
function metadata(parent,label,value){const line=element('p',undefined,'eds-reference-meta');line.append(element('strong',label+': '),document.createTextNode(value));parent.append(line);}
export async function renderReference(container,id){
 source ||= fetch('/scripts/eds-reference.json').then(r=>{if(!r.ok)throw Error('Reference unavailable');return r.json()}).catch(e=>{source=null;throw e});
 const data=await source,c=data.components[id];if(!c)throw Error('Unknown reference');
 container.replaceChildren();container.removeAttribute('role');
 const intro=element('div',undefined,'eds-reference-intro');intro.append(element('p',`${c.name} · ${c.official?'Toranja '+data.designSystem:'Composição do projeto com Toranja'} · Referência EDS ${data.version}`,'eds-reference-caption'));
 const list=element('ol');for(const step of c.recipes)list.append(element('li',step));intro.append(list,element('p','“Ao inserir no EDS” é o valor inicial do modelo de autoria, não necessariamente o padrão do componente React. Campos condicionais aparecem quando suas opções de controle estão selecionadas.'));
 const search=element('div',undefined,'ds-official eds-reference-search');search.id='eds-reference-search';
 const status=element('p',undefined,'eds-reference-count');status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.setAttribute('aria-atomic','true');
 const results=element('div',undefined,'eds-reference-results');container.append(intro,search,status,results);
 const allRows=[],groups=[];
 function row(f){
  const item=element('article',undefined,'eds-reference-field');item.dataset.fieldKey=f.key;
  const heading=element('h3',f.label);item.append(heading);
  const path=element('p',undefined,'eds-reference-path');path.append(element('code',f.path));item.append(path,element('p',f.help));
  metadata(item,'Onde ajustar',f.area||'Item do componente');if(f.condition)metadata(item,'Disponível quando',f.condition);
  metadata(item,'Preenchimento',controls[f.control]||f.control);if(f.format)item.append(element('p',f.format));if(f.multi)metadata(item,'Lista','Adicione uma entrada por valor.');
  if(Object.hasOwn(f,'initial'))metadata(item,'Ao inserir no EDS',display(f.initial));else metadata(item,'Ao inserir no EDS','Sem valor definido neste campo pelo modelo.');
  if(f.validation){const rules=Object.entries(f.validation).map(([k,v])=>({numberMin:'Mínimo',numberMax:'Máximo',regExp:'Formato',required:'Obrigatório'}[k]||k)+': '+display(v)).join(' · ');metadata(item,'Validação do editor',rules);}
  if(f.options){const options=data.enums[f.options],text=options.map(o=>o.name+(String(o.value)!==o.name?' ('+display(o.value)+')':'')).join(' · ');
   if(options.length>16){const detail=element('details'),sum=element('summary',`Ver ${options.length} opções disponíveis`),values=element('p',text,'eds-reference-options');detail.append(sum,values);item.append(detail);}else metadata(item,'Opções',text);
  }
  const technical=element('details',undefined,'eds-reference-storage'),sum=element('summary','Identificador do campo');technical.append(sum,element('code',f.key));item.append(technical);
  const haystack=normalize([f.label,f.path,f.help,f.condition,JSON.stringify(data.enums[f.options]||[])].join(' '));allRows.push({item,haystack});return item;
 }
 function group(label,fields,open=true,note=''){
  if(!fields.length)return;const details=element('details',undefined,'eds-reference-group');details.open=open;const summary=element('summary',`${label} · ${fields.length} campos`);details.append(summary);if(note)details.append(element('p',note));const body=element('div',undefined,'eds-reference-fields');const rows=fields.map(row);body.append(...rows);details.append(body);results.append(details);groups.push({details,rows,initial:open});
 }
 group('Conteúdo e apresentação',c.fields.filter(f=>f.area!=='Avançado'&&!f.adapter));
 group('Opções avançadas',c.fields.filter(f=>f.area==='Avançado'&&!f.adapter),false,'No painel, selecione Opções do painel → advanced para acessar estes ajustes. Algumas opções dependem de outra escolha.');
 group('Ações e configurações do EDS',c.fields.filter(f=>f.adapter),false,'Esses campos conectam o componente às páginas, painéis, formulários e integrações do projeto.');
 for(const collection of c.collections)group('Itens · '+collection.id,collection.fields,false,'Adicione ou selecione um item dentro do componente. '+(collection.path?'Em Tipo de item, escolha '+collection.id+'. ':'')+(collection.maxItems?'Limite: '+collection.maxItems+' itens. ':''));
 if(c.technical.length){const tech=element('details',undefined,'eds-reference-technical');tech.append(element('summary','Referência para o time técnico · '+c.technical.length+' contratos'),element('p','Eventos e referências de programação não são campos de texto de autoria. As ações e os comportamentos configuráveis estão documentados acima.'));for(const f of c.technical){const p=element('p');p.append(element('code',f.name),document.createTextNode(' — '+f.help));tech.append(p);}results.append(tech);}
 const filter=value=>{const q=normalize(value).trim();let visible=0;for(const r of allRows){const hit=!q||q.split(/\s+/).every(term=>r.haystack.includes(term));r.item.hidden=!hit;if(hit)visible++;}for(const g of groups){g.details.hidden=g.rows.every(r=>r.hidden);g.details.open=q?true:g.initial;}status.textContent=q?`${visible} de ${allRows.length} campos encontrados.`:`${allRows.length} campos disponíveis. Busque pelo nome no painel ou pelo efeito desejado.`;};filter('');
 const runtime=await loadDSRuntime();await runtime.mountReferenceSearch(search,filter);
 container.dataset.referenceReady='true';
}
