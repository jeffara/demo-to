/**
 * Business rule
 *
 * We decide whether to render text in white based on the WCAG relative luminance
 * of the background color. Steps:
 * 1) Parse hex colors (#RGB, #RRGGBB, #RRGGBBAA). If an alpha channel is present,
 *    we blend the color over a white background (#FFFFFF). This simulates the
 *    effective color perceived on the page when transparency exists.
 * 2) Convert the resulting sRGB to linear-light and compute relative luminance
 *    using the WCAG formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B.
 * 3) Use a threshold of 0.179 to decide: if L <= 0.179 the background is dark
 *    and white text provides better contrast. Otherwise, use the default text.
 *
 * Rationale: The 0.179 threshold is a commonly used heuristic aligned with WCAG
 * contrast guidance to favor white on dark backgrounds without computing the
 * full contrast ratio for every text size/weight. If needed in the future, this
 * can be extended to compute contrast ratios (4.5:1 / 3:1) for stricter checks.
 */
export type Rgba = {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare function parseHexColor(hex: string): Rgba | null;
export declare function blendOverWhite({ r, g, b, a }: Rgba): Rgba;
export declare function relativeLuminance(rgb: Rgba): number;
export declare function shouldUseWhiteText(hex: string, threshold?: number): boolean;
