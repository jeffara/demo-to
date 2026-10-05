import { ReactElement, ReactNode } from 'react';
import { ResponsivePreviewWidth } from './responsive-preview';
interface ResponsivePreviewLayoutProps {
    children: ReactNode;
}
interface ResponsivePreviewBandProps {
    label: string;
    width: ResponsivePreviewWidth;
    children: ReactNode;
    isStacked?: boolean;
}
export declare const ResponsivePreviewLayout: ({ children, }: ResponsivePreviewLayoutProps) => ReactElement;
export declare const ResponsivePreviewBand: ({ label, width, children, isStacked, }: ResponsivePreviewBandProps) => ReactElement;
export declare const ResponsivePreviewRow: ({ children }: ResponsivePreviewLayoutProps) => ReactElement;
export declare const ResponsivePreviewFill: ({ children }: ResponsivePreviewLayoutProps) => ReactElement;
export {};
