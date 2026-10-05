import { IconButtonProps } from '../Button/types';
import { ListItemContentProps, ListItemLeadingProps } from '../ListItemBase';
import { ListItemSharedProps } from '../ListItemBase/types/shared';
import { IconName } from '../../Atoms/Icon/types';
/**
 * Action trailing variants
 *
 * ListItemAction only accepts action-specific trailing types:
 * - button: Primary action button
 * - iconButton: One or two icon buttons for quick actions
 * - neutralIconButton: Single neutral icon button for secondary actions
 *
 * @note Unlike ListItemGeneral, does NOT support: tagChevron, badge, text trailing, or selected prop
 */
export type ActionTrailingVariant = 'button' | 'iconButton' | 'neutralIconButton';
/**
 * Button trailing props
 *
 * Configuration for a primary action button in the trailing area.
 * Use this for the main call-to-action.
 */
export interface ButtonTrailingProps {
    /**
     * Button label
     */
    label: string;
    /**
     * Button variant (default, destructive, inverse)
     */
    variant?: 'default' | 'destructive' | 'inverse';
    /**
     * Button hierarchy (primary, secondary, secondaryOutlined, tertiary)
     */
    hierarchy?: 'primary' | 'secondary' | 'secondaryOutlined' | 'tertiary';
    /**
     * Button size (small, medium, large)
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Optional icon
     */
    icon?: IconName;
    /**
     * Callback when button is clicked
     */
    onButtonClick?: () => void;
}
/**
 * IconButton config
 *
 * Configuration for individual icon buttons within the trailing area.
 */
export interface IconButtonConfig {
    /**
     * Icon
     * Best practice: pass the icon name directly (e.g., ic_delete)
     */
    icon: IconName;
    /**
     * IconButton variant
     */
    variant?: IconButtonProps['variant'];
    /**
     * IconButton hierarchy
     */
    hierarchy?: IconButtonProps['hierarchy'];
    /**
     * Callback when IconButton is clicked
     */
    onClick?: () => void;
}
/**
 * IconButton trailing props (supports 1 or 2 IconButtons)
 *
 * Use for quick actions that need icon-only representation.
 * Maximum 2 icon buttons are supported:
 * - iconButton (required): Primary quick action
 * - iconButtonSecond (optional): Secondary quick action
 *
 * @example
 * ```tsx
 * // Single icon button
 * trailingProps={{
 *   iconButton: {
 *     icon: 'ic_delete',
 *     onClick: handleDelete
 *   }
 * }}
 *
 * // Two icon buttons
 * trailingProps={{
 *   iconButton: {
 *     icon: 'ic_edit',
 *     hierarchy: 'primary',
 *     onClick: handleEdit
 *   },
 *   iconButtonSecond: {
 *     icon: 'ic_delete',
 *     hierarchy: 'secondary',
 *     onClick: handleDelete
 *   }
 * }}
 * ```
 */
export interface IconButtonTrailingProps {
    /**
     * First IconButton (required)
     */
    iconButton: IconButtonConfig;
    /**
     * Second IconButton (optional)
     *
     * @note Maximum 2 icon buttons. If you need more actions, use a menu pattern.
     */
    iconButtonSecond?: IconButtonConfig;
}
/**
 * NeutralIconButton trailing props
 *
 * Use for secondary or overflow actions (e.g., "More" menu).
 * Typically used for menu triggers or less prominent actions.
 */
export interface NeutralIconButtonTrailingProps {
    /**
     * Icon name (must be a valid IconName)
     * Pass the icon name directly
     *
     * @example
     * icon: 'ic_delete'
     *
     */
    icon: IconName;
    /**
     * Aria label for accessibility
     */
    ariaLabel?: string;
    /**
     * Callback when NeutralIconButton is clicked
     */
    onClick?: () => void;
    /**
     * Show badge on the icon button
     */
    showBadge?: boolean;
    /**
     * Badge count/variant
     */
    variant?: 'dot' | 'label';
    /**
     * Badge count value
     */
    count?: number;
}
/**
 * Base props for ListItemAction
 *
 * Omits `selected` property as ListItemAction does not support selection.
 * Use ListItemGeneral if you need a selectable list item component.
 */
export interface ListItemActionBaseProps extends Omit<ListItemSharedProps, 'selected'>, ListItemContentProps {
    /**
     * Leading configuration
     */
    leadingProps?: ListItemLeadingProps;
    /**
     * Whether to show the Leading area
     * @default true
     */
    showLeading?: boolean;
}
/**
 * ListItemAction with Button trailing
 */
export interface ListItemActionWithButtonProps extends ListItemActionBaseProps {
    trailingVariant: 'button';
    trailingProps?: ButtonTrailingProps;
}
/**
 * ListItemAction with IconButton(s) trailing
 */
export interface ListItemActionWithIconButtonProps extends ListItemActionBaseProps {
    trailingVariant: 'iconButton';
    trailingProps?: IconButtonTrailingProps;
}
/**
 * ListItemAction with NeutralIconButton trailing
 */
export interface ListItemActionWithNeutralIconButtonProps extends ListItemActionBaseProps {
    trailingVariant: 'neutralIconButton';
    trailingProps?: NeutralIconButtonTrailingProps;
}
/**
 * ListItemAction without trailing
 */
export interface ListItemActionWithoutTrailingProps extends ListItemActionBaseProps {
    trailingVariant?: never;
    trailingProps?: never;
}
/**
 * ListItemAction props (discriminated union)
 *
 * @important RESTRICTIONS:
 * - Only accepts trailing types: button, iconButton (1-2), or neutralIconButton
 * - Does NOT support: tagChevron, badge, text, or selected prop
 * - Use ListItemGeneral if you need selection support or other trailing variants
 * - Maximum 2 icon buttons when using iconButton trailing
 */
export type ListItemActionProps = ListItemActionWithButtonProps | ListItemActionWithIconButtonProps | ListItemActionWithNeutralIconButtonProps | ListItemActionWithoutTrailingProps;
