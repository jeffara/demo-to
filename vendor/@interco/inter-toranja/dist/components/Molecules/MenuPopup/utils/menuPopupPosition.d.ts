import { MenuPopupCoordinates, MenuPopupPlacement, MenuPopupViewport } from '../types';
interface ComputeMenuPopupPositionParams {
    trigger: DOMRect;
    panelHeight: number;
    panelWidth: number;
    placement: MenuPopupPlacement;
    offset: number;
    viewport: MenuPopupViewport;
}
export declare const computeMenuPopupPosition: (params: ComputeMenuPopupPositionParams) => MenuPopupCoordinates;
export {};
