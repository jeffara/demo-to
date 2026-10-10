---
name: toranja-switch
description: Tipos e props do componente Switch do @interco/inter-toranja.
---

# Switch

**Categoria:** Atoms
**Versão:** 1.1.0 (26/11/2024)
**Importação:**
```tsx
import { Switch } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SwitchProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Seleciona o estado do switch | — | — |
| checked | — | — | — |

## Definição de tipos completa

```typescript
import type { STATE } from '@/utils/pattern'

export interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  state?: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON
}

```
