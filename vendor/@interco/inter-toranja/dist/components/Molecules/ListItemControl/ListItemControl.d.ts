import { FC } from 'react';
import { ListItemControlProps } from './types';
/**
 * ListItemControl - List item with control elements (Checkbox, Radio, Stepper, Switch)
 *
 * Extends ListItemBase with specific control trailing variants.
 * Uses MVVM pattern to separate presentation from logic.
 *
 * @example
 * ```tsx
 * <ListItemControl
 *   label="Enable notifications"
 *   paragraph="Receive push notifications"
 *   leadingProps={{ type: 'icon', iconProps: { icon: 'ic_bell' } }}
 *   trailingVariant="switch"
 *   trailingProps={{ checked: true, onSwitchChange: handleChange }}
 * />
 * ```
 */
export declare const ListItemControl: FC<ListItemControlProps>;
