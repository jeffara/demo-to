import { MouseEventHandler } from 'react';
import { TagProps } from '../../../types/shared';
/**
 * Enum para definir a visibilidade do Overlay
 */
export declare enum OVERLAY_VISIBILITY {
    VISIBLE = "visible",
    HIDDEN = "hidden"
}
/**
 * Interface de propriedades do componente Overlay
 */
export interface OverlayProps {
    /**
     * Define se o Overlay está visível.
     * @default HIDDEN
     */
    isVisible?: OVERLAY_VISIBILITY;
    /**
     * Função de callback para quando o overlay é clicado.
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
    /**
     * Função de callback para eventos de tagging.
     */
    onTag?: (data: TagProps) => void;
    /**
     * ID do componente.
     */
    id?: string;
    /**
     * Classes CSS adicionais para estilização.
     */
    className?: string;
    /**
     * Define se o Overlay tem animação de fade.
     * @default true
     */
    useFade?: boolean;
}
/**
 * Interface para o hook useOverlay
 */
export interface UseOverlayResult {
    /**
     * Estado atual de visibilidade do overlay
     */
    visibility: OVERLAY_VISIBILITY;
    /**
     * Método para mostrar o overlay
     */
    show: () => void;
    /**
     * Método para esconder o overlay
     */
    hide: () => void;
    /**
     * Método para alternar a visibilidade do overlay
     */
    toggle: () => void;
}
