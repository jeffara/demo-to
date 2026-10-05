import { FocusEvent, KeyboardEvent, MouseEvent, RefObject } from 'react';
import { LegendItem, LegendOrientation } from '../../Legend/types';
import { ChartDonutSliceItem } from '../interfaces';
export interface ChartDonutClasses {
    container: string;
    chart: string;
    svg: string;
    centerText: string;
    centerLabel: string;
    centerValue: string;
    legend: string;
    dimmedSlice: string;
}
export interface ChartDonutContainerAccessibility {
    role?: 'group';
    'aria-busy'?: true;
    'aria-label'?: string;
}
export interface ChartDonutChartAccessibility {
    'aria-hidden'?: true;
}
export interface UseChartDonutReturn {
    classes: ChartDonutClasses;
    sliceItems: ChartDonutSliceItem[];
    legendItems: LegendItem[];
    legendOrientation: LegendOrientation;
    shouldShowLegend: boolean;
    shouldShowCenterText: boolean;
    shouldShowCenterLabel: boolean;
    isSkeleton: boolean;
    isInteractive: boolean;
    centerLabel: string;
    centerValue: string;
    centerValueRef: RefObject<HTMLDivElement | null>;
    trackColor: string;
    containerAccessibility: ChartDonutContainerAccessibility;
    chartAccessibility: ChartDonutChartAccessibility;
    handleSliceClick: (item: ChartDonutSliceItem) => void;
    handleSliceHighlight: (item: ChartDonutSliceItem) => void;
    handlePreventFocus: (event: MouseEvent) => void;
    handleChartPointerLeave: () => void;
    handleSliceFocus: (item: ChartDonutSliceItem) => void;
    handleSliceBlur: (event: FocusEvent<SVGCircleElement>) => void;
    handleSliceKeyDown: (event: KeyboardEvent<SVGCircleElement>, item: ChartDonutSliceItem) => void;
}
