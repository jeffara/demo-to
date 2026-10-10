import { FC } from 'react';
import { ColumnDef } from '../../types';
import { TableColumnHeaderCheckboxProps } from '../TableColumnHeader/types';
interface TableHeadProps<T extends Record<string, unknown>> {
    columns: ColumnDef<T>[];
    isSkeleton?: boolean;
    isLoading?: boolean;
    getColumnSortDirection: (columnId: string) => 'asc' | 'desc' | null;
    onSortColumn: (columnId: string) => void;
    selectionColumnId?: string;
    selectionHeaderCheckbox?: TableColumnHeaderCheckboxProps;
}
export declare const TableHead: <T extends Record<string, unknown>>({ columns, isSkeleton, isLoading, getColumnSortDirection, onSortColumn, selectionColumnId, selectionHeaderCheckbox, }: TableHeadProps<T>) => ReturnType<FC>;
export {};
