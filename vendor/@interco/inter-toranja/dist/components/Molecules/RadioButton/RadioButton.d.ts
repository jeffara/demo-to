import { ReactNode } from 'react';
import { RadioButtonProps } from './types';
export declare const Radio: {
    ({ children }: {
        children: ReactNode;
    }): ReactNode;
    Option: ({ checked, children, id, name, onChange, state, value, variant, }: RadioButtonProps) => ReactNode;
};
