import { ColumnWidthResult, DomainColumnDef } from './types';
export declare const resolveColumnWidths: <T extends Record<string, unknown>>(columns: DomainColumnDef<T>[], containerWidth: number) => ColumnWidthResult;
