import { TooltipDescriptionAlign, TooltipDescriptionCoordinates, TooltipDescriptionPlacement, TooltipDescriptionViewport } from '../types';
export declare const TOOLTIP_DESCRIPTION_PANEL_WIDTH = 280;
export declare const TOOLTIP_DESCRIPTION_CARET_SIZE = 16;
export declare const TOOLTIP_DESCRIPTION_CARET_INSET = 16;
export declare const TOOLTIP_DESCRIPTION_DEFAULT_OFFSET = 16;
interface ComputeTooltipDescriptionPositionParams {
    trigger: DOMRect;
    panelHeight: number;
    panelWidth: number;
    align: TooltipDescriptionAlign;
    placement: TooltipDescriptionPlacement;
    offset: number;
    viewport: TooltipDescriptionViewport;
}
export declare const resolveCaretCenterX: (align: TooltipDescriptionAlign, panelWidth: number) => number;
export declare const computeTooltipDescriptionPosition: ({ trigger, panelHeight, panelWidth, align, placement, offset, viewport, }: ComputeTooltipDescriptionPositionParams) => TooltipDescriptionCoordinates;
export {};
