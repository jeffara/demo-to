---
name: toranja-widget
description: Tipos e props do componente Widget do @interco/inter-toranja.
---

# Widget

**Categoria:** Molecules
**Versão:** 1.1.1 (28/01/2025)
**Importação:**
```tsx
import { Widget } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `WidgetProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `ColorTypeAccept`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| showHeader | — | — | — |
| color | — | — | — |
| tagColor | — | — | — |
| size | — | — | — |
| state | — | — | — |
| timeAgo | — | — | — |
| tag | — | — | — |
| title | — | — | — |
| onClick | — | — | — |
| onTag | — | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { TagProps } from '@/types/shared'
import type { ColorType, SIZE, STATE } from '@/utils/pattern'

export type ColorTypeAccept =
  | `${ColorType.Default}`
  | `${ColorType.Success}`
  | `${ColorType.Error}`
  | `${ColorType.Warning}`
  | `${ColorType.Information}`

export interface WidgetProps {
  color?: ColorTypeAccept
  timeAgo?: string
  tag?: string
  title?: string
  showHeader?: boolean
  tagColor?: ColorTypeAccept
  children: ReactNode
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`
  state?: `${STATE.ENABLED}` | `${STATE.ERROR}` | `${STATE.SKELETON}`
  onClick: () => void
  onTag?: (data: TagProps) => void
}

```
