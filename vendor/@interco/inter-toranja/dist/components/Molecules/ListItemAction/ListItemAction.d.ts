import { FC } from 'react';
import { ListItemActionProps } from './types';
/**
 * ListItemAction - List item with action elements (Button, IconButton, NeutralIconButton)
 *
 * Extends ListItemBase with specific action trailing variants.
 * Uses MVVM pattern to separate presentation from logic.
 *
 * @example
 * ```tsx
 * <ListItemAction
 *   label="Delete item"
 *   paragraph="This action cannot be undone"
 *   leadingProps={{ type: 'icon', iconProps: { icon: 'ic_delete' } }}
 *   trailingVariant="button"
 *   trailingProps={{ label: 'Delete', variant: 'destructive', onButtonClick: handleDelete }}
 * />
 * ```
 */
export declare const ListItemAction: FC<ListItemActionProps>;
