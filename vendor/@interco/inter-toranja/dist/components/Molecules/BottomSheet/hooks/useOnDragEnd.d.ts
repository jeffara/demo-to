import { PanInfo, AnimationControls } from 'framer-motion';
import { BOTTOM_SHEET_POSITION } from '../types';
/**
 * Props for the useOnDragEnd hook
 */
interface UseDragEndProps {
    /**
     * Animation variants from framer-motion
     */
    variants: Record<string, unknown>;
    /**
     * Map of position names to their numeric order for sorting
     */
    positionOrder: Record<string, number>;
    /**
     * The starting position of the bottom sheet
     */
    initialPosition: `${BOTTOM_SHEET_POSITION}`;
    /**
     * Animation controls from framer-motion
     */
    controls: AnimationControls;
    /**
     * Callback function to close the bottom sheet
     */
    close: () => void;
    /**
     * Current position of the bottom sheet (lifted to the parent component)
     */
    currentPosition: `${BOTTOM_SHEET_POSITION}` | null;
    /**
     * Setter for the current position state owned by the parent component
     */
    setCurrentPosition: (value: `${BOTTOM_SHEET_POSITION}` | null) => void;
}
/**
 * Return type for the useOnDragEnd hook
 */
export interface UseDragEndResult {
    /**
     * Handler function for the drag end event
     */
    handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
}
/**
 * Custom hook to handle drag end interactions on the BottomSheet
 *
 * This hook manages the drag end behavior of the bottom sheet, including:
 * - Transitioning between different positions (expanded, middle, collapsed)
 * - Closing the sheet when dragged below a threshold
 * - Snapping back to the current position for small drags
 *
 * The hook maintains internal state to track the current position and provides
 * logic to determine which position to transition to based on drag direction,
 * velocity, and distance.
 *
 * @param props - Configuration properties including animation controls and callbacks
 * @returns Object containing the drag end handler function
 */
export declare const useOnDragEnd: ({ variants, positionOrder, initialPosition, controls, close, currentPosition, setCurrentPosition, }: UseDragEndProps) => UseDragEndResult;
export {};
