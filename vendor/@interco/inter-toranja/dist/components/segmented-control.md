---
name: toranja-segmented-control
description: Tipos e props do componente SegmentedControl do @interco/inter-toranja.
---

# SegmentedControl

**Categoria:** Molecules
**Versão:** 2.0.0 (04/12/2025)
**Importação:**
```tsx
import { SegmentedControl } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SegmentedControlProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `SelectedSegmentProps`

**Types:**
- `SegmentItemProps`
- `SegmentedControlDensity`
- `BackgroundStyle`
- `UseSegmentedControlPropertiesReturn`
- `UseSegmentedControlClassesReturn`
- `SegmentedControlState`
- `UseSegmentedControlBackgroundReturn`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| onClick | Ação a ser executada quando o segmento for clicado. | — | — |
| segments | Regras: - label: de 2 a 4 elementos. - iconLabel: de 2 a 3 elementos. - icon: de 2 a 5 elementos. | — | — |
| state | Estado do botão, pode ser enabled e skeleton | — | enabled |
| filling | Somente o Segmented Control com icone pode ser usado com hug | hug, fill | fill |
| density | Default: todas as variantes. Compact: somente ícone, 2 segmentos e filling hug (ex.: Header). | — | SegmentedControlDensityEnum.DEFAULT |

## Definição de tipos completa

```typescript
import type { RefObject, MutableRefObject } from 'react'

import type { TimelineFillingEnum } from './enums'
import type { IconName } from '@/components/Atoms/Icon/types'
import type { TagProps } from '@/types/shared'

interface SegmentItem {
  icon?: IconName
  label?: string
  disabled?: boolean
}
type TimelineFilling = `${TimelineFillingEnum}`

type IconLabelItem = Required<Pick<SegmentItem, 'icon' | 'label'>> & { disabled?: boolean }
type LabelOnlyItem = Required<Pick<SegmentItem, 'label'>> & { disabled?: boolean }
type IconOnlyItem = Required<Pick<SegmentItem, 'icon'>> & { disabled?: boolean }

export type SegmentItemProps = IconLabelItem | LabelOnlyItem | IconOnlyItem

type LabelArray =
  | [LabelOnlyItem, LabelOnlyItem]
  | [LabelOnlyItem, LabelOnlyItem, LabelOnlyItem]
  | [LabelOnlyItem, LabelOnlyItem, LabelOnlyItem, LabelOnlyItem]
type IconLabelArray = [IconLabelItem, IconLabelItem] | [IconLabelItem, IconLabelItem, IconLabelItem]
type IconArray =
  | [IconOnlyItem, IconOnlyItem]
  | [IconOnlyItem, IconOnlyItem, IconOnlyItem]
  | [IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem]
  | [IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem]

type LabelOrIconLabelSegments = LabelArray | IconLabelArray
type DefaultDensitySegments = LabelOrIconLabelSegments | IconArray
type CompactDensitySegments = [IconOnlyItem, IconOnlyItem]

export type SegmentedControlDensity = 'default' | 'compact'

type SegmentedControlSharedProps = {
  onTag?: (data: TagProps) => void
  onClick: (item: SegmentItemProps, index: number) => void
  state?: 'enabled' | 'skeleton'
  filling?: TimelineFilling
}

export type SegmentedControlProps =
  | (SegmentedControlSharedProps & {
      density?: 'default'
      segments: DefaultDensitySegments
    })
  | (SegmentedControlSharedProps & {
      density: 'compact'
      segments: CompactDensitySegments
    })

export interface SelectedSegmentProps {
  icon_selected: string
  label_selected: string | false
}

export type BackgroundStyle = {
  left: string
  width: string
  height: string
  top: string
}

export type UseSegmentedControlPropertiesReturn = {
  segmentProperties: string
  getSelectedSegmentProperties: (item: SegmentItemProps) => SelectedSegmentProps
}

export type UseSegmentedControlClassesReturn = {
  containerClass: string
  getSegmentClasses: (isActive: boolean, isDisabled: boolean) => string
  getTextClasses: (isActive: boolean) => string
}

export type SegmentedControlState = 'enabled' | 'skeleton' | undefined

export type UseSegmentedControlBackgroundReturn = [
  BackgroundStyle,
  RefObject<HTMLDivElement | null>,
  MutableRefObject<(HTMLDivElement | null)[]>,
]

```
