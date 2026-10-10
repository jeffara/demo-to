import { ReactNode } from 'react';
import { TableColumnHeaderStatus, TableSortDirection } from '../shared/types';
export interface TableColumnHeaderCheckboxProps {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
}
export interface TableColumnHeaderProps {
    label: string;
    minWidth?: number;
    status?: TableColumnHeaderStatus;
    sortable?: boolean;
    sortDirection?: TableSortDirection | null;
    align?: 'start' | 'center' | 'end';
    showCheckbox?: boolean;
    checkbox?: TableColumnHeaderCheckboxProps;
    forceHover?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}
