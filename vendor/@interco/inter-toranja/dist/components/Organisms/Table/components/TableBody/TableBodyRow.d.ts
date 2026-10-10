import { FC } from 'react';
import { ColumnDef } from '../../types';
interface TableBodyRowProps<T extends Record<string, unknown>> {
    row: T;
    rowIndex: number;
    columns: ColumnDef<T>[];
    showDivider: boolean;
    striped: boolean;
    statusColor?: string;
    selectionColumnId?: string;
    isRowSelected: boolean;
    isRowSelectable: boolean;
    onRowSelectionChange: (row: T, rowIndex: number, checked: boolean) => void;
    onClick?: () => void;
    onDoubleClick?: () => void;
}
export declare const TableBodyRow: <T extends Record<string, unknown>>({ row, rowIndex, columns, showDivider, striped, statusColor, selectionColumnId, isRowSelected, isRowSelectable, onRowSelectionChange, onClick, onDoubleClick, }: TableBodyRowProps<T>) => ReturnType<FC>;
export {};
