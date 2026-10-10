import { ColumnAccessor, DomainColumnDef } from './types';
export declare const resolveColumnValue: <T extends Record<string, unknown>>(row: T, accessor: ColumnAccessor<T>) => unknown;
export declare const findColumnById: <T extends Record<string, unknown>>(columns: DomainColumnDef<T>[], columnId: string) => DomainColumnDef<T> | undefined;
