import { DomainColumnDef, SortState } from './types';
export declare const sortRows: <T extends Record<string, unknown>>(rows: T[], columns: DomainColumnDef<T>[], sort: SortState) => T[];
