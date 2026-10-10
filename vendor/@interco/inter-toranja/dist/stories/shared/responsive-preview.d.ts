export declare const BREAKPOINT_EXTRA_SMALL = 393;
export declare const BREAKPOINT_SMALL = 600;
export declare const BREAKPOINT_MEDIUM = 905;
export declare const BREAKPOINT_LARGE = 1240;
export declare const BREAKPOINT_EXTRA_LARGE = 1440;
export declare const RESPONSIVE_PREVIEW_WIDTHS: readonly [{
    readonly label: "XS — 393px (webview baseline)";
    readonly width: 393;
}, {
    readonly label: "S — 600px (mobile)";
    readonly width: 600;
}, {
    readonly label: "M — 905px (cross-check)";
    readonly width: 905;
}, {
    readonly label: "L — 1240px (desktop)";
    readonly width: 1240;
}, {
    readonly label: "XL — 1440px (desktop XL)";
    readonly width: 1440;
}];
export type ResponsivePreviewWidth = typeof BREAKPOINT_EXTRA_SMALL | typeof BREAKPOINT_SMALL | typeof BREAKPOINT_MEDIUM | typeof BREAKPOINT_LARGE | typeof BREAKPOINT_EXTRA_LARGE;
