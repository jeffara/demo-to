import { ReactElement } from 'react';
type Option<T extends string> = {
    value: T;
    label: string;
};
export declare function ThemeSelector<T extends string>({ label, value, options, onChange, }: {
    label: string;
    value: T;
    options: ReadonlyArray<Option<T>>;
    onChange: (v: T) => void;
}): ReactElement;
export {};
