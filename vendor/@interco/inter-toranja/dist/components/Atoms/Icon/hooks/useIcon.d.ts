import { CSSProperties } from 'react';
import { IconProps } from '../types';
interface UseIconReturn {
    iconSvgSrc: string | null;
    isLoading: boolean;
    iconClasses: string;
    containerStyles: CSSProperties;
}
export declare const useIcon: ({ asset, size, state, color, isFlag, }: IconProps) => UseIconReturn;
export {};
