import { FC, MouseEvent } from 'react';
import { InputProps } from '../InputBase/types';
type SelectProps = Omit<InputProps<undefined>, 'phoneType' | 'type' | 'counter' | 'showCounter'> & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onClickHelper?: () => void;
};
export declare const Select: FC<SelectProps>;
export {};
