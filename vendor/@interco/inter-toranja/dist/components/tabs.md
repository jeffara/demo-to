---
name: toranja-tabs
description: Tipos e props do componente Tabs do @interco/inter-toranja.
---

# Tabs

**Categoria:** Molecules
**Importação:**
```tsx
import { Tabs } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `TabsProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `TabItemProps`


## Definição de tipos completa

```typescript
import type { BadgeProps } from '@/components/Atoms/Badge/types'
import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

type Tab = {
  label: string
  selected?: boolean
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}` | `${STATE.DISABLED}`
  badge?: BadgeProps
  onClick?: (label: string, index: number) => void
}

export type TabsProps = {
  tabs: [Tab, Tab, ...Tab[]]
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`
  scrollable?: boolean
  onTag?: (data: TagProps) => void
}

export interface TabItemProps {
  tab: Tab
  index: number
  isActive: boolean
  isDisabled: boolean
  isSkeleton: boolean
  handleTabClick: (index: number) => void
  scrollable: boolean
  generalState: TabsProps['state']
  activeIndicatorLayoutId: string
}

```
