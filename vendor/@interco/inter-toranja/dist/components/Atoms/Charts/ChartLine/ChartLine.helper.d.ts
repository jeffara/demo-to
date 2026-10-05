import { ChartLineAxisLabel, ChartLineHighlight, ChartLinePoint, ChartLineSeries, ChartLineSeriesPath, ChartLineTooltipItem } from './types';
import { LegendItem } from '../Legend/types';
import { ChartPalette, ValueBuilder } from '../shared/types';
export { buildAutoLabelIndices, CHART_HORIZONTAL_PADDING, CHART_VERTICAL_PADDING, DEFAULT_LARGE_CHART_HEIGHT, DEFAULT_SMALL_CHART_HEIGHT, filterLabelsByInterval, isPointerInsideRect, MAX_AXIS_LABELS, resolveGridY, } from '../shared/chart.helper';
export declare const resolveXLabelLeft: (position: number, padding?: number) => string;
export declare const Y_TICK_COUNT = 4;
export declare const resolveYTickDecimals: (min: number, max: number) => number;
export declare const buildSeriesAnimationKey: (testId: string, chartWidth: number, values: Array<number | null>) => string;
export declare const getYDomain: (series: ChartLineSeries[], threshold?: number) => {
    min: number;
    max: number;
};
export declare const buildYTickLabels: (min: number, max: number, yLabels?: string[], yLabelInterval?: number, valueBuilder?: ValueBuilder, isSensitiveText?: boolean) => ChartLineAxisLabel[];
export declare const scaleX: (index: number, count: number, width: number, padding?: number) => number;
export declare const scaleY: (value: number, min: number, max: number, height: number, padding?: number) => number;
export declare const buildPolylinePath: (points: ChartLinePoint[]) => string;
export declare const resolveSeriesColor: (index: number, series: ChartLineSeries, forceColor?: string[], palette?: ChartPalette) => string;
export declare const buildSeriesPaths: (series: ChartLineSeries[], categories: string[], width: number, height: number, domain: {
    min: number;
    max: number;
}, forceColor?: string[], palette?: ChartPalette) => ChartLineSeriesPath[];
export declare const buildLegendItems: (series: ChartLineSeries[], forceColor?: string[], palette?: ChartPalette) => LegendItem[];
export declare const buildHighlight: (categoryIndex: number, categories: string[], series: ChartLineSeries[], forceColor?: string[], palette?: ChartPalette, valueBuilder?: ValueBuilder, isSensitiveText?: boolean) => ChartLineHighlight | null;
export declare const buildTooltipItems: (highlight: ChartLineHighlight) => ChartLineTooltipItem[];
export declare const buildHighlightAnnouncement: (highlight: ChartLineHighlight) => string;
export declare const resolveCategoryIndexFromClientX: (clientX: number, rectLeft: number, width: number, categoriesLength: number, padding?: number) => number | null;
