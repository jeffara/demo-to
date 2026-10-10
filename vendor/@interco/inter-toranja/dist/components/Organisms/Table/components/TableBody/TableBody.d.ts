import { FC } from 'react';
import { ColumnDef } from '../../types';
interface TableBodyProps<T extends Record<string, unknown>> {
    rows: T[];
    columns: ColumnDef<T>[];
    resolveRowId: (row: T) => string;
    showDivider: boolean;
    striped: boolean;
    enableStatus: boolean;
    getStatusColor?: (row: T) => string;
    selectionColumnId?: string;
    isRowSelected: (row: T, rowIndex: number) => boolean;
    isRowSelectable: (row: T) => boolean;
    onRowSelectionChange: (row: T, rowIndex: number, checked: boolean) => void;
    createRowClickHandler: (row: T) => (() => void) | undefined;
    createRowDoubleClickHandler: (row: T) => (() => void) | undefined;
    hasRowInteraction: boolean;
}
export declare const TableBody: <T extends Record<string, unknown>>({ rows, columns, resolveRowId, showDivider, striped, enableStatus, getStatusColor, selectionColumnId, isRowSelected, isRowSelectable, onRowSelectionChange, createRowClickHandler, createRowDoubleClickHandler, hasRowInteraction, }: TableBodyProps<T>) => ReturnType<FC>;
export {};
