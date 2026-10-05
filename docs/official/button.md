---
name: toranja-button
description: Tipos e props do componente Button do @interco/inter-toranja.
---

# Button

**Categoria:** Molecules
**Versão:** 1.2.2 (01/10/2024)
**Importação:**
```tsx
import { Button } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `IconChipProps`
- `NeutralIconButtonProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `IconButtonProps`

**Types:**
- `ButtonState`
- `ButtonType`
- `ButtonTypeName`
- `NonDestructiveStyleType`
- `RegularButtonProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Estilo do botão, pode ser padrão, destrutivo ou inverso. | default, destructive, inverse | default |
| size | Tamanho do botão, pode ser pequeno ou grande. | — | — |
| hierarchy | Variante do botão, pode ser primário, secundário ou terciário. | — | primary |
| state | Estado do botão, pode ser enabled, foco, hovered, pressionado, desabilitado ou esqueleto. | — | enabled |
| leadingIcon | Ícone a ser exibido dentro do botão. | ic_orange, ic_piggy_bank | — |
| label | Texto a ser exibido dentro do botão. | — | Label |
| type | Tipo do botão, pode ser botão, submit ou reset. | button, submit, reset | button |
| resizing | Preenchimento total da tela (fill) e ajustados ao rótulo (hug). | fill, hug | hug |
| onClick | Ação a ser executada quando o botão for clicado. | — | — |

## Definição de tipos completa

```typescript
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps } from '@/types/shared'
import type { SIZE, STATE, StyleType } from '@/utils/pattern'

export type ButtonState =
  | `${STATE.DISABLED}`
  | `${STATE.ENABLED}`
  | `${STATE.LOADING}`
  | `${STATE.SKELETON}`
export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type']
export type ButtonTypeName = 'btn' | 'btn-icon' | 'btn-fab' | 'btn-neutral' | 'btn-icon-chip'

// Modification to condition the type of `size` based on `typeButton`
type ButtonSize =
  | ('btn' extends BaseButtonProps['typeButton'] ? `${SIZE.MEDIUM}` | `${SIZE.LARGE}` : never)
  | ('btn-icon' extends BaseButtonProps['typeButton'] ? `${SIZE.SMALL}` | `${SIZE.LARGE}` : never)

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  leadingIcon?: IconName
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  state?: `${ButtonState}`
  type?: ButtonType
  typeButton?: ButtonTypeName
  label?: 'btn-neutral' | 'btn-icon' extends BaseButtonProps['typeButton'] ? never : string
  onTag?: (data: TagProps) => void
}

type Hierarchy = 'primary' | 'secondary' | 'secondaryOutlined' | 'tertiary'
export type NonDestructiveStyleType = Exclude<StyleType, 'destructive'>

export interface IconButtonProps
  extends Omit<BaseButtonProps, 'size' | 'typeButton' | 'label' | 'leadingIcon'> {
  size?: `${SIZE.SMALL}` | `${SIZE.LARGE}`
  hierarchy?: Hierarchy
  variant?: StyleType
  icon?: IconName
}

export interface NeutralIconButtonProps
  extends Omit<BaseButtonProps, 'size' | 'label' | 'variant' | 'typeButton' | 'leadingIcon'> {
  icon?: IconName
  showBadge?: boolean
  variant?: 'dot' | 'label'
  count?: number
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}`
}

type Exclusive<T, U> = (T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })

interface RegularButtonPropsBase extends Omit<BaseButtonProps, 'size' | 'label'> {
  label?: 'btn' extends BaseButtonProps['typeButton'] ? string : never
  size?: `${ButtonSize}`
  hierarchy?: `${Hierarchy}`
  variant?: Hierarchy extends 'tertiary' ? NonDestructiveStyleType : StyleType
}

export type RegularButtonProps = Exclusive<{ hug?: boolean }, { fill?: boolean }> &
  RegularButtonPropsBase

export type IconChipProps = {
  onTag?: (data: TagProps) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  state: `${ButtonState}`
  variant: 'label'
  icon: IconName
  showBadge: boolean
  selected: boolean
} & { variant: 'label'; count: number }

// Re-export FloatingActionButton types
export type {
  FloatingActionButtonProps,
  FloatingActionButtonState,
  FloatingActionButtonHierarchy,
  FloatingActionButtonSize,
  FloatingActionButtonBehavior,
} from './FloatingActionButton/types'

```
