import { LegendItem } from '../../Legend/types';
import { ChartColor, ChartPalette, ValueBuilder } from '../../shared/types';
import { ChartMeterState } from '../types';
interface ChartMeterBarItem {
    key: string;
    testId: string;
    width: string;
    backgroundColor: string;
}
export interface UseChartMeterParams {
    state?: ChartMeterState;
    title?: string;
    bars: number[];
    total?: number;
    legend?: string[];
    value?: number[];
    valueBuilder?: ValueBuilder;
    isSensitiveText?: boolean;
    forceColor?: string[];
    othersColor?: ChartColor;
    palette?: ChartPalette;
    leadingValue?: number | string;
    trailingValue?: number | string;
}
export interface ChartMeterMeterAccessibility {
    role: 'meter';
    'aria-valuemin': number;
    'aria-valuemax': number;
    'aria-valuenow': number;
    'aria-label': string;
}
export interface ChartMeterContainerAccessibility {
    'aria-busy'?: true;
    'aria-label'?: string;
}
export interface ChartMeterClasses {
    container: string;
    bars: string;
    bar: string;
    background: string;
    details: string;
    leading: string;
    trailing: string;
    skeletonBars: string;
    skeletonLegend: string;
    skeletonLegendItem: string;
    skeletonLegendIndicator: string;
    skeletonLegendLabel: string;
}
export interface UseChartMeterReturn {
    isSkeleton: boolean;
    barItems: ChartMeterBarItem[];
    formattedLeadingValue: string | undefined;
    formattedTrailingValue: string | undefined;
    legendItems: LegendItem[];
    shouldShowLegend: boolean;
    classes: ChartMeterClasses;
    containerAccessibility: ChartMeterContainerAccessibility;
    meterAccessibility: ChartMeterMeterAccessibility | undefined;
}
export {};
