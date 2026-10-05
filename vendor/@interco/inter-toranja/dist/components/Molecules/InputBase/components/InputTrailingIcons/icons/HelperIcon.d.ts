import { ReactElement, MouseEvent } from 'react';
import { TagProps } from '../../../../../../types/shared';
interface HelperIconProps {
    onHelper?: (event: MouseEvent<HTMLDivElement>) => void;
    onTag?: (data: TagProps) => void;
    label: string;
    componentType: string;
    isDisabled: boolean;
}
export declare const HelperIcon: ({ onHelper, onTag, label, componentType, isDisabled, }: HelperIconProps) => ReactElement;
export {};
