---
name: toranja-snackbar
description: Tipos e props do componente Snackbar do @interco/inter-toranja.
---

# Snackbar

**Categoria:** Molecules
**Versão:** 1.1.2 (23/12/2024)
**Importação:**
```tsx
import { Snackbar } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `SnackbarProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `TAG_TYPE`

**Types:**
- `TagType`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Define o tipo do Snackbar. | FEEDBACK.SUCCESS, FEEDBACK.WARNING, FEEDBACK.ERROR, VARIANT.DEFAULT | — |
| title | Define o título do Snackbar. | — | — |
| description | Define a descrição do Snackbar. | — | — |
| IconSvg | Define um ícone customizado para o Snackbar. | — | — |
| showButtonSnackbar | Define se o botão do Snackbar será exibido. | — | — |
| onClickButtonSnackbar | Callback executado ao clicar no botão do Snackbar. | — | — |
| labelButton | Define o texto do botão do Snackbar. | — | — |
| show | Controla a visibilidade do Snackbar. | — | { summary: 'false |
| onClose | Callback executado ao fechar o Snackbar. | — | — |
| onTag | Callback para eventos de tag no Snackbar. | — | — |

## Definição de tipos completa

```typescript
import type { SVGProps } from 'react'

import type { TagProps } from '@/types/shared'
import type { FEEDBACK, VARIANT } from '@/utils/pattern'

export type SnackbarProps = {
  variant:
    | `${FEEDBACK.SUCCESS}`
    | `${FEEDBACK.WARNING}`
    | `${FEEDBACK.ERROR}`
    | `${VARIANT.DEFAULT}`
  IconSvg?: React.ComponentType<SVGProps<SVGSVGElement>>
  title?: string
  description: string
  onTag?: (data: TagProps) => void
  showButtonSnackbar?: boolean
  onClickButtonSnackbar?: () => void
  labelButton?: string
  show: boolean
  onClose: () => void
}

export enum TAG_TYPE {
  DISPLAY = 'display',
  BUTTON = 'button',
  DISMISS = 'dismiss',
}

export type TagType = `${TAG_TYPE}`

```
