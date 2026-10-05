import { ReactElement } from 'react';
import { TagProps } from '../../../../../../types/shared';
interface ClearIconProps {
    onClear: () => void;
    onTag?: (data: TagProps) => void;
    label: string;
    componentType: string;
}
export declare const ClearIcon: ({ onClear, onTag, label, componentType, }: ClearIconProps) => ReactElement;
export {};
