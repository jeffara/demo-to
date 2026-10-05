import { JSX } from 'react';
import { ChartBarClasses } from '../hooks/interface';
import { ChartBarAxisLabel } from '../types';
interface ChartBarXAxisProps {
    xLabels: ChartBarAxisLabel[];
    classes: ChartBarClasses;
}
export declare const ChartBarXAxis: ({ xLabels, classes }: ChartBarXAxisProps) => JSX.Element;
export {};
