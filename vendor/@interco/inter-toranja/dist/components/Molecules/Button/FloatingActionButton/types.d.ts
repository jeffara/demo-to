import { FloatingActionButtonBehaviorType } from './constants';
import { IconName } from '../../../Atoms/Icon/types';
import { TagProps } from '../../../../types/shared';
import { SIZE, STATE, VARIANT } from '../../../../utils/pattern';
export type FloatingActionButtonState = `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.LOADING}`;
export type FloatingActionButtonHierarchy = 'primary' | 'secondary';
export type FloatingActionButtonSize = `${SIZE.LARGE}`;
export type FloatingActionButtonVariant = `${VARIANT.DEFAULT}`;
export type FloatingActionButtonBehavior = FloatingActionButtonBehaviorType;
export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button text. If provided, will be shown according to the behavior.
     * For 'hide-label-on-scroll': always starts expanded
     * For 'scroll-to-top': shows when appropriate
     * For 'default': always shows if provided
     */
    label?: string;
    /**
     * Button icon
     */
    icon?: IconName;
    /**
     * Button visual hierarchy (primary or secondary).
     * @default 'primary'
     */
    hierarchy?: FloatingActionButtonHierarchy;
    /**
     * Button size.
     * @default 'large'
     */
    size?: FloatingActionButtonSize;
    /**
     * Button variant.
     * @default 'default'
     */
    variant?: FloatingActionButtonVariant;
    /**
     * Interactive button state (enabled, disabled, loading).
     * @default 'enabled'
     */
    state?: FloatingActionButtonState;
    /**
     * Whether the button is disabled.
     * Overrides the `state` to `disabled`.
     * @default false
     */
    disabled?: boolean;
    /**
     * FAB behavior related to screen scrolling.
     * @default 'default'
     */
    behavior?: FloatingActionButtonBehavior;
    /**
     * Callback for tagging/analytics events.
     */
    onTag?: (data: TagProps) => void;
}
