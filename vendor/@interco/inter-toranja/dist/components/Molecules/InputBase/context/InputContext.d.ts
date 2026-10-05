import { PickerRange } from '../types';
import { MaskType, PhoneTypeValue, DateType } from '../utils/inputEnums';
import { FlagName } from '../../../Atoms/Flag/types';
import { TagProps } from '../../../../types/shared';
interface InputState {
    isError: boolean;
    isSuccess: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isTypeSearch: boolean;
    isSkeleton: boolean;
    showFlag: boolean;
    showPassword: boolean;
    showContent: boolean;
    hasValueInput: boolean;
    characterCount: number;
}
interface InputConfig {
    label: string;
    inputId: string;
    hintsId: string;
    counterId: string;
    limitMessageId: string;
    flagDescriptionId: string;
    ariaDescribedBy?: string;
    type: string;
    mask?: string;
    phoneType: PhoneTypeValue;
    dateType: DateType;
    pickerRange?: PickerRange;
    counter: number;
    placeholder?: string;
    dataTestId?: string;
    flag: FlagName;
    prefix?: string;
    state: string;
    showHelper: boolean;
    showClear: boolean;
    showCounter: boolean;
    errorMessages: string[];
    infoHints: string[];
    success: string;
    shouldShowErrors: boolean;
    shouldShowSuccess: boolean;
    shouldShowInfoHints: boolean;
}
interface InputHandlers {
    inputRef: React.RefObject<HTMLInputElement | null>;
    labelRef: React.RefObject<HTMLLabelElement | null>;
    setIsFocused: (focused: boolean) => void;
    setShowPassword: (show: boolean) => void;
    handleClear: () => void;
    handleChange: () => void;
    handleOpenDatePicker: () => void;
    handleLabelClick: () => void;
    onHelper?: (event?: React.MouseEvent) => void;
    onTag?: (data: TagProps) => void;
    getInputType: (maskType?: MaskType, showPassword?: boolean, inputType?: string) => string;
    getInputMode: (type: string, maskType?: MaskType) => string;
    getInputValueProps: () => {
        value: string | number | readonly string[];
    } | {
        defaultValue: string | number | readonly string[];
    };
}
export interface InputContextValue {
    state: InputState;
    config: InputConfig;
    handlers: InputHandlers;
}
export declare const useInputContext: () => InputContextValue;
export declare const InputProvider: import('react').Provider<InputContextValue | null>;
export {};
