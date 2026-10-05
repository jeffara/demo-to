---
name: toranja-text
description: Tipos e props do componente Text do @interco/inter-toranja.
---

# Text

**Categoria:** Atoms
**Importação:**
```tsx
import { Text } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `TextProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `TextWeight`
- `TextType`
- `TextSize`
- `TextVariant`
- `TextColorScheme`

**Types:**
- `TextColorSchemeVariants`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| textSize | Define o tamanho do texto | — | medium |
| textType | Define o tipo de texto | — | body |
| textVariant | — | — | primary |
| textWeight | Define o peso do texto. Só é utilizado no textType body e label | — | medium |
| colorScheme | Define o esquema de cor do texto | — | neutral |
| colorVariant | Define a variante de cor do texto | primary, secondary, tertiary, inverse, black, orange, white, success, warning, error, information, red, brown, orange, gold, yellow, green, mint, cyan, blue, purple, pink | primary |
| colorStrong | Define se o texto deve ser exibido com a cor forte | — | false |
| as | Define o elemento HTML a ser renderizado | h1, h2, h3, h4, h5, h6, span, strong, p | span |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { STATE } from '@/utils/pattern'

export enum TextWeight {
  Regular = 'regular',
  Bold = 'bold',
  Medium = 'medium',
}

export enum TextType {
  Display = 'display',
  Title = 'title',
  Body = 'body',
  Label = 'label',
  Link = 'link',
  Caption = 'caption',
  Code = 'code',
}

export enum TextSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum TextVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Brand = 'brand',
}

export enum TextColorScheme {
  Disabled = 'disabled',
  Neutral = 'neutral',
  Brand = 'brand',
  Static = 'static',
  StaticWhite = 'static-white',
  Feedback = 'feedback',
  Accent = 'accent',
}

type TextNeutralColorVariants = 'primary' | 'secondary' | 'inverse'
type TextBrandColorVariants = 'primary' | 'secondary' | 'tertiary' | 'inverse'
type TextStaticColorVariants = 'black' | 'orange'
type TextStaticWhiteColorVariants = 'default' | 'soft'
type TextFeedbackColorVariants = 'success' | 'warning' | 'error' | 'information'
type TextAccentColorVariants =
  | 'red'
  | 'brown'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'cyan'
  | 'blue'
  | 'purple'
  | 'pink'

export type TextColorSchemeVariants = {
  [TextColorScheme.Disabled]: never
  [TextColorScheme.Neutral]: TextNeutralColorVariants
  [TextColorScheme.Brand]: TextBrandColorVariants
  [TextColorScheme.Static]: TextStaticColorVariants
  [TextColorScheme.StaticWhite]: TextStaticWhiteColorVariants
  [TextColorScheme.Feedback]: TextFeedbackColorVariants
  [TextColorScheme.Accent]: TextAccentColorVariants
}

export type TextProps<Scheme extends TextColorScheme = TextColorScheme.Neutral> = {
  id?: string
  state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  children: ReactNode
  textSize: `${TextSize}`
  textWeight?: `${TextWeight}`
  colorScheme?: `${Scheme}`
  colorVariant?: `${TextColorSchemeVariants[Scheme]}`
  colorStrong?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong' | 'p'
} & (
  | {
      textType: `${TextType.Title}`
      as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    }
  | {
      textType: `${TextType.Body}`
      as?: 'span' | 'strong' | 'p'
      textWeight?: Omit<TextWeight, TextWeight.Medium>
    }
  | {
      textType: `${TextType.Caption}`
      as?: 'span' | 'strong' | 'p'
      textSize: `${TextSize.Medium}` | `${TextSize.Small}`
    }
  | {
      textType:
        | `${TextType.Label}`
        | `${TextType.Link}`
        | `${TextType.Code}`
        | `${TextType.Display}`
      as?: 'span' | 'strong' | 'p'
    }
)

```
