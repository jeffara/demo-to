---
name: toranja-counter
description: Tipos e props do componente Counter do @interco/inter-toranja.
---

# Counter

**Categoria:** Atoms
**Importação:**
```tsx
import { Counter } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `CounterProps`


## Definição de tipos completa

```typescript
import type { HTMLAttributes } from 'react'

export type CounterProps = HTMLAttributes<HTMLDivElement> & { count: number; maxLength: number }

```
