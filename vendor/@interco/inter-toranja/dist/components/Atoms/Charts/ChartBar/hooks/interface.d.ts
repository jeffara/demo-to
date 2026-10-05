import { FocusEvent, KeyboardEvent, MouseEvent, PointerEvent, RefObject } from 'react';
import { LegendItem } from '../../Legend/types';
import { ChartContainerAccessibility, ChartFlags, ChartVisibility, ResolveChartHeightParams, ValueBuilder } from '../../shared/types';
import { ChartBarAxisLabel, ChartBarHighlight, ChartBarOrientation, ChartBarProps, ChartBarRect, ChartBarTooltipItem, ChartBarYAxisPosition } from '../types';
export interface ChartBarClasses {
    container: string;
    body: string;
    yAxis: string;
    yAxisSizer: string;
    yAxisSizerLabel: string;
    yAxisLabel: string;
    plot: string;
    chart: string;
    grid: string;
    gridLine: string;
    bars: string;
    bar: string;
    barAnimated: string;
    barNegative: string;
    barDimmed: string;
    threshold: string;
    xAxis: string;
    xAxisLabel: string;
    tooltip: string;
    skeletonChart: string;
}
export type ChartBarContainerAccessibility = ChartContainerAccessibility;
export type ChartBarFlags = ChartFlags;
export type ChartBarVisibility = ChartVisibility;
export type { ResolveChartHeightParams };
export type UseChartBarParams = ChartBarProps;
export interface UseChartBarReturn {
    isSkeleton: boolean;
    isSmall: boolean;
    isInteractive: boolean;
    orientation: ChartBarOrientation;
    chartHeight: number;
    chartAreaHeight: number | '100%';
    plotWidth: number;
    shouldAnimate: boolean;
    containerWidth?: number;
    yAxisPosition: ChartBarYAxisPosition;
    shouldShowXAxis: boolean;
    shouldShowYAxis: boolean;
    shouldShowGridLines: boolean;
    shouldShowLegend: boolean;
    shouldShowTooltip: boolean;
    barRects: ChartBarRect[];
    xLabels: ChartBarAxisLabel[];
    yLabels: ChartBarAxisLabel[];
    valueLabels: ChartBarAxisLabel[];
    legendItems: LegendItem[];
    thresholdPosition?: number;
    highlight: ChartBarHighlight | null;
    tooltipItems: ChartBarTooltipItem[];
    highlightAnchor: number | null;
    highlightAnnouncement: string;
    classes: ChartBarClasses;
    containerAccessibility: ChartBarContainerAccessibility;
    containerRef: RefObject<HTMLDivElement | null>;
    chartRef: RefObject<HTMLDivElement | null>;
    handlePointerPreview: (event: PointerEvent<HTMLDivElement>) => void;
    handlePointerLeave: () => void;
    handleClick: (event: MouseEvent<HTMLDivElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    handleBlur: (event: FocusEvent<HTMLDivElement>) => void;
}
export interface ChartBarHighlightDerived {
    tooltipItems: ChartBarTooltipItem[];
    highlightAnchor: number | null;
    highlightAnnouncement: string;
    thresholdPosition?: number;
}
export interface ResolveVisibilityParams {
    isInteractive: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showGridLines?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    categoriesCount: number;
}
export interface ResolveHighlightDerivedParams {
    highlight: ChartBarHighlight | null;
    orientation: ChartBarOrientation;
    plotWidth: number;
    chartHeight: number;
    threshold?: number;
    shouldShowThreshold: boolean;
    domain: {
        min: number;
        max: number;
    };
    barRectsCenters: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}
interface ChartBarTaggingProperties {
    x_axis: boolean;
    y_axis: boolean;
    y_axis_position: ChartBarYAxisPosition;
    grid_lines: boolean;
    threshold: boolean;
    tooltip: boolean;
    default_legend: boolean;
    orientation: ChartBarOrientation;
}
export interface UseChartBarInteractionParams {
    isInteractive: boolean;
    isSelectionSticky: boolean;
    orientation: ChartBarOrientation;
    categories: string[];
    values: number[];
    valueBuilder?: ValueBuilder;
    isSensitiveText: boolean;
    taggingProperties: ChartBarTaggingProperties;
    chartRef: RefObject<HTMLDivElement | null>;
    containerRef: RefObject<HTMLDivElement | null>;
    onHighlightChange?: ChartBarProps['onHighlightChange'];
    onTag?: ChartBarProps['onTag'];
}
export interface UseChartBarInteractionReturn {
    highlight: ChartBarHighlight | null;
    handlePointerPreview: (event: PointerEvent<HTMLDivElement>) => void;
    handlePointerLeave: () => void;
    handleClick: (event: MouseEvent<HTMLDivElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    handleBlur: (event: FocusEvent<HTMLDivElement>) => void;
}
