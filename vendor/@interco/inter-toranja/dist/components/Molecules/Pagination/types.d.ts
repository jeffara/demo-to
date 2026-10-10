export type PaginationLanguage = 'ptBR' | 'enUS';
export type PaginationStatus = 'default' | 'skeleton' | 'loading';
export interface PaginationTranslations {
    displaying: string;
    display: string;
    page: string;
    of: string;
    result: string;
    pagination: string;
}
export interface PaginationProps {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    totalItems: number;
    pageSizeOptions: number[];
    status?: PaginationStatus;
    language?: PaginationLanguage;
    onPageChange: (pageIndex: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
export interface PageOffset {
    initial: number;
    final: number;
}
