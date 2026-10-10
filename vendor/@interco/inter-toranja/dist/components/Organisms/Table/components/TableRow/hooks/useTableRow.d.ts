import { CSSProperties, KeyboardEvent } from 'react';
import { TableRowProps } from '../types';
interface UseTableRowReturn {
    rootClasses: string;
    statusStyle?: CSSProperties;
    isRowInteractive: boolean;
    isRowFocusable: boolean;
    ariaDisabled?: boolean;
    handleRowKeyDown: (event: KeyboardEvent<HTMLTableRowElement>) => void;
}
export declare const useTableRow: (props: TableRowProps) => UseTableRowReturn;
export {};
