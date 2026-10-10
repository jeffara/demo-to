import { SidebarChildItem, SidebarFooterAction, SidebarItem } from '../types';
import { MenuPopupProps } from '../../MenuPopup/types';
export declare const mapSidebarChildrenToMenuPopupItems: (children: SidebarChildItem[], onChildActivate: (child: SidebarChildItem) => void) => MenuPopupProps["items"] | null;
export declare const resolveCollapsedMenuPopupItems: (item: SidebarItem, onActivate: (item: SidebarItem) => void, onChildActivate: (child: SidebarChildItem) => void) => MenuPopupProps["items"];
export declare const resolveCollapsedFooterMenuPopupItems: (footer: SidebarFooterAction, onActivate: () => void) => MenuPopupProps["items"];
