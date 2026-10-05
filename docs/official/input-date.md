---
name: toranja-input-date
description: Tipos e props do componente InputDate do @interco/inter-toranja.
---

# InputDate

**Categoria:** Molecules
**Versão:** 1.4.0 (11/04/2025)
**Importação:**
```tsx
import { InputDate } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `InputDateProps`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| label | — | — | — |
| state | — | — | — |
| defaultValue | — | — | — |
| disabled | — | — | — |
| readOnly | — | — | — |
| showHelper | — | — | — |
| placeholder | — | — | — |
| required | — | — | — |
| showHint | — | — | — |
| hints | Array de mensagens de dicas (ex: ["teste1", "teste2"]) | — | ['Hints 1 |
| onChange | — | — | — |

## Definição de tipos completa

```typescript
import type { FC } from 'react'

import { InputBase } from '../InputBase/InputBase'
import { InputType, MaskType } from '../InputBase/utils/inputEnums'

import type { InputProps, PickerRange } from '../InputBase/types'

import { STATE } from '@/utils/pattern'

export type InputDateProps = Omit<
  InputProps<undefined>,
  'phoneType' | 'type' | 'counter' | 'showCounter' | 'state'
> & {
  state?: Exclude<InputProps<undefined>['state'], `${STATE.SUCCESS}`>
  pickerRange?: PickerRange
}

export const InputDate: FC<InputDateProps> = (props) => {
  const { label = 'Texto', state = STATE.ENABLED, pickerRange, ...restProps } = props

  return (
    <InputBase
      label={label}
      type={InputType.TEXT}
      mask={MaskType.DATE}
      state={state}
      pickerRange={pickerRange}
      customTagProps={{
        customProperties: {
          component_name: 'InputDate',
        },
      }}
      {...restProps}
    />
  )
}

```
