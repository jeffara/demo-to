---
name: toranja-input-money
description: Tipos e props do componente InputMoney do @interco/inter-toranja.
---

# InputMoney

**Categoria:** Molecules
**Versão:** 1.3.0 (04/12/2025)
**Importação:**
```tsx
import { InputMoney } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `InputMoneyProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Enums:**
- `ActionType`
- `InputCurrencyMask`
- `InputTypeValue`
- `VariantNumeric`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| state | Define o estado do input | — | — |
| defaultValue | Define um valor default para o input | — | — |
| minValue | Define o valor minimo para o input | — | — |
| maxValue | Define o valor máximo para o input | — | — |
| currency | Define a moeda corrente do input | InputCurrencyMask.BRL, InputCurrencyMask.USD, InputCurrencyMask.ARS | — |
| typeValue | Define o tipo numerico do input | InputTypeValue.Monetary, InputTypeValue.Numeric | — |
| variantNumeric | Define a variante númerica quando o tipo do input é númerico. | VariantNumeric.Decimal, VariantNumeric.Integer | — |
| onChange | Função de callback responsável por retornar o valor do input com e sem máscara | — | — |
| hint | Define um texto informativo para o input ou pode receber até 3 mensagens de erro | — | — |
| showButtons | Define se os botões laterais serão exibidos | — | — |
| fixedIncrementValue | Define um valor para ser incrementado ao clicar no botão | — | — |
| fixedDecrementValue | Define um valor para ser decrementado ao clicar no botão | — | — |

## Definição de tipos completa

```typescript
import type { HintsProps } from '@/components/Atoms/Hints/types'
import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export enum InputCurrencyMask {
  BRL = 'BRL',
  USD = 'USD',
  ARS = 'ARS',
}

export enum InputTypeValue {
  Monetary = 'monetary',
  Numeric = 'numeric',
}

export enum VariantNumeric {
  Integer = 'integer',
  Decimal = 'decimal',
}

type InputMoneyButtons = {
  showButtons: boolean
  fixedIncrementValue?: number
  fixedDecrementValue?: number
}

export type InputMoneyProps = InputMoneyButtons & {
  state?:
    | `${STATE.READ_ONLY}`
    | `${STATE.SKELETON}`
    | `${STATE.ENABLED}`
    | `${STATE.DISABLED}`
    | `${STATE.ERROR}`
  hint?: HintsProps['hints']
  currency: `${InputCurrencyMask}`
  typeValue: `${InputTypeValue}`
  variantNumeric: `${VariantNumeric}`
  onChange: (value: number, valueMask: string) => void
  onDebouncedChange?: (value: number, valueMask: string) => void
  minValue?: number
  maxValue?: number
  onTag?: (data: TagProps) => void
  defaultValue: number
}

```
