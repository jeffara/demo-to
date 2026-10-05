import { AvatarProps, InitialCategory } from '../types';
import { IconName } from '../../../Atoms/Icon/types';
export declare const resolveContentProps: (props: AvatarProps) => {
    iconAsset: IconName;
    label: string | null;
    category: `${InitialCategory}` | null;
    src: string | undefined;
    alt: string | undefined;
    onError: (() => void) | undefined;
};
