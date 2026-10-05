---
name: toranja-progress-indicator
description: Tipos e props do componente ProgressIndicator do @interco/inter-toranja.
---

# ProgressIndicator

**Categoria:** Atoms
**Importação:**
```tsx
import { ProgressIndicator } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SpinnerProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Types:**
- `SpinnerSize`
- `SpinnerVariant`


## Definição de tipos completa

```typescript
import type { StyleType } from '@/utils/pattern'

export type SpinnerSize = 'small' | 'medium' | 'large' | 'extraLarge'

export type SpinnerVariant = Omit<StyleType, 'destructive'> | 'staticWhite'

export type SpinnerProps = {
  size?: SpinnerSize
  variant?: SpinnerVariant
  progress?: number
  ariaLabel?: string | null
}

```
