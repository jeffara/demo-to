---
name: toranja-checkbox
description: Tipos e props do componente Checkbox do @interco/inter-toranja.
---

# Checkbox

**Categoria:** Atoms
**Versão:** 1.0.1 (26/11/2024)
**Importação:**
```tsx
import { Checkbox } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `CheckboxProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Define o tipo de checkbox | VARIANT.DEFAULT, VARIANT.INDETERMINATE, STATE.ERROR | { summary: VARIANT.DEFAULT |
| state | Define o estado do checkbox | STATE.ENABLED, STATE.DISABLED | { summary: STATE.ENABLED |
| onChange | Função chamada quando o estado do checkbox muda | — | — |

## Definição de tipos completa

```typescript
import type { STATE, VARIANT } from '@/utils/pattern'

export type CheckboxProps = {
  variant?: `${VARIANT.DEFAULT}` | `${VARIANT.INDETERMINATE}` | `${STATE.ERROR}`
  state: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  onChange?: (isChecked: boolean) => void
  checked?: boolean
}

```
