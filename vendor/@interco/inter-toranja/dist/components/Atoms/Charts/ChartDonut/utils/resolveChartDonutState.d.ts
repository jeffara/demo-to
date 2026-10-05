import { ChartDonutChartAccessibility, ChartDonutContainerAccessibility } from '../hooks/interfaces';
import { ChartDonutSliceItem, ResolveDonutSliceColorParams } from '../interfaces';
import { ChartDonutSize, ChartDonutState, ValueBuilder } from '../types';
export interface ChartDonutFlags {
    isSmall: boolean;
    isSkeleton: boolean;
    isInteractive: boolean;
}
export interface ChartDonutCenterPresentation {
    shouldShowCenterLabel: boolean;
    shouldShowCenterText: boolean;
    centerLabel: string;
    centerValue: string;
}
export interface ChartDonutAccessibility {
    trackColor: string;
    containerAccessibility: ChartDonutContainerAccessibility;
    chartAccessibility: ChartDonutChartAccessibility;
}
interface ResolveCenterPresentationParams {
    isSmall: boolean;
    isSkeleton: boolean;
    highlightedIndex: number | null;
    labels: string[];
    formattedValues: string[];
    slices: number[];
    totalLabel?: string;
    totalValue?: string | number;
    valueBuilder?: ValueBuilder;
    isSensitiveText: boolean;
}
export declare const resolveChartDonutFlags: (size: ChartDonutSize, state: ChartDonutState, isLoading: boolean) => ChartDonutFlags;
export declare const resolveShouldShowLegend: (showDefaultLegend: boolean | undefined, isSmall: boolean, isSkeleton: boolean, legendCount: number) => boolean;
export declare const resolveCenterPresentation: ({ isSmall, isSkeleton, highlightedIndex, labels, formattedValues, slices, totalLabel, totalValue, valueBuilder, isSensitiveText, }: ResolveCenterPresentationParams) => ChartDonutCenterPresentation;
export declare const resolveChartDonutAccessibility: (isSkeleton: boolean) => ChartDonutAccessibility;
export declare const resolveBaseSliceItems: (isSkeleton: boolean, visualSlice: number[], sliceValue: number[], labels: string[], formattedValues: string[], colorParams: Omit<ResolveDonutSliceColorParams, "index">) => ChartDonutSliceItem[];
export declare const applySliceHighlightClasses: (items: ChartDonutSliceItem[], highlightedIndex: number | null, dimmedClass: string) => ChartDonutSliceItem[];
export declare const fitCenterValueFontSize: (wrapper: HTMLDivElement | null, shouldShowCenterText: boolean) => void;
export {};
