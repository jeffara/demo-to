import { AvatarProps } from '../types';
import { BadgeProps } from '../../../Atoms/Badge/types';
import { FlagName } from '../../../Atoms/Flag/types';
import { IconName } from '../../../Atoms/Icon/types';
interface ResolvedSizeProps {
    hasBadge: boolean;
    badgeProps: BadgeProps | undefined;
    edit: boolean;
    onEdit: (() => void) | undefined;
    editIcon: IconName;
    flag: FlagName | undefined;
    canShowFlag: boolean;
}
export declare const resolveSizeProps: (props: AvatarProps) => ResolvedSizeProps;
export {};
