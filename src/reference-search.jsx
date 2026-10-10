/** Official Toranja control for the read-only EDS reference. */
import React,{useState} from 'react';import {createRoot} from 'react-dom/client';import {flushSync} from 'react-dom';
import {InputSearch} from '../vendor/@interco/inter-toranja/dist/components/Molecules/InputSearch/InputSearch.js';
import {Button} from '../vendor/@interco/inter-toranja/dist/components/Molecules/Button/Button.js';
function Search({onChange}){const [value,setValue]=useState('');const change=v=>{setValue(v);onChange(v)};return <><InputSearch id="eds-property-search-control" label="Buscar uma propriedade" aria-label="Buscar uma propriedade" state="enabled" placeholder="Ex.: tamanho, imagem, destino…" value={value} onChange={change}/><Button type="button" label="Limpar busca" hierarchy="tertiary" size="medium" onClick={()=>change('')}/></>}
export function mountReferenceSearch(host,onChange){const root=createRoot(host);flushSync(()=>root.render(<Search onChange={onChange}/>));return()=>root.unmount();}
