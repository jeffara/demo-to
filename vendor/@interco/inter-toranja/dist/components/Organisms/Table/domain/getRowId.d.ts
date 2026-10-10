import { GetRowIdFn } from './types';
export declare const getRowId: <T extends Record<string, unknown>>(row: T, index: number, getRowIdFn?: GetRowIdFn<T>) => string;
