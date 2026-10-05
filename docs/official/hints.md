---
name: toranja-hints
description: Tipos e props do componente Hints do @interco/inter-toranja.
---

# Hints

**Categoria:** Atoms
**Importação:**
```tsx
import { Hints } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `HintsProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `EHintsType`


## Definição de tipos completa

```typescript
export enum EHintsType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface HintsProps {
  hints: string[]
  type:
    | `${EHintsType.ERROR}`
    | `${EHintsType.INFO}`
    | `${EHintsType.SUCCESS}`
    | `${EHintsType.WARNING}`
  className?: string
  showIcon?: boolean
}

```
