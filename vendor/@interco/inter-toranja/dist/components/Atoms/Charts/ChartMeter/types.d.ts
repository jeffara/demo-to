import { ChartColor, ChartPalette, ValueBuilder } from '../shared/types';
import { STATE } from '../../../../utils/pattern';
export type { ChartColor, ChartPalette, ValueBuilder } from '../shared/types';
export type ChartMeterState = Extract<`${STATE}`, 'enabled' | 'skeleton'>;
export interface ProcessedSlices {
    bars: number[];
    label: string[];
    value: (number | string)[];
}
export interface ChartMeterProps {
    state?: ChartMeterState;
    title?: string;
    bars: number[];
    total?: number;
    leadingValue?: number | string;
    leadingLabel?: string;
    trailingValue?: number | string;
    trailingLabel?: string;
    legend: string[];
    value?: number[];
    valueBuilder?: ValueBuilder;
    isSensitiveText?: boolean;
    forceColor?: string[];
    othersColor?: ChartColor;
    palette?: ChartPalette;
}
