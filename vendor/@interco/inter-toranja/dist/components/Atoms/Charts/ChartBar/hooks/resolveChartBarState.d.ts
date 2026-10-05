import { resolveChartAreaHeight, resolveChartHeight } from '../../shared';
import { ChartBarContainerAccessibility, ChartBarFlags, ChartBarVisibility, ResolveHighlightDerivedParams, ChartBarHighlightDerived, ResolveVisibilityParams } from './interface';
import { ChartBarSize, ChartBarState } from '../types';
export { resolveChartAreaHeight, resolveChartHeight };
export declare const resolveChartBarFlags: (size: ChartBarSize, state: ChartBarState, shouldFillHeight: boolean, chartWidth?: number) => ChartBarFlags;
export declare const resolveChartBarVisibility: ({ isInteractive, showXAxis, showYAxis, showGridLines, showLegend, showTooltip, categoriesCount, }: ResolveVisibilityParams) => ChartBarVisibility;
export declare const buildAccessibleName: (ariaLabel: string | undefined, categoriesCount: number) => string;
export declare const buildContainerAccessibility: (isSkeleton: boolean, isInteractive: boolean, accessibleName: string) => ChartBarContainerAccessibility;
export declare const resolveHighlightDerived: ({ highlight, orientation, plotWidth, chartHeight, threshold, shouldShowThreshold, domain, barRectsCenters, }: ResolveHighlightDerivedParams) => ChartBarHighlightDerived;
