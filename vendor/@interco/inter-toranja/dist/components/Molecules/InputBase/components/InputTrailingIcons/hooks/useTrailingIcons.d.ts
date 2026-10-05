import { MaskType } from '../../../utils/inputEnums';
import { InputState } from '../../../types';
interface TrailingIconConfig {
    id: string;
    type: 'search-clear' | 'clear' | 'helper' | 'loading' | 'select' | 'password' | 'calendar';
    shouldRender: boolean;
    isDisabled: boolean;
}
interface UseTrailingIconsParams {
    type: string;
    mask?: MaskType;
    hasValueInput: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    showClear: boolean;
    showHelper: boolean;
    componentState: InputState;
    showPassword: boolean;
}
export declare const useTrailingIcons: (params: UseTrailingIconsParams) => TrailingIconConfig[];
export {};
