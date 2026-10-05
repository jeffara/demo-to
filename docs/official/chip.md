---
name: toranja-chip
description: Tipos e props do componente Chip do @interco/inter-toranja.
---

# Chip

**Categoria:** Molecules
**Versão:** 1.2.0 (17/09/2025)
**Importação:**
```tsx
import { Chip } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ChipProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Estado do chip, pode ser enabled, desabilitado, esqueleto ou loading. | enabled, disabled, skeleton, loading | enabled |
| variant | Variante do chip: default (padrão) ou flag (com bandeira). | default, flag | default |
| flagIcon | Ícone da bandeira para variant=flag. | ic_flag_brazil, ic_flag_argentina, ic_flag_united_states, ic_flag_spain, ic_flag_globe | ic_flag_brazil |
| label | Texto a ser exibido dentro do chip. | — | Label |
| leadingIcon | Ícone a ser exibido antes do texto. | ic_orange, ic_chevron_down | — |
| trailingIcon | Ícone a ser exibido após o texto. | ic_orange, ic_chevron_down | — |
| selected | Indica se o chip está selecionado. | — | false |
| onClick | Ação a ser executada quando o chip for clicado. | — | — |

## Definição de tipos completa

```typescript
import type { HTMLAttributes } from 'react'

import type { FlagName } from '@/components/Atoms/Flag/types'
import type { IconName, STATE } from '@/main'
import type { TagProps } from '@/types/shared'

export interface ChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  label?: string
  onClick?: () => void
  selected?: boolean
  leadingIcon?: IconName
  trailingIcon?: IconName
  state: `${STATE.SKELETON}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.LOADING}`
  onTag?: (data: TagProps) => void
  variant?: 'default' | 'flag'
  flagIcon?: FlagName
}

```
