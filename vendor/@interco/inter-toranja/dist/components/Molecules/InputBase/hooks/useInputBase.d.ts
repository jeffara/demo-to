import { FocusEvent, InputHTMLAttributes } from 'react';
import { InputContextValue } from '../context/InputContext';
import { ForceBarProps, InputProps } from '../types';
type InputRestProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onFocus' | 'onBlur' | 'onInput' | 'id' | 'aria-describedby'>;
interface UseInputBaseResult {
    contextValue: InputContextValue;
    forceBar: ForceBarProps & {
        shouldRender: boolean;
        className: string;
    };
    restProps: InputRestProps;
    shouldRenderLabel: boolean;
    isSkeleton: boolean;
    isDisabled: boolean;
    isError: boolean;
    isSuccess: boolean;
    isReadOnly: boolean;
    isTypeSearch: boolean;
    handleInputContainerFocusOut: (event: FocusEvent<HTMLDivElement>) => void;
}
export declare const useInputBase: <M extends string | undefined = undefined>(props: InputProps<M>) => UseInputBaseResult;
export {};
