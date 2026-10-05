import { HintsProps } from '../../Atoms/Hints/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export declare enum ActionType {
    INCREMENT = "increment",
    DECREMENT = "decrement"
}
export declare enum InputCurrencyMask {
    BRL = "BRL",
    USD = "USD",
    ARS = "ARS"
}
export declare enum InputTypeValue {
    Monetary = "monetary",
    Numeric = "numeric"
}
export declare enum VariantNumeric {
    Integer = "integer",
    Decimal = "decimal"
}
type InputMoneyButtons = {
    showButtons: boolean;
    fixedIncrementValue?: number;
    fixedDecrementValue?: number;
};
export type InputMoneyProps = InputMoneyButtons & {
    state?: `${STATE.READ_ONLY}` | `${STATE.SKELETON}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.ERROR}`;
    hint?: HintsProps['hints'];
    currency: `${InputCurrencyMask}`;
    typeValue: `${InputTypeValue}`;
    variantNumeric: `${VariantNumeric}`;
    onChange: (value: number, valueMask: string) => void;
    onDebouncedChange?: (value: number, valueMask: string) => void;
    minValue?: number;
    maxValue?: number;
    onTag?: (data: TagProps) => void;
    defaultValue: number;
};
export {};
