import { MouseEvent, PointerEvent, ReactNode, RefObject } from 'react';
import { ChartLineClasses } from '../hooks/interface';
import { ChartLineAxisLabel, ChartLineHighlight, ChartLineSeriesPath, ChartLineTooltipItem } from '../types';
export interface ChartSvgProps {
    plotWidth: number;
    chartHeight: number;
    shouldLockPlotWidth?: boolean;
    className?: string;
    testId?: string;
    children: ReactNode;
}
export interface GridLinesProps {
    yLabels: ChartLineAxisLabel[];
    plotWidth: number;
    classes: ChartLineClasses;
    withTestIds?: boolean;
}
export interface HighlightMarksProps {
    seriesPaths: ChartLineSeriesPath[];
    categoryIndex: number;
    highlightX: number;
    chartHeight: number;
    classes: ChartLineClasses;
}
export interface ChartLineSeriesGroupProps {
    seriesItem: ChartLineSeriesPath;
    shouldShowDots: boolean;
    classes: ChartLineClasses;
}
export interface ChartLineXAxisProps {
    xLabels: ChartLineAxisLabel[];
    classes: ChartLineClasses;
}
export interface ChartLineYAxisProps {
    yLabels: ChartLineAxisLabel[];
    chartAreaHeight: number | '100%';
    classes: ChartLineClasses;
}
export interface ChartLinePlotProps {
    isSkeleton: boolean;
    isInteractive: boolean;
    chartHeight: number;
    chartAreaHeight: number | '100%';
    plotWidth: number;
    shouldLockPlotWidth: boolean;
    shouldShowGridLines: boolean;
    shouldShowDots: boolean;
    shouldShowTooltip: boolean;
    seriesPaths: ChartLineSeriesPath[];
    yLabels: ChartLineAxisLabel[];
    thresholdY?: number;
    highlight: ChartLineHighlight | null;
    tooltipItems: ChartLineTooltipItem[];
    highlightX: number | null;
    classes: ChartLineClasses;
    chartRef: RefObject<HTMLDivElement | null>;
    onPointerPreview: (event: PointerEvent<HTMLDivElement>) => void;
    onPointerLeave: () => void;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
