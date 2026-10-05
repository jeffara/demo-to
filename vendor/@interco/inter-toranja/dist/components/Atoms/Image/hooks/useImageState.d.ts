import { ImageLoadStates, ImageSrc, CSSPropertiesWithCustom } from '../types';
export interface UseImageStateParams {
    src?: ImageSrc;
    width?: number | string;
    height?: number | string;
    fillWidth?: boolean;
    fillHeight?: boolean;
    ratio?: number;
    onLoad?: () => void;
    onError?: () => void;
}
export interface UseImageStateReturn {
    imageSrc: string | undefined;
    loadStates: ImageLoadStates;
    handleLoad: () => void;
    handleError: () => void;
    getDimensionStyles: () => CSSPropertiesWithCustom;
}
export declare function useImageState({ src, width, height, fillWidth, fillHeight, ratio, onLoad, onError, }: UseImageStateParams): UseImageStateReturn;
