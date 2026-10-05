---
name: toranja-radio-button
description: Tipos e props do componente RadioButton do @interco/inter-toranja.
---

# RadioButton

**Categoria:** Molecules
**Versão:** 1.0.1 (26/11/2024)
**Importação:**
```tsx
import { RadioButton } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `RadioButtonProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `RadioVariant`
- `RadioState`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Variante do radio, pode ser padrão ou erro. | — | — |
| state | Estado do radio, pode ser habilitado, desabilitado ou esqueleto. | — | — |
| onChange | Função a ser executada quando o radio é alterado. | — | — |

## Definição de tipos completa

```typescript
import type React from 'react'

import type { TagProps } from '@/types/shared'

export enum RadioVariant {
  Default = 'default',
  Error = 'error',
}

export enum RadioState {
  Disabled = 'disabled',
  Enabled = 'enabled',
  Skeleton = 'skeleton',
}

export type RadioButtonProps = {
  checked?: boolean
  children?: React.ReactNode
  hasError?: boolean
  id: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelect: () => void
  onTag?: (data: TagProps) => void
  state: `${RadioState}`
  value: string
  variant: `${RadioVariant}`
}

```
