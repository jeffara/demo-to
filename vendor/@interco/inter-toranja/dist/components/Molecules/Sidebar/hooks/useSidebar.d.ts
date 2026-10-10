import { SidebarChildItem, SidebarItem, SidebarProps } from '../types';
export interface SidebarNavItemView {
    item: SidebarItem;
    hasChildren: boolean;
    isNestedOpen: boolean;
    isFlyoutOpen: boolean;
    itemClasses: string;
}
interface UseSidebarReturn {
    navItems: SidebarNavItemView[];
    footer: SidebarProps['footer'];
    brandSrc: string;
    brandAlt: string;
    ariaLabel: string;
    isExpanded: boolean;
    isCollapsed: boolean;
    rootClasses: string;
    brandClasses: string;
    controlClasses: string;
    controlIcon: 'ic_chevron_left' | 'ic_chevron_right';
    controlAriaLabel: string;
    controlAriaExpanded: boolean;
    onTag: SidebarProps['onTag'];
    handleToggle: () => void;
    handleItemActivate: (item: SidebarItem) => void;
    handleChildActivate: (child: SidebarChildItem) => void;
    handleFooterActivate: () => void;
    handleFlyoutToggle: (itemId: string, isOpen: boolean) => void;
    isFooterFlyoutOpen: boolean;
}
export declare const useSidebar: (props: SidebarProps) => UseSidebarReturn;
export {};
