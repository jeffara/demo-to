/** Adaptações versionadas para lacunas do contrato oficial 1.13.3. Vendor permanece intacto. */
import React,{useState,useEffect,useRef} from 'react';
import * as DS from '../vendor/@interco/inter-toranja/dist/components.js';
import {ListItemBase} from '../vendor/@interco/inter-toranja/dist/components/Molecules/ListItemBase/ListItemBase.js';
import {useListItemControlViewModel} from '../vendor/@interco/inter-toranja/dist/components/Molecules/ListItemControl/hooks/useListItemControlViewModel.js';
const h=React.createElement;
export function Stepper({value,defaultValue,min=0,max=100,step=1,state='enabled',enableInput=true,hasBorder=true,mask=false,maskType='BRL',onChange,onTag,...rest}){
 const [internal,setInternal]=useState(defaultValue??value??min);const current=Number(value??internal);const blocked=['disabled','skeleton','loading'].includes(state);
 const update=v=>{const n=Math.max(Number(min),Math.min(Number(max),Number(v)));if(!Number.isFinite(n)||blocked)return;setInternal(n);onChange?.(n);onTag?.({name:'interaction',ComponentProperties:{component_name:'Stepper',state}});};
 const display=mask&&!enableInput?new Intl.NumberFormat('pt-BR',{style:'currency',currency:maskType}).format(current):current;
 return <div className={'stepper stepper__'+state} data-testid="stepper" onClick={e=>e.stopPropagation()}>
  <DS.IconButton icon="ic_remove" size="small" hierarchy="secondary" disabled={blocked||current<=min} onClick={()=>update(current-Number(step))} aria-label="Diminuir" data-testid="decrement__button"/>
  <div className={'stepper__field '+(!hasBorder?'stepper__field--borderless':'')}><input className="stepper__value-input" aria-label={rest['aria-label']||'Quantidade'} type={mask&&!enableInput?'text':'number'} min={min} max={max} step={step} value={display} readOnly={!enableInput} disabled={blocked} onChange={e=>update(e.target.value)} /></div>
  <DS.IconButton icon="ic_add" size="small" hierarchy="secondary" disabled={blocked||current>=max} onClick={()=>update(current+Number(step))} aria-label="Aumentar" data-testid="increment__button"/>
 </div>;
}
export function ListItemControl(props){
 const v=useListItemControlViewModel(props);if(props.trailingVariant!=='stepper')return <DS.ListItemControl {...props}/>;
 return <ListItemBase {...props} interactive={false} testId="listItemControl" componentName="ListItemControl" leading={v.leadingElement} content={v.contentElement} trailing={<Stepper {...props.trailingProps} state={props.state} onChange={props.trailingProps?.onStepperChange} onTag={props.onTag}/>}/>;
}
export function ListItemCompatibility(p){
 const state=p.state||'enabled';let leading=null,trailing=null;
 if(p.showLeading!==false){if(p.leadingAvatar)leading=<DS.Avatar {...p.leadingAvatar} state={state}/>;
 else if(p.leadingCheckbox)leading=<DS.Checkbox {...p.leadingCheckbox} state={state}/>;
 else if(p.leadingFlag)leading=<DS.Flag iconFlag={p.leadingFlag} state={state}/>;
 else if(p.leadingIcon)leading=<DS.Icon asset={p.leadingIcon} state={state}/>;
 else if(p.leadingImage)leading=<DS.Image src={{local:p.leadingImage.src}} contentDescription={p.leadingImage.alt||''}/>;
 else if(p.leadingPaymentMethod)leading=<DS.PaymentMethods paymentMethod={p.leadingPaymentMethod} state={state}/>;}
 if(p.showTrailing!==false){if(p.trailingButton)trailing=<DS.Button {...p.trailingButton} state={state} size="small"/>;
 else if(p.trailingCheckbox)trailing=<DS.Checkbox {...p.trailingCheckbox} state={state}/>;
 else if(p.trailingNeutralIconButton)trailing=<DS.NeutralIconButton {...p.trailingNeutralIconButton} state={state}/>;
 else if(p.trailingRadioButton)trailing=<DS.Radio.Option {...p.trailingRadioButton} state={state}/>;
 else if(p.trailingStepper)trailing=<Stepper {...p.trailingStepper} state={state}/>;
 else if(p.trailingSwitch)trailing=<DS.Switch {...p.trailingSwitch} state={state}/>;
 else if(p.trailingTagChevron)trailing=<span>{p.trailingTagChevron.tag&&<DS.Tag {...p.trailingTagChevron.tag}/>}<DS.Icon asset="ic_chevron_right"/></span>;
 else if(p.trailingText)trailing=<DS.Text>{p.trailingText.label}<br/>{p.trailingText.paragraph}</DS.Text>;}
 const content=<div><DS.Text textWeight="bold">{p.label}</DS.Text>{p.paragraph&&<DS.Text>{p.paragraph}</DS.Text>}{p.paragraphSupport&&<DS.Text>{p.paragraphSupport}</DS.Text>}{p.tags?.map((tag,i)=><DS.Tag key={i} {...tag}/>)}</div>;
 return <ListItemBase {...p} interactive={p.leadingCheckbox||p.trailingButton||p.trailingCheckbox||p.trailingNeutralIconButton||p.trailingRadioButton||p.trailingStepper||p.trailingSwitch?false:p.interactive} state={state} componentName="ListItem" testId="listItem" leading={leading&&<span onClick={e=>e.stopPropagation()}>{leading}</span>} content={content} trailing={trailing&&<span onClick={e=>e.stopPropagation()}>{trailing}</span>}/>;
}
export function Select({options=[],onChange,onClick,...props}){
 const [open,setOpen]=useState(false),[active,setActive]=useState(0);const root=useRef(),trigger=useRef();const disabled=props.disabled||props.readOnly||['disabled','readOnly','read-only','skeleton'].includes(props.state);
 const value=o=>o&&typeof o==='object'?o.value:o,label=o=>o&&typeof o==='object'?o.label:o;
 const close=()=>{setOpen(false);trigger.current?.focus();};
 useEffect(()=>{if(!open)return;const click=e=>{if(!root.current?.contains(e.target))setOpen(false)};document.addEventListener('pointerdown',click);return()=>document.removeEventListener('pointerdown',click)},[open]);
 const choose=i=>{const o=options[i];if(!o||o.disabled)return;onChange?.(value(o));close()};
 const keys=e=>{if(disabled)return;if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();return;}if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();setOpen(true);const available=options.map((o,i)=>o.disabled?-1:i).filter(i=>i>=0);let next=e.key==='Home'?0:e.key==='End'?available.length-1:available.indexOf(active)+(e.key==='ArrowDown'?1:-1);setActive(available[(next+available.length)%available.length]??0);}if(['Enter',' '].includes(e.key)){e.preventDefault();open?choose(active):setOpen(true)}};
 return <div ref={root} className="ds-select" onKeyDown={keys}><div ref={trigger} role="combobox" tabIndex={disabled?-1:0} aria-label={props.label||'Selecione'} aria-expanded={open} aria-haspopup="listbox" aria-controls={(props.id||'select')+'-options'} aria-activedescendant={open?(props.id||'select')+'-option-'+active:undefined} aria-disabled={!!disabled} onClick={()=>{if(!disabled){setOpen(x=>!x);onClick?.();}}}><DS.Select {...props} onClick={()=>{}}/></div>{open&&<ul id={(props.id||'select')+'-options'} role="listbox" className="ds-options" aria-label={props.label||'Opções'}>{options.map((o,i)=><li key={i} id={(props.id||'select')+'-option-'+i} role="option" aria-disabled={!!o.disabled} aria-selected={props.value===value(o)} className={active===i?'active':''} onMouseDown={e=>e.preventDefault()} onMouseMove={()=>setActive(i)} onClick={()=>choose(i)}>{label(o)}</li>)}</ul>}</div>;
}
