import { FC } from 'react';
import { InputProps } from '../InputBase/types';
export type InputPasswordProps = Omit<InputProps<undefined>, 'phoneType' | 'dateType' | 'type' | 'counter' | 'showCounter' | 'mask' | 'showHelper'>;
export declare const InputPassword: FC<InputPasswordProps>;
