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
import type { InputProps, PickerRange } from '../InputBase/types'

export type InputDateProps = Omit<
  InputProps<undefined>,
  'phoneType' | 'type' | 'counter' | 'showCounter' | 'state' | 'suppressNativeDatePicker'
> & {
  state?: Exclude<InputProps<undefined>['state'], 'success'>
  pickerRange?: PickerRange
}

```
