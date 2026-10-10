---
name: toranja-banner
description: Tipos e props do componente Banner do @interco/inter-toranja.
---

# Banner

**Categoria:** Molecules
**Versão:** 1.0.0 (11/06/2025)
**Importação:**
```tsx
import { Banner } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `BannerContentProps`
- `BannerProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `BannerVariant`
- `BannerState`
- `BannerSize`
- `ImgState`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Estado do banner, pode ser enabled, skeleton ou error. | enabled, skeleton, error | enabled |
| variant | Variante do banner, pode ser image ou webview. | image, webview | image |
| size | Tamanho do banner, determina a proporção. | extraSmall, small, medium, column4, large, extraLarge | medium |
| url | URL da imagem a ser exibida (apenas para variant: "image"). | — | — |
| alt | Texto alternativo para a imagem (acessibilidade). | — | — |
| webContent | Conteúdo React a ser exibido (apenas para variant: "webview"). | — | — |
| onClick | Ação executada quando o banner for clicado. | — | — |
| onTag | Função para tracking/tags do banner. | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { BANNER_VARIANT, IMG_STATE } from './constants'
import type { TagProps } from '@/types/shared'
import type { STATE, SIZE } from '@/utils/pattern'

export type BannerVariant = `${BANNER_VARIANT}`
export type BannerState = Extract<`${STATE}`, 'enabled' | 'skeleton' | 'error'>
export type BannerSize = `${SIZE}` | 'extraSmall' | 'column4'
export type ImgState = `${IMG_STATE}`

export interface BannerContentProps {
  state: BannerState
  variant: BannerVariant
  url?: string
  alt?: string
  webContent?: ReactNode
  handleImgLoad: () => void
  handleImgError: () => void
}

export type BannerProps = {
  /** Variante do banner: imagem ou webview */
  variant: BannerVariant
  /** Estado visual do banner */
  state?: BannerState
  /** Tamanho do banner */
  size?: BannerSize
  /** URL da imagem (para variant image) */
  url?: string
  /** Conteúdo web (para variant webview) */
  webContent?: ReactNode
  /** Texto alternativo da imagem */
  alt?: string
  /** Função chamada ao clicar no banner */
  onClick?: () => void
  /** Função de rastreamento para analytics */
  onTag?: (data: TagProps) => void
}

```
