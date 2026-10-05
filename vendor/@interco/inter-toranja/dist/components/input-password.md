---
name: toranja-input-password
description: Tipos e props do componente InputPassword do @interco/inter-toranja.
---

# InputPassword

**Categoria:** Molecules
**Versão:** 1.5.2 (24/03/2025)
**Importação:**
```tsx
import { InputPassword } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `InputPasswordProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| label | — | — | — |
| state | — | — | — |
| value | — | — | — |
| disabled | — | — | — |
| readOnly | — | — | — |
| placeholder | — | — | — |
| required | — | — | — |
| showHint | — | — | — |
| showForceBar | Mostra barra de força da senha | — | false |
| hints | Mensagem de dica | — | Hint |
| error | Array de mensagens de erro (ex: ["Error 1", "Error 2"]) | — | ['Error 1 |
| success | Mensagem de sucesso | — | Success |

## Definição de tipos completa

```typescript
import type { FC } from 'react'

import { InputBase } from '../InputBase/InputBase'
import { InputType } from '../InputBase/utils/inputEnums'

import type { InputProps } from '../InputBase/types'

import { STATE } from '@/utils/pattern'

export type InputPasswordProps = Omit<
  InputProps<undefined>,
  'phoneType' | 'dateType' | 'type' | 'counter' | 'showCounter' | 'mask' | 'showHelper'
>

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const { label = 'Texto', state = STATE.ENABLED, ...restProps } = props

  return (
    <InputBase
      label={label}
      type={InputType.PASSWORD}
      state={state}
      showClear
      customTagProps={{
        customProperties: {
          component_name: 'InputPassword',
        },
      }}
      {...(restProps as InputProps<undefined>)}
    />
  )
}

```
