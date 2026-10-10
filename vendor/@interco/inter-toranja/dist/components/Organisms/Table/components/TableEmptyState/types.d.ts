import { TableEmptyStateProps, TableFeedbackVariant } from '../../types';
export interface TableEmptyStateComponentProps {
    variant: TableFeedbackVariant;
    emptyMessage?: string;
    emptyState?: TableEmptyStateProps;
    searchTerm?: string;
}
