import { ListItemState, ListItemVariant } from '../types/shared';
/**
 * Generates container className based on state and variant
 */
export declare const getContainerClassName: (state: ListItemState, variant: ListItemVariant) => string;
/**
 * Generates main container (grid) className based on modifier
 */
export declare const getContainerMainClassName: (gridModifier?: string, noLeading?: boolean) => string;
/**
 * Generates variant className
 */
export declare const getVariantClassName: (variant: ListItemVariant) => string;
