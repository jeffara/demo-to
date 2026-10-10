import { FocusEvent, ReactElement, RefObject } from 'react';
import { HIERARCHY } from '../../../utils/pattern';
export type TooltipDescriptionAlign = 'left' | 'center' | 'right';
export type TooltipDescriptionPlacement = 'top' | 'bottom';
export type TooltipDescriptionHierarchy = `${HIERARCHY.PRIMARY}` | `${HIERARCHY.SECONDARY}`;
export interface TriggerChildProps {
    id?: string;
    'aria-describedby'?: string;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
}
interface TooltipDescriptionSharedProps {
    children: ReactElement<TriggerChildProps>;
    description: string;
    align?: TooltipDescriptionAlign;
    placement?: TooltipDescriptionPlacement;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onToggle?: (opened: boolean) => void;
}
export type TooltipDescriptionProps = (TooltipDescriptionSharedProps & {
    hierarchy?: `${HIERARCHY.PRIMARY}`;
    title: string;
}) | (TooltipDescriptionSharedProps & {
    hierarchy: `${HIERARCHY.SECONDARY}`;
    title?: never;
});
export interface TooltipDescriptionCoordinates {
    top: number;
    left: number;
    caretShift: number;
    placement: TooltipDescriptionPlacement;
}
export interface TooltipDescriptionViewport {
    width: number;
    height: number;
}
export interface UseTooltipDescriptionReturn {
    hasDescription: boolean;
    isOpen: boolean;
    showTitle: boolean;
    title?: string;
    description: string;
    placement: TooltipDescriptionPlacement;
    tooltipId: string;
    rootClasses: string;
    triggerClasses: string;
    panelClasses: string;
    contentClasses: string;
    caretRowClasses: string;
    caretClasses: string;
    trigger: ReactElement;
    triggerRef: RefObject<HTMLDivElement | null>;
    panelRef: RefObject<HTMLDivElement | null>;
    panelStyle: TooltipDescriptionCoordinates;
    handleHoverOpen: () => void;
    handleHoverClose: () => void;
}
export {};
