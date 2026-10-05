import { ButtonConfig, FeedbackVariant, FeedbackScreenProps } from '../types';
import { HIERARCHY } from '../../../../utils/pattern';
interface VariantFlags {
    isCustomInformation: boolean;
    isCustomDestructive: boolean;
    isCustomVariant: boolean;
}
interface ResolvedContent {
    finalTitle: string;
    finalDescription: string;
    finalValue: string;
    finalSignalVariant: FeedbackVariant;
    finalPrimaryButton: ButtonConfig | null;
}
interface UseFeedbackScreenReturn extends ResolvedContent, VariantFlags {
    shouldShowAdditionalContent: boolean;
    shouldShowPoweredBy: boolean;
    shouldShowTertiaryButton: boolean;
    secondaryButtonHierarchy: HIERARCHY.SECONDARY | HIERARCHY.TERTIARY;
    buttonContainerClasses: string;
    containerClasses: string;
    contentClasses: string;
}
export declare const useFeedbackScreen: (props: FeedbackScreenProps) => UseFeedbackScreenReturn;
export {};
