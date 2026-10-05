import { CSSProperties } from 'react';
/**
 * Converts Icon color token to CSS custom property format
 */
export declare const convertIconColorToken: (colorToken: string) => string;
/**
 * Validates if color token is a valid Icon token (starts with "Icon")
 */
export declare const isValidIconColorToken: (colorToken: string) => boolean;
/**
 * Generates CSS properties for Icon color token
 */
export declare const getIconColor: (color?: string) => CSSProperties | undefined;
/**
 * Generates CSS properties for disabled Icon state
 */
export declare const getDisabledIconColor: () => CSSProperties;
