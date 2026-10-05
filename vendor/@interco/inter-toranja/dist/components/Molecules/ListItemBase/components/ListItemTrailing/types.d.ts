import { IconName } from '../../../../Atoms/Icon/types';
import { Color } from '../../../../Atoms/Tag/types';
import { IconButtonProps, RegularButtonProps as ButtonProps, NeutralIconButtonProps } from '../../../Button/types';
export type TrailingType = 'tagChevron' | 'badge' | 'text' | 'checkbox' | 'radio' | 'stepper' | 'switch' | 'button' | 'iconButton' | 'neutralIconButton';
export interface TagChevronTrailingProps {
    type: 'tagChevron';
    showTag?: boolean;
    tagLabel?: string;
    tagColor?: Color;
}
export interface BadgeTrailingProps {
    type: 'badge';
    showBadge?: boolean;
    badgeValue?: string | number;
    showDate?: boolean;
    date?: string;
}
export interface TextTrailingProps {
    type: 'text';
    labelTrailing: string;
    labelTrailingColor?: 'neutral' | 'success';
    paragraphTrailing?: string;
}
export interface CheckboxTrailingProps {
    type: 'checkbox';
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export interface RadioTrailingProps {
    type: 'radio';
    checked?: boolean;
    value?: string;
    name?: string;
    id?: string;
    onRadioChange?: (checked: boolean) => void;
}
export interface StepperTrailingProps {
    type: 'stepper';
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onStepperChange?: (value: number) => void;
}
export interface SwitchTrailingProps {
    type: 'switch';
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export interface ButtonTrailingProps {
    type: 'button';
    label: string;
    variant?: ButtonProps['variant'];
    hierarchy?: ButtonProps['hierarchy'];
    size?: ButtonProps['size'];
    icon?: IconName;
    iconPosition?: 'leading' | 'trailing';
    onClick?: ButtonProps['onClick'];
}
export interface IconButtonTrailingProps {
    type: 'iconButton';
    iconButton: {
        icon: IconName;
        variant?: IconButtonProps['variant'];
        hierarchy?: IconButtonProps['hierarchy'];
        onClick?: IconButtonProps['onClick'];
    };
    iconButtonSecond?: {
        icon: IconName;
        variant?: IconButtonProps['variant'];
        hierarchy?: IconButtonProps['hierarchy'];
        onClick?: IconButtonProps['onClick'];
    };
}
export interface NeutralIconButtonTrailingProps {
    type: 'neutralIconButton';
    icon: IconName;
    ariaLabel?: string;
    onClick?: NeutralIconButtonProps['onClick'];
    showBadge?: boolean;
    variant?: 'dot' | 'label';
    count?: number;
}
export type ListItemTrailingProps = TagChevronTrailingProps | BadgeTrailingProps | TextTrailingProps | CheckboxTrailingProps | RadioTrailingProps | StepperTrailingProps | SwitchTrailingProps | ButtonTrailingProps | IconButtonTrailingProps | NeutralIconButtonTrailingProps;
