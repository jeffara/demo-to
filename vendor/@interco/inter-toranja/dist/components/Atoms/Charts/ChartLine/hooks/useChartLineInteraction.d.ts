import { FocusEvent, KeyboardEvent, MouseEvent, PointerEvent, RefObject } from 'react';
import { ChartPalette, ValueBuilder } from '../../ChartMeter/types';
import { ChartLineHighlight, ChartLineProps, ChartLineSeries, ChartLineYAxisPosition } from '../types';
export interface ChartLineTaggingProperties {
    x_axis: boolean;
    y_axis: boolean;
    y_axis_position: ChartLineYAxisPosition;
    grid_lines: boolean;
    threshold: boolean;
    tooltip: boolean;
    default_legend: boolean;
}
interface UseChartLineInteractionParams {
    isInteractive: boolean;
    isSelectionSticky: boolean;
    categories: string[];
    series: ChartLineSeries[];
    forceColor?: string[];
    palette: ChartPalette;
    valueBuilder?: ValueBuilder;
    isSensitiveText: boolean;
    taggingProperties: ChartLineTaggingProperties;
    chartRef: RefObject<HTMLDivElement | null>;
    containerRef: RefObject<HTMLDivElement | null>;
    onHighlightChange?: ChartLineProps['onHighlightChange'];
    onTag?: ChartLineProps['onTag'];
}
interface UseChartLineInteractionReturn {
    highlight: ChartLineHighlight | null;
    handlePointerPreview: (event: PointerEvent<HTMLDivElement>) => void;
    handlePointerLeave: () => void;
    handleClick: (event: MouseEvent<HTMLDivElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    handleBlur: (event: FocusEvent<HTMLDivElement>) => void;
}
export declare const useChartLineInteraction: ({ isInteractive, isSelectionSticky, categories, series, forceColor, palette, valueBuilder, isSensitiveText, taggingProperties, chartRef, containerRef, onHighlightChange, onTag, }: UseChartLineInteractionParams) => UseChartLineInteractionReturn;
export {};
