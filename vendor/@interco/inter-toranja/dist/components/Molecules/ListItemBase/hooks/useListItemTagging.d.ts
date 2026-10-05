import { ListItemSetTagData, ListItemTagData } from '../context/ListItemTaggingContext';
import { TagProps } from '../../../../types/shared';
/**
 * useListItemTagging hook props
 */
export interface UseListItemTaggingProps {
    onTag?: (data: TagProps) => void;
    componentName?: string;
    state?: string;
}
/**
 * useListItemTagging hook result
 */
export interface UseListItemTaggingResult {
    handleTag: (additionalData?: Record<string, unknown>) => void;
    tagData: ListItemTagData;
    setTagData: ListItemSetTagData;
}
/**
 * Hook to manage ListItem tagging with accumulated data from subcomponents
 */
export declare const useListItemTagging: ({ onTag, componentName, state, }: UseListItemTaggingProps) => UseListItemTaggingResult;
