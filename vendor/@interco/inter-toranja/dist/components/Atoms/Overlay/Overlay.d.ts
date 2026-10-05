import { FC } from 'react';
import { OVERLAY_VISIBILITY, OverlayProps } from './types';
/**
 * Componente Overlay que cria uma camada semi-transparente sobre o conteúdo da página.
 * Frequentemente usado em conjunto com modais, drawers e outros componentes que precisam destacar seu conteúdo.
 */
export declare const Overlay: FC<OverlayProps>;
export type { OverlayProps };
export { OVERLAY_VISIBILITY };
export { useOverlay } from './hooks/useOverlay';
