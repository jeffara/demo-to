/** Presentation-only columns. AEM content remains flat: section > official blocks. */
const ratios={'columns-2':'1fr 1fr','hero-layout':'1fr 1fr','columns-3':'1fr 1fr 1fr','columns-4':'1fr 1fr 1fr 1fr','columns-33-67':'1fr 2fr','columns-67-33':'2fr 1fr','columns-25-75':'1fr 3fr','columns-75-25':'3fr 1fr'};
const allowed={layoutMode:['grid','columns'],layoutWidth:['reading','standard','wide','full'],layoutGap:['compact','standard','large'],layoutPadding:['none','compact','standard','large'],layoutAlign:['start','center','end','stretch'],layoutBackground:['page','neutral','brand'],layoutMobileOrder:['normal','reverse']};
const mobile=()=>matchMedia('(max-width: 760px)').matches;
function orderColumns(section){const cols=[...section.querySelectorAll(':scope > .layout-column')].sort((a,b)=>Number(a.dataset.column)-Number(b.dataset.column));if(mobile()&&section.dataset.layoutMobileOrder==='reverse')cols.reverse();cols.forEach(c=>section.append(c));}
export function applySectionLayout(section){
 if(!section?.classList.contains('section'))return;
 for(const [key,values]of Object.entries(allowed)){const raw=section.dataset[key]??section.dataset[key.toLowerCase()];section.dataset[key]=values.includes(raw)?raw:({layoutMode:'grid',layoutWidth:'standard',layoutGap:'standard',layoutPadding:'standard',layoutAlign:'start',layoutBackground:'page',layoutMobileOrder:'normal'}[key]);}
 const style=Object.keys(ratios).find(k=>section.classList.contains(k)),ratio=ratios[style],count=ratio?.split(' ').length||1;
 section.classList.toggle('layout-grid',!!ratio);section.style.setProperty('--layout-columns',ratio||'1fr');
 const old=[...section.querySelectorAll(':scope > .layout-column')];
 if(old.length){const all=[...section.children].flatMap(e=>e.classList.contains('layout-column')?[...e.children]:[e]).sort((a,b)=>Number(a.dataset.layoutSequence)-Number(b.dataset.layoutSequence));old.forEach(c=>c.remove());all.forEach(e=>section.append(e));}
 const children=[...section.children];children.forEach((e,i)=>e.dataset.layoutSequence=String(i));
 if(section.dataset.layoutMode!=='columns'||count===1)return;
 const cols=Array.from({length:count},(_,i)=>{const c=document.createElement('div');c.className='layout-column';c.dataset.column=String(i+1);return c;});let next=0;
 for(const wrapper of children){if(wrapper.classList.contains('default-content-wrapper'))continue;const block=wrapper.firstElementChild;const specified=[...block?.classList||[]].find(c=>/^col-[1-4]$/.test(c));const column=specified?Math.min(Number(specified.slice(4)),count)-1:next++%count;cols[column].append(wrapper);}
 cols.forEach(c=>section.append(c));orderColumns(section);
 if(!section.dataset.layoutObserved){section.dataset.layoutObserved='true';const query=matchMedia('(max-width: 760px)');const handler=()=>{if(!section.isConnected){query.removeEventListener('change',handler);return;}orderColumns(section)};query.addEventListener('change',handler);}
}
