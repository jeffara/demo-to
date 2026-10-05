import { JSX, ReactNode } from 'react';
interface ChartSvgProps {
    plotWidth: number;
    chartHeight: number;
    className?: string;
    testId?: string;
    children: ReactNode;
}
export declare const ChartSvg: ({ plotWidth, chartHeight, className, testId, children, }: ChartSvgProps) => JSX.Element;
export {};
