---
name: toranja-modal-dialog
description: Tipos e props do componente ModalDialog do @interco/inter-toranja.
---

# ModalDialog

**Categoria:** Molecules
**Versão:** 1.1.2 (10/09/2026)
**Importação:**
```tsx
import { ModalDialog } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ModalDialogProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `MODAL_DIALOG_OVERLAY`

**Interfaces:**
- `UseModalDialogResult`
- `UseModalDialogEventsProps`
- `UseModalDialogEventsResult`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| title | — | — | — |
| overlay | — | — | — |
| showCloseButton | — | — | — |
| close | — | — | — |
| onTag | — | — | — |

## Definição de tipos completa

```typescript
import type { KeyboardEvent, ReactNode, RefObject, SetStateAction } from 'react'

import type { TagProps } from '@/types/shared'
import type { AnimationControls } from 'framer-motion'

export enum MODAL_DIALOG_OVERLAY {
  ON = 'on',
  OFF = 'off',
}

export interface ModalDialogProps {
  title: string
  close: () => void
  isOpen?: boolean
  id?: string
  overlay?: `${MODAL_DIALOG_OVERLAY}`
  showCloseButton?: boolean
  slot?: ReactNode
  footer?: ReactNode
  onTag?: (data: TagProps) => void
  restoreFocusId?: string
}

export interface UseModalDialogResult {
  dialogId: string
  titleId: string
  panelClassName: string
  rootClassName: string
  resolvedOverlay: `${MODAL_DIALOG_OVERLAY}`
  shouldShowCloseButton: boolean
  dialogRef: RefObject<HTMLDivElement | null>
}

export interface UseModalDialogEventsProps {
  close: ModalDialogProps['close']
  isOpen: ModalDialogProps['isOpen']
  setIsRendered: (value: SetStateAction<boolean>) => void
  controls: AnimationControls
  restoreFocusId?: string
  isRendered?: boolean
}

export interface UseModalDialogEventsResult {
  handleClose: () => void
  handleEscapeClose: () => void
  handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void
  handleAnimationComplete: (definition: string) => void
}

```
