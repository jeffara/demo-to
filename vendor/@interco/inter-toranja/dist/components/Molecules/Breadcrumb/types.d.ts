import { MouseEventHandler } from 'react';
import { TagProps } from '../../../types/shared';
export interface BreadcrumbItem {
    id: string;
    label: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    ariaLabel?: string;
    onTag?: (data: TagProps) => void;
}
export interface BreadcrumbTrailItem {
    id: string;
    label: string;
    href?: string;
    isCurrent: boolean;
    isInteractive: boolean;
    showSeparator: boolean;
    handleClick?: MouseEventHandler<HTMLAnchorElement>;
}
