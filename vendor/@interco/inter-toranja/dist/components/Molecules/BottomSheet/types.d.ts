import { ReactNode } from 'react';
import { TagProps } from '../../../types/shared';
import { TargetAndTransition, Variants } from 'framer-motion';
/**
 * Controls the overlay visibility of the BottomSheet component
 *
 * - ON: Shows a dark overlay behind the BottomSheet
 * - OFF: No overlay, allowing content behind the BottomSheet to remain visible
 */
export declare enum BOTTOM_SHEET_OVERLAY {
    ON = "on",
    OFF = "off"
}
/**
 * Controls whether the BottomSheet can be expanded/collapsed through drag gestures
 *
 * - ON: User can drag the BottomSheet to different positions
 * - OFF: BottomSheet remains fixed at its initial position
 */
export declare enum BOTTOM_SHEET_EXPANSIBLE {
    ON = "on",
    OFF = "off"
}
/**
 * Defines the possible vertical positions of the BottomSheet
 *
 * - EXPANDED: Fully expanded, taking most of the screen height
 * - MIDDLE: Mid-way expanded
 * - HUG: Takes only the space needed for its content
 * - COLLAPSED: Minimized state, showing only the handle/header
 */
export declare enum BOTTOM_SHEET_POSITION {
    EXPANDED = "expanded",
    MIDDLE = "middle",
    HUG = "hug",
    COLLAPSED = "collapsed"
}
/**
 * Props for the BottomSheet component
 */
export interface BottomSheetProps {
    /**
     * Title to be displayed in the BottomSheet header
     */
    title?: string;
    /**
     * Controls whether the BottomSheet is visible
     * @default false
     */
    isOpen?: boolean;
    /**
     * External function that handles closing the BottomSheet
     */
    close: () => void;
    /**
     * Callback function for tagging events
     */
    onTag?: (data: TagProps) => void;
    /**
     * Component ID
     */
    id?: string;
    /**
     * Controls whether the BottomSheet displays a darkened overlay
     * @default ON
     */
    overlay?: `${BOTTOM_SHEET_OVERLAY}`;
    /**
     * Controls whether the BottomSheet can be expanded by dragging
     *
     * When OFF, the position is forced to HUG
     *
     * @default ON
     */
    expansible?: `${BOTTOM_SHEET_EXPANSIBLE}`;
    /**
     * Sets the initial position of the BottomSheet
     *
     * Position rules based on expansible and overlay:
     * - expansible=OFF: only HUG is allowed
     * - expansible=ON + overlay=ON: MIDDLE or EXPANDED
     * - expansible=ON + overlay=OFF: COLLAPSED, MIDDLE, or EXPANDED
     *
     * @default HUG (when expansible=OFF) or MIDDLE (when expansible=ON + overlay=ON) or COLLAPSED (when expansible=ON + overlay=OFF)
     */
    position?: `${BOTTOM_SHEET_POSITION}`;
    /**
     * Custom content to be rendered inside the BottomSheet
     */
    slot?: ReactNode;
}
/**
 * Props interface for bottom sheet configuration functions
 */
export interface BottomSheetConfigProps {
    /**
     * Whether to show an overlay behind the bottom sheet
     */
    overlay?: `${BOTTOM_SHEET_OVERLAY}`;
    /**
     * Whether the bottom sheet can be expanded/collapsed by dragging
     *
     * When OFF, the position is forced to HUG
     */
    expansible?: `${BOTTOM_SHEET_EXPANSIBLE}`;
}
/**
 * Animation style properties returned for direct use with motion.div
 */
export interface BottomSheetAnimationStyleProps {
    /**
     * Animation variants for framer-motion
     */
    variants: Variants;
    /**
     * Constraints for dragging (prevents dragging beyond the top of the screen)
     */
    dragConstraints: {
        top: number;
    };
    /**
     * Drag axis, or undefined if not draggable
     */
    drag: 'y' | undefined;
    /**
     * Animation properties for drag transitions
     */
    dragTransition?: {
        duration?: number;
        ease?: number[] | string;
    };
}
/**
 * Return type for position configuration
 */
export interface BottomSheetPositionConfig {
    /**
     * Mapping of position names to their order value for proper sorting
     */
    positionOrder: Record<string, number>;
    /**
     * The initial position to use based on the configuration
     */
    initialPosition: `${BOTTOM_SHEET_POSITION}`;
    /**
     * All positions allowed for the current configuration
     */
    allowedPositions: `${BOTTOM_SHEET_POSITION}`[];
}
/**
 * Return type for the bottom sheet configuration function
 */
export interface BottomSheetConfigReturn {
    /**
     * Animation properties to be passed to motion.div
     */
    animationProps: BottomSheetAnimationStyleProps;
    /**
     * Mapping of position names to their order value for proper sorting
     */
    positionOrder: Record<string, number>;
    /**
     * The initial position to use based on the configuration
     */
    initialPosition: `${BOTTOM_SHEET_POSITION}`;
}
/**
 * Animation variant with order information
 * This structure allows defining both the animation properties and a
 * numerical order for proper sequencing and sorting of positions
 */
export interface AnimationVariantWithOrder {
    /**
     * Animation properties for framer-motion
     */
    animation: TargetAndTransition;
    /**
     * Numerical order for sorting positions (lower values are closer to the bottom)
     */
    order: number;
}
