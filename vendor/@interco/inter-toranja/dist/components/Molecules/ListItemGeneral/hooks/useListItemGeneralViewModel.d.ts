import { ReactElement } from 'react';
import { ListItemGeneralProps } from '../types';
import { resolveAlignmentTrailingMode } from '../../ListItemBase/utils/resolveAlignmentTrailingMode';
/**
 * ViewModel for ListItemGeneral
 * Implements MVVM pattern separating business logic from view
 */
interface ListItemGeneralViewModel {
    leading: ReactElement | undefined;
    content: ReactElement;
    trailing: ReactElement | undefined;
    gridModifier: string | undefined;
    alignmentTrailingMode: ReturnType<typeof resolveAlignmentTrailingMode>;
}
/**
 * Hook that encapsulates all business logic for ListItemGeneral
 * Follows MVVM pattern to separate presentation logic
 */
export declare const useListItemGeneralViewModel: (props: ListItemGeneralProps) => ListItemGeneralViewModel;
export {};
