import { JSX } from 'react';
import { ChartBarClasses } from '../hooks/interface';
import { ChartBarRect } from '../types';
interface ChartBarBarsProps {
    barRects: ChartBarRect[];
    isSkeleton: boolean;
    shouldAnimate: boolean;
    highlightIndex: number | null;
    classes: ChartBarClasses;
}
export declare const ChartBarBars: ({ barRects, isSkeleton, shouldAnimate, highlightIndex, classes, }: ChartBarBarsProps) => JSX.Element;
export {};
