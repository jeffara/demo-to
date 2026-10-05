import { resolveChartAreaHeight, resolveChartHeight } from '../../shared';
import { ChartLineContainerAccessibility } from './interface';
import { ChartLineHighlight, ChartLineSize, ChartLineState, ChartLineTooltipItem } from '../types';
interface ChartLineFlags {
    isSkeleton: boolean;
    isSmall: boolean;
    isInteractive: boolean;
    canFillHeight: boolean;
    containerWidth?: number;
}
interface ChartLineVisibility {
    shouldShowXAxis: boolean;
    shouldShowYAxis: boolean;
    shouldShowGridLines: boolean;
    shouldShowLegend: boolean;
    shouldShowTooltip: boolean;
    shouldShowDots: boolean;
}
interface ChartLineHighlightDerived {
    tooltipItems: ChartLineTooltipItem[];
    highlightX: number | null;
    highlightAnnouncement: string;
    thresholdY?: number;
}
interface ResolveVisibilityParams {
    isInteractive: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showGridLines?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    showDots: boolean;
    seriesCount: number;
}
interface ResolveHighlightDerivedParams {
    highlight: ChartLineHighlight | null;
    categoriesCount: number;
    plotWidth: number;
    threshold?: number;
    domain: {
        min: number;
        max: number;
    };
    chartHeight: number;
}
export { resolveChartAreaHeight, resolveChartHeight };
export declare const resolveChartLineFlags: (size: ChartLineSize, state: ChartLineState, shouldFillHeight: boolean, chartWidth?: number) => ChartLineFlags;
export declare const resolveChartLineVisibility: ({ isInteractive, showXAxis, showYAxis, showGridLines, showLegend, showTooltip, showDots, seriesCount, }: ResolveVisibilityParams) => ChartLineVisibility;
export declare const buildAccessibleName: (ariaLabel: string | undefined, seriesCount: number) => string;
export declare const buildContainerAccessibility: (isSkeleton: boolean, isInteractive: boolean, accessibleName: string) => ChartLineContainerAccessibility;
export declare const resolveHighlightDerived: ({ highlight, categoriesCount, plotWidth, threshold, domain, chartHeight, }: ResolveHighlightDerivedParams) => ChartLineHighlightDerived;
