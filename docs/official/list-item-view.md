---
name: toranja-list-item-view
description: Tipos e props do componente ListItemView do @interco/inter-toranja.
---

# ListItemView

**Categoria:** Molecules
**Versão:** 1.0.0 (06/02/2025)
**Importação:**
```tsx
import { ListItemView } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ListItemViewProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `ListItemViewTagValue`
- `ListItemViewTextValue`
- `ListItemViewTrailingButton`
- `ListItemViewTrailingIcon`
- `ListItemViewNoTrailing`
- `ListItemViewBaseProps`

**Types:**
- `ListItemViewOrientation`
- `ListItemViewValueType`
- `ListItemViewValueColor`
- `ListItemViewTrailingType`
- `ListItemViewTrailing`
- `ListItemViewValue`
- `LabelSectionProps`
- `ValueSectionProps`
- `TrailingSectionProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| label | Texto do label exibido à esquerda (horizontal) ou acima (vertical). | — | — |
| value | Valor exibido à direita (horizontal) ou abaixo (vertical). Pode ser texto ou tag. | — | — |
| valueType | Tipo do valor exibido. | — | — |
| valueColor | Cor do valor (apenas para valueType="text"). | — | — |
| tagColor | Cor da tag (apenas para valueType="tag"). | — | — |
| tagHierarchy | Hierarquia visual da tag. | strong, soft, disabled, skeleton | — |
| orientation | Orientação do componente. | — | ${ListItemViewOrientationEnum.HORIZONTAL |
| alignRight | Alinha label e value à direita (apenas vertical). | — | false |
| helper | Exibe botão de ajuda ao lado do label. | — | false |
| helperOnClick | Função chamada ao clicar no botão de ajuda. | — | — |
| trailingType | Tipo de trailing exibido à direita (botão ou ícone). | — | — |
| trailing | Conteúdo do trailing: string (texto do botão) ou ReactNode (ícone, svg, etc). | — | — |
| onActionTrailing | Função chamada ao clicar no trailing (botão ou ícone). | — | — |
| state | Define o estado do ListItemView | STATE.ENABLED, STATE.SKELETON | { summary: STATE.SKELETON |
| onTag | — | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type {
  ListItemViewOrientationEnum,
  ListItemViewTrailingTypeEnum,
  ListItemViewValueColorEnum,
  ListItemViewValueTypeEnum,
} from './enums'
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps } from '@/components/Atoms/Tag/types'
import type { TagProps as OnTagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export type ListItemViewOrientation = `${ListItemViewOrientationEnum}`
export type ListItemViewValueType = `${ListItemViewValueTypeEnum}`
export type ListItemViewValueColor = `${ListItemViewValueColorEnum}`
export type ListItemViewTrailingType = `${ListItemViewTrailingTypeEnum}`

export interface ListItemViewTagValue {
  valueType: `${ListItemViewValueTypeEnum.TAG}`
  value: ReactNode
  tagColor: string
  tagHierarchy: Pick<TagProps, 'hierarchy'>
  valueColor?: never
}

export interface ListItemViewTextValue {
  valueType: `${ListItemViewValueTypeEnum.TEXT}`
  value: ReactNode
  valueColor: ListItemViewValueColor
  tagColor?: never
  tagHierarchy?: never
}

export interface ListItemViewTrailingButton {
  trailingType: `${ListItemViewTrailingTypeEnum.BUTTON}`
  trailing: string
  onActionTrailing: () => void
}

export interface ListItemViewTrailingIcon {
  trailingType: `${ListItemViewTrailingTypeEnum.ICON}`
  trailing: IconName
  onActionTrailing: () => void
}

export interface ListItemViewNoTrailing {
  trailingType?: never
  trailing?: never
  onActionTrailing?: () => never
}

export type ListItemViewTrailing =
  | ListItemViewTrailingButton
  | ListItemViewTrailingIcon
  | ListItemViewNoTrailing

export type ListItemViewValue = ListItemViewTagValue | ListItemViewTextValue

export interface ListItemViewBaseProps {
  orientation: ListItemViewOrientation
  label: string
  state?: `${STATE.SKELETON}` | `${STATE.ENABLED}`
  alignRight?: boolean
  helper?: boolean
  helperOnClick?: () => void
  onTag?: (tag: OnTagProps) => void
}

export type ListItemViewProps = ListItemViewBaseProps & ListItemViewValue & ListItemViewTrailing

export type LabelSectionProps = Pick<
  ListItemViewProps,
  'label' | 'helper' | 'orientation' | 'state' | 'helperOnClick' | 'onTag'
> & {
  isEnabled: boolean
  className: string
}

export type ValueSectionProps = Pick<ListItemViewProps, 'value' | 'valueType' | 'tagColor'> & {
  tagHierarchy?: TagProps['hierarchy']
  isEnabled: boolean
  className: string
}

export type TrailingSectionProps = Pick<
  ListItemViewProps,
  'trailing' | 'trailingType' | 'onActionTrailing' | 'onTag'
> & {
  isEnabled: boolean
  className: string
  label: string
}

```
