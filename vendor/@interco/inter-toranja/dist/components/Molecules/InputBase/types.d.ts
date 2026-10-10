import { InputHTMLAttributes } from 'react';
import { DateType, InputType, MaskType, PhoneTypeValue, ForceBarLevel } from './utils/inputEnums';
import { FlagName } from '../../Atoms/Flag/types';
import { MoleculesTagProps, TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
type MaskToInputType = {
    [MaskType.EMAIL]: InputType.EMAIL;
    [MaskType.PHONE]: InputType.TEL;
    [MaskType.CPF]: InputType.NUMBER;
    [MaskType.CEP]: InputType.NUMBER;
    [MaskType.DATE]: InputType.DATE;
    [MaskType.MONETARY]: InputType.TEXT;
};
type ConditionalInputType<M extends MaskType | string | undefined> = M extends undefined ? InputType | string : M extends keyof MaskToInputType ? MaskToInputType[M] | string : never;
export type InputState = `${STATE.ERROR}` | `${STATE.SKELETON}` | `${STATE.LOADING}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.READ_ONLY}` | `${STATE.SUCCESS}`;
export type InputFieldScalar = string | number;
export type InputFieldValue = InputFieldScalar | readonly string[];
export type ResolvedInputValueProps = {
    value: InputFieldValue;
} | {
    defaultValue: InputFieldValue;
};
export type UpTo3<T> = [] | [T] | [T, T] | [T, T, T];
export interface PickerRange {
    start: string;
    end: string;
}
type InputPropsWithLabel<M extends MaskType | string | undefined> = {
    label: string;
    type?: Exclude<ConditionalInputType<M>, InputType.SEARCH>;
} & InputPropsBase;
type InputPropsWithoutLabel = {
    label?: string;
    type: InputType.SEARCH;
} & InputPropsBase;
export type ForceBarState = `${ForceBarLevel.DEFAULT}` | `${ForceBarLevel.WEAK}` | `${ForceBarLevel.MEDIUM}` | `${ForceBarLevel.STRONG}`;
export interface ForceBarProps {
    state: ForceBarState;
    activeSegments: 0 | 1 | 2 | 3;
    label?: string;
    className?: string;
    shouldRender?: boolean;
}
export type InputPropsBase = {
    customTagProps?: MoleculesTagProps;
    hints?: UpTo3<string> | string;
    error?: UpTo3<string>;
    success?: string;
    onHelper?: (event?: React.MouseEvent) => void;
    /**
     * Callback fired immediately on each keystroke.
     * Use for: UI updates, analytics/tagging, synchronous validations.
     * @param value - Current input value
     * @example
     * onChange={(value) => {
     *   setSearchTerm(value) // Immediate visual feedback
     *   trackUserInput(value) // Accurate analytics
     * }}
     */
    onChange?: (value: string) => void;
    showCounter?: boolean;
    showHelper?: boolean;
    showHint?: boolean;
    showFlag?: boolean;
    showClear?: boolean;
    showContent?: boolean;
    /** Uso interno do Select desktop (`hideLabelWhenFilled`); não documentar como API de formulário genérica. */
    suppressVisualLabel?: boolean;
    showForceBar?: boolean;
    forceBar?: ForceBarProps;
    flag?: FlagName;
    prefix?: string;
    state?: InputState;
    mask?: `${MaskType.EMAIL}` | `${MaskType.PHONE}` | `${MaskType.CEP}` | `${MaskType.CPF}` | `${MaskType.DATE}` | `${MaskType.MONETARY}`;
    counter?: number;
    phoneType?: PhoneTypeValue;
    dateType?: DateType;
    pickerRange?: PickerRange;
    suppressNativeDatePicker?: boolean;
    onTag?: (data: TagProps) => void;
    ['data-testid']?: string;
    /**
     * Custom ID for the input element. When provided, it will be used as the input ID instead of auto-generating from label.
     * Use this when you have multiple inputs with the same label to avoid ID conflicts.
     * @example
     * id="email-primary" // Will use this ID, ignoring the label
     * @example
     * id="email-confirm" // Another input with same label but different ID
     */
    id?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
export type InputProps<M extends MaskType | string | undefined = undefined> = InputPropsWithLabel<M> | InputPropsWithoutLabel;
export type InputModeType = 'email' | 'search' | 'tel' | 'text' | 'url' | 'none' | 'numeric' | 'decimal' | undefined;
export {};
