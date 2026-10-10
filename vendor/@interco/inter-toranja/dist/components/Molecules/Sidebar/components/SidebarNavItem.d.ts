import { FC } from 'react';
import { SidebarNavItemView } from '../hooks/useSidebar';
import { SidebarChildItem, SidebarItem } from '../types';
import { TagProps } from '../../../../types/shared';
interface SidebarNavItemProps {
    view: SidebarNavItemView;
    isCollapsed: boolean;
    onActivate: (item: SidebarItem) => void;
    onChildActivate: (child: SidebarChildItem) => void;
    onFlyoutToggle: (itemId: string, isOpen: boolean) => void;
    onTag?: (data: TagProps) => void;
}
export declare const SidebarNavItem: FC<SidebarNavItemProps>;
export {};
