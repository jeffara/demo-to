import { FocusEvent, MouseEvent, ReactElement } from 'react';
import { TagProps } from '../../../../../../types/shared';
interface HelperIconProps {
    onHelper?: (event: MouseEvent<HTMLDivElement>) => void;
    onTag?: (data: TagProps) => void;
    label: string;
    componentType: string;
    isDisabled: boolean;
    id?: string;
    'aria-describedby'?: string;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
}
export declare const HelperIcon: ({ onHelper, onTag, label, componentType, isDisabled, id, onFocus, onBlur, "aria-describedby": describedBy, }: HelperIconProps) => ReactElement;
export {};
