import { TouchEvent, MouseEvent, RefObject } from 'react';
import { CarouselProps } from '../types';
interface UseCarouselDragParams extends Pick<CarouselProps, 'variant' | 'snapToGrid' | 'items' | 'pageSpacing' | 'showPreview'> {
    slideWidth: number;
    currentIndex: number;
    carouselRef: RefObject<HTMLDivElement | null>;
    viewportRef: RefObject<HTMLDivElement | null>;
    prevTranslate: number;
    currentTranslate: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    setCurrentTranslate: React.Dispatch<React.SetStateAction<number>>;
    setPrevTranslate: React.Dispatch<React.SetStateAction<number>>;
}
interface UseCarouselDragReturn {
    dragStart: (e: TouchEvent | MouseEvent) => void;
    drag: (e: TouchEvent | MouseEvent) => void;
    dragEnd: () => void;
    isDragging: boolean;
}
/**
 * Gerencia toda a lógica de arrastar (drag) do carrossel para mouse e toque.
 * Lida com as variantes 'page-view' e 'scroll' (com e sem snap).
 *
 * @param {UseCarouselDragParams} params - Parâmetros e estados necessários para a lógica de arrastar.
 * @returns {UseCarouselDragReturn} Um objeto contendo os manipuladores de evento (dragStart, drag, dragEnd) e o estado de arrasto.
 */
export declare const useCarouselDrag: ({ variant, snapToGrid, items, pageSpacing, showPreview, slideWidth, currentIndex, carouselRef, viewportRef, prevTranslate, currentTranslate, setCurrentIndex, setCurrentTranslate, setPrevTranslate, }: UseCarouselDragParams) => UseCarouselDragReturn;
export {};
