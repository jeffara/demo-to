import { JSX } from 'react';
import { TimelineStepStatusEnum, TimelineStateEnum } from '../../utils/enums';
type StepComponentProps = {
    status: `${TimelineStepStatusEnum}`;
    state?: `${TimelineStateEnum}`;
    isSmaller?: boolean;
};
export declare const StepComponent: ({ status, state, isSmaller, }: StepComponentProps) => JSX.Element;
export {};
