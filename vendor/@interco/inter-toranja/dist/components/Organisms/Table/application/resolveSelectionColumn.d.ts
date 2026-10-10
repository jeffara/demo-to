import { GetRowIdFn } from '../domain/types';
import { ColumnDef, TableSelectionColumnConfig } from '../types';
export declare const findDeclarativeSelectionColumn: <T extends Record<string, unknown>>(columns: ColumnDef<T>[]) => ColumnDef<T> | undefined;
export declare const resolveSelectionColumnId: <T extends Record<string, unknown>>(columns: ColumnDef<T>[], selectionColumn?: TableSelectionColumnConfig) => string | undefined;
export declare const injectSelectionColumn: <T extends Record<string, unknown>>(columns: ColumnDef<T>[], selectionColumn?: TableSelectionColumnConfig) => ColumnDef<T>[];
export declare const resolveInitialSelectedRowIds: <T extends Record<string, unknown>>(data: T[], columns: ColumnDef<T>[], selectionColumnId: string | undefined, getRowIdFn?: GetRowIdFn<T>) => Record<string, boolean>;
