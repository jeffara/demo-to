import { ChartDonutSize, ChartDonutState } from './types';
import { LegendOrientation } from '../Legend/types';
import { ChartColor, ChartPalette, ValueBuilder } from '../shared/types';
import { TagProps } from '../../../../types/shared';
export interface ChartDonutProps {
    slice: Array<number>;
    label?: Array<string>;
    value?: Array<string | number>;
    isLoading?: boolean;
    state?: ChartDonutState;
    size?: ChartDonutSize;
    showDefaultLegend?: boolean;
    legendOrientation?: LegendOrientation;
    valueBuilder?: ValueBuilder;
    isSensitiveText?: boolean;
    forceColor?: string[];
    forceIndex?: Array<number | undefined>;
    othersColor?: ChartColor;
    palette?: ChartPalette;
    totalLabel?: string;
    totalValue?: string | number;
    onTag?: (data: TagProps) => void;
}
export interface ChartDonutSliceItem {
    index: number;
    percentage: number;
    dashoffset: number;
    dasharray: string;
    color: string;
    label: string;
    value: string;
    chartClass: string;
    testId: string;
    pointerEvents: 'visibleStroke';
}
export interface ProcessedDonutSlices {
    slice: number[];
    label: string[];
    value: Array<string | number>;
    hasOverflow: boolean;
    forceColor?: Array<string | undefined>;
}
export interface OrderedDonutSlices {
    slice: number[];
    label: string[];
    value: Array<string | number>;
    forceColor?: Array<string | undefined>;
}
export interface OrderDonutSlicesParams {
    slice: number[];
    label: string[];
    value: Array<string | number>;
    forceIndex?: Array<number | undefined>;
    forceColor?: string[];
}
export interface DonutSliceSource {
    originalIndex: number;
    slice: number;
    label: string;
    value: string | number;
}
export interface ResolveDonutSliceColorParams {
    index: number;
    hasOverflow: boolean;
    forceColor?: Array<string | undefined>;
    othersColor?: ChartColor;
    palette?: ChartPalette;
}
