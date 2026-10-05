import { StyleType } from '../../../utils/pattern';
export type SpinnerSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type SpinnerVariant = Omit<StyleType, 'destructive'> | 'staticWhite';
export type SpinnerProps = {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
    progress?: number;
    ariaLabel?: string | null;
};
