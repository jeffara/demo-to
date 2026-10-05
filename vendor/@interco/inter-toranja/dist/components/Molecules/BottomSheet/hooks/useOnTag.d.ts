import { TagProps } from '../../../../types/shared';
/**
 * Parameters for the useBottomSheetTag hook
 */
interface UseOnTagArgs {
    /**
     * Condition that determines whether the tagging should be executed
     */
    meetsCondition: boolean;
    /**
     * Callback function to handle the tagging event
     */
    onTagFn: (data: TagProps) => void;
    /**
     * Optional title to include in the tagging event data
     */
    title?: string;
}
/**
 * Hook that handles tagging events for the BottomSheet component
 *
 * This hook triggers a MODAL_VIEW tagging event when specific conditions are met.
 * It enriches the tag data with BottomSheet-specific properties including the
 * component name and optional title.
 *
 * @param params - Parameters to control when and how the tagging event is triggered
 */
export declare const useBottomSheetTag: ({ meetsCondition, onTagFn, title }: UseOnTagArgs) => void;
export {};
