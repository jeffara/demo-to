import { FC } from 'react';
import { BannerProps, BannerState } from './types';
/**
 * Determina o estado do banner baseado no estado da prop, variante e estado da imagem
 * @param propState - Estado definido via props
 * @param variant - Variante do banner (image ou webview)
 * @param imgState - Estado atual da imagem
 * @returns Estado final do banner
 */
export declare const getBannerState: (propState: BannerState, variant: string, imgState: string) => BannerState;
/**
 * Adiciona um timestamp à URL da imagem para forçar o recarregamento
 * @param url - URL original da imagem
 * @param timestamp - Timestamp atual
 * @returns URL com timestamp
 */
export declare const getImageUrlWithTimestamp: (url: string, timestamp: number) => string;
/**
 * Componente Banner que exibe conteúdo em formato de imagem ou webview
 * Suporta diferentes estados (enabled, skeleton, error) e tamanhos
 * @param props - Props do componente
 * @returns Componente Banner
 */
export declare const Banner: FC<BannerProps>;
