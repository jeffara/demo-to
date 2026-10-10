import { ReactNode } from 'react';
import { TableCellAlign } from './components/shared/types';
import { TableCellType } from './components/TableCell/types';
import { GetRowIdFn, PaginationState, SortState } from './domain/types';
import { PaginationLanguage } from '../../Molecules/Pagination/types';
export type { GetRowIdFn, PaginationState, SortState };
export type TableSelectionColumnPosition = 'START' | 'END';
export interface TableSelectionColumnConfig {
    position: TableSelectionColumnPosition;
}
export type TableColumnCellType = Extract<TableCellType, 'checkbox' | 'text' | 'value' | 'status' | 'tags' | 'avatar' | 'paymentMethod' | 'signal' | 'icon' | 'counter' | 'button' | 'iconButton' | 'iconButtonMenu'>;
export type TableFeedbackVariant = 'empty' | 'noResults' | 'noFilters';
export type TableLanguage = PaginationLanguage;
export type TableEmptyStateActionHierarchy = 'primary' | 'secondary' | 'tertiary';
export interface TableEmptyStateProps {
    title: string;
    description: string;
    icon?: ReactNode;
    action?: {
        label: string;
        onClick: () => void;
        hierarchy?: TableEmptyStateActionHierarchy;
    };
}
export interface ColumnDef<T extends Record<string, unknown>> {
    id: string;
    accessor: keyof T | ((row: T) => unknown);
    sortAccessor?: keyof T | ((row: T) => unknown);
    header: string;
    cellType: TableColumnCellType;
    minWidth?: number;
    align?: TableCellAlign;
    sortable?: boolean;
}
export interface TableToolbarProps {
    title?: string;
    trailing?: ReactNode;
}
export interface TableProps<T extends Record<string, unknown>> {
    data: T[];
    columns: ColumnDef<T>[];
    getRowId?: GetRowIdFn<T>;
    toolbar?: TableToolbarProps;
    hideHeader?: boolean;
    showDivider?: boolean;
    striped?: boolean;
    isLoading?: boolean;
    skeleton?: boolean;
    error?: string;
    emptyFeedback?: TableFeedbackVariant;
    emptyMessage?: string;
    searchTerm?: string;
    emptyState?: TableEmptyStateProps;
    onRetry?: () => void;
    pagination?: boolean;
    initialPageSize?: number;
    pageSizeOptions?: number[];
    manualPagination?: boolean;
    pageCount?: number;
    pageIndex?: number;
    totalItems?: number;
    onPaginationChange?: (state: PaginationState) => void;
    language?: TableLanguage;
    sortBy?: SortState;
    onSortChange?: (sort: SortState) => void;
    selectionColumn?: TableSelectionColumnConfig;
    selectedRowIds?: Record<string, boolean>;
    onSelectionChange?: (rows: T[], allSelected: boolean) => void;
    validateBeforeSelectRow?: (row: T) => boolean;
    onRowClick?: (row: T) => void;
    onRowDoubleClick?: (row: T) => void;
    filter?: string;
    enableStatus?: boolean;
    getStatusColor?: (row: T) => string;
}
export interface TableHandles {
    goToPage: (pageIndex: number) => void;
}
