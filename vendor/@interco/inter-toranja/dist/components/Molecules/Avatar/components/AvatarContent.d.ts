import { ReactNode } from 'react';
import { AvatarProps } from '../types';
import { FlagName } from '../../../Atoms/Flag/types';
import { IconName } from '../../../Atoms/Icon/types';
interface AvatarContentProps {
    variant: AvatarProps['variant'];
    state: AvatarProps['state'];
    iconAsset: IconName;
    src: string | undefined;
    alt: string | undefined;
    onError: (() => void) | undefined;
    editIcon: IconName;
    flag: FlagName | undefined;
    onEdit: (() => void) | undefined;
    shouldShowEdit: boolean;
    shouldShowFlag: boolean;
    flagClassName: string;
    initials: string | null;
    initialTypographyClassName: string;
}
export declare const AvatarContent: ({ variant, state, iconAsset, src, alt, onError, editIcon, flag, onEdit, shouldShowEdit, shouldShowFlag, flagClassName, initials, initialTypographyClassName, }: AvatarContentProps) => ReactNode;
export {};
