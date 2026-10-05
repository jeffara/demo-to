---
name: toranja-timeline
description: Tipos e props do componente Timeline do @interco/inter-toranja.
---

# Timeline

**Categoria:** Molecules
**Versão:** 1.1.0 (04/07/2025)
**Importação:**
```tsx
import { Timeline } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `TimelineProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `TimelineItemContentButton`
- `TimelineItemContentLink`
- `TimelineItemContentTag`
- `TimelineItemContentSlot`
- `TimelineItemProps`

**Types:**
- `TimelineState`
- `TimelineStepStatus`
- `TimelineItemContentButtonTuple`
- `TimelineItemContent`
- `TimelineItemContentRendererProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Estado visual da Timeline | — | TimelineStateEnum.ENABLED |
| items | Array de etapas da Timeline.\n\nCada item pode ser do tipo TimelineItemProps, contendo:\n- title (string): Título da etapa.\n- date? (string): Data/hora da etapa.\n- status (TimelineStepStatusEnum): Status da etapa (SUCCESS, ERROR, WARNING, PENDING, CURRENT, etc).\n- contents (TimelineItemContent[]): Conteúdos exibidos na etapa. Cada conteúdo pode ser:\n - { type: 'AuxiliarText', text: string }\n - { type: 'Button', label: string, onClick: () => void, ... }\n - { type: 'Tag', label: string, color?: string }\n\n - { type: 'Link', label: string, href: string }\n - { type: 'Slot', content: ReactNode }\n- showBottomLine? (boolean): Exibe linha inferior após a etapa. | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type {
  TimelineItemContentType,
  TimelineStateEnum,
  TimelineStepStatusEnum,
} from './utils/enums'
import type { TagProps } from '@/types/shared'

export type TimelineState = `${TimelineStateEnum}`
export type TimelineStepStatus = `${TimelineStepStatusEnum}`

export interface TimelineItemContentButton {
  label: string
  onClick: () => void
  disabled?: boolean
  hierarchy?: 'primary' | 'secondary'
}

export type TimelineItemContentButtonTuple = {
  type: `${TimelineItemContentType.Button}`
  buttons: [TimelineItemContentButton, TimelineItemContentButton?]
}

export interface TimelineItemContentLink {
  type: `${TimelineItemContentType.Link}`
  label: string
  href: string
}

export interface TimelineItemContentTag {
  type: `${TimelineItemContentType.Tag}`
  label: string
  color: string
  hierarchy?: string
}
export interface TimelineItemContentSlot {
  type: `${TimelineItemContentType.Slot}`
  content: ReactNode
}

export type TimelineItemContent =
  | { type: `${TimelineItemContentType.AuxiliarText}`; text: string }
  | TimelineItemContentButtonTuple
  | TimelineItemContentLink
  | TimelineItemContentTag
  | TimelineItemContentSlot

export interface TimelineItemProps {
  title: string
  date?: string
  status: TimelineStepStatus
  state?: TimelineState
  showLine?: boolean
  contents?: TimelineItemContent[]
  onTag?: (params: TagProps) => void
}

export type TimelineItemContentRendererProps = Partial<Omit<TimelineItemProps, 'contents'>> & {
  content: TimelineItemContent
  stepStatus?: string
}

export interface TimelineProps
  extends Omit<TimelineItemProps, 'title' | 'date' | 'status' | 'showLine' | 'contents' | 'onTag'> {
  items: TimelineItemProps[]
  onTag?: (params: TagProps) => void
}

```
