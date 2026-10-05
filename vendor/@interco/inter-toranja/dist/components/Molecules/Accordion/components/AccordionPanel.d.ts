import { AnimationControls, Variants } from 'framer-motion';
import { AccordionProps } from '../types';
interface AccordionPanelProps {
    isSkeleton: boolean;
    contentId: string;
    showContent: boolean;
    expand: boolean;
    contentVariant: AccordionProps['contentVariant'];
    children: AccordionProps['children'];
    showDivider: boolean;
    isAccordionFocused: boolean;
    variants: Variants;
    controls: AnimationControls;
    contentControls: AnimationControls;
    contentVariants: Variants;
}
export declare const AccordionPanel: ({ isSkeleton, contentId, showContent, expand, contentVariant, children, showDivider, isAccordionFocused, variants, controls, contentControls, contentVariants, }: AccordionPanelProps) => React.ReactNode;
export {};
