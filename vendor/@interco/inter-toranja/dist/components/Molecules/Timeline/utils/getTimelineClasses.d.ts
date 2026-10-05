import { TimelineStepStatus, TimelineState } from '../types';
export type GetTimelineClassesParams = {
    status: TimelineStepStatus;
    state?: TimelineState;
    isSmaller: boolean;
    showLine: boolean;
};
export declare function getTimelineClasses({ status, state, isSmaller, showLine, }: GetTimelineClassesParams): {
    rootClass: string;
    containerClass: string;
    markerClass: string;
    headerClass: string;
    titleClass: string;
    contentClass: string;
    lineClass: string;
    itemClassName: string;
    headerClassName: string;
    titleClassName: string;
    markerLineClassName: string;
    contentClassName: string;
    topLineClassName: string;
    bottomLineClassName: string;
};
