---
name: toranja-side-sheet
description: Tipos e props do componente SideSheet do @interco/inter-toranja.
---

# SideSheet

**Categoria:** Molecules
**Versão:** 1.0.0 (10/09/2026)
**Importação:**
```tsx
import { SideSheet } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SideSheetProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| isOpen | Controla se o painel está visível (opcional). Valor padrão: false. | — | — |
| title | Título exibido no bloco de cabeçalho (opcional). | — | — |
| description | Descrição abaixo do título (opcional). | — | — |
| showFooterDivider | Exibe divider acima do footer quando há rodapé (padrão: true). | — | — |
| close | — | — | — |
| onTag | — | — | — |
| slot | — | — | — |
| footer | — | — | — |

## Definição de tipos completa

```typescript
import type { ReactNode } from 'react'

import type { TagProps } from '@/types/shared'

export interface SideSheetProps {
  isOpen?: boolean
  close: () => void
  title?: string
  description?: string
  slot?: ReactNode
  footer?: ReactNode
  showFooterDivider?: boolean
  onTag?: (data: TagProps) => void
  id?: string
}

```
