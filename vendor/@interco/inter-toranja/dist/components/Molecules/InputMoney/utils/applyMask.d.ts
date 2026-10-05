import { InputTypeValue, InputCurrencyMask } from '../types';
export interface ApplyMaskParams {
    typeValue: `${InputTypeValue}`;
    currency: `${InputCurrencyMask}`;
    isNumberInteger: boolean;
}
export declare const applyMask: (inputValue: number, params: ApplyMaskParams) => string;
