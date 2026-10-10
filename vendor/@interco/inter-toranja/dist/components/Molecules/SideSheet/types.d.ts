import { ReactNode } from 'react';
import { TagProps } from '../../../types/shared';
export interface SideSheetProps {
    isOpen?: boolean;
    close: () => void;
    title?: string;
    description?: string;
    slot?: ReactNode;
    footer?: ReactNode;
    showFooterDivider?: boolean;
    onTag?: (data: TagProps) => void;
    id?: string;
}
