---
name: toranja-list-item-general
description: Tipos e props do componente ListItemGeneral do @interco/inter-toranja.
---

# ListItemGeneral

**Categoria:** Molecules
**Versão:** 1.0.0 (05/09/2025)
**Importação:**
```tsx
import { ListItemGeneral } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ListItemGeneralProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `TagChevronProps`
- `BadgeProps`
- `TextProps`
- `TagChevronTrailingProps`
- `BadgeTrailingProps`
- `TextTrailingProps`

**Types:**
- `GeneralTrailingType`
- `ListItemGeneralTrailingProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Variante visual - default (transparente), inset (16px padding), contained (background cinza + selected=bege com borda) | default, inset, contained | { summary: 'default |
| state | Estados do componente | enabled, disabled, loading, skeleton | { summary: 'enabled |
| showDivider | Se true, exibe divider no final do componente | — | { summary: 'true |
| showLeading | Se true, exibe a área leading do componente | — | { summary: 'true |
| selected | Se true + variant contained: aplica background bege + borda laranja. Use apenas 1 por tela. | — | { summary: 'false |
| interactive | Se true, permite interação (hover, focus, pressed). Se false, desabilita s interativos | — | { summary: 'true |
| leadingProps | Tipo da área leading (avatar, checkbox, flag, icon, image, indicator, numberText, paymentMethod, slot ou none) | ...LIST_ITEM_LEADING_OPTIONS | { summary: 'icon |
| label | Label principal do conteúdo (obrigatório) | — | — |
| paragraph | Parágrafo secundário abaixo do label | — | — |
| paragraphSupport | Parágrafo de suporte adicional | — | — |
| labelIcon | Ícone opcional ao lado do label | — | — |
| tags | Array com até 3 tags para exibir no conteúdo | — | — |
| trailingVariant | Tipo de trailing (Figma: variant). Use trailingProps no Controls. | — | — |
| trailingProps | Variante trailing (tagChevron, badge ou text com configurações do Figma) | ...LIST_ITEM_GENERAL_TRAILING_OPTIONS | { summary: 'tagChevronWithTag |
| onClick | Callback disparado ao clicar no ListItem | — | — |
| onTag | Callback para envio de eventos de analytics/tagging | — | — |
| alignmentTrailingMode | Modo de alinhamento vertical do Trailing. Leading e Content têm alinhamento fixo. | center-aligned, top-aligned | { summary: "'center-aligned' |
| testId | ID para testes automatizados | — | — |
| className | Classes CSS customizadas | — | — |

## Definição de tipos completa

```typescript
import type { ListItemContentProps } from '../ListItemBase/components/ListItemContent/types'
import type { ListItemLeadingProps } from '../ListItemBase/components/ListItemLeading/types'
import type { ListItemSharedProps } from '../ListItemBase/types/shared'
import type { Color } from '@/components/Atoms/Tag/types'

/**
 * General Trailing variants
 */
export type GeneralTrailingType = 'tagChevron' | 'badge' | 'text'

/**
 * TagChevron specific props
 */
export interface TagChevronProps {
  /**
   * Whether to show the Tag
   * @default false
   */
  showTag?: boolean

  /**
   * Tag label
   */
  tagLabel?: string

  /**
   * Tag color
   */
  tagColor?: Color
}

/**
 * Badge specific props
 */
export interface BadgeProps {
  /**
   * Whether to show the Badge
   * @default false
   */
  showBadge?: boolean

  /**
   * Badge value (number or string)
   */
  badgeValue?: string | number

  /**
   * Whether to show the date
   * @default false
   */
  showDate?: boolean

  /**
   * Formatted date (HH:MM, "Yesterday", DD/MM/YYYY)
   */
  date?: string
}

/**
 * Text specific props
 */
export interface TextProps {
  /**
   * Trailing label (required for text variant)
   */
  labelTrailing: string

  /**
   * Trailing label color
   * @default 'neutral'
   */
  labelTrailingColor?: 'neutral' | 'success'

  /**
   * Trailing paragraph (optional)
   */
  paragraphTrailing?: string
}

/**
 * TagChevron trailing props
 */
export interface TagChevronTrailingProps {
  /**
   * Trailing type
   */
  type: 'tagChevron'

  /**
   * TagChevron specific configuration
   */
  tagChevronProps?: TagChevronProps
}

/**
 * Badge trailing props
 */
export interface BadgeTrailingProps {
  /**
   * Trailing type
   */
  type: 'badge'

  /**
   * Badge specific configuration
   */
  badgeProps?: BadgeProps
}

/**
 * Text trailing props
 */
export interface TextTrailingProps {
  /**
   * Trailing type
   */
  type: 'text'

  /**
   * Text specific configuration
   */
  textProps: TextProps
}

/**
 * Union type for all trailing variants
 */
export type ListItemGeneralTrailingProps =
  | TagChevronTrailingProps
  | BadgeTrailingProps
  | TextTrailingProps

/**
 * Props for ListItemGeneral
 */
export interface ListItemGeneralProps
  extends Omit<ListItemSharedProps, 'leading' | 'content' | 'trailing' | 'gridModifier'> {
  /**
   * Leading props
   */
  leadingProps?: ListItemLeadingProps

  /**
   * Content label (required)
   */
  label: string

  /**
   * Content label icon (optional)
   */
  labelIcon?: ListItemContentProps['labelIcon']

  /**
   * Content paragraph (optional)
   */
  paragraph?: string

  /**
   * Content support paragraph (optional)
   */
  paragraphSupport?: string

  /**
   * Content tags (optional)
   */
  tags?: ListItemContentProps['tags']

  /**
   * Trailing variant (Figma: variant)
   */
  trailingVariant?: GeneralTrailingType

  /**
   * Trailing props (optional)
   */
  trailingProps?: ListItemGeneralTrailingProps

  /**
   * Whether to show the Leading area
   * @default true
   */
  showLeading?: boolean
}

```
