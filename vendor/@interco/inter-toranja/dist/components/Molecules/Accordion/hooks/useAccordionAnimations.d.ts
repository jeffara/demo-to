import { useAnimation } from 'framer-motion';
export declare const ANIMATION_CONFIG: {
    readonly ACCORDION_EXPAND: {
        readonly duration: 0.4;
        readonly ease: readonly [0.2, 0, 0.38, 0.9];
    };
    readonly ACCORDION_CONTENT: {
        readonly duration: 0.24;
        readonly ease: readonly [0, 0, 0.38, 0.9];
    };
    readonly ACCORDION_CONTENT_EXIT: {
        readonly duration: 0.15;
        readonly ease: readonly [0.2, 0, 1, 0.9];
    };
    readonly CHEVRON_ROTATE: {
        readonly duration: 0.4;
        readonly ease: readonly [0.2, 0, 0.38, 0.9];
    };
    readonly FADE_IN: {
        readonly duration: 0.24;
        readonly ease: readonly [0, 0, 0.38, 0.9];
    };
    readonly FADE_OUT: {
        readonly duration: 0.15;
        readonly ease: readonly [0.2, 0, 1, 0.9];
    };
};
/**
 * Interface for useAccordionAnimations parameters
 */
interface UseAccordionAnimationsParams {
    isExpanded: boolean;
}
/**
 * Interface for useAccordionAnimations return type
 */
export interface UseAccordionAnimationsReturn {
    showContent: boolean;
    setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
    variants: {
        expanded: {
            height: string;
        };
        collapsed: {
            height: string;
        };
    };
    controls: ReturnType<typeof useAnimation>;
    contentControls: ReturnType<typeof useAnimation>;
    contentVariants: {
        hidden: {
            opacity: number;
        };
        visible: {
            opacity: number;
        };
    };
}
/**
 * Hook responsible for managing Accordion animations
 */
export declare const useAccordionAnimations: ({ isExpanded, }: UseAccordionAnimationsParams) => UseAccordionAnimationsReturn;
export {};
