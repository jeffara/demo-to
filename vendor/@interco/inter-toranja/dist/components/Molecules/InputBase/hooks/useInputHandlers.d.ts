import { FocusEvent } from 'react';
import { MaskType, DateType, PhoneTypeValue } from '../utils/inputEnums';
import { InputProps, InputState, PickerRange } from '../types';
import { TagProps } from '../../../../types/shared';
interface UseInputHandlersProps<M extends MaskType | string | undefined = undefined> {
    onChange?: (value: string) => void;
    state?: InputState;
    mask?: `${MaskType.EMAIL}` | `${MaskType.PHONE}` | `${MaskType.CEP}` | `${MaskType.CPF}` | `${MaskType.DATE}` | `${MaskType.MONETARY}`;
    phoneType?: PhoneTypeValue;
    dateType?: DateType;
    pickerRange?: PickerRange;
    counter: number;
    onTag?: (data: TagProps) => void;
    props: Partial<InputProps<M>>;
    label: string;
    placeholder: string;
    defaultValue: string;
    componentName?: string;
    hints: string[] | string;
}
interface UseInputHandlersReturn {
    inputRef: React.RefObject<HTMLInputElement | null>;
    labelRef: React.RefObject<HTMLLabelElement | null>;
    isFocused: boolean;
    hasValueInput: boolean;
    characterCount: number;
    validationErrors: string[];
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    handleClear: () => void;
    handleInputContainerFocusOut: (event: FocusEvent<HTMLDivElement>) => void;
    handleChange: () => boolean;
    handleOpenDatePicker: () => void;
    getInputMode: (type: string, maskType?: MaskType) => string;
    getInputType: (maskType?: MaskType, showPassword?: boolean, inputType?: string) => string;
}
export declare function useInputHandlers<M extends MaskType | undefined>({ onChange, state, hints, mask, phoneType, dateType, pickerRange, counter, defaultValue, onTag, label, placeholder, props, }: UseInputHandlersProps<M>): UseInputHandlersReturn;
export {};
