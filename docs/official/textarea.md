---
name: toranja-textarea
description: Tipos e props do componente Textarea do @interco/inter-toranja.
---

# Textarea

**Categoria:** Molecules
**Importação:**
```tsx
import { Textarea } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `TextareaProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `UseTextareaHandlersProps`

**Types:**
- `State`


## Definição de tipos completa

```typescript
import type { TextareaHTMLAttributes } from 'react'

import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>

export interface UseTextareaHandlersProps {
  propValue?: string | number
  state?: State
  initialHintsMensagens?: string[]
  counter: number
  onTag?: (data: TagProps) => void
  props: Partial<TextareaProps>
  label: string
  placeholder: string
  showHint?: boolean
  showCounter?: boolean
  propsId?: string
  propsAriaDescribedBy?: string
}

export type State =
  | `${STATE.ERROR}`
  | `${STATE.SKELETON}`
  | `${STATE.LOADING}`
  | `${STATE.ENABLED}`
  | `${STATE.DISABLED}`
  | `${STATE.READ_ONLY}`

export type TextareaProps = TextAreaAttributes & {
  hints?: string[]
  label: string
  onHelper?: () => void
  showCounter?: boolean
  showHelper?: boolean
  showHint?: boolean
  state?: State
  counter?: number
  onTag?: (data: TagProps) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>

```
