import { ReactNode } from 'react';
import { CAROUSEL_VARIANTS } from './constants';
export type CarouselVariant = (typeof CAROUSEL_VARIANTS)[keyof typeof CAROUSEL_VARIANTS];
interface CarouselPropsBase {
    /**
     * Uma lista de elementos React para serem exibidos como slides no carrossel.
     */
    items: ReactNode[];
    /**
     * Define o comportamento de rolagem e visualização do carrossel.
     * - `page-view`: Exibe um slide por vez, com travamento (snap).
     * - `scroll`: Exibe os slides em uma sequência contínua de rolagem livre.
     * @default 'page-view'
     */
    variant?: CarouselVariant;
    /**
     * Quando `true` e a `variant` é `scroll`, faz com que o carrossel
     * se ajuste (snap) ao item mais próximo após o arrastar.
     * Para a `variant` `page-view`, o comportamento de snap é sempre ativo.
     * @default false
     */
    snapToGrid?: boolean;
    /**
     * Define o espaçamento horizontal em pixels entre os slides.
     * @default 8
     */
    pageSpacing?: number;
    /**
     * Habilita o autoplay e define o intervalo em segundos entre as transições.
     * Se o valor for menor que 1, o autoplay é desabilitado.
     */
    timer?: number;
    /**
     * Callback acionado sempre que o slide ativo é alterado.
     * Retorna o índice do novo slide (baseado em zero).
     */
    onPageChange?: (index: number) => void;
}
interface CarouselPropsDefault extends CarouselPropsBase {
    /**
     * Quando `false` (ou não definido), o carrossel opera no modo padrão.
     */
    showPreview?: false;
    /**
     * Propriedade não aplicável quando `showPreview` é `false`.
     */
    pageWidth?: never;
}
interface CarouselPropsWithPreview extends CarouselPropsBase {
    /**
     * Quando `true`, ativa o modo de pré-visualização e torna `pageWidth` obrigatório.
     */
    showPreview: true;
    /**
     * Define a largura absoluta (em pixels) de cada slide.
     * Obrigatório quando `showPreview` é `true`.
     */
    pageWidth: number;
}
export type CarouselProps = CarouselPropsDefault | CarouselPropsWithPreview;
export {};
