import { IconName } from '../../Atoms/Icon/types';
import { TagProps as TagPropsComponents } from '../../Atoms/Tag/types';
import { AvatarVariant, InitialCategory } from '../Avatar/types';
import { Size, TagProps } from '../../../types/shared';
import { VARIANT } from '../../../utils/pattern';
export interface BaseMenuItemProps {
    tag?: string;
    size: `${Size}`;
    label: string;
    color?: string;
    hierarchy?: string;
    skeleton?: boolean;
    children?: React.ReactNode;
    onClick: () => void;
    onTag?: (data: TagProps) => void;
}
interface AvatarMenuItemBase extends BaseMenuItemProps {
    variant: `${VARIANT.AVATAR}`;
}
interface AvatarMenuItemPicture extends AvatarMenuItemBase {
    avatarVariant?: `${AvatarVariant.Picture}`;
    src: string;
    alt: string;
}
interface AvatarMenuItemInitial extends AvatarMenuItemBase {
    avatarVariant: `${AvatarVariant.Initial}`;
    category?: `${InitialCategory}`;
}
export type AvatarMenuItemProps = AvatarMenuItemPicture | AvatarMenuItemInitial;
export interface IconMenuItemProps extends BaseMenuItemProps {
    variant: `${VARIANT.ICON}`;
    icon: IconName;
}
type MenuItemProps = AvatarMenuItemProps | IconMenuItemProps;
type TagPropsMenuItem = Partial<Omit<TagPropsComponents, 'size'>>;
export type { MenuItemProps, TagPropsMenuItem };
