import { CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { SectionTitleProps } from '../types';
import { TagProps } from '../../../../types/shared';
interface UseSectionTitleReturn {
    title: string;
    showDescription: boolean;
    description: string | undefined;
    icon: SectionTitleProps['icon'];
    state: NonNullable<SectionTitleProps['state']>;
    resolvedIconState: NonNullable<SectionTitleProps['state']>;
    isSkeleton: boolean;
    isNavigation: boolean;
    isInteractive: boolean;
    shouldShowIcon: boolean;
    sectionClassName: string;
    iconClassName: string;
    skeletonClassName: string;
    descriptionClassName: string;
    descriptionStyle: CSSProperties | undefined;
    handleClick: (event: MouseEvent<HTMLElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    handleNeutralIconTag: (dataNeutralIconButton: TagProps) => void;
}
export declare const useSectionTitle: (props: Readonly<SectionTitleProps>) => UseSectionTitleReturn;
export {};
