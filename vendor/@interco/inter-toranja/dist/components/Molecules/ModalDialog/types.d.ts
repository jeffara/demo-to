import { KeyboardEvent, ReactNode, RefObject, SetStateAction } from 'react';
import { TagProps } from '../../../types/shared';
import { AnimationControls } from 'framer-motion';
export declare enum MODAL_DIALOG_OVERLAY {
    ON = "on",
    OFF = "off"
}
export interface ModalDialogProps {
    title: string;
    close: () => void;
    isOpen?: boolean;
    id?: string;
    overlay?: `${MODAL_DIALOG_OVERLAY}`;
    showCloseButton?: boolean;
    slot?: ReactNode;
    footer?: ReactNode;
    onTag?: (data: TagProps) => void;
    restoreFocusId?: string;
}
export interface UseModalDialogResult {
    dialogId: string;
    titleId: string;
    panelClassName: string;
    rootClassName: string;
    resolvedOverlay: `${MODAL_DIALOG_OVERLAY}`;
    shouldShowCloseButton: boolean;
    dialogRef: RefObject<HTMLDivElement | null>;
}
export interface UseModalDialogEventsProps {
    close: ModalDialogProps['close'];
    isOpen: ModalDialogProps['isOpen'];
    setIsRendered: (value: SetStateAction<boolean>) => void;
    controls: AnimationControls;
    restoreFocusId?: string;
    isRendered?: boolean;
}
export interface UseModalDialogEventsResult {
    handleClose: () => void;
    handleEscapeClose: () => void;
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    handleAnimationComplete: (definition: string) => void;
}
