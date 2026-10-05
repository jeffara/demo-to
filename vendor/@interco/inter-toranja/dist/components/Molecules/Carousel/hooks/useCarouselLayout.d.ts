import { RefObject } from 'react';
import { CarouselProps } from '../types';
interface UseCarouselLayoutParams extends Pick<CarouselProps, 'variant' | 'showPreview' | 'pageWidth' | 'pageSpacing'> {
    currentIndex: number;
    viewportRef: RefObject<HTMLDivElement | null>;
    carouselRef: RefObject<HTMLDivElement | null>;
}
interface UseCarouselLayoutReturn {
    slideWidth: number;
    currentTranslate: number;
    prevTranslate: number;
    setCurrentTranslate: React.Dispatch<React.SetStateAction<number>>;
    setPrevTranslate: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * Gerencia a lógica de layout do carrossel, incluindo o cálculo da largura do slide e
 * o posicionamento (translate) do contêiner.
 *
 * @param {UseCarouselLayoutParams} params - Parâmetros de configuração do layout.
 * @returns {UseCarouselLayoutReturn} Um objeto contendo a largura do slide e os estados de translação.
 */
export declare const useCarouselLayout: ({ variant, showPreview, pageWidth, pageSpacing, currentIndex, viewportRef, carouselRef, }: UseCarouselLayoutParams) => UseCarouselLayoutReturn;
export {};
