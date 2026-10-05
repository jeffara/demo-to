import { HTMLAttributes } from 'react';
export type CounterProps = HTMLAttributes<HTMLDivElement> & {
    count: number;
    maxLength: number;
};
