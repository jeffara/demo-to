import { AlignmentTrailingMode } from './alignment';
import { TagProps as TaggingProps } from '../../../../types/shared';
/**
 * Possible ListItem states
 */
export type ListItemState = 'enabled' | 'disabled' | 'skeleton' | 'loading';
/**
 * Component state (subset of ListItemState for child components)
 */
export type ComponentState = ListItemState;
/**
 * Component state with error support (for components like Image)
 */
export type ComponentStateWithError = ListItemState | 'error';
/**
 * Visual variants of ListItem
 */
export type ListItemVariant = 'default' | 'inset' | 'contained';
/**
 * Shared props between all ListItems
 */
export interface ListItemSharedProps {
    /**
     * Component state
     * @default 'enabled'
     */
    state?: ListItemState;
    /**
     * Visual variant of component
     * @default 'default'
     */
    variant?: ListItemVariant;
    /**
     * Whether ListItem is selected (activates contained variant background)
     * @default false
     */
    selected?: boolean;
    /**
     * Whether ListItem allows interaction (hover, focus, pressed)
     * @default true
     */
    interactive?: boolean;
    /**
     * Callback fired when clicking the ListItem
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Callback for event tagging
     */
    onTag?: (data: TaggingProps) => void;
    /**
     * Whether to show the Divider at the end
     * @default true
     */
    showDivider?: boolean;
    /**
     * Test ID
     */
    testId?: string;
    /**
     * Custom CSS classes
     */
    className?: string;
    /**
     * Alignment mode for the Trailing area vertical positioning
     * - 'center-aligned': Trailing vertically centered (padrão)
     * - 'top-aligned': Trailing aligned to top (useful with multiple content lines)
     * @default 'center-aligned'
     */
    alignmentTrailingMode?: AlignmentTrailingMode;
}
/**
 * ListItem context to share state between components
 */
export interface ListItemContextValue {
    state: ListItemState;
    variant: ListItemVariant;
    selected: boolean;
    interactive: boolean;
    onTag?: (data: TaggingProps) => void;
}
