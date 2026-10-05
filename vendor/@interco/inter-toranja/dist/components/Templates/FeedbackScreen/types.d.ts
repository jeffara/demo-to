import { ReactNode } from 'react';
import { AlertLink } from '../../Molecules/Alert/types';
import { ListItemViewOrientation } from '../../Molecules/ListItemView/types';
import { TagProps } from '../../../types/shared';
import { FEEDBACK, STATE } from '../../../utils/pattern';
export declare enum FeedbackScreenVariant {
    CUSTOM = "custom",
    CUSTOM_DESTRUCTIVE = "customDestructive",
    CUSTOM_INFORMATION = "customInformation",
    GENERIC_ERROR = "genericError",
    SERVICE_UNAVAILABLE = "serviceUnavailable",
    NO_INTERNET_CONNECTION = "noInternetConnection"
}
export type FeedbackVariant = `${FEEDBACK.INFORMATION}` | `${FEEDBACK.WARNING}` | `${FEEDBACK.ERROR}` | `${FEEDBACK.SUCCESS}` | `${FEEDBACK.PENDING}` | `${FEEDBACK.SCHEDULED}`;
export interface AlertConfig {
    title: string;
    description?: string;
    variant?: `${FEEDBACK.INFORMATION}` | `${FEEDBACK.WARNING}` | `${FEEDBACK.ERROR}`;
    link?: AlertLink;
    onTag?: (data: TagProps) => void;
}
export interface ButtonConfig {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onTag?: (data: TagProps) => void;
}
export interface ContentItemConfig {
    label: string;
    value: string;
    orientation?: ListItemViewOrientation;
    onTag?: (data: TagProps) => void;
}
export interface FeedbackScreenProps {
    variant: `${FeedbackScreenVariant}`;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    title?: string;
    description?: string;
    value?: string;
    signalVariant?: FeedbackVariant;
    primaryButton?: ButtonConfig;
    secondaryButton?: ButtonConfig;
    tertiaryButton?: ButtonConfig;
    alert?: AlertConfig;
    contentItems?: ContentItemConfig[];
    showPoweredBy?: boolean;
    showAdditionalContent?: boolean;
    /** @deprecated Use `showAdditionalContent` instead. Kept for backward compatibility. */
    showCrossSelling?: boolean;
    children?: ReactNode;
    onTag?: (data: TagProps) => void;
    className?: string;
}
