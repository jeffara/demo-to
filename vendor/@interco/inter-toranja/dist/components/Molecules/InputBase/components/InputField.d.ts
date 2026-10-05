import { FocusEventHandler, InputHTMLAttributes, ReactElement } from 'react';
interface InputFieldProps {
    restProps: Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onFocus' | 'onBlur' | 'onInput' | 'id' | 'aria-describedby'> & {
        onFocus?: FocusEventHandler<HTMLInputElement>;
        onBlur?: FocusEventHandler<HTMLInputElement>;
    };
}
export declare const InputField: ({ restProps }: InputFieldProps) => ReactElement;
export {};
