import { ListItemContentProps, ListItemLeadingProps } from '../ListItemBase';
import { ListItemSharedProps } from '../ListItemBase/types/shared';
/**
 * Control trailing variants
 */
export type ControlTrailingVariant = 'checkbox' | 'radio' | 'stepper' | 'switch';
/**
 * Checkbox trailing props
 */
export interface CheckboxTrailingProps {
    /**
     * Whether checkbox is checked
     */
    checked?: boolean;
    /**
     * Callback when checkbox changes
     */
    onCheckboxChange?: (checked: boolean) => void;
    /**
     * Whether checkbox is indeterminate
     */
    indeterminate?: boolean;
}
/**
 * Radio trailing props
 */
export interface RadioTrailingProps {
    /**
     * Whether radio is selected
     */
    checked?: boolean;
    /**
     * Callback when radio changes
     */
    onRadioChange?: (checked: boolean) => void;
    /**
     * Radio value
     */
    value?: string;
    /**
     * Radio group name (shared across options in the same group)
     */
    name?: string;
    /**
     * Radio input id
     */
    id?: string;
}
/**
 * Stepper trailing props
 */
export interface StepperTrailingProps {
    /**
     * Current stepper value
     */
    value?: number;
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value
     */
    max?: number;
    /**
     * Step increment
     */
    step?: number;
    /**
     * Callback when value changes
     */
    onStepperChange?: (value: number) => void;
}
/**
 * Switch trailing props
 */
export interface SwitchTrailingProps {
    /**
     * Whether switch is on
     */
    checked?: boolean;
    /**
     * Callback when switch changes
     */
    onSwitchChange?: (checked: boolean) => void;
}
/**
 * Base props for ListItemControl
 */
export interface ListItemControlBaseProps extends ListItemSharedProps, ListItemContentProps {
    /**
     * Leading configuration
     */
    leadingProps?: ListItemLeadingProps;
}
/**
 * ListItemControl with Checkbox trailing
 */
export interface ListItemControlWithCheckboxProps extends ListItemControlBaseProps {
    trailingVariant: 'checkbox';
    trailingProps?: CheckboxTrailingProps;
}
/**
 * ListItemControl with Radio trailing
 */
export interface ListItemControlWithRadioProps extends ListItemControlBaseProps {
    trailingVariant: 'radio';
    trailingProps?: RadioTrailingProps;
}
/**
 * ListItemControl with Stepper trailing
 */
export interface ListItemControlWithStepperProps extends ListItemControlBaseProps {
    trailingVariant: 'stepper';
    trailingProps?: StepperTrailingProps;
}
/**
 * ListItemControl with Switch trailing
 */
export interface ListItemControlWithSwitchProps extends ListItemControlBaseProps {
    trailingVariant: 'switch';
    trailingProps?: SwitchTrailingProps;
}
/**
 * ListItemControl without trailing
 */
export interface ListItemControlWithoutTrailingProps extends ListItemControlBaseProps {
    trailingVariant?: never;
    trailingProps?: never;
}
/**
 * ListItemControl props (discriminated union)
 */
export type ListItemControlProps = ListItemControlWithCheckboxProps | ListItemControlWithRadioProps | ListItemControlWithStepperProps | ListItemControlWithSwitchProps | ListItemControlWithoutTrailingProps;
