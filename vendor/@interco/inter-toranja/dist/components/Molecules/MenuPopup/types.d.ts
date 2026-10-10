import { KeyboardEvent, MouseEvent, ReactElement, RefObject } from 'react';
import { IconColorToken } from '../../Atoms/Icon/constants/iconColors';
import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
import { SIZE } from '../../../utils/pattern';
export interface MenuPopupItem {
    id: string;
    label: string;
    icon?: IconName;
    disabled?: boolean;
    skeleton?: boolean;
    onClick: () => void;
}
export type MenuPopupSize = `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}` | `${SIZE.EXTRA_LARGE}`;
export type MenuPopupPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
export interface MenuPopupProps {
    children: ReactElement<{
        id?: string;
        onClick?: (event: MouseEvent<HTMLElement>) => void;
        'aria-haspopup'?: 'menu';
        'aria-expanded'?: boolean;
        'aria-controls'?: string;
    }>;
    items: [MenuPopupItem, ...MenuPopupItem[]];
    size?: MenuPopupSize;
    isOpen?: boolean;
    defaultOpen?: boolean;
    placement?: MenuPopupPlacement;
    offset?: number;
    onToggle?: (opened: boolean) => void;
    onTag?: (data: TagProps) => void;
    ariaLabel?: string;
    openOnHover?: boolean;
}
export interface MenuPopupCoordinates {
    top: number;
    left: number;
}
export interface MenuPopupViewport {
    width: number;
    height: number;
}
export interface MenuPopupViewItem {
    id: string;
    label: string;
    icon?: IconName;
    iconColor: IconColorToken;
    isDisabled: boolean;
    isSkeleton: boolean;
    itemClasses: string;
    tabIndex: number;
    handleClick: () => void;
    handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    setItemRef: (node: HTMLButtonElement | null) => void;
    labelClasses: string;
    ariaLabel?: string;
    isAriaDisabled: boolean;
}
export interface UseMenuPopupReturn {
    shouldRender: boolean;
    isOpen: boolean;
    ariaLabel: string;
    triggerId: string;
    menuId: string;
    rootClasses: string;
    triggerClasses: string;
    panelClasses: string;
    listClasses: string;
    iconClasses: string;
    skeletonClasses: string;
    trigger: ReactElement;
    triggerRef: RefObject<HTMLDivElement | null>;
    panelRef: RefObject<HTMLDivElement | null>;
    panelStyle: MenuPopupCoordinates;
    viewItems: MenuPopupViewItem[];
    handleHoverOpen: () => void;
    handleHoverClose: () => void;
}
