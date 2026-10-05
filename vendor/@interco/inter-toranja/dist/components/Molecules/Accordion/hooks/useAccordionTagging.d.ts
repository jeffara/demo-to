import { AccordionLeadingProps } from '../types';
import { TagProps } from '../../../../types/shared';
import { STATE } from '../../../../utils/pattern';
/**
 * Interface for leading properties result
 */
export interface LeadingProperties {
    leading_variant?: string;
    leading_icon_variant?: string;
    leading_avatar_variant?: string;
}
/**
 * Helper function to extract leading variant and properties
 *
 * @param showLeading - Whether the leading element is shown
 * @param leading - Leading element configuration
 * @returns Object with leading properties for tagging
 */
export declare const getLeadingProperties: (showLeading: boolean, leading?: AccordionLeadingProps) => LeadingProperties;
/**
 * Helper function to determine the current state based on disabled and skeleton flags
 *
 * @param disabled - Whether the accordion is disabled
 * @param isSkeleton - Whether the accordion is in skeleton state
 * @returns Current state string for tagging
 */
export declare const getCurrentState: (disabled: boolean, isSkeleton: boolean) => string;
/**
 * Interface for useAccordionTagging parameters
 */
export interface UseAccordionTaggingParams {
    state: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON;
    title: string;
    description?: string;
    isExpanded: boolean;
    showLeading?: boolean;
    leading?: AccordionLeadingProps;
    onTag?: (data: TagProps) => void;
}
/**
 * Interface for useAccordionTagging return type
 */
export interface UseAccordionTaggingReturn {
    handleTagging: () => void;
}
/**
 * Hook responsible for managing Accordion tagging logic
 */
export declare const useAccordionTagging: ({ state, title, description, isExpanded, showLeading, leading, onTag, }: UseAccordionTaggingParams) => UseAccordionTaggingReturn;
