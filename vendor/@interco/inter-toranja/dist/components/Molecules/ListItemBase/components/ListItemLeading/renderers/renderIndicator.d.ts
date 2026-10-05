import { ReactNode } from 'react';
import { ComponentState } from '../../../types/shared';
import { LeadingIndicatorProps } from '../types';
declare const CHART_INDICATOR_COLOR_MAP: {
    readonly 'Color/Chart/Brand/Default': "var(--color-chart-brand-default)";
    readonly 'Color/Chart/Neutral/Default': "var(--color-chart-neutral-default)";
    readonly 'Color/Chart/Neutral/Soft': "var(--color-chart-neutral-soft)";
    readonly 'Color/Chart/Feedback/Success': "var(--color-chart-feedback-success)";
    readonly 'Color/Chart/Feedback/Error': "var(--color-chart-feedback-error)";
    readonly 'Color/Chart/Feedback/Warning': "var(--color-chart-feedback-warning)";
    readonly 'Color/Chart/Categorical/1': "var(--color-chart-categorical-1)";
    readonly 'Color/Chart/Categorical/2': "var(--color-chart-categorical-2)";
    readonly 'Color/Chart/Categorical/3': "var(--color-chart-categorical-3)";
    readonly 'Color/Chart/Categorical/4': "var(--color-chart-categorical-4)";
    readonly 'Color/Chart/Categorical/5': "var(--color-chart-categorical-5)";
};
export type ChartIndicatorColorToken = keyof typeof CHART_INDICATOR_COLOR_MAP;
export declare const renderIndicator: (indicatorProps: LeadingIndicatorProps | undefined, state: ComponentState, testId: string) => ReactNode;
export {};
