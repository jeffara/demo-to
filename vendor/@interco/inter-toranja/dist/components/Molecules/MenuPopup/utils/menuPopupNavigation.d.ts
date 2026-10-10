import { MenuPopupItem } from '../types';
export declare const isMenuPopupItemInteractive: (item: Pick<MenuPopupItem, "disabled" | "skeleton">) => boolean;
export declare const findFirstInteractiveIndex: (items: readonly MenuPopupItem[]) => number;
export declare const findLastInteractiveIndex: (items: readonly MenuPopupItem[]) => number;
export declare const findNextInteractiveIndex: (items: readonly MenuPopupItem[], from: number, direction: 1 | -1) => number;
export declare const getVerticalNavigationDirection: (key: string) => 1 | -1 | undefined;
