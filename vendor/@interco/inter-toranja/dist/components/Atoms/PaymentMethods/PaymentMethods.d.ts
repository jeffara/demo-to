import { ReactNode } from 'react';
import { PaymentMethodsProps } from './types';
/**
 * PaymentMethods component for displaying payment method icons from the design system.
 *
 * @param paymentMethod - Payment method to display
 * @param size - Component size ('small' | 'medium' | 'large')
 * @param state - Component state ('enabled' | 'disabled' | 'skeleton')
 * @param color - Component color ('soft' | 'softest')
 */
export declare const PaymentMethods: ({ paymentMethod, size, state, color, }: PaymentMethodsProps) => ReactNode;
