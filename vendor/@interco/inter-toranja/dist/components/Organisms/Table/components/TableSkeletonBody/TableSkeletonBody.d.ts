import { FC } from 'react';
import { ColumnDef } from '../../types';
interface TableSkeletonBodyProps<T extends Record<string, unknown>> {
    columns: ColumnDef<T>[];
    rowCount: number;
    showDivider: boolean;
    striped: boolean;
}
export declare const TableSkeletonBody: <T extends Record<string, unknown>>({ columns, rowCount, showDivider, striped, }: TableSkeletonBodyProps<T>) => ReturnType<FC>;
export {};
