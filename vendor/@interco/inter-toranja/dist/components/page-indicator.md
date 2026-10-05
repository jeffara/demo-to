---
name: toranja-page-indicator
description: Tipos e props do componente PageIndicator do @interco/inter-toranja.
---

# PageIndicator

**Categoria:** Atoms
**Versão:** 1.0.1 (07/03/2025)
**Importação:**
```tsx
import { PageIndicator } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `PageIndicatorProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| items | Define a quantidade total de itens | — | — |
| selected | Define de acordo com a posição qual item | — | — |

## Definição de tipos completa

```typescript
export type PageIndicatorProps = {
  items: number
  selected: number
}

export const MODIFIER_CLASS = {
  ACTIVE: '--active',
  OVERFLOW: '--overflow',
  OLD_ACTIVE: '--active--old',
}

```
