import { ReactNode } from 'react';
import { TimelineItemContentType, TimelineStateEnum, TimelineStepStatusEnum } from './utils/enums';
import { TagProps } from '../../../types/shared';
export type TimelineState = `${TimelineStateEnum}`;
export type TimelineStepStatus = `${TimelineStepStatusEnum}`;
export interface TimelineItemContentButton {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    hierarchy?: 'primary' | 'secondary';
}
export type TimelineItemContentButtonTuple = {
    type: `${TimelineItemContentType.Button}`;
    buttons: [TimelineItemContentButton, TimelineItemContentButton?];
};
export interface TimelineItemContentLink {
    type: `${TimelineItemContentType.Link}`;
    label: string;
    href: string;
}
export interface TimelineItemContentTag {
    type: `${TimelineItemContentType.Tag}`;
    label: string;
    color: string;
    hierarchy?: string;
}
export interface TimelineItemContentSlot {
    type: `${TimelineItemContentType.Slot}`;
    content: ReactNode;
}
export type TimelineItemContent = {
    type: `${TimelineItemContentType.AuxiliarText}`;
    text: string;
} | TimelineItemContentButtonTuple | TimelineItemContentLink | TimelineItemContentTag | TimelineItemContentSlot;
export interface TimelineItemProps {
    title: string;
    date?: string;
    status: TimelineStepStatus;
    state?: TimelineState;
    showLine?: boolean;
    contents?: TimelineItemContent[];
    onTag?: (params: TagProps) => void;
}
export type TimelineItemContentRendererProps = Partial<Omit<TimelineItemProps, 'contents'>> & {
    content: TimelineItemContent;
    stepStatus?: string;
};
export interface TimelineProps extends Omit<TimelineItemProps, 'title' | 'date' | 'status' | 'showLine' | 'contents' | 'onTag'> {
    items: TimelineItemProps[];
    onTag?: (params: TagProps) => void;
}
