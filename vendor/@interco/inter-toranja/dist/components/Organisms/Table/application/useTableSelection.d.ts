import { GetRowIdFn, RowValidator } from '../domain/types';
import { ColumnDef, TableSelectionColumnConfig } from '../types';
interface UseTableSelectionParams<T extends Record<string, unknown>> {
    data: T[];
    columns: ColumnDef<T>[];
    visibleRows: T[];
    selectionColumn?: TableSelectionColumnConfig;
    selectedRowIds?: Record<string, boolean>;
    onSelectionChange?: (rows: T[], allSelected: boolean) => void;
    validateBeforeSelectRow?: RowValidator<T>;
    getRowIdFn?: GetRowIdFn<T>;
}
interface UseTableSelectionReturn<T extends Record<string, unknown>> {
    columns: ColumnDef<T>[];
    selectionColumnId?: string;
    isSelectionEnabled: boolean;
    isRowSelected: (row: T, rowIndex: number) => boolean;
    isRowSelectable: (row: T) => boolean;
    handleRowSelectionChange: (row: T, rowIndex: number, checked: boolean) => void;
    handleSelectAllChange: (checked: boolean) => void;
    selectionHeaderCheckbox: {
        checked: boolean;
        indeterminate: boolean;
        onChange: (checked: boolean) => void;
    };
}
export declare const useTableSelection: <T extends Record<string, unknown>>(params: UseTableSelectionParams<T>) => UseTableSelectionReturn<T>;
export {};
