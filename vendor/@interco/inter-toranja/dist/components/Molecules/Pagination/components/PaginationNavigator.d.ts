import { FC } from 'react';
import { PaginationTranslations } from '../types';
interface PaginationNavigatorProps {
    displayPageNumber: number;
    pageCount: number;
    translations: PaginationTranslations;
    isInteractive: boolean;
    isSkeleton: boolean;
    isLoading: boolean;
    onPageCommit: (pageNumber: number) => void;
}
export declare const PaginationNavigator: FC<PaginationNavigatorProps>;
export {};
