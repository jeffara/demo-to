import { SidebarBrand } from '../types';
export interface ResolvedSidebarBrand {
    src: string;
    alt: string;
}
export declare const resolveSidebarBrand: (brand: SidebarBrand, isCollapsed: boolean) => ResolvedSidebarBrand;
