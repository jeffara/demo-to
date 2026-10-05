export type ChartPalette = 'categorical' | 'warm' | 'cool';
export type ChartColor = 'var(--color-chart-categorical-1)' | 'var(--color-chart-categorical-2)' | 'var(--color-chart-categorical-3)' | 'var(--color-chart-categorical-4)' | 'var(--color-chart-categorical-5)' | 'var(--color-chart-categorical-6)' | 'var(--color-chart-warm-1)' | 'var(--color-chart-warm-2)' | 'var(--color-chart-warm-3)' | 'var(--color-chart-warm-4)' | 'var(--color-chart-warm-5)' | 'var(--color-chart-warm-6)' | 'var(--color-chart-cool-1)' | 'var(--color-chart-cool-2)' | 'var(--color-chart-cool-3)' | 'var(--color-chart-cool-4)' | 'var(--color-chart-cool-5)' | 'var(--color-chart-cool-6)' | 'var(--color-chart-neutral-soft)' | 'var(--color-chart-neutral-default)';
export interface ValueBuilder {
    prefix?: string;
    suffix?: string;
    decimals?: number;
}
export interface ChartAxisLabel {
    index: number;
    label: string;
    position: number;
    offset?: number;
    left?: string;
}
export interface ChartFlags {
    isSkeleton: boolean;
    isSmall: boolean;
    isInteractive: boolean;
    canFillHeight: boolean;
    containerWidth?: number;
}
export interface ChartVisibility {
    shouldShowXAxis: boolean;
    shouldShowYAxis: boolean;
    shouldShowGridLines: boolean;
    shouldShowLegend: boolean;
    shouldShowTooltip: boolean;
}
export interface ChartContainerAccessibility {
    role?: 'img' | 'application';
    tabIndex?: number;
    'aria-busy'?: true;
    'aria-label'?: string;
    'aria-keyshortcuts'?: string;
}
export interface ResolveChartHeightParams {
    chartHeight?: number;
    canFillHeight: boolean;
    isSmall: boolean;
    measuredHeight: number;
}
export interface ResolveChartVisibilityParams {
    isInteractive: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showGridLines?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    itemsCount: number;
    defaultShowLegend?: boolean;
}
export interface BuildContainerAccessibilityParams {
    isSkeleton: boolean;
    isInteractive: boolean;
    accessibleName: string;
    keyShortcuts?: string;
}
