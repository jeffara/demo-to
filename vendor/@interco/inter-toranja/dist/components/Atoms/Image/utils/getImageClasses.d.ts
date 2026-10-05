import { ImageProps, ImageLoadStates, CSSPropertiesWithCustom } from '../types';
export declare function getAspectRatioClass(ratio?: number): string;
export type GetImageClassesParams = {
    fillWidth?: boolean;
    fillHeight?: boolean;
    contentScale?: ImageProps['contentScale'];
    radius?: ImageProps['radius'];
    borderColor?: ImageProps['borderColor'];
    borderWeight?: ImageProps['borderWeight'];
    state?: ImageProps['state'];
    enableZoom?: boolean;
    ratio?: number;
    className?: string;
    loadStates: ImageLoadStates;
    imageSrc?: string;
};
export declare function getImageClasses({ fillWidth, fillHeight, contentScale, radius, borderColor, borderWeight, state, enableZoom, ratio, className, loadStates, imageSrc, }: GetImageClassesParams): {
    rootClass: string;
    imageClass: string;
    errorIconClass: string;
    imageClassName: string;
    finalClassName: string;
    currentState: 'skeleton' | 'error' | 'loading' | 'loaded';
    borderColorStyle: CSSPropertiesWithCustom;
};
