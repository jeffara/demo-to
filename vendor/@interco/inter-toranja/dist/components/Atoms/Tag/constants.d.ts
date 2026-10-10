import { SegmentColor, TagProps } from './types';
export declare const TAG_ACCENT_COLORS: readonly ["blue", "brand", "brown", "cyan", "gold", "green", "mint", "neutral", "orange", "pink", "purple", "red", "yellow"];
export declare const TAG_SEGMENT_COLORS: readonly ["pf-prime", "pf-digital", "pf-one", "pf-win", "pj-corporate", "pj-digital", "pj-enterprise", "pj-middle", "pj-pro", "pj-win"];
export declare const TAG_COLORS: readonly ["blue", "brand", "brown", "cyan", "gold", "green", "mint", "neutral", "orange", "pink", "purple", "red", "yellow", "pf-prime", "pf-digital", "pf-one", "pf-win", "pj-corporate", "pj-digital", "pj-enterprise", "pj-middle", "pj-pro", "pj-win"];
export declare const isTagColor: (value: unknown) => value is TagProps["color"];
export declare const isSegmentTagColor: (color: TagProps["color"]) => color is SegmentColor;
export declare const parseTagAccessor: (value: unknown) => Pick<TagProps, "label" | "color" | "hierarchy" | "size"> | null;
