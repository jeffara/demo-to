import { FC } from 'react';
import { FlagProps } from './types';
/**
 * Flag component for displaying flag icons from the design system.
 *
 * This component is a specialized wrapper around the Icon component,
 * specifically designed for flag icons with circular skeleton state.
 *
 * @param iconFlag - Flag name to display
 * @param contentDescription - Description for screen readers
 * @param size - Flag size variant ('small' | 'medium' | 'large')
 * @param state - Flag state ('enabled' | 'disabled' | 'skeleton')
 * @param id - Flag id
 */
export declare const Flag: FC<FlagProps>;
