import { BadgeProps } from '../../Atoms/Badge/types';
import { FlagName } from '../../Atoms/Flag/types';
import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
import { SIZE, STATE } from '../../../utils/pattern';
export declare enum AvatarVariant {
    Icon = "icon",
    Initial = "initial",
    Picture = "picture"
}
export declare enum AvatarColor {
    Image = "image",
    Soft = "soft",
    Softest = "softest"
}
export declare enum InitialCategory {
    Business = "business",
    Person = "person"
}
type IconProps = {
    icon: IconName;
    variant: `${AvatarVariant.Icon}`;
};
type InitialProps = {
    category: `${InitialCategory}`;
    label: string;
    variant: `${AvatarVariant.Initial}`;
};
export type PictureProps = {
    alt: string;
    onError?: () => void;
    src: string;
    variant: `${AvatarVariant.Picture}`;
};
type ContentProps = IconProps | InitialProps | PictureProps;
type SizeBadgeProps = {
    badgeProps?: BadgeProps;
    hasBadge?: boolean;
};
type SmallProps = {
    size: `${SIZE.SMALL}`;
    edit?: never;
    onEdit?: never;
    editIcon?: never;
    flag?: never;
} & SizeBadgeProps;
type MediumProps = {
    size: `${SIZE.MEDIUM}`;
    edit?: never;
    onEdit?: never;
    editIcon?: never;
    flag?: FlagName;
} & SizeBadgeProps;
type LargeEditProps = {
    size: `${SIZE.LARGE}`;
    edit: true;
    onEdit: () => void;
    editIcon?: IconName;
    flag?: never;
};
type LargeWithoutEditProps = {
    size: `${SIZE.LARGE}`;
    edit?: false;
    onEdit?: never;
    editIcon?: never;
    flag?: FlagName;
};
type SizeProps = SmallProps | MediumProps | LargeEditProps | LargeWithoutEditProps;
export type AvatarProps = {
    color: `${AvatarColor}`;
    onTag?: (data: TagProps) => void;
    onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
    state: `${STATE.DISABLED | STATE.ENABLED | STATE.SKELETON}`;
} & ContentProps & SizeProps;
export {};
