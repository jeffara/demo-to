import { TableEmptyStateActionHierarchy } from '../../../types';
import { TableFeedbackProps } from '../types';
interface TableFeedbackAction {
    label: string;
    onClick: () => void;
    hierarchy: TableEmptyStateActionHierarchy;
}
export interface ResolveTableFeedbackReturn {
    rootClasses: string;
    title: string;
    description: string;
    action?: TableFeedbackAction;
}
export declare const resolveTableFeedback: (props: TableFeedbackProps) => ResolveTableFeedbackReturn;
export {};
