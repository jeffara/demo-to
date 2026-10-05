import { default as React } from 'react';
import { AccordionLeadingProps } from '../types';
interface AccordionLeadingComponentProps {
    showLeading: boolean;
    leading?: AccordionLeadingProps;
    isDisabled: boolean;
    isSkeleton: boolean;
}
export declare const AccordionLeading: React.FC<AccordionLeadingComponentProps>;
export {};
