import { FC } from 'react';
import { HeaderType, HeaderVariant, HeaderLogo as HeaderLogoType } from '../constants';
import { HeaderAvatarConfig } from '../types';
import { TagProps } from '../../../../types/shared';
import { STATE } from '../../../../utils/pattern';
interface HeaderLeadingProps {
    variant: `${HeaderVariant}`;
    type: `${HeaderType}`;
    isSkeleton: boolean;
    isSearchExpanded?: boolean;
    onBackClick?: () => void;
    onCloseClick?: () => void;
    avatar?: HeaderAvatarConfig;
    logo?: `${HeaderLogoType}`;
    state: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    onTag?: (data: TagProps) => void;
}
export declare const HeaderLeading: FC<HeaderLeadingProps>;
export {};
