import { AvatarMenuItemProps } from './types';
import { AvatarVariant, InitialCategory } from '../Avatar/types';
type AvatarConfig = {
    variant: `${AvatarVariant.Initial}`;
    color: 'soft';
    category: `${InitialCategory}`;
    label: string;
} | {
    variant: `${AvatarVariant.Picture}`;
    color: 'image';
    src: string;
    alt: string;
};
export declare const useMenuItemAvatar: (props: AvatarMenuItemProps | null, label: string) => AvatarConfig | null;
export {};
