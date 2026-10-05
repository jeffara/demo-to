import { InputCurrencyMask, InputTypeValue } from '../types';
interface GetMessagesParams {
    typeValue: `${InputTypeValue}`;
    currency: `${InputCurrencyMask}`;
    minValue: number;
    maxValue: number;
    fixedIncrementValue?: number;
    isNumberInteger: boolean;
    isReadOnly?: boolean;
    showButtons?: boolean;
    defaultValue?: number;
}
export declare const getMessages: ({ typeValue, currency, minValue, maxValue, fixedIncrementValue, isNumberInteger, isReadOnly, showButtons, defaultValue, }: GetMessagesParams) => {
    errorMinMessage: string;
    errorMaxMessage: string;
    validationError: string | null;
};
export {};
