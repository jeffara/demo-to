import { RefObject } from 'react';
/**
 * Props for the useClickOutside hook
 */
interface UseClickOutsideProps {
    /**
     * The ref object pointing to the element to watch for clicks outside
     */
    ref: RefObject<HTMLElement | null>;
    /**
     * Extra node treated as inside the watched surface (for example a trigger button)
     */
    extraRef?: RefObject<HTMLElement | null>;
    /**
     * Whether the hook should be active
     */
    isActive: boolean;
    /**
     * The callback function to execute when a click outside is detected
     */
    onClickOutside: () => void;
}
/**
 * A hook that detects clicks outside of a specified element
 *
 * This hook attaches an event listener to the document that will call the provided
 * callback when a click occurs outside the referenced element. It's particularly useful
 * for dismissing modals, dropdowns, or other floating UI elements when clicking away.
 *
 * @param props - The configuration props
 */
export declare const useClickOutside: ({ ref, extraRef, isActive, onClickOutside, }: UseClickOutsideProps) => void;
export {};
