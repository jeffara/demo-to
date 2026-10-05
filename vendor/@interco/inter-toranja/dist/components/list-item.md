---
name: toranja-list-item
description: Tipos e props do componente ListItem do @interco/inter-toranja.
---

# ListItem

**Categoria:** Molecules
**Importação:**
```tsx
import { ListItem } from '@interco/inter-toranja'
```

## Tipos Disponíveis

### Públicos (via @interco/inter-toranja)
- `ListItemProps`
### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

**Interfaces:**
- `ListItemBaseProps`
- `ListItemWithButtonProps`
- `ListItemWithCheckboxProps`
- `ListItemWithNeutralIconButtonProps`
- `ListItemWithRadioButtonProps`
- `ListItemWithStepperProps`
- `ListItemWithSwitchProps`
- `ListItemWithTagChevronProps`
- `ListItemWithTextProps`
- `ListItemTagProps`

**Types:**
- `LeadingFlagProps`
- `LeadingImageProps`
- `LeadingPaymentMethodProps`


## Definição de tipos completa

```typescript
import type { CheckboxProps } from '../../Atoms/Checkbox/types'
import type { PaymentMethodsProps } from '../../Atoms/PaymentMethods/types'
import type { Color } from '../../Atoms/Tag/types'
import type { AvatarProps, PictureProps } from '../Avatar/types'
import type { NeutralIconButtonProps } from '../Button/types'
import type { RadioButtonProps } from '../RadioButton/types'
import type { StepperProps } from '../Stepper/types'
import type { IconName } from '@/components/Atoms/Icon/types'
import type { SwitchProps } from '@/components/Atoms/Switch/types'
import type { TagProps } from '@/types/shared'
import type { COUNTRY, HIERARCHY, STATE, StyleType, VARIANT } from '@/utils/pattern'

export interface ListItemBaseProps {
  label: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onTag?: (data: TagProps) => void
  paragraph?: string
  paragraphSupport?: string
  showDivider?: boolean
  showLeading?: boolean
  showTrailing?: boolean
  state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`
  tags?: [ListItemTagProps, ListItemTagProps?, ListItemTagProps?]
  variant?: `${VARIANT.DEFAULT}` | `${VARIANT.CONTAINED}`
}

type LeadingAvatarProps = AvatarProps

type LeadingCheckboxProps = CheckboxProps

export type LeadingFlagProps =
  | `${COUNTRY.BRAZIL}`
  | `${COUNTRY.UNITED_STATES}`
  | `${COUNTRY.ARGENTINA}`
  | `${COUNTRY.SPAIN}`
  | `${COUNTRY.GLOBE}`

export type LeadingImageProps = Omit<PictureProps, 'variant' | 'onError'>

export type LeadingPaymentMethodProps = PaymentMethodsProps['paymentMethod']

export interface ListItemWithButtonProps extends ListItemBaseProps {
  trailingButton?: {
    label: string
    onClick: () => void
    hierarchy?:
      | `${HIERARCHY.PRIMARY}`
      | `${HIERARCHY.SECONDARY}`
      | `${HIERARCHY.SECONDARY_OUTLINED}`

    variant?: StyleType
    loading?: boolean
  }
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: never
}

export interface ListItemWithCheckboxProps extends ListItemBaseProps {
  trailingButton?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: never
  trailingCheckbox?: CheckboxProps
}

export interface ListItemWithNeutralIconButtonProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: never
  trailingNeutralIconButton?: NeutralIconButtonProps
}

export interface ListItemWithRadioButtonProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: never
  trailingRadioButton?: RadioButtonProps
}

export interface ListItemWithStepperProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: never
  trailingStepper?: StepperProps
}

export interface ListItemWithSwitchProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingTagChevron?: never
  trailingText?: never
  trailingSwitch?: SwitchProps
}

export interface ListItemWithTagChevronProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingText?: never
  trailingTagChevron?:
    | {
        tag?: ListItemTagProps
      }
    | boolean
}

export interface ListItemWithTextProps extends ListItemBaseProps {
  trailingButton?: never
  trailingCheckbox?: never
  trailingNeutralIconButton?: never
  trailingRadioButton?: never
  trailingStepper?: never
  trailingSwitch?: never
  trailingTagChevron?: never
  trailingText?: {
    label: string
    colorLabel: 'neutral' | 'success'
    paragraph?: string
  }
}

export interface ListItemTagProps {
  label: string
  color: Color
}

type ExclusiveLeadingProps =
  | {
      leadingFlag?: never
      leadingCheckbox?: never
      leadingIcon?: never
      leadingImage?: never
      leadingPaymentMethod?: never
      leadingAvatar?: LeadingAvatarProps
    }
  | {
      leadingAvatar?: never
      leadingFlag?: never
      leadingIcon?: never
      leadingImage?: never
      leadingPaymentMethod?: never
      leadingCheckbox?: LeadingCheckboxProps
    }
  | {
      leadingAvatar?: never
      leadingCheckbox?: never
      leadingIcon?: never
      leadingImage?: never
      leadingPaymentMethod?: never
      leadingFlag?: `${LeadingFlagProps}`
    }
  | {
      leadingAvatar?: never
      leadingCheckbox?: never
      leadingFlag?: never
      leadingImage?: never
      leadingPaymentMethod?: never
      leadingIcon?: IconName
    }
  | {
      leadingAvatar?: never
      leadingCheckbox?: never
      leadingFlag?: never
      leadingIcon?: never
      leadingPaymentMethod?: never
      leadingImage?: LeadingImageProps
    }
  | {
      leadingAvatar?: never
      leadingCheckbox?: never
      leadingFlag?: never
      leadingIcon?: never
      leadingImage?: never
      leadingPaymentMethod?: LeadingPaymentMethodProps
    }

type ExclusiveTrailingProps =
  | ListItemWithButtonProps
  | ListItemWithCheckboxProps
  | ListItemWithNeutralIconButtonProps
  | ListItemWithRadioButtonProps
  | ListItemWithStepperProps
  | ListItemWithSwitchProps
  | ListItemWithTagChevronProps
  | ListItemWithTextProps

export type ListItemProps = ExclusiveLeadingProps & ExclusiveTrailingProps

```
