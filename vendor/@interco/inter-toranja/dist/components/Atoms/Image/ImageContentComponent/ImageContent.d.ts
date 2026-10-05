import { default as React } from 'react';
export interface ImageContentProps {
    currentState: 'skeleton' | 'error' | 'loading' | 'loaded';
    imageSrc?: string;
    contentDescription: string;
    onLoad?: () => void;
    onError?: () => void;
}
export declare const ImageContent: React.FC<ImageContentProps>;
