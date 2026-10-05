/**
 * Constants for the FloatingActionButton component
 */
/**
 * Available behaviors for the FloatingActionButton
 */
export declare const FLOATING_ACTION_BUTTON_BEHAVIOR: {
    /**
     * Default behavior - always shows the label if provided
     */
    readonly DEFAULT: "default";
    /**
     * Hides the label automatically during scrolling
     * - Label is displayed initially for greater prominence
     * - Icon appears when scrolling the page, reducing visual impact
     * - Returns to Label state when reaching the top, end of page or when interacting with the FAB
     */
    readonly HIDE_LABEL_ON_SCROLL: "hide-label-on-scroll";
    /**
     * Acts as a shortcut to return to the top of the page
     * - FAB is not displayed initially
     * - Label appears when reaching the end of the page or scrolling up
     * - When triggered, executes the scroll command to the top of the page, gradually disappearing
     */
    readonly SCROLL_TO_TOP: "scroll-to-top";
};
/**
 * Type derived from behavior constants
 */
export type FloatingActionButtonBehaviorType = (typeof FLOATING_ACTION_BUTTON_BEHAVIOR)[keyof typeof FLOATING_ACTION_BUTTON_BEHAVIOR];
/**
 * Settings for text width calculation
 */
export declare const TEXT_WIDTH_CONFIG: {
    /**
     * Maximum text width in pixels according to documentation
     */
    readonly MAX_TEXT_WIDTH: 112;
    /**
     * Safety margin to avoid premature ellipsis
     */
    readonly SAFETY_MARGIN: 4;
    /**
     * Maximum label width in CSS
     */
    readonly MAX_LABEL_CSS_WIDTH: 120;
};
/**
 * Animation settings
 */
export declare const ANIMATION_CONFIG: {
    /**
     * Duration of scroll to top animation
     */
    readonly SCROLL_TO_TOP_DURATION: 1500;
};
/**
 * Scroll detection settings
 */
export declare const SCROLL_CONFIG: {
    /**
     * Threshold to detect if at the top of the page
     */
    readonly TOP_THRESHOLD: 100;
    /**
     * Threshold to detect if at the end of the page
     */
    readonly BOTTOM_THRESHOLD: 100;
    /**
     * Minimum scroll threshold to show label in scroll-to-top
     */
    readonly MIN_SCROLL_FOR_LABEL: 200;
    /**
     * Delay to show label after interaction (hide-label-on-scroll)
     */
    readonly INTERACTION_LABEL_DELAY: 2000;
};
