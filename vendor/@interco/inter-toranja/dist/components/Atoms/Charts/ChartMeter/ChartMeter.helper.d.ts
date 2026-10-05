import { ChartColor, ChartPalette, ProcessedSlices, ValueBuilder } from './types';
import { LegendItem } from '../Legend/types';
export declare const MAX_BARS = 6;
export declare const groupOverflowBars: (bars: number[], label: string[], value: number[]) => ProcessedSlices;
export declare const computeBarPercentages: (rawBars: number[], effectiveTotal: number) => number[];
export declare const resolveBarColor: (index: number, hasOverflow: boolean, forceColor?: string[], othersColor?: ChartColor, palette?: ChartPalette) => string;
export declare const buildLegendItems: (processed: ProcessedSlices, hasOverflow: boolean, valueBuilder?: ValueBuilder, isSensitiveText?: boolean, forceColor?: string[], othersColor?: ChartColor, palette?: ChartPalette) => LegendItem[];
