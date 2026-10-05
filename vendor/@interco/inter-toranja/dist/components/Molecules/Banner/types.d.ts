import { ReactNode } from 'react';
import { BANNER_VARIANT, IMG_STATE } from './constants';
import { TagProps } from '../../../types/shared';
import { STATE, SIZE } from '../../../utils/pattern';
export type BannerVariant = `${BANNER_VARIANT}`;
export type BannerState = Extract<`${STATE}`, 'enabled' | 'skeleton' | 'error'>;
export type BannerSize = `${SIZE}` | 'extraSmall';
export type ImgState = `${IMG_STATE}`;
export interface BannerContentProps {
    state: BannerState;
    variant: BannerVariant;
    url?: string;
    alt?: string;
    webContent?: ReactNode;
    handleImgLoad: () => void;
    handleImgError: () => void;
}
export type BannerProps = {
    /** Variante do banner: imagem ou webview */
    variant: BannerVariant;
    /** Estado visual do banner */
    state?: BannerState;
    /** Tamanho do banner */
    size?: BannerSize;
    /** URL da imagem (para variant image) */
    url?: string;
    /** Conteúdo web (para variant webview) */
    webContent?: ReactNode;
    /** Texto alternativo da imagem */
    alt?: string;
    /** Função chamada ao clicar no banner */
    onClick?: () => void;
    /** Função de rastreamento para analytics */
    onTag?: (data: TagProps) => void;
};
