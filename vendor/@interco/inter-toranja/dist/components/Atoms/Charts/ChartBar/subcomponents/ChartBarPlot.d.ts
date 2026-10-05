import { JSX, MouseEvent, PointerEvent, RefObject } from 'react';
import { ChartBarClasses } from '../hooks/interface';
import { ChartBarAxisLabel, ChartBarHighlight, ChartBarOrientation, ChartBarRect, ChartBarTooltipItem } from '../types';
interface ChartBarPlotProps {
    isSkeleton: boolean;
    isInteractive: boolean;
    shouldAnimate: boolean;
    orientation: ChartBarOrientation;
    chartHeight: number;
    chartAreaHeight: number | '100%';
    plotWidth: number;
    shouldShowGridLines: boolean;
    shouldShowTooltip: boolean;
    barRects: ChartBarRect[];
    valueLabels: ChartBarAxisLabel[];
    thresholdPosition?: number;
    highlight: ChartBarHighlight | null;
    tooltipItems: ChartBarTooltipItem[];
    highlightAnchor: number | null;
    classes: ChartBarClasses;
    chartRef: RefObject<HTMLDivElement | null>;
    onPointerPreview: (event: PointerEvent<HTMLDivElement>) => void;
    onPointerLeave: () => void;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const ChartBarPlot: ({ isSkeleton, isInteractive, shouldAnimate, orientation, chartHeight, chartAreaHeight, plotWidth, shouldShowGridLines, shouldShowTooltip, barRects, valueLabels, thresholdPosition, highlight, tooltipItems, highlightAnchor, classes, chartRef, onPointerPreview, onPointerLeave, onClick, }: ChartBarPlotProps) => JSX.Element;
export {};
