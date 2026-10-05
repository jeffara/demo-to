import { ChartPalette, ValueBuilder } from '../ChartMeter/types';
import { ChartAxisLabel } from '../shared/types';
import { TagProps } from '../../../../types/shared';
import { SIZE, STATE } from '../../../../utils/pattern';
export type ChartLineSize = `${SIZE.SMALL}` | `${SIZE.LARGE}`;
export type ChartLineState = `${STATE.ENABLED}` | `${STATE.SKELETON}`;
export type ChartLineYAxisPosition = 'start' | 'end';
export type ChartLineAxisLabel = ChartAxisLabel;
export interface ChartLineSeries {
    label: string;
    values: number[];
    color?: string;
}
export interface ChartLineHighlightPoint {
    seriesIndex: number;
    label: string;
    value: number;
    formattedValue: string;
    color: string;
}
export interface ChartLineHighlight {
    categoryIndex: number;
    category: string;
    points: ChartLineHighlightPoint[];
}
interface ChartLineBaseProps {
    state?: ChartLineState;
    series: ChartLineSeries[];
    categories: string[];
    yLabels?: string[];
    xLabelInterval?: number;
    yLabelInterval?: number;
    yAxisPosition?: ChartLineYAxisPosition;
    threshold?: number;
    chartWidth?: number;
    chartHeight?: number;
    shouldFillHeight?: boolean;
    valueBuilder?: ValueBuilder;
    isSensitiveText?: boolean;
    forceColor?: string[];
    palette?: ChartPalette;
    ariaLabel?: string;
    onHighlightChange?: (highlight: ChartLineHighlight | null) => void;
    onTag?: (data: TagProps) => void;
}
interface ChartLineInteractionProps {
    showDots?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showGridLines?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    isSelectionSticky?: boolean;
}
type ChartLineSmallInteractionProps = {
    [Key in keyof ChartLineInteractionProps]?: never;
};
export type ChartLineLargeProps = ChartLineBaseProps & ChartLineInteractionProps & {
    size?: `${SIZE.LARGE}`;
};
export type ChartLineSmallProps = ChartLineBaseProps & ChartLineSmallInteractionProps & {
    size: `${SIZE.SMALL}`;
};
export type ChartLineProps = ChartLineLargeProps | ChartLineSmallProps;
export interface ChartLinePoint {
    x: number;
    y: number;
    value: number | null;
}
export interface ChartLineSeriesPath {
    key: string;
    label: string;
    color: string;
    path: string;
    points: ChartLinePoint[];
    testId: string;
    animationKey: string;
}
export interface ChartLineTooltipItem {
    label: string;
    value: string;
    color: string;
}
export interface ChartLineTooltipProps {
    title: string;
    items: ChartLineTooltipItem[];
    showIndicators?: boolean;
}
export {};
