interface UseCarouselAutoplayParams {
    timer: number | undefined;
    itemCount: number;
    isDragging: boolean;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * Gerencia a funcionalidade de autoplay do carrossel.
 * Inicia um intervalo que avança para o próximo slide e pausa quando o usuário está interagindo (arrastando).
 *
 * @param {UseCarouselAutoplayParams} params - Parâmetros para controlar o autoplay.
 */
export declare const useCarouselAutoplay: ({ timer, itemCount, isDragging, setCurrentIndex, }: UseCarouselAutoplayParams) => void;
export {};
