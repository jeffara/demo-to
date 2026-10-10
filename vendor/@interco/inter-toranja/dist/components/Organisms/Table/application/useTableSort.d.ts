import { SortState } from '../domain/types';
interface UseTableSortParams {
    sortBy?: SortState;
    onSortChange?: (sort: SortState) => void;
}
interface UseTableSortReturn {
    sort: SortState;
    handleSortColumn: (columnId: string) => void;
    getColumnSortDirection: (columnId: string) => 'asc' | 'desc' | null;
}
export declare const useTableSort: (params: UseTableSortParams) => UseTableSortReturn;
export {};
