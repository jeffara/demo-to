import { FC } from 'react';
interface HeaderInlineTitleProps {
    title: string;
    isSkeleton: boolean;
    isTopPages: boolean;
    isAvatarType: boolean;
    isLarge: boolean;
    titleClasses: string;
}
export declare const HeaderInlineTitle: FC<HeaderInlineTitleProps>;
interface HeaderLargeTitleProps {
    title: string;
    isSkeleton: boolean;
    titleClasses: string;
    titleRowClasses: string;
}
export declare const HeaderLargeTitle: FC<HeaderLargeTitleProps>;
export {};
