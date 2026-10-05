---
name: toranja-link
description: Tipos e props do componente Link do @interco/inter-toranja.
---

# Link

**Categoria:** Molecules
**Versão:** 1.0.3 (01/10/2024)
**Importação:**
```tsx
import { Link } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `LinkProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Estilo do link | default, neutral, staticBlack, staticBlackUnderline, staticWhite, staticWhiteUnderline | — |
| size | Tamanho do Link | — | — |
| state | Estado do Link | skeleton, enabled | — |
| href | Endereço para onde o link deve redirecionar. | — | — |
| label | Texto a ser exibido dentro do link. | — | — |

## Definição de tipos completa

```typescript
import type { AnchorHTMLAttributes } from 'react'

import type { TextSize } from '@/components/Atoms/Text/types'
import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  onTag?: (data: TagProps) => void
  label: string
  size?: `${TextSize}`
  state?: `${STATE.SKELETON}` | `${STATE.ENABLED}`
  variant?:
    | 'default'
    | 'neutral'
    | 'staticBlack'
    | 'staticBlackUnderline'
    | 'staticWhite'
    | 'staticWhiteUnderline'
}

```
