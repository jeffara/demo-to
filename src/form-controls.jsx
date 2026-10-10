/** Form value bridge; rendering and interactions belong to Toranja 2.0.1. */
import React from 'react';
import {Select as OfficialSelect,Stepper as OfficialStepper} from '../vendor/@interco/inter-toranja/dist/components.js';
export function Select({onChange,onOptionSelect,...props}){
 return <OfficialSelect {...props} onOptionSelect={option=>{onOptionSelect?.(option);onChange?.(option.value)}}/>;
}
export function Stepper({onChange,onValueChange,defaultValue,...props}){
 return <OfficialStepper {...props} onValueChange={value=>{onValueChange?.(value);onChange?.(value)}}/>;
}
