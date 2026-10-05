import { JSX } from 'react';
import { ChartBarClasses } from '../hooks/interface';
import { ChartBarAxisLabel } from '../types';
interface ChartBarYAxisProps {
    yLabels: ChartBarAxisLabel[];
    chartAreaHeight: number | '100%';
    classes: ChartBarClasses;
}
export declare const ChartBarYAxis: ({ yLabels, chartAreaHeight, classes, }: ChartBarYAxisProps) => JSX.Element;
export {};
