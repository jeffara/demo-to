import { ReactNode } from 'react';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type CardProps = {
    onTag?: (data: TagProps) => void;
    onClick?: () => void;
    children: ReactNode;
    state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
    isSelected?: boolean;
    onSelect?: (isSelected: boolean) => void;
};
