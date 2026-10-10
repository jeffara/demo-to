import { default as React } from 'react';
export declare enum RadioVariant {
    Default = "default",
    Error = "error"
}
export declare enum RadioState {
    Disabled = "disabled",
    Enabled = "enabled",
    Skeleton = "skeleton"
}
export type RadioButtonProps = {
    checked?: boolean;
    children?: React.ReactNode;
    hasError?: boolean;
    id: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelect: () => void;
    state: `${RadioState}`;
    value: string;
    variant: `${RadioVariant}`;
};
