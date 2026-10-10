import { ReactElement, Ref } from 'react';
import { TableHandles, TableProps } from './types';
export declare const Table: <T extends Record<string, unknown>>(props: TableProps<T> & {
    ref?: Ref<TableHandles>;
}) => ReactElement;
