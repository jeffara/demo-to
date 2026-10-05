import { ReactNode } from 'react';
import { IconName } from '../../../Atoms/Icon';
interface AvatarEditButtonProps {
    onClick: () => void;
    editIcon?: IconName;
}
export declare const AvatarEditButton: ({ onClick, editIcon, }: AvatarEditButtonProps) => ReactNode;
export {};
