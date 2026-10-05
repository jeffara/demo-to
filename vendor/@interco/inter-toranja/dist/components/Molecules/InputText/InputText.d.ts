import { FC } from 'react';
import { InputProps } from '../InputBase/types';
export interface InputTextProps extends Omit<InputProps<undefined>, 'dateType' | 'type'> {
    type?: 'text' | 'number';
    onDebouncedChange?: (value: string) => void;
}
export declare const InputText: FC<InputTextProps>;
