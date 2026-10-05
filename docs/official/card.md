---
name: toranja-card
description: Tipos e props do componente Card do @interco/inter-toranja.
---

# Card

**Categoria:** Atoms
**Versão:** 1.0.1 (05/02/2025)
**Importação:**
```tsx
import { Card } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `CardProps`


## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export type CardProps = {
  onTag?: (data: TagProps) => void
  onClick?: () => void
  children: ReactNode
  state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  isSelected?: boolean
  onSelect?: (isSelected: boolean) => void
}

```
