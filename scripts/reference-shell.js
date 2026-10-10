import routes from './reference-routes.js';
/** Read-only guide outside the authored main: no additional AEM block or content migration. */
export function prepareComponentReference(main){
 if(!main||document.querySelector('#eds-properties'))return;
 const path=location.pathname.replace(/\.html$/,'').replace(/\/$/,'');
 const relative=path.slice(path.lastIndexOf('/showcase/'));
 const id=routes[relative];if(!id)return;
 const section=document.createElement('section');section.id='eds-properties';section.className='eds-reference';section.setAttribute('aria-labelledby','eds-properties-title');
 const title=document.createElement('h2');title.id='eds-properties-title';title.textContent='Propriedades no EDS';
 const intro=document.createElement('p');intro.textContent='Consulte o que cada campo altera, onde encontrá-lo no Universal Editor e quais opções usar. Esta referência acompanha os modelos do componente.';
 const details=document.createElement('details'),summary=document.createElement('summary'),content=document.createElement('div');summary.textContent='Consultar campos e orientações de uso';content.className='eds-reference-content';details.append(summary,content);section.append(title,intro,details);main.after(section);
 let ready=false,loading=false;
 details.addEventListener('toggle',async()=>{if(!details.open||ready||loading)return;loading=true;content.setAttribute('aria-busy','true');content.textContent='Carregando a referência…';
  try{const module=await import('./component-reference.js');await module.renderReference(content,id);ready=true;}catch{content.textContent='Não foi possível carregar a referência. Feche e abra esta seção para tentar novamente.';content.setAttribute('role','alert');}finally{loading=false;content.removeAttribute('aria-busy');}
 });
}
