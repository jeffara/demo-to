import { KeyboardEvent } from 'react';
import { BOTTOM_SHEET_POSITION, BottomSheetProps } from '../types';
import { AnimationControls, PanInfo } from 'framer-motion';
/**
 * Props for the useBottomSheetEvents hook
 */
export interface UseBottomSheetEventsProps {
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
     * Whether the bottom sheet is currently open
     */
    isOpen: BottomSheetProps['isOpen'];
    /**
     * State setter function to control when the component is rendered in DOM
     */
    setIsRendered: (value: React.SetStateAction<boolean>) => void;
    /**
     * Current position of the bottom sheet owned by the parent component
     */
    currentPosition: `${BOTTOM_SHEET_POSITION}` | null;
    /**
     * Setter for the current position state owned by the parent component
     */
    setCurrentPosition: (value: `${BOTTOM_SHEET_POSITION}` | null) => void;
}
/**
 * Result interface for the useBottomSheetEvents hook
 * Contains event handlers for different interactions with the bottom sheet
 */
interface UseBottomSheetEventsResult {
    /**
     * Handles the closing action for the bottom sheet
     * Starts the "hidden" animation before calling the close callback
     */
    handleClose: () => void;
    /**
     * Handles keyboard events, specifically the Escape key to close the sheet
     */
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    /**
     * Handles the end of drag gestures to determine new sheet position
     */
    handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    /**
     * Handles animation completion events to control rendering state
     */
    handleAnimationComplete: (definition: string) => void;
}
/**
 * Hook that manages all event handlers for the BottomSheet component
 *
 * Provides a unified interface for handling various user interactions:
 * - Close actions (overlay click, programmatic)
 * - Keyboard interactions (Escape key)
 * - Drag gestures
 * - Animation completion events
 *
 * @param props - Configuration and callback props
 * @returns Object containing event handler functions
 */
export declare const useBottomSheetEvents: ({ controls, variants, positionOrder, initialPosition, close, isOpen, setIsRendered, currentPosition, setCurrentPosition, }: UseBottomSheetEventsProps) => UseBottomSheetEventsResult;
export {};
