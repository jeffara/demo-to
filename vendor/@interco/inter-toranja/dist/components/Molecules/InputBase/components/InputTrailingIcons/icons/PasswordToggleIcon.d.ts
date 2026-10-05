import { ReactElement } from 'react';
import { TagProps } from '../../../../../../types/shared';
interface PasswordToggleIconProps {
    showPassword: boolean;
    onToggle: () => void;
    onTag?: (data: TagProps) => void;
    label: string;
}
export declare const PasswordToggleIcon: ({ showPassword, onToggle, onTag, label, }: PasswordToggleIconProps) => ReactElement;
export {};
