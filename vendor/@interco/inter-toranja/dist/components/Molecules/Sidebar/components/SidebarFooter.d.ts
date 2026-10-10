import { FC } from 'react';
import { SidebarFooterAction } from '../types';
import { TagProps } from '../../../../types/shared';
interface SidebarFooterProps {
    footer: SidebarFooterAction;
    isCollapsed: boolean;
    isFlyoutOpen: boolean;
    onActivate: () => void;
    onFlyoutToggle: (itemId: string, isOpen: boolean) => void;
    onTag?: (data: TagProps) => void;
}
export declare const SidebarFooter: FC<SidebarFooterProps>;
export {};
