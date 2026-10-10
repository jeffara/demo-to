import { TableEmptyStateProps, TableFeedbackVariant } from '../../types';
export interface TableFeedbackEmptyProps {
    type: TableFeedbackVariant;
    description?: string;
    searchTerm?: string;
    emptyState?: TableEmptyStateProps;
}
export interface TableFeedbackErrorProps {
    type: 'error';
    description?: string;
    onRetry?: () => void;
}
export type TableFeedbackProps = TableFeedbackEmptyProps | TableFeedbackErrorProps;
