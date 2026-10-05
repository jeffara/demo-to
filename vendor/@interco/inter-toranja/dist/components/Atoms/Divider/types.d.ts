export declare enum DividerVariant {
    SOLID = "solid",
    DASH = "dash"
}
export declare enum DividerOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export interface DividerProps {
    /**
     * Divider variant
     * - solid: Continuous line (default)
     * - dash: Dashed line, darker color, for colored surfaces
     */
    variant?: `${DividerVariant.SOLID}` | `${DividerVariant.DASH}`;
    /**
     * Divider orientation
     * - horizontal: To divide components horizontally (default)
     * - vertical: To separate information vertically
     */
    orientation?: `${DividerOrientation.HORIZONTAL}` | `${DividerOrientation.VERTICAL}`;
}
