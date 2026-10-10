---
name: toranja-pin-code
description: Tipos e props do componente PinCode do @interco/inter-toranja.
---

# PinCode

**Categoria:** Molecules
**Versão:** 1.0.0 (30/09/2024)
**Importação:**
```tsx
import { PinCode } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `PinCodeInputState`
- `PinCodeProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `UsePinCodeReturn`

**Types:**
- `PinCodeInputType`
- `UsePinCodeParams`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| fields | Define o número de campos no componente PinCode. O valor deve ser um dos seguintes: 3, 4, 5 ou 6. | 3, 4, 5, 6 | 3 |
| state | Define o estado visual do PinCode. Aceita os valores do enum `STATE` (`enabled`, `error`, `readonly`, `skeleton`) ou o type `PinCodeInputState`. Para estado controlado em código, importe `STATE` ou `PinCodeInputState` — literais como `state="enabled"` funcionam, mas variáveis tipadas como `string` exigem o type/enum. | — | STATE.ENABLED |
| hints | Define uma lista de dicas que podem ser exibidas no componente PinCode. | — | — |
| placeholder | Define o placeholder para os campos do componente PinCode. Deve ser um único caractere. | — | 0 |
| type | Define o tipo de entrada para os campos do componente PinCode. Pode ser "text" ou "number". | text, number | — |
| disabled | Define se o componente PinCode está desabilitado. | — | — |
| hidden | Quando true, mascara o valor digitado com um bullet. | — | { summary: 'false |
| onChange | Callback chamado sempre que o valor do PinCode mudar. Recebe o evento de mudança como parâmetro. | — | — |
| onGetValue | Callback chamado sempre que o valor do PinCode mudar (incluindo ao apagar). Retorna o valor completo concatenado dos campos. | — | — |
| onComplete | Callback chamado automaticamente ao digitar o último dígito (ou colar um código completo). Use para disparar a validação do token. | — | — |
| onStateChange | Callback chamado quando o componente remove o estado de erro após backspace ou toque para corrigir. Use para sincronizar estado controlado no consumidor. | — | — |

## Definição de tipos completa

```typescript
import type { FormEvent, RefObject } from 'react'

import type { TagProps } from '@/types/shared'
import type { STATE } from '@/utils/pattern'

export type PinCodeInputState =
  | `${STATE.ERROR}`
  | `${STATE.SKELETON}`
  | `${STATE.ENABLED}`
  | `${STATE.DISABLED}`
  | `${STATE.READ_ONLY}`

export type PinCodeProps = {
  fields?: 3 | 4 | 5 | 6
  state?: PinCodeInputState
  hints?: string[]
  hidden?: boolean
  type?: 'text' | 'number'
  onTag?: (data: TagProps) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onGetValue?: (value: string) => void
  onComplete?: (value: string) => void
  onStateChange?: (state: PinCodeInputState) => void
  placeholder?: string
  disabled?: boolean
}

export type PinCodeInputType = NonNullable<PinCodeProps['type']>

export type UsePinCodeParams = Pick<
  PinCodeProps,
  | 'fields'
  | 'state'
  | 'disabled'
  | 'hidden'
  | 'type'
  | 'onGetValue'
  | 'onComplete'
  | 'onStateChange'
>

export interface UsePinCodeReturn {
  valuePinCode: string[]
  fieldsetKeys: RefObject<string[]>
  inputRefs: RefObject<(HTMLInputElement | null)[]>
  fieldsetRefs: RefObject<(HTMLFieldSetElement | null)[]>
  isDisabled: boolean
  isError: boolean
  isSkeleton: boolean
  isReadOnly: boolean
  typeInput: 'password' | 'text'
  handleInput: (e: FormEvent<HTMLInputElement>, index: number) => void
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
  handleNavigation: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void
  handleFocus: (index: number) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  handleContainerPointerDown: (e: React.MouseEvent | React.PointerEvent) => void
  getClassNames: (index: number) => string
  getInputClassNames: (index: number) => string
}

```
