import { FC } from 'react';
import { TagProps } from '../../../../types/shared';
interface SidebarControlProps {
    className: string;
    icon: 'ic_chevron_left' | 'ic_chevron_right';
    ariaLabel: string;
    ariaExpanded: boolean;
    onClick: () => void;
    onTag?: (data: TagProps) => void;
}
export declare const SidebarControl: FC<SidebarControlProps>;
export {};
