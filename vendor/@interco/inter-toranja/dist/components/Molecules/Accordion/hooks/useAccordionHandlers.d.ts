import { default as React } from 'react';
import { STATE } from '../../../../utils/pattern';
/**
 * Interface for useAccordionHandlers parameters
 */
interface UseAccordionHandlersParams {
    state: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON;
    isExpanded: boolean;
    toggleExpanded: () => void;
    handleTagging: () => void;
    setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Interface for useAccordionHandlers return type
 */
export interface UseAccordionHandlersReturn {
    handleClick: (e: React.MouseEvent) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
}
/**
 * Hook responsible for managing Accordion interaction handlers
 */
export declare const useAccordionHandlers: ({ state, isExpanded, toggleExpanded, handleTagging, setShowContent, }: UseAccordionHandlersParams) => UseAccordionHandlersReturn;
export {};
