import {imageCells} from './image-contract.js';
/** Discover the first authored hero image before the React runtime is ready. */
export function prioritizeHero(main){
 const section=main?.querySelector(':scope > div');
 const block=section?.querySelector('.ds-image');
 if(!block)return;
 const field=key=>block.children[imageCells.indexOf(key)];
 const value=cell=>cell?.querySelector('img')?.getAttribute('src')||cell?.querySelector('a')?.getAttribute('href')||cell?.textContent.trim();
 const local=value(field('p7372632e6c6f63616c'));
 const dark=document.documentElement.getAttribute('toranja-theme')?.includes('dark');
 const src=local||(dark&&value(field('p7372632e72656d6f74652e6461726b')))||value(field('p7372632e72656d6f74652e6c69676874'));
 if(!src||! /^(https?:|\/|\.\/)/.test(src))return;
 const link=document.createElement('link');link.rel='preload';link.as='image';link.href=src;link.fetchPriority='high';
 document.head.append(link);block.dataset.criticalImage='true';
}
