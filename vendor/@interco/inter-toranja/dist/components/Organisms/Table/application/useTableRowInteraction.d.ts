interface UseTableRowInteractionParams<T extends Record<string, unknown>> {
    onRowClick?: (row: T) => void;
    onRowDoubleClick?: (row: T) => void;
}
interface UseTableRowInteractionReturn<T extends Record<string, unknown>> {
    hasRowInteraction: boolean;
    createRowClickHandler: (row: T) => (() => void) | undefined;
    createRowDoubleClickHandler: (row: T) => (() => void) | undefined;
}
export declare const useTableRowInteraction: <T extends Record<string, unknown>>(params: UseTableRowInteractionParams<T>) => UseTableRowInteractionReturn<T>;
export {};
