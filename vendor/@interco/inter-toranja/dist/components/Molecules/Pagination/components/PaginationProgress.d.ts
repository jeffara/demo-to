import { FC } from 'react';
import { PageOffset, PaginationLanguage, PaginationTranslations } from '../types';
interface PaginationProgressProps {
    pageOffset: PageOffset;
    totalItems: number;
    translations: PaginationTranslations;
    language: PaginationLanguage;
    isSkeleton: boolean;
    isInteractive: boolean;
}
export declare const PaginationProgress: FC<PaginationProgressProps>;
export {};
