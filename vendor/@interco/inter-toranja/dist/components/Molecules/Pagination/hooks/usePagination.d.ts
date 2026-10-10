import { getPaginationTranslations } from '../infrastructure/translations';
import { calculatePageOffset } from '../utils/calculatePageOffset';
import { PaginationProps } from '../types';
interface UsePaginationReturn {
    rootClasses: string;
    isInteractive: boolean;
    isSkeleton: boolean;
    isLoading: boolean;
    translations: ReturnType<typeof getPaginationTranslations>;
    pageOffset: ReturnType<typeof calculatePageOffset>;
    displayPageNumber: number;
    handlePageCommit: (pageNumber: number) => void;
    handlePageSizeSelect: (pageSize: number) => void;
}
export declare const usePagination: (props: PaginationProps) => UsePaginationReturn;
export {};
