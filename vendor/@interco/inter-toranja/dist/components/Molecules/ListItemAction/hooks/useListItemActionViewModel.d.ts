import { ReactElement } from 'react';
import { ListItemActionProps } from '../types';
/**
 * ViewModel result
 */
export interface UseListItemActionViewModelResult {
    leadingElement: ReactElement | null;
    contentElement: ReactElement;
    trailingElement: ReactElement;
}
/**
 * Hook to manage ListItemAction view logic (MVVM pattern)
 * Separates business logic from presentation
 */
export declare const useListItemActionViewModel: (props: ListItemActionProps) => UseListItemActionViewModelResult;
