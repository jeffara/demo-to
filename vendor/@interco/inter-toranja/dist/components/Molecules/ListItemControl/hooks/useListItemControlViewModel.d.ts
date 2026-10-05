import { ReactElement } from 'react';
import { ListItemControlProps } from '../types';
/**
 * ViewModel result
 */
export interface UseListItemControlViewModelResult {
    leadingElement: ReactElement | null;
    contentElement: ReactElement;
    trailingElement: ReactElement | null;
}
/**
 * Hook to manage ListItemControl view logic (MVVM pattern)
 * Separates business logic from presentation
 */
export declare const useListItemControlViewModel: (props: ListItemControlProps) => UseListItemControlViewModelResult;
