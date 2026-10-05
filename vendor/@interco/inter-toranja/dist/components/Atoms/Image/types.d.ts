import { STATE } from '../../../utils/pattern';
export type CSSPropertiesWithCustom = React.CSSProperties & Record<`--${string}`, string | number>;
export interface ImageProps {
    src?: ImageSrc;
    contentDescription?: string;
    contentScale?: `${ImageContentScale.FILL}` | `${ImageContentScale.FIT}`;
    width?: number | string;
    height?: number | string;
    fillWidth?: boolean;
    fillHeight?: boolean;
    ratio?: number;
    radius?: `${ImageRadius.SMALL}` | `${ImageRadius.MEDIUM}` | `${ImageRadius.LARGE}` | `${ImageRadius.FULL}`;
    borderColor?: `${ImageBorderColor.FEEDBACK_ERROR}` | `${ImageBorderColor.FEEDBACK_SUCCESS}` | `${ImageBorderColor.BRAND_INVERSE}` | `${ImageBorderColor.BRAND_STRONG}` | `${ImageBorderColor.BRAND_DEFAULT}` | `${ImageBorderColor.STATIC_WHITE_SOFTER}` | `${ImageBorderColor.STATIC_WHITE_DEFAULT}` | `${ImageBorderColor.STATIC_BLACK}` | `${ImageBorderColor.NEUTRAL_INVERSE}` | `${ImageBorderColor.NEUTRAL_STRONGEST}` | `${ImageBorderColor.NEUTRAL_STRONGER}` | `${ImageBorderColor.NEUTRAL_STRONG}` | `${ImageBorderColor.NEUTRAL_DEFAULT}` | `${ImageBorderColor.NEUTRAL_SOFTER}` | `${ImageBorderColor.DISABLED}`;
    borderWeight?: `${ImageBorderWeight.SMALL}` | `${ImageBorderWeight.MEDIUM}`;
    enableZoom?: boolean;
    state?: `${STATE.ENABLED}` | `${STATE.ERROR}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
    onError?: () => void;
    onLoad?: () => void;
    id?: string;
    className?: string;
}
export interface ImageSrc {
    local?: string;
    remote?: {
        light: string;
        dark?: string;
    };
}
export declare enum ImageContentScale {
    FILL = "fill",
    FIT = "fit"
}
export declare enum ImageRadius {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    FULL = "full"
}
export declare enum ImageBorderWeight {
    SMALL = "small",
    MEDIUM = "medium"
}
export declare enum ImageBorderColor {
    FEEDBACK_ERROR = "feedback-error",
    FEEDBACK_SUCCESS = "feedback-success",
    BRAND_INVERSE = "brand-inverse",
    BRAND_STRONG = "brand-strong",
    BRAND_DEFAULT = "brand-default",
    STATIC_WHITE_SOFTER = "static-white-softer",
    STATIC_WHITE_DEFAULT = "static-white-default",
    STATIC_BLACK = "static-black",
    NEUTRAL_INVERSE = "neutral-inverse",
    NEUTRAL_STRONGEST = "neutral-strongest",
    NEUTRAL_STRONGER = "neutral-stronger",
    NEUTRAL_STRONG = "neutral-strong",
    NEUTRAL_DEFAULT = "neutral-default",
    NEUTRAL_SOFTER = "neutral-softer",
    DISABLED = "disabled"
}
export interface ImageDimensions {
    width?: number | string;
    height?: number | string;
    fillWidth?: boolean;
    fillHeight?: boolean;
    ratio?: number;
}
export interface ImageBorder {
    color?: `${ImageBorderColor.FEEDBACK_ERROR}` | `${ImageBorderColor.FEEDBACK_SUCCESS}` | `${ImageBorderColor.BRAND_INVERSE}` | `${ImageBorderColor.BRAND_STRONG}` | `${ImageBorderColor.BRAND_DEFAULT}` | `${ImageBorderColor.STATIC_WHITE_SOFTER}` | `${ImageBorderColor.STATIC_WHITE_DEFAULT}` | `${ImageBorderColor.STATIC_BLACK}` | `${ImageBorderColor.NEUTRAL_INVERSE}` | `${ImageBorderColor.NEUTRAL_STRONGEST}` | `${ImageBorderColor.NEUTRAL_STRONGER}` | `${ImageBorderColor.NEUTRAL_STRONG}` | `${ImageBorderColor.NEUTRAL_DEFAULT}` | `${ImageBorderColor.NEUTRAL_SOFTER}` | `${ImageBorderColor.DISABLED}`;
    weight?: `${ImageBorderWeight.SMALL}` | `${ImageBorderWeight.MEDIUM}`;
}
export interface ImageLoadStates {
    isLoading: boolean;
    hasError: boolean;
    isLoaded: boolean;
}
