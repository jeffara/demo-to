import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {IconButton} from '../vendor/@interco/inter-toranja/dist/components/Molecules/Button/IconButton/IconButton.js';
function MenuButton({nav}){
 const [open,setOpen]=useState(false),ref=useRef();
 useEffect(()=>{nav.dataset.open=String(open)},[open]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape'){setOpen(false);ref.current?.querySelector('button')?.focus()}};const click=e=>{if(e.target.closest('a'))setOpen(false)};document.addEventListener('keydown',close);nav.addEventListener('click',click);return()=>{document.removeEventListener('keydown',close);nav.removeEventListener('click',click)}},[]);
 return <div ref={ref}><IconButton icon={open?'ic_close':'ic_menu'} onClick={()=>setOpen(v=>!v)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls={nav.id}/></div>;
}

export function mountMenuButton(host,nav){const root=createRoot(host);flushSync(()=>root.render(<MenuButton nav={nav}/>));return()=>root.unmount();}
