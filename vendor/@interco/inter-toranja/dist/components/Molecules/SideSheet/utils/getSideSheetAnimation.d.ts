import { Variants } from 'framer-motion';
export declare const SIDE_SHEET_ANIMATION_TRANSITIONS: {
    entrance: {
        duration: number;
        ease: [number, number, number, number];
    };
    exit: {
        duration: number;
        ease: [number, number, number, number];
    };
};
export declare const getSideSheetAnimationVariants: () => Variants;
