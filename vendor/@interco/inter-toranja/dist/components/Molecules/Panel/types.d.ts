import { MouseEvent, ReactNode } from 'react';
import { PaginationProps } from '../Pagination/types';
import { TagProps } from '../../../types/shared';
export type PanelSize = '4' | '8' | 'full';
export type PanelMinHeight = 'tall';
export type PanelBodyPadding = 'default' | 'flush';
export type PanelFeedbackType = 'noResults' | 'noFilter' | 'empty' | 'genericError' | 'noInternet' | 'serviceUnavailable';
export interface PanelAction {
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
export type PanelFooter = {
    type: 'button';
    primary: PanelAction;
    secondary?: PanelAction;
} | {
    type: 'pagination';
    pagination: PaginationProps;
} | {
    type: 'loading';
};
interface PanelSharedProps {
    size?: PanelSize;
    minHeight?: PanelMinHeight;
    bodyPadding?: PanelBodyPadding;
    title?: string;
    onTitleClick?: (event: MouseEvent<HTMLElement>) => void;
    showDivider?: boolean;
    footer?: PanelFooter;
    onTag?: (data: TagProps) => void;
}
interface PanelSlotProps extends PanelSharedProps {
    type?: 'slot';
    children: ReactNode;
    feedbackType?: never;
    searchTerm?: never;
    feedbackTitle?: never;
    feedbackDescription?: never;
    feedbackPrimaryAction?: never;
    feedbackSecondaryAction?: never;
}
interface PanelFeedbackProps extends PanelSharedProps {
    type: 'feedback';
    children?: never;
    feedbackType: PanelFeedbackType;
    searchTerm?: string;
    feedbackTitle?: string;
    feedbackDescription?: string;
    feedbackPrimaryAction?: PanelAction;
    feedbackSecondaryAction?: PanelAction;
}
export type PanelProps = PanelSlotProps | PanelFeedbackProps;
export interface PanelFeedbackCopy {
    signalVariant: 'information' | 'error' | 'warning';
    title: string;
    description: string;
}
export interface PanelTitleViewProps {
    title: string;
    titleId: string;
    className: string;
    onTitleClick?: (event: MouseEvent<HTMLElement>) => void;
    showDivider?: boolean;
}
export interface PanelFooterViewProps {
    footer: PanelFooter;
    className: string;
    actionsClassName: string;
    actionClassName: string;
}
export interface PanelFooterButtonsProps {
    footer: Extract<PanelFooter, {
        type: 'button';
    }>;
    actionsClassName: string;
    actionClassName: string;
}
export interface PanelFeedbackViewProps {
    copy: PanelFeedbackCopy;
    className: string;
    copyClassName: string;
    actionsClassName: string;
    actionClassName: string;
    primaryAction?: PanelAction;
    secondaryAction?: PanelAction;
}
export interface UsePanelResult {
    rootClasses: string;
    titleClasses: string;
    bodyClasses: string;
    footerClasses: string;
    footerActionsClasses: string;
    feedbackActionsClasses: string;
    actionClassName: string;
    feedbackClassName: string;
    feedbackCopyClassName: string;
    titleId: string;
    isFeedback: boolean;
    feedbackCopy: PanelFeedbackCopy | null;
    feedbackPrimaryAction?: PanelAction;
    feedbackSecondaryAction?: PanelAction;
}
export {};
