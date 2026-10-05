import { FC } from 'react';
import { IconProps } from './types';
/**
 * Icon component for displaying SVG icons from the design system.
 *
 * @param asset - Icon name to display
 * @param contentDescription - Description for screen readers
 * @param size - Icon size variant ('small' | 'medium' | 'large')
 * @param state - Icon state ('enabled' | 'disabled' | 'skeleton')
 * @param color - Icon color token (must start with "Icon")
 * @param id - Icon id
 * @param isFlag - Whether this is a flag icon (uses larger size mapping: small=24px, medium=40px, large=80px)
 */
export declare const Icon: FC<IconProps>;
