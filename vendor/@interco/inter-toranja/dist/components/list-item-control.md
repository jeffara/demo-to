---
name: toranja-list-item-control
description: Tipos e props do componente ListItemControl do @interco/inter-toranja.
---

# ListItemControl

**Categoria:** Molecules
**Versão:** 1.0.0 (05/09/2025)
**Importação:**
```tsx
import { ListItemControl } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ListItemControlProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `CheckboxTrailingProps`
- `RadioTrailingProps`
- `StepperTrailingProps`
- `SwitchTrailingProps`
- `ListItemControlBaseProps`
- `ListItemControlWithCheckboxProps`
- `ListItemControlWithRadioProps`
- `ListItemControlWithStepperProps`
- `ListItemControlWithSwitchProps`
- `ListItemControlWithoutTrailingProps`

**Types:**
- `ControlTrailingVariant`


## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
| variant | Variante visual - default (transparente), inset (16px padding), contained (background cinza) | default, inset, contained | { summary: 'default |
| state | Estados do componente | enabled, disabled, loading, skeleton | { summary: 'enabled |
| showDivider | Se true, exibe divider no final do componente | — | { summary: 'true |
| selected | selecionado (disponível apenas para variant contained) | — | { summary: 'false |
| interactive | Se true, permite interação (hover, focus, pressed). Se false, desabilita s interativos | — | { summary: 'true |
| leadingProps | Tipo da área leading (avatar, checkbox, flag, icon, image, indicator, numberText, paymentMethod, slot ou none) | ...LIST_ITEM_CONTROL_LEADING_OPTIONS | { summary: 'icon |
| label | Label principal do conteúdo (obrigatório) | — | — |
| paragraph | Parágrafo secundário abaixo do label | — | — |
| paragraphSupport | Parágrafo de suporte adicional | — | — |
| labelIcon | Ícone opcional ao lado do label | — | — |
| trailingVariant | Trailing obrigatório no Figma (checkbox, radio, stepper ou switch) e não pode ser ocultado. Se a prop for omitida, o componente usa checkbox para manter o trailing visível. | checkbox, radio, stepper, switch | — |
| trailingProps | Props específicas do trailing | — | — |
| onClick | Callback disparado ao clicar no ListItem | — | — |
| onTag | Callback para envio de eventos de analytics/tagging | — | — |
| alignmentTrailingMode | Modo de alinhamento vertical do Trailing. Leading e Content têm alinhamento fixo. | center-aligned, top-aligned | { summary: "'center-aligned' |
| testId | ID para testes automatizados | — | — |
| className | Classes CSS customizadas | — | — |

## Definição de tipos completa

```typescript
import type { ListItemContentProps, ListItemLeadingProps } from '../ListItemBase'
import type { ListItemSharedProps } from '../ListItemBase/types/shared'

/**
 * Control trailing variants
 */
export type ControlTrailingVariant = 'checkbox' | 'radio' | 'stepper' | 'switch'

/**
 * Checkbox trailing props
 */
export interface CheckboxTrailingProps {
  /**
   * Whether checkbox is checked
   */
  checked?: boolean

  /**
   * Callback when checkbox changes
   */
  onCheckboxChange?: (checked: boolean) => void

  /**
   * Whether checkbox is indeterminate
   */
  indeterminate?: boolean
}

/**
 * Radio trailing props
 */
export interface RadioTrailingProps {
  /**
   * Whether radio is selected
   */
  checked?: boolean

  /**
   * Callback when radio changes
   */
  onRadioChange?: (checked: boolean) => void

  /**
   * Radio value
   */
  value?: string

  /**
   * Radio group name (shared across options in the same group)
   */
  name?: string

  /**
   * Radio input id
   */
  id?: string
}

/**
 * Stepper trailing props
 */
export interface StepperTrailingProps {
  /**
   * Current stepper value
   */
  value?: number

  /**
   * Minimum value
   */
  min?: number

  /**
   * Maximum value
   */
  max?: number

  /**
   * Step increment
   */
  step?: number

  /**
   * Callback when value changes
   */
  onStepperChange?: (value: number) => void
}

/**
 * Switch trailing props
 */
export interface SwitchTrailingProps {
  /**
   * Whether switch is on
   */
  checked?: boolean

  /**
   * Callback when switch changes
   */
  onSwitchChange?: (checked: boolean) => void
}

/**
 * Base props for ListItemControl
 */
export interface ListItemControlBaseProps extends ListItemSharedProps, ListItemContentProps {
  /**
   * Leading configuration
   */
  leadingProps?: ListItemLeadingProps
}

/**
 * ListItemControl with Checkbox trailing
 */
export interface ListItemControlWithCheckboxProps extends ListItemControlBaseProps {
  trailingVariant: 'checkbox'
  trailingProps?: CheckboxTrailingProps
}

/**
 * ListItemControl with Radio trailing
 */
export interface ListItemControlWithRadioProps extends ListItemControlBaseProps {
  trailingVariant: 'radio'
  trailingProps?: RadioTrailingProps
}

/**
 * ListItemControl with Stepper trailing
 */
export interface ListItemControlWithStepperProps extends ListItemControlBaseProps {
  trailingVariant: 'stepper'
  trailingProps?: StepperTrailingProps
}

/**
 * ListItemControl with Switch trailing
 */
export interface ListItemControlWithSwitchProps extends ListItemControlBaseProps {
  trailingVariant: 'switch'
  trailingProps?: SwitchTrailingProps
}

export interface ListItemControlWithoutTrailingProps extends ListItemControlBaseProps {
  trailingVariant?: never
  trailingProps?: never
}

export type ListItemControlProps =
  | ListItemControlWithCheckboxProps
  | ListItemControlWithRadioProps
  | ListItemControlWithStepperProps
  | ListItemControlWithSwitchProps
  | ListItemControlWithoutTrailingProps

```
