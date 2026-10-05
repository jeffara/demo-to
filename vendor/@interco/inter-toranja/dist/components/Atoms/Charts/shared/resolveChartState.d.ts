import { BuildContainerAccessibilityParams, ChartContainerAccessibility, ChartFlags, ChartVisibility, ResolveChartHeightParams, ResolveChartVisibilityParams } from './types';
import { SIZE, STATE } from '../../../../utils/pattern';
export declare const resolveChartFlags: <Size extends `${SIZE}`, State extends `${STATE}`>(size: Size, state: State, shouldFillHeight: boolean, chartWidth?: number) => ChartFlags;
export declare const resolveChartHeight: ({ chartHeight, canFillHeight, isSmall, measuredHeight, }: ResolveChartHeightParams) => number;
export declare const resolveChartAreaHeight: (canFillHeight: boolean, resolvedChartHeight: number) => number | "100%";
export declare const resolveChartVisibility: ({ isInteractive, showXAxis, showYAxis, showGridLines, showLegend, showTooltip, itemsCount, defaultShowLegend, }: ResolveChartVisibilityParams) => ChartVisibility;
export declare const resolveAccessibleName: (ariaLabel: string | undefined, fallbackLabel: string) => string;
export declare const buildContainerAccessibility: ({ isSkeleton, isInteractive, accessibleName, keyShortcuts, }: BuildContainerAccessibilityParams) => ChartContainerAccessibility;
