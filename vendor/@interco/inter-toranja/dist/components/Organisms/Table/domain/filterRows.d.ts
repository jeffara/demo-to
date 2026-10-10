import { DomainColumnDef } from './types';
export declare const filterRows: <T extends Record<string, unknown>>(rows: T[], columns: DomainColumnDef<T>[], filter: string) => T[];
