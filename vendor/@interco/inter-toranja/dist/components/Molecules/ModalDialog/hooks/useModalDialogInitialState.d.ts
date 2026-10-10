import { SetStateAction } from 'react';
import { AnimationControls } from 'framer-motion';
interface UseModalDialogInitialStateParams {
    isOpen: boolean;
    isRendered?: boolean;
    controls: AnimationControls;
    setIsRendered: (value: SetStateAction<boolean>) => void;
}
export declare const useModalDialogInitialState: ({ isOpen, isRendered, controls, setIsRendered, }: UseModalDialogInitialStateParams) => void;
export {};
