/** Mantém as abas oficiais; torna o transbordamento navegável e a seleção visível. */
import React, {useLayoutEffect, useRef, useState} from 'react';
import {Tabs, NeutralIconButton} from '../vendor/@interco/inter-toranja/dist/components.js';

export function ResponsiveTabs(props) {
  const root = useRef(null);
  const [edges, setEdges] = useState({overflow:false, start:true, end:true});
  useLayoutEffect(() => {
    const host = root.current;
    const rail = host.querySelector('.tabs-navigation--scrollable');
    if (!rail) {setEdges({overflow:false,start:true,end:true});return;}
    let active;
    let disposed = false;
    let frame;
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const next = {overflow:max>2, start:rail.scrollLeft<2, end:rail.scrollLeft>=max-2};
      setEdges(old => Object.keys(next).every(key=>old[key]===next[key]) ? old : next);
    };
    const reveal = () => {
      const tab = rail.querySelector('[data-testid="tab"][aria-selected="true"]');
      if (!tab) return;
      const a = rail.getBoundingClientRect(), b = tab.getBoundingClientRect();
      if (b.right>a.right-4) rail.scrollLeft += b.right-a.right+4;
      else if (b.left<a.left+4) rail.scrollLeft -= a.left-b.left+4;
      update();
    };
    const changed = () => {
      const selected = rail.querySelector('[data-testid="tab"][aria-selected="true"]');
      if (selected!==active) {active=selected;cancelAnimationFrame(frame);frame=requestAnimationFrame(reveal);}
      update();
    };
    const observer = new MutationObserver(changed);
    observer.observe(rail,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-selected']});
    const resize = new ResizeObserver(()=>{reveal();update();});
    resize.observe(rail);
    rail.addEventListener('scroll',update,{passive:true});
    changed();
    document.fonts.ready.then(()=>{if(!disposed&&host.isConnected){reveal();update();}});
    return()=>{disposed=true;observer.disconnect();resize.disconnect();rail.removeEventListener('scroll',update);cancelAnimationFrame(frame);};
  },[props.scrollable,props.tabs?.length]);
  const move = direction => {
    const rail=root.current.querySelector('.tabs-navigation--scrollable');
    if (!rail) return;
    const bounds=rail.getBoundingClientRect();
    const tabs=[...rail.querySelectorAll('[data-testid="tab"]')];
    const target=direction>0?tabs.find(t=>t.getBoundingClientRect().right>bounds.right+1):tabs.reverse().find(t=>t.getBoundingClientRect().left<bounds.left-1);
    if(target){const rect=target.getBoundingClientRect();rail.scrollLeft+=direction>0?rect.right-bounds.right+4:rect.left-bounds.left-4;}
  };
  return <div ref={root} className="ds-tabs-frame">
    <Tabs {...props}/>
    {edges.overflow&&<div className="ds-tabs-scroll-controls" aria-label="Navegação da faixa de abas">
      <span>Mais opções</span>
      <NeutralIconButton icon="ic_chevron_left" aria-label="Mostrar abas anteriores" disabled={edges.start} onClick={()=>move(-1)}/>
      <NeutralIconButton icon="ic_chevron_right" aria-label="Mostrar próximas abas" disabled={edges.end} onClick={()=>move(1)}/>
    </div>}
  </div>;
}
