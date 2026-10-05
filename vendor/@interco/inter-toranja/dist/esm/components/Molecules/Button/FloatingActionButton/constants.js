const _ = {
  /**
   * Default behavior - always shows the label if provided
   */
  DEFAULT: "default",
  /**
   * Hides the label automatically during scrolling
   * - Label is displayed initially for greater prominence
   * - Icon appears when scrolling the page, reducing visual impact
   * - Returns to Label state when reaching the top, end of page or when interacting with the FAB
   */
  HIDE_LABEL_ON_SCROLL: "hide-label-on-scroll",
  /**
   * Acts as a shortcut to return to the top of the page
   * - FAB is not displayed initially
   * - Label appears when reaching the end of the page or scrolling up
   * - When triggered, executes the scroll command to the top of the page, gradually disappearing
   */
  SCROLL_TO_TOP: "scroll-to-top"
}, O = {
  /**
   * Maximum text width in pixels according to documentation
   */
  MAX_TEXT_WIDTH: 112,
  /**
   * Safety margin to avoid premature ellipsis
   */
  SAFETY_MARGIN: 4,
  /**
   * Maximum label width in CSS
   */
  MAX_LABEL_CSS_WIDTH: 120
}, T = {
  /**
   * Duration of scroll to top animation
   */
  SCROLL_TO_TOP_DURATION: 1500
}, L = {
  /**
   * Threshold to detect if at the top of the page
   */
  TOP_THRESHOLD: 100,
  /**
   * Threshold to detect if at the end of the page
   */
  BOTTOM_THRESHOLD: 100,
  /**
   * Minimum scroll threshold to show label in scroll-to-top
   */
  MIN_SCROLL_FOR_LABEL: 200,
  /**
   * Delay to show label after interaction (hide-label-on-scroll)
   */
  INTERACTION_LABEL_DELAY: 2e3
};
export {
  T as ANIMATION_CONFIG,
  _ as FLOATING_ACTION_BUTTON_BEHAVIOR,
  L as SCROLL_CONFIG,
  O as TEXT_WIDTH_CONFIG
};
