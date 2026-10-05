import { ReactNode } from 'react';
import { ChartIndicatorColorToken } from './renderers/renderIndicator';
import { CheckboxProps } from '../../../../Atoms/Checkbox/types';
import { IconProps } from '../../../../Atoms/Icon/types';
import { ImageProps } from '../../../../Atoms/Image/types';
import { PaymentMethodsProps } from '../../../../Atoms/PaymentMethods/types';
import { AvatarProps } from '../../../Avatar/types';
import { COUNTRY } from '../../../../../utils/pattern';
/**
 * Available Leading types
 */
export type LeadingType = 'avatar' | 'checkbox' | 'flag' | 'icon' | 'image' | 'indicator' | 'numberText' | 'paymentMethod' | 'slot' | 'none';
/**
 * Leading Avatar props
 */
export type LeadingAvatarProps = AvatarProps;
/**
 * Leading Checkbox props
 */
export type LeadingCheckboxProps = CheckboxProps;
/**
 * Leading Flag props
 */
export type LeadingFlagProps = `${COUNTRY.BRAZIL}` | `${COUNTRY.UNITED_STATES}` | `${COUNTRY.ARGENTINA}` | `${COUNTRY.SPAIN}` | `${COUNTRY.GLOBE}`;
/**
 * Leading Icon props
 */
export type LeadingIconProps = Pick<IconProps, 'asset' | 'size' | 'color' | 'contentDescription'>;
/**
 * Leading Image props
 */
export type LeadingImageProps = Pick<ImageProps, 'src' | 'contentDescription' | 'width' | 'height' | 'radius' | 'contentScale'> & {
    /**
     * Border color (required)
     */
    borderColor: NonNullable<ImageProps['borderColor']>;
    /**
     * Border weight (required)
     */
    borderWeight: NonNullable<ImageProps['borderWeight']>;
};
/**
 * Leading Indicator props (design-free component)
 */
export interface LeadingIndicatorProps {
    /**
     * Indicator color has to be a valid chart color token or a valid CSS variable
     */
    color?: ChartIndicatorColorToken | `var(--color-chart-${string})`;
    /**
     * Optional icon to display next to the indicator bar
     */
    icon?: Pick<IconProps, 'asset' | 'size' | 'color' | 'contentDescription'>;
    /**
     * Custom content for the indicator (deprecated, use icon instead)
     */
    children?: ReactNode;
}
/**
 * Leading NumberText props
 */
export interface LeadingNumberTextProps {
    /**
     * Main label (number or text)
     */
    label: string;
    /**
     * Additional text (only for numberText variant)
     */
    additionalText?: string;
    /**
     * Variant type
     * - number: only label (centered)
     * - numberText: label + additionalText (two lines)
     */
    variant?: 'number' | 'numberText';
}
/**
 * Leading PaymentMethod props
 */
export type LeadingPaymentMethodProps = PaymentMethodsProps['paymentMethod'];
/**
 * Leading Slot props (custom ReactNode)
 */
export interface LeadingSlotProps {
    /**
     * Custom content
     */
    children: ReactNode;
}
/**
 * ListItemLeading props
 */
export interface ListItemLeadingProps {
    /**
     * Type of Leading to render
     */
    type: LeadingType;
    /**
     * Avatar-specific props
     */
    avatarProps?: LeadingAvatarProps;
    /**
     * Checkbox-specific props
     */
    checkboxProps?: LeadingCheckboxProps;
    /**
     * Flag-specific props
     */
    flagProps?: LeadingFlagProps;
    /**
     * Icon-specific props
     */
    iconProps?: LeadingIconProps;
    /**
     * Image-specific props
     */
    imageProps?: LeadingImageProps;
    /**
     * Indicator-specific props
     */
    indicatorProps?: LeadingIndicatorProps;
    /**
     * NumberText-specific props
     */
    numberTextProps?: LeadingNumberTextProps;
    /**
     * PaymentMethod-specific props
     */
    paymentMethodProps?: LeadingPaymentMethodProps;
    /**
     * Slot-specific props (custom content)
     */
    slotProps?: LeadingSlotProps;
    /**
     * Test ID
     */
    testId?: string;
}
