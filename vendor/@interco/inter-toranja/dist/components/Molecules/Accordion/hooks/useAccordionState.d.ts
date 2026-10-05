import { default as React } from 'react';
import { STATE } from '../../../../utils/pattern';
/**
 * Interface for useAccordionState parameters
 */
interface UseAccordionStateParams {
    expand: boolean;
    state: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON;
    accordionRef: React.RefObject<HTMLDivElement | null>;
}
/**
 * Interface for useAccordionState return type
 */
export interface UseAccordionStateReturn {
    isExpanded: boolean;
    toggleExpanded: () => void;
    isAccordionFocused: boolean;
    isDisabled: boolean;
    isSkeleton: boolean;
}
/**
 * Hook responsible for managing Accordion expand/collapse state
 */
export declare const useAccordionState: ({ expand, state, accordionRef, }: UseAccordionStateParams) => UseAccordionStateReturn;
export {};
