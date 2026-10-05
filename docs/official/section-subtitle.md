---
name: toranja-section-subtitle
description: Tipos e props do componente SectionSubtitle do @interco/inter-toranja.
---

# SectionSubtitle

**Categoria:** Molecules
**Versão:** 1.0.0 (08/11/2024)
**Importação:**
```tsx
import { SectionSubtitle } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SectionSubtitleProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Seleciona o estilo da variante do componente; | STATE.ENABLED, STATE.SKELETON | — |
| trailingValue | Valor exibido no final do subtítulo; | — | — |
| subtitle | Texto do subtítulo; | — | — |
| trailingLabel | Rótulo exibido no final do subtítulo; | — | — |

## Definição de tipos completa

```typescript
import type { STATE, VARIANT } from '@/utils/pattern'

export interface SectionSubtitleProps {
  subtitle: string
  trailingLabel?: string
  state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`
  trailingValue?: {
    value: string
    variant: `${STATE.ERROR}` | `${VARIANT.DEFAULT}`
  }
}

```
