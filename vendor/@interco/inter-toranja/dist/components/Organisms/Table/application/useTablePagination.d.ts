import { PaginationState } from '../domain/types';
import { TableProps } from '../types';
interface UseTablePaginationInput<T extends Record<string, unknown>> {
    props: Pick<TableProps<T>, 'pagination' | 'initialPageSize' | 'pageSizeOptions' | 'manualPagination' | 'pageCount' | 'pageIndex' | 'totalItems' | 'onPaginationChange'>;
    rowCount: number;
}
interface UseTablePaginationReturn {
    isEnabled: boolean;
    pageSizeOptions: number[];
    paginationState: PaginationState | undefined;
    handlePageChange: (nextPageIndex: number) => void;
    handlePageSizeChange: (nextPageSize: number) => void;
    goToPage: (pageIndex: number) => void;
}
export declare const useTablePagination: <T extends Record<string, unknown>>({ props, rowCount, }: UseTablePaginationInput<T>) => UseTablePaginationReturn;
export {};
