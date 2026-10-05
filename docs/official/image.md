---
name: toranja-image
description: Tipos e props do componente Image do @interco/inter-toranja.
---

# Image

**Categoria:** Atoms
**Versão:** 1.0.1 (09/09/2025)
**Importação:**
```tsx
import { Image } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ImageProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `ImageContentScale`
- `ImageRadius`
- `ImageBorderWeight`
- `ImageBorderColor`

**Interfaces:**
- `ImageSrc`
- `ImageDimensions`
- `ImageBorder`
- `ImageLoadStates`

**Types:**
- `CSSPropertiesWithCustom`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| src | Fonte da imagem (local ou remota). Aceita objeto com estrutura { remote: { light, dark } } para suporte a temas ou { local: string } para imagens locais. | — | { remote: { light: sampleImages.landscape |
| contentDescription | Texto alternativo (alt) da imagem para acessibilidade. Descreva o conteúdo da imagem de forma clara e objetiva. | — | — |
| contentScale | Define como a imagem se comporta dentro do container: FILL preenche todo o espaço (pode cortar), FIT mantém proporção original (pode deixar espaços vazios). | — | — |
| width | Largura fixa da imagem em pixels. Não use junto com fillWidth. | — | 300 |
| height | Altura fixa da imagem em pixels. Não use junto com fillHeight. | — | 200 |
| fillWidth | Faz a imagem ocupar 100% da largura do container pai. Útil para layouts responsivos. Não use junto com width. | — | — |
| fillHeight | Faz a imagem ocupar 100% da altura do container pai. Útil para layouts de altura fixa. Não use junto com height. | — | — |
| ratio | Força uma proporção específica (aspect-ratio). Exemplos: 1 = quadrado (1:1), 1.77 = widescreen (16:9), 0.67 = retrato (2:3), 0.75 = foto clássica (3:4). | — | — |
| radius | Arredondamento dos cantos: SMALL (sutil), MEDIUM (moderado), LARGE (bem arredondado), FULL (círculo perfeito, ideal para avatares). | — | — |
| borderColor | Cor da borda usando tokens do design system. Garante consistência visual e suporte a temas. ⚠️ No estado disabled, sempre usa cor disabled automaticamente. | — | — |
| borderWeight | Espessura da borda: SMALL (borda fina e sutil), MEDIUM (borda padrão, mais visível). Use junto com borderColor para aplicar a borda. | — | — |
| enableZoom | Habilita zoom na imagem através de gestos de pinça (pinch-to-zoom). Útil para imagens com detalhes importantes que o usuário pode querer ampliar. | — | — |
| state | Estado visual do componente: enabled (padrão funcional), error (placeholder cinza quando falha), disabled (escala de cinza), skeleton (placeholder de carregamento). | enabled, error, disabled, skeleton | — |
| onLoad | Callback executado quando a imagem é carregada com sucesso. Útil para rastrear métricas de carregamento ou executar ações após o carregamento. | — | — |
| onError | Callback executado quando ocorre um erro no carregamento da imagem. Permite implementar fallbacks customizados ou rastreamento de erros. | — | — |

## Definição de tipos completa

```typescript
import type { STATE } from '@/utils/pattern'

export type CSSPropertiesWithCustom = React.CSSProperties & Record<`--${string}`, string | number>

export interface ImageProps {
  src?: ImageSrc
  contentDescription?: string
  contentScale?: `${ImageContentScale.FILL}` | `${ImageContentScale.FIT}`
  width?: number | string
  height?: number | string
  fillWidth?: boolean
  fillHeight?: boolean
  ratio?: number
  radius?:
    | `${ImageRadius.SMALL}`
    | `${ImageRadius.MEDIUM}`
    | `${ImageRadius.LARGE}`
    | `${ImageRadius.FULL}`
  borderColor?:
    | `${ImageBorderColor.FEEDBACK_ERROR}`
    | `${ImageBorderColor.FEEDBACK_SUCCESS}`
    | `${ImageBorderColor.BRAND_INVERSE}`
    | `${ImageBorderColor.BRAND_STRONG}`
    | `${ImageBorderColor.BRAND_DEFAULT}`
    | `${ImageBorderColor.STATIC_WHITE_SOFTER}`
    | `${ImageBorderColor.STATIC_WHITE_DEFAULT}`
    | `${ImageBorderColor.STATIC_BLACK}`
    | `${ImageBorderColor.NEUTRAL_INVERSE}`
    | `${ImageBorderColor.NEUTRAL_STRONGEST}`
    | `${ImageBorderColor.NEUTRAL_STRONGER}`
    | `${ImageBorderColor.NEUTRAL_STRONG}`
    | `${ImageBorderColor.NEUTRAL_DEFAULT}`
    | `${ImageBorderColor.NEUTRAL_SOFTER}`
    | `${ImageBorderColor.DISABLED}`
  borderWeight?: `${ImageBorderWeight.SMALL}` | `${ImageBorderWeight.MEDIUM}`
  enableZoom?: boolean
  state?: `${STATE.ENABLED}` | `${STATE.ERROR}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  onError?: () => void
  onLoad?: () => void
  id?: string
  className?: string
}

export interface ImageSrc {
  local?: string
  remote?: {
    light: string
    dark?: string
  }
}

export enum ImageContentScale {
  FILL = 'fill',
  FIT = 'fit',
}

export enum ImageRadius {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULL = 'full',
}

export enum ImageBorderWeight {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum ImageBorderColor {
  FEEDBACK_ERROR = 'feedback-error',
  FEEDBACK_SUCCESS = 'feedback-success',
  BRAND_INVERSE = 'brand-inverse',
  BRAND_STRONG = 'brand-strong',
  BRAND_DEFAULT = 'brand-default',
  STATIC_WHITE_SOFTER = 'static-white-softer',
  STATIC_WHITE_DEFAULT = 'static-white-default',
  STATIC_BLACK = 'static-black',
  NEUTRAL_INVERSE = 'neutral-inverse',
  NEUTRAL_STRONGEST = 'neutral-strongest',
  NEUTRAL_STRONGER = 'neutral-stronger',
  NEUTRAL_STRONG = 'neutral-strong',
  NEUTRAL_DEFAULT = 'neutral-default',
  NEUTRAL_SOFTER = 'neutral-softer',
  DISABLED = 'disabled',
}

export interface ImageDimensions {
  width?: number | string
  height?: number | string
  fillWidth?: boolean
  fillHeight?: boolean
  ratio?: number
}

export interface ImageBorder {
  color?:
    | `${ImageBorderColor.FEEDBACK_ERROR}`
    | `${ImageBorderColor.FEEDBACK_SUCCESS}`
    | `${ImageBorderColor.BRAND_INVERSE}`
    | `${ImageBorderColor.BRAND_STRONG}`
    | `${ImageBorderColor.BRAND_DEFAULT}`
    | `${ImageBorderColor.STATIC_WHITE_SOFTER}`
    | `${ImageBorderColor.STATIC_WHITE_DEFAULT}`
    | `${ImageBorderColor.STATIC_BLACK}`
    | `${ImageBorderColor.NEUTRAL_INVERSE}`
    | `${ImageBorderColor.NEUTRAL_STRONGEST}`
    | `${ImageBorderColor.NEUTRAL_STRONGER}`
    | `${ImageBorderColor.NEUTRAL_STRONG}`
    | `${ImageBorderColor.NEUTRAL_DEFAULT}`
    | `${ImageBorderColor.NEUTRAL_SOFTER}`
    | `${ImageBorderColor.DISABLED}`
  weight?: `${ImageBorderWeight.SMALL}` | `${ImageBorderWeight.MEDIUM}`
}

export interface ImageLoadStates {
  isLoading: boolean
  hasError: boolean
  isLoaded: boolean
}

```
