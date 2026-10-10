/** Reference derives only from the shipped models and upstream contract. No CMS edits. */
import fs from 'node:fs';import crypto from 'node:crypto';import {glossary,shows,specific,recipes} from './reference-copy.mjs';
const read=p=>JSON.parse(fs.readFileSync(p)),models=read('component-models.json'),schemas=read('docs/property-mapping.json'),contract=read('docs/toranja-contract.json'),pages=read('content/pages.json'),pkg=read('package.json');
const byId=Object.fromEntries(models.map(m=>[m.id,m])),enums={},missing=[],routes={},components={};
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const custom={'v3-form':['Formulário','showcase/custom/formulario'],'v3-search':['Busca','showcase/custom/busca'],'v3-simulator':['Simulador','showcase/custom/simulador'],'v3-video':['Vídeo','showcase/custom/video']};
const md={};for(const file of fs.readdirSync('vendor/@interco/inter-toranja/dist/components').filter(f=>f.endsWith('.md'))){const name=file.slice(0,-3);md[name]={};for(const line of fs.readFileSync('vendor/@interco/inter-toranja/dist/components/'+file,'utf8').split('\n')){const cells=line.split(' | ');if(cells.length>2&&/^\| [\w.]+$/.test(cells[0]))md[name][cells[0].slice(2).replaceAll('`','')]=cells[1].replaceAll('`','');}}
const adapter={
 '$accessibleLabel':'Nome anunciado por leitores de tela. Preencha quando o rótulo visível não explicar sozinho a finalidade do componente.',
 '$actionLink':'Destino da ação principal. Selecione uma página interna ou informe uma URL/âncora. Ações específicas do componente podem ter destinos próprios.',
 '$actionTarget':'Abre o destino padrão na aba atual (_self) ou em uma nova aba (_blank).',
 '$triggerLabel':'Texto do botão que abre este painel ou conteúdo flutuante.',
 '$showTrigger':'Exibe o acionador do painel. Desative quando a abertura será feita por outro botão da página.',
 '$overlayId':'Nome que conecta o painel à ação que o abre. Use o mesmo identificador nos dois componentes e não o repita em outros painéis da página.',
 '$editorMode':'Escolhe os campos apresentados no painel: basic para a edição principal e advanced para as opções adicionais. Não muda a aparência do componente publicado.',
 '$leadingChoice':'Escolhe qual elemento inicial será usado. auto considera os campos preenchidos; none remove a área inicial.',
 '$trailingChoice':'Escolhe qual elemento final será usado. auto considera os campos preenchidos; none remove a área final.',
 '$defaultDate':'Data inicial no modo de data única, no formato AAAA-MM-DD. Não use para configurar um intervalo.',
 '$dateValue':'Data selecionada no modo de data única. Use o formato esperado pelo controle.',
 '$disabledDates':'Datas indisponíveis para seleção. Use as entradas e o formato esperados pelo controle.',
 '$scrollContainerSelector':'Seletor do contêiner cuja rolagem controla a ação flutuante. Solicite o valor correto ao time técnico; em branco, vale o comportamento padrão.',
 '$dataSource':'Nome da fonte de dados cadastrada pelo time técnico. Em branco, utiliza os itens editados no componente.',
 '$dataParameter':'Parâmetro enviado à fonte de dados cadastrada. Use o valor acordado com o responsável pela integração.',
};
function explanation(component,d,f){
 const path=d?.path||[f.name],name=d?.name||f.name,root=path[0];
 if(root==='$actions'){const event=path[1];return ({kind:`Escolhe o que acontece em ${event}: navegar, abrir/fechar painel, enviar/limpar formulário, voltar ou executar uma ação cadastrada.`,link:`Destino da ação ${event} quando o tipo escolhido é navigate.`,target:`Aba usada pelo destino da ação ${event}: atual (_self) ou nova (_blank).`,id:`Identificador do painel, formulário ou ação cadastrada acionado por ${event}. Deve corresponder ao identificador configurado no destino.`})[path[2]];}
 if(root==='$enabled')return `Controla a área ${path[1]}: auto considera os campos preenchidos; true ativa; false oculta sem apagar os valores salvos.`;
 if(root==='$eventLinks')return `Destino específico da ação ${path[1]}. Preencha quando essa ação deve navegar para uma página diferente do destino padrão.`;
 if(root==='$behaviors')return ({getRowId:'Nome do comportamento cadastrado que identifica cada linha. Use para manter a seleção associada ao registro correto.',getStatusColor:'Nome do comportamento cadastrado que define a cor de status de cada linha. Requer enable Status ativo.',validateBeforeSelectRow:'Nome do comportamento cadastrado que decide se uma linha pode ser selecionada.',disabledDates:'Nome do comportamento cadastrado que define quais datas ficam indisponíveis.'})[path[1]]+' O time técnico fornece esse nome; não cole código neste campo.';
 if(adapter[root])return adapter[root];
 if(path.length===1&&specific[component+'.'+name])return specific[component+'.'+name];
 if(name==='typeButton')return specific['Button.typeButton'];
 if(name==='type'&&/Button|IconChip/.test(component))return specific['Button.type'];
 if(name==='type'&&path.length>1)return `Escolhe o tipo de elemento da área ${path.slice(0,-1).join(' › ')}. Essa escolha determina quais campos complementares usar.`;
 if(name.startsWith('show')&&shows[name.slice(4)])return `Exibe ${shows[name.slice(4)]}. Quando ativo, configure também o conteúdo ou os itens correspondentes.`;
 if(glossary[name])return glossary[name];
 const kebab=component.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();
 if(path.length===1&&md[kebab]?.[name])return md[kebab][name];
 if(f.description&&!/^Objeto JSON|Selecione um ícone|Adicione um valor|Representação interna/.test(f.description))return f.description;
 missing.push({component,path:path.join('.'),label:f.label});return '';
}
function conditionText(condition,fields){
 if(!condition)return '';
 const label=x=>fields.find(f=>f.name===x)?.label||x;
 const value=(v,field)=>fields.find(f=>f.name===field)?.options?.find(o=>o.value===v)?.name|| (v===''?'Padrão':String(v));
 if(condition.and)return condition.and.map(c=>conditionText(c,fields)).join(' e ');
 if(condition.or)return '('+condition.or.map(c=>conditionText(c,fields)).join(' ou ')+')';
 if(condition['!'])return 'não ('+conditionText(condition['!'],fields)+')';
 if(condition['!!'])return label(condition['!!'].var)+' preenchido';
 if(condition['===']){const [a,b]=condition['==='];return label(a.var)+' = '+value(b,a.var);}
 if(condition.in){const [a,b]=condition.in;return label(a.var)+' em '+b.map(v=>value(v,a.var)).join(', ');}
 throw Error('Unknown editor condition '+JSON.stringify(condition));
}
function field(component,f,d,allFields){
 const path=d?.path?.join('.')||f.name;
 const result={key:f.name,label:f.label||d?.name||f.name,path,help:explanation(component,d,f),control:f.component,kind:d?.kind||f.valueType,condition:conditionText(f.condition,allFields),area:JSON.stringify(f.condition||{}).includes('editorMode')?'Avançado':'Propriedades',adapter:path.startsWith('$')||!d,hidden:!!f.hidden};
 if(f.hidden){result.help ||= 'Campo interno mantido pelo projeto. Não é uma configuração de autoria.';result.area='Interno';}
 if(f.options?.length){const k=hash(JSON.stringify(f.options)).slice(0,12);enums[k]=f.options;result.options=k;}
 if(Object.hasOwn(f,'value'))result.initial=f.value;
 if(f.multi)result.multi=true;if(f.validation)result.validation=f.validation;
 if(d?.kind==='json')result.format='Objeto JSON declarativo. Use aspas duplas; não aceita funções nem JavaScript.';
 if(d?.kind==='array')result.format='Lista de valores. Quando houver coleção, edite pelos itens do componente.';
 return result;
}
for(const [id,s] of Object.entries(schemas)){
 const model=byId[id],source=contract.components.find(c=>c.block===id),own=new Set(source.properties.map(p=>p.name));
 const route='showcase/'+id.slice(3);if(!pages[route])throw Error('Missing showcase '+route);routes['/'+route]=id;
 const fields=model.fields.filter(f=>!f.hidden).map(f=>field(s.name,f,s.descriptors.find(d=>d.key===f.name),model.fields));
 const collections=(s.collections||[]).map(c=>({id:c.id,path:c.path.join('.'),maxItems:c.maxItems,composition:!!c.composition,model:c.model,fields:byId[c.model].fields.filter(f=>!f.hidden&&c.descriptors.some(d=>d.key===f.name)).map(f=>field(s.name,f,c.descriptors.find(d=>d.key===f.name),byId[c.model].fields))}));
 const itemModel=byId[id+'-item'];if(itemModel){const unassigned=itemModel.fields.filter(f=>!f.hidden&&!collections.some(c=>c.fields.some(x=>x.key===f.name)));if(unassigned.length)collections.unshift({id:'Configuração do item',path:'',model:itemModel.id,fields:unassigned.map(f=>field(s.name,f,null,itemModel.fields))});}
 const technical=[...(s.events||[]),...(s.technical||[])].map(d=>({name:d.path?.join('.')||d.name,kind:d.kind,help:d.kind==='technical'?'Referência de programação ou elemento de página. Configuração mantida pelo time técnico.':d.kind==='function'?'Comportamento fornecido pelo código da integração; quando disponível, escolha seu nome no campo de comportamento cadastrado.':'Evento disparado durante a interação. Use os campos de ação disponíveis; não é um campo para colar JavaScript.'}));
 for(const group of collections)if(s.name==='Select'&&group.id==='options')for(const f of group.fields)if(f.path==='value')f.help='Identificador desta opção. A pessoa vê o rótulo label; o valor é usado na seleção e na integração. Use um valor único entre as opções.';
 for(const group of collections)if(s.name==='Table'&&group.id==='data')for(const f of group.fields)f.help='Dados desta linha em JSON. Exemplo: {"nome":"Conta Digital","valor":100}. As chaves devem corresponder aos campos accessor das colunas.';
 components[id]={name:s.name,id,official:true,source:source.source,fields,collections,technical,recipes:recipes[s.name]||['Selecione o componente no Universal Editor e abra o painel de propriedades.','Comece pelo conteúdo e pela variante; use Opções do painel → advanced para os ajustes adicionais.','Confira o resultado no desktop e no mobile antes de publicar.'],ownProperties:own.size};
}
for(const [id,[name,route]] of Object.entries(custom)){
 routes['/'+route]=id;const model=byId[id],item=byId[id+'-item'];
 components[id]={name,id,official:false,fields:model.fields.filter(f=>!f.hidden).map(f=>({...field(id,f,null,model.fields),adapter:false})),collections:item?[{id:'Campos do formulário',model:item.id,fields:item.fields.filter(f=>!f.hidden).map(f=>field(id,f,null,item.fields))}]:[],technical:[],recipes:recipes[id]};
}
const usefulMissing=missing.filter(x=>x.path!=='schemaVersion');if(usefulMissing.length){fs.writeFileSync('docs/reference-missing.json',JSON.stringify(usefulMissing,null,2));console.error('Descriptions still required:',JSON.stringify([...new Map(usefulMissing.map(x=>[x.path,x])).values()]));process.exit(1)}
fs.rmSync('docs/reference-missing.json',{force:true});
const data={version:pkg.version,designSystem:'2.0.1',routes,enums,components};
fs.writeFileSync('scripts/eds-reference.json',JSON.stringify(data));
fs.writeFileSync('scripts/reference-routes.js','// Generated from the actual showcase pages.\nexport default '+JSON.stringify(routes)+';\n');
const report={version:pkg.version,components:Object.keys(components).length,officialComponents:Object.values(components).filter(c=>c.official).length,fields:Object.values(components).reduce((n,c)=>n+c.fields.length+c.collections.reduce((n,g)=>n+g.fields.length,0),0),routes:Object.keys(routes).length,modelHash:hash(JSON.stringify(models)),schemaHash:hash(JSON.stringify(schemas)),referenceBytes:fs.statSync('scripts/eds-reference.json').size,missingDescriptions:0};
fs.writeFileSync('docs/eds-reference-coverage.json',JSON.stringify(report,null,2));console.log(report);
