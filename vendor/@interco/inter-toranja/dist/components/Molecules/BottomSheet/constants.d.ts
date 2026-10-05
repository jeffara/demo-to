/**
 * Constants for the BottomSheet component animation and behavior configuration
 *
 * These constants define the thresholds and position ordering used by the
 * BottomSheet component to control animations, dragging behavior, and
 * positioning states.
 *
 * @module BottomSheetConstants
 */
/**
 * Animation position order constants
 *
 * Defines numeric values for each possible position state of the BottomSheet
 * that determine the hierarchy and sequence of positions during animations
 * and drag operations.
 */
export declare const POSITION_ORDER: {
    COLLAPSED: number;
    MIDDLE: number;
    EXPANDED: number;
    HUG: number;
    HIDDEN: number;
    VISIBLE: number;
};
/**
 * Drag threshold - minimum distance in pixels required to trigger position change
 */
export declare const DRAG_THRESHOLD = 50;
/**
 * Close threshold - percentage of screen height below which the sheet will close
 */
export declare const CLOSE_THRESHOLD_PERCENTAGE = 0.2;
/**
 * Bottom tolerance in pixels used when detecting whether the slot reached
 * the end of its scroll. Compensates for sub-pixel rounding differences
 * across devices with non-integer devicePixelRatio.
 */
export declare const BOTTOM_TOLERANCE_PX = 1;
