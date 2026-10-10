import { FC } from 'react';
import { PaginationTranslations } from '../types';
interface PaginationPageSizeProps {
    pageSize: number;
    pageSizeOptions: number[];
    translations: PaginationTranslations;
    isInteractive: boolean;
    isSkeleton: boolean;
    isLoading: boolean;
    onPageSizeSelect: (pageSize: number) => void;
}
export declare const PaginationPageSize: FC<PaginationPageSizeProps>;
export {};
