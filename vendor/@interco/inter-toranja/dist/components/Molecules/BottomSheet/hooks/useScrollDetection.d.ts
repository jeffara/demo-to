interface ScrollState {
    hasScroll: boolean;
    isAtTop: boolean;
    isAtBottom: boolean;
}
interface UseScrollDetectionReturn extends ScrollState {
    slotRef: (element: HTMLElement | null) => void;
}
/**
 * Detects whether the slot element has scrollable overflow and tracks
 * whether the current scroll position is at the top or at the bottom
 *
 * The state is kept in sync via:
 * - the slot's native `scroll` event (passive listener)
 * - a `ResizeObserver` attached to the slot itself, so changes in the slot
 *   or its content size are reflected without depending on window resize
 *
 * Listeners are attached through a callback ref so they are (re)bound when
 * the slot mounts later — for example when BottomSheet opens after starting closed.
 *
 * Updates bail out early when the booleans do not change, preventing
 * unnecessary re-renders on consumers running heavy animations.
 */
export declare const useScrollDetection: () => UseScrollDetectionReturn;
export {};
