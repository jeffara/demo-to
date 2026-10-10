import { TagProps } from '../../../types/shared';
export declare enum StepperState {
    Disabled = "disabled",
    Enabled = "enabled",
    Skeleton = "skeleton",
    Error = "error"
}
export declare enum StepperMask {
    BRL = "BRL",
    USD = "USD"
}
export type StepperProps = {
    enableInput: boolean;
    max: number;
    min: number;
    state: `${StepperState}`;
    /** Field border is independent of `enableInput`. Defaults to true. */
    hasBorder?: boolean;
    step?: number;
    mask?: boolean;
    maskType?: StepperMask;
    value?: number;
    onValueChange?: (value: number) => void;
    onTag?: (data: TagProps) => void;
};
