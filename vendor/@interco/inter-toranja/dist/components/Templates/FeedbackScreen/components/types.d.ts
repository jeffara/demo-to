import { ReactNode } from 'react';
import { AlertConfig, ButtonConfig, ContentItemConfig, FeedbackScreenProps, FeedbackVariant } from '../types';
import { NestedTagContext } from '../utils/wrapNestedOnTag';
import { HIERARCHY } from '../../../../utils/pattern';
export interface FeedbackHeroProps {
    state: NonNullable<FeedbackScreenProps['state']>;
    title: string;
    value: string;
    description: string;
    signalVariant: FeedbackVariant;
    shouldShowPoweredBy: boolean;
    alert?: AlertConfig;
}
export interface FeedbackContentListProps {
    state: NonNullable<FeedbackScreenProps['state']>;
    contentItems?: ContentItemConfig[];
}
export interface FeedbackAdditionalContentProps {
    shouldShow: boolean;
    children?: ReactNode;
}
export interface FeedbackButtonsProps {
    state: NonNullable<FeedbackScreenProps['state']>;
    buttonContainerClasses: string;
    secondaryButton?: ButtonConfig;
    secondaryButtonHierarchy: HIERARCHY.SECONDARY | HIERARCHY.TERTIARY;
    primaryButton: ButtonConfig | null;
    tertiaryButton?: ButtonConfig;
    shouldShowTertiaryButton: boolean;
    onTag: FeedbackScreenProps['onTag'];
    taggingContext: NestedTagContext;
}
