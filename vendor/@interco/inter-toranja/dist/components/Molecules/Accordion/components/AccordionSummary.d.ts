import { AccordionLeadingProps } from '../types';
import { TextSize } from '../../../Atoms/Text/types';
interface AccordionSummaryProps {
    title: string;
    description?: string;
    contentId: string;
    sizeTitle: TextSize.Medium | TextSize.Large;
    showLeading: boolean;
    leading?: AccordionLeadingProps;
    isExpanded: boolean;
    isDisabled: boolean;
    isSkeleton: boolean;
    onClick: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}
export declare const AccordionSummary: ({ title, description, contentId, sizeTitle, showLeading, leading, isExpanded, isDisabled, isSkeleton, onClick, onKeyDown, }: AccordionSummaryProps) => React.ReactNode;
export {};
