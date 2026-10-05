import { ChartAxisLabel, ChartPalette, ValueBuilder } from '../shared/types';
import { TagProps } from '../../../../types/shared';
import { SIZE, STATE } from '../../../../utils/pattern';
export type ChartBarSize = `${SIZE.SMALL}` | `${SIZE.LARGE}`;
export type ChartBarState = `${STATE.ENABLED}` | `${STATE.SKELETON}`;
export type ChartBarOrientation = 'vertical' | 'horizontal';
export type ChartBarYAxisPosition = 'start' | 'end';
export type ChartBarAxisLabel = ChartAxisLabel;
export interface ChartBarHighlight {
    categoryIndex: number;
    category: string;
    value: number;
    formattedValue: string;
}
interface ChartBarBaseProps {
    state?: ChartBarState;
    orientation?: ChartBarOrientation;
    categories: string[];
    values: number[];
    valueLabels?: string[];
    xLabelInterval?: number;
    yLabelInterval?: number;
    yAxisPosition?: ChartBarYAxisPosition;
    threshold?: number;
    chartWidth?: number;
    chartHeight?: number;
    shouldFillHeight?: boolean;
    valueBuilder?: ValueBuilder;
    isSensitiveText?: boolean;
    forceColor?: string[];
    palette?: ChartPalette;
    ariaLabel?: string;
    onHighlightChange?: (highlight: ChartBarHighlight | null) => void;
    onTag?: (data: TagProps) => void;
}
interface ChartBarInteractionProps {
    showXAxis?: boolean;
    showYAxis?: boolean;
    showGridLines?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    isSelectionSticky?: boolean;
}
type ChartBarSmallInteractionProps = {
    [Key in keyof ChartBarInteractionProps]?: never;
};
export type ChartBarLargeProps = ChartBarBaseProps & ChartBarInteractionProps & {
    size?: `${SIZE.LARGE}`;
};
export type ChartBarSmallProps = ChartBarBaseProps & ChartBarSmallInteractionProps & {
    size: `${SIZE.SMALL}`;
};
export type ChartBarProps = ChartBarLargeProps | ChartBarSmallProps;
interface Bar {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ChartBarRect extends Bar {
    key: string;
    categoryIndex: number;
    category: string;
    value: number;
    color: string;
    testId: string;
    animationKey: string;
}
export interface BuildBarRectsParams {
    categories: string[];
    values: number[];
    width: number;
    height: number;
    domain: {
        min: number;
        max: number;
    };
    orientation: ChartBarOrientation;
    forceColor?: string[];
    palette?: ChartPalette;
}
export interface ChartBarTooltipItem {
    label: string;
    value: string;
}
export interface ChartBarTooltipProps {
    items: ChartBarTooltipItem[];
}
export {};
