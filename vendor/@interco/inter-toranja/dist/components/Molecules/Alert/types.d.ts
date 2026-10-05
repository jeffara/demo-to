import { MouseEvent } from 'react';
import { TagProps } from '../../../types/shared';
import { FEEDBACK, STATE } from '../../../utils/pattern';
export type AlertLink = {
    label: string;
    href: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};
export type AlertProps = {
    variant: `${FEEDBACK.INFORMATION}` | `${FEEDBACK.WARNING}` | `${FEEDBACK.ERROR}`;
    state: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    title: string;
    description: string;
    showDescription?: boolean;
    showLink?: boolean;
    link?: AlertLink;
    onTag?: (data: TagProps) => void;
};
