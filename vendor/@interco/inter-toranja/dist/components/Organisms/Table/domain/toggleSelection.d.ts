import { GetRowIdFn, RowValidator, SelectionState } from './types';
export declare const createEmptySelectionState: () => SelectionState;
export declare const toggleRowSelection: <T extends Record<string, unknown>>(state: SelectionState, row: T, rowIndex: number, visibleRows: T[], getRowId: GetRowIdFn<T>, validate?: RowValidator<T>) => SelectionState;
export declare const toggleAllSelection: <T extends Record<string, unknown>>(state: SelectionState, visibleRows: T[], getRowId: GetRowIdFn<T>, validate?: RowValidator<T>) => SelectionState;
export declare const resolveSelectionHeaderState: (state: SelectionState) => {
    checked: boolean;
    indeterminate: boolean;
};
