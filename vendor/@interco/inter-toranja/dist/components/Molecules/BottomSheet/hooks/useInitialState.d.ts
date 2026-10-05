import { BOTTOM_SHEET_POSITION } from '../types';
import { AnimationControls } from 'framer-motion';
/**
 * Parameters for the useInitialState hook
 */
interface UseInitialStateParams {
    /**
     * Whether the bottom sheet is open
     */
    isOpen: boolean;
    /**
     * Optional user-defined position that overrides the default
     */
    position?: `${BOTTOM_SHEET_POSITION}`;
    /**
     * Default position to use when no position is provided
     */
    initialPosition: `${BOTTOM_SHEET_POSITION}`;
    /**
     * Animation controls from framer-motion
     */
    controls: AnimationControls;
    /**
     * State setter function to control component rendering
     */
    setIsRendered: (value: React.SetStateAction<boolean>) => void;
    /**
     * Setter for the current position state owned by the parent component
     *
     * Updates when the sheet opens so the parent can react with the matching
     * CSS class and slot constraints.
     */
    setCurrentPosition: (value: `${BOTTOM_SHEET_POSITION}` | null) => void;
    /** Current render state of the bottom sheet.
     * Used as a guard to prevent duplicate "hidden" animations when handleClose
     * in useEvents.ts already triggers the animation for user-initiated closes.
     *
     * @internal This is an internal guard - only provided by BottomSheet, not required by consumers
     */
    isRendered?: boolean;
}
/**
 * Hook that manages the initial state and animations of the BottomSheet
 *
 * Handles the initialization and closing of the BottomSheet:
 * 1. Opens: Ensures the component is rendered and applies the starting position animation
 * 2. Closes: Detects isOpen transition from true to false and plays the hidden animation
 *
 * When isOpen transitions to false, checks the isRendered guard to prevent duplicate
 * "hidden" animations triggered by handleClose in useEvents.ts for user-initiated closes
 * (overlay click, Escape key, drag).
 *
 * This ensures the exit animation plays exactly once before removing the component from the DOM.
 *
 * @param params - Configuration parameters for initial state and rendering
 */
export declare const useInitialState: ({ isOpen, position, initialPosition, controls, setIsRendered, setCurrentPosition, isRendered, }: UseInitialStateParams) => void;
export {};
