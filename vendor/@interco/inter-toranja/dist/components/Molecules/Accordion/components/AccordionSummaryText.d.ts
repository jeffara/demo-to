import { default as React } from 'react';
import { TextSize } from '../../../Atoms/Text/types';
interface AccordionSummaryTextProps {
    title: string;
    description?: string;
    sizeTitle: TextSize.Medium | TextSize.Large;
    isSkeleton: boolean;
    isDisabled: boolean;
}
export declare const AccordionSummaryText: React.FC<AccordionSummaryTextProps>;
export {};
