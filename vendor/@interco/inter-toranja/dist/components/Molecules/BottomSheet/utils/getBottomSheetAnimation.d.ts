import { AnimationVariantWithOrder, BOTTOM_SHEET_POSITION, BOTTOM_SHEET_OVERLAY, BOTTOM_SHEET_EXPANSIBLE, BottomSheetAnimationStyleProps, BottomSheetPositionConfig, BottomSheetConfigProps, BottomSheetConfigReturn } from '../types';
/**
 * Animation transition constants based on design specifications
 */
export declare const ANIMATION_TRANSITIONS: {
    entrance: {
        duration: number;
        ease: number[];
    };
    exit: {
        duration: number;
        ease: number[];
    };
    handler: {
        duration: number;
        ease: number[];
    };
};
/**
 * Animation variants with order information for each position
 *
 * Each variant includes:
 * - animation properties for Framer Motion
 * - order value for proper sequencing when transitioning between states
 */
export declare const ANIMATION_VARIANTS: Record<string, AnimationVariantWithOrder>;
/**
 * Creates animation props for the BottomSheet component
 *
 * This function generates the animation configuration needed by framer-motion
 * including variants, drag settings, and transition properties.
 *
 * @param allowedPositions - List of positions allowed for this configuration
 * @param expansible - Whether the bottom sheet can be expanded by dragging
 * @returns Animation properties for framer-motion
 */
export declare const getAnimationProps: (allowedPositions: `${BOTTOM_SHEET_POSITION}`[], expansible: `${BOTTOM_SHEET_EXPANSIBLE}`) => BottomSheetAnimationStyleProps;
/**
 * Determines which position states are allowed based on configuration
 *
 * This function implements the position state logic based on the combination
 * of expansible and overlay settings:
 * - Non-expansible sheets only support HUG position
 * - Expansible sheets with overlay support MIDDLE and EXPANDED positions
 * - Expansible sheets without overlay support all positions
 *
 * @param expansible - Whether the sheet can be expanded
 * @param overlay - Whether the overlay is shown
 * @returns Array of allowed position states
 */
export declare const determineAllowedPositions: (expansible: `${BOTTOM_SHEET_EXPANSIBLE}`, overlay: `${BOTTOM_SHEET_OVERLAY}`) => `${BOTTOM_SHEET_POSITION}`[];
/**
 * Determines the initial position for the BottomSheet based on configuration
 *
 * This function selects the appropriate starting position:
 * - Non-expansible sheets always start in HUG position
 * - Expansible sheets with overlay start in MIDDLE position
 * - Expansible sheets without overlay start in COLLAPSED position
 *
 * @param expansible - Whether the sheet can be expanded
 * @param overlay - Whether the overlay is shown
 * @returns The initial position state to use
 */
export declare const determineInitialPosition: (expansible: `${BOTTOM_SHEET_EXPANSIBLE}`, overlay: `${BOTTOM_SHEET_OVERLAY}`) => `${BOTTOM_SHEET_POSITION}`;
/**
 * Creates position configuration for the BottomSheet
 *
 * This function determines which positions are allowed and provides
 * the required information for position management and transitions.
 *
 * @param overlay - Whether to show the overlay
 * @param expansible - Whether the sheet can be expanded
 * @returns Position configuration
 */
export declare const getPositionConfig: (overlay: `${BOTTOM_SHEET_OVERLAY}`, expansible: `${BOTTOM_SHEET_EXPANSIBLE}`) => BottomSheetPositionConfig;
/**
 * Creates the complete bottom sheet configuration
 *
 * This function combines position and animation configurations to provide
 * all necessary properties for the BottomSheet component
 *
 * @param options - Configuration options
 * @param options.overlay - Whether to show the overlay
 * @param options.expansible - Whether the sheet can be expanded
 * @returns Complete bottom sheet configuration
 */
export declare const createBottomSheetConfig: ({ overlay, expansible, }?: BottomSheetConfigProps) => BottomSheetConfigReturn;
