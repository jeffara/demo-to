export type SortDirection = 'asc' | 'desc';
export type SortState = {
    columnId: string;
    direction: SortDirection;
} | null;
export type PaginationMode = 'client' | 'manual';
export interface PaginationState {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    mode: PaginationMode;
    totalItems?: number;
}
export interface PageOffset {
    initial: number;
    final: number;
}
export interface PaginateResult<T> {
    rows: T[];
    pageCount: number;
    totalItems: number;
    pageIndex: number;
    offset: PageOffset;
}
export interface SelectionState {
    selectedIds: Set<string>;
    allSelected: boolean;
    indeterminate: boolean;
}
export type ColumnAccessor<T extends Record<string, unknown>> = keyof T | ((row: T) => unknown);
export type DomainColumnCellType = 'text' | 'value' | 'status' | 'tags' | 'checkbox' | 'avatar' | 'paymentMethod' | 'signal' | 'icon' | 'counter' | 'button' | 'iconButton' | 'iconButtonMenu';
export interface DomainColumnDef<T extends Record<string, unknown>> {
    id: string;
    accessor: ColumnAccessor<T>;
    sortAccessor?: ColumnAccessor<T>;
    cellType?: DomainColumnCellType;
    sortable?: boolean;
    minWidth?: number;
}
export interface ColumnWidthResult {
    totalMinWidth: number;
    requiresHorizontalScroll: boolean;
}
export interface ResolveVisibleRowsInput<T extends Record<string, unknown>> {
    rows: T[];
    columns: DomainColumnDef<T>[];
    sort: SortState;
    filter?: string;
    pagination?: PaginationState;
}
export type RowValidator<T extends Record<string, unknown>> = (row: T) => boolean;
export type GetRowIdFn<T extends Record<string, unknown>> = (row: T, index: number) => string;
