import { ReactNode } from 'react';
import { TableVisualState } from '../shared/types';
export interface TableRowProps {
    visualState?: TableVisualState;
    showDivider?: boolean;
    striped?: boolean;
    forceHover?: boolean;
    statusColor?: string;
    onClick?: () => void;
    onDoubleClick?: () => void;
    children?: ReactNode;
}
