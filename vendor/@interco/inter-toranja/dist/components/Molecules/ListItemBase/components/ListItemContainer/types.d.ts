import { ReactNode } from 'react';
import { ListItemState, ListItemVariant } from '../../types/shared';
/**
 * ListItemContainer props
 */
export interface ListItemContainerProps {
    /**
     * Component state
     */
    state: ListItemState;
    /**
     * Visual variant
     */
    variant: ListItemVariant;
    /**
     * Whether component allows interaction
     */
    interactive: boolean;
    /**
     * Click handler
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Tagging callback
     */
    onTag?: (additionalData?: Record<string, unknown>) => void;
    /**
     * Main container className
     */
    containerMainClassName: string;
    /**
     * Children elements
     */
    children: ReactNode;
    /**
     * Test ID
     */
    testId?: string;
    /**
     * Component name to determine if tagging should happen
     * ListItemControl should NOT dispatch tagging on click
     */
    componentName?: string;
}
