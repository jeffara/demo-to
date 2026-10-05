import { FC } from 'react';
import { ListItemTrailingProps } from './types';
import { TagProps } from '../../../../../types/shared';
interface ListItemTrailingExtendedProps extends Record<string, unknown> {
    type: ListItemTrailingProps['type'];
    nestedLabel?: string;
    onTag?: (data: TagProps) => void;
    [key: string]: unknown;
}
/**
 * ListItemTrailing - Generic trailing component that handles all trailing variants
 *
 * Supports:
 * - General: TagChevron, Badge, Text
 * - Control: Checkbox, Radio, Stepper, Switch
 * - Action: Button, IconButton, NeutralIconButton
 *
 * Uses discriminated unions for type safety.
 *
 * Contributes tagging data:
 * - trailing_variant: type of trailing (button, switch, icon, etc)
 *
 * @example
 * ```tsx
 * <ListItemTrailing
 *   type="tagChevron"
 *   showTag
 *   tagLabel="New"
 *   tagColor="brand"
 * />
 * ```
 */
export declare const ListItemTrailing: FC<ListItemTrailingExtendedProps>;
export {};
