import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
export type SidebarExpansion = 'collapsed' | 'expanded';
export type SidebarBrandPreset = 'inter' | 'interEmpresas' | 'interCo';
export interface SidebarCustomBrand {
    src: string;
    collapsedSrc: string;
    alt: string;
}
export type SidebarBrand = SidebarBrandPreset | SidebarCustomBrand;
export interface SidebarChildItem {
    id: string;
    label: string;
    onClick?: () => void;
}
export interface SidebarItem {
    id: string;
    label: string;
    icon: IconName;
    selected?: boolean;
    children?: SidebarChildItem[];
    onClick?: () => void;
}
export type SidebarItems = [SidebarItem, ...SidebarItem[]];
export interface SidebarFooterAction {
    label: string;
    icon: IconName;
    onClick: () => void;
    'aria-label'?: string;
}
export interface SidebarProps {
    items: SidebarItems;
    expansion?: SidebarExpansion;
    defaultExpansion?: SidebarExpansion;
    onExpansionChange?: (expansion: SidebarExpansion) => void;
    brand?: SidebarBrand;
    footer?: SidebarFooterAction;
    ariaLabel?: string;
    onTag?: (data: TagProps) => void;
}
