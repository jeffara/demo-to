import { JSX } from 'react';
import { ChartBarClasses } from '../hooks/interface';
import { ChartBarAxisLabel, ChartBarOrientation } from '../types';
interface GridLinesProps {
    labels: ChartBarAxisLabel[];
    plotWidth: number;
    chartHeight: number;
    orientation: ChartBarOrientation;
    classes: ChartBarClasses;
    withTestIds?: boolean;
}
export declare const GridLines: ({ labels, plotWidth, chartHeight, orientation, classes, withTestIds, }: GridLinesProps) => JSX.Element;
export {};
