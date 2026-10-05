---
name: toranja-signal
description: Tipos e props do componente Signal do @interco/inter-toranja.
---

# Signal

**Categoria:** Atoms
**Versão:** 1.3.0 (04/05/2026)
**Importação:**
```tsx
import { Signal } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SignalProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Define o tipo do signal. | — | — |
| state | Define o estado para o signal. | STATE.ENABLED, STATE.SKELETON | — |
| size | Define o tamanho do ícone. | — | — |

## Definição de tipos completa

```typescript
import type { FEEDBACK, SIZE, STATE } from '@/utils/pattern'

export type SignalProps = {
  variant: `${FEEDBACK}`
  size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`
  state: `${STATE.ENABLED}` | `${STATE.SKELETON}`
}

```
