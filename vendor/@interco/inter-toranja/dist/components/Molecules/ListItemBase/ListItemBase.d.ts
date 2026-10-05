import { FC, ReactNode } from 'react';
import { ListItemSharedProps } from './types/shared';
/**
 * ListItemBase props
 */
export interface ListItemBaseProps extends ListItemSharedProps {
    /**
     * Leading content (Avatar, Icon, Flag, Image, etc)
     */
    leading?: ReactNode;
    /**
     * Main content (Label, Paragraph, Supporting, Tags)
     */
    content: ReactNode;
    /**
     * Trailing content (Button, Checkbox, Radio, Switch, etc)
     */
    trailing?: ReactNode;
    /**
     * Whether to show the Leading area
     * @default true
     */
    showLeading?: boolean;
    /**
     * Grid modifier (calculated internally based on Leading/Trailing types)
     * Ex: '--image', '--leadingCheckbox', '--trailingButton'
     */
    gridModifier?: string;
    /**
     * Component name for tagging (ListItemGeneral, ListItemAction, ListItemControl)
     * @default 'ListItemBase'
     */
    componentName?: string;
}
/**
 * ListItemBase - Base component for ListItem General, Control and Action
 *
 * Responsibilities:
 * - Structural layout via CSS Grid
 * - State management (enabled, disabled, skeleton, loading)
 * - Interactivity management (hover, focus, pressed)
 * - Alignment management (horizontal and vertical positioning)
 * - Loading state with Spinner indicator
 * - Contained variant
 * - Context to share props
 * - Tagging context
 * - Optional divider
 *
 * @example
 * ```tsx
 * <ListItemBase
 *   state="enabled"
 *   variant="default"
 *   interactive
 *   leading={<Avatar />}
 *   content={<div>Content</div>}
 *   trailing={<Button />}
 *   alignmentTrailingMode="top-aligned"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <ListItemBase
 *   state="loading"
 *   leading={<Avatar />}
 *   content={<div>Loading content...</div>}
 * />
 * ```
 */
export declare const ListItemBase: FC<ListItemBaseProps>;
