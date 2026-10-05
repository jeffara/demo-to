import { FC } from 'react';
import { ListItemGeneralProps } from './types';
/**
 * ListItemGeneral - Component for presenting information in lists
 *
 * Used to present information or data in lists, can be for viewing only
 * or include navigation to other screens or details.
 *
 * Implements MVVM pattern through useListItemGeneralViewModel hook,
 * separating business logic from presentation layer.
 *
 * @example
 * ```tsx
 * <ListItemGeneral
 *   label="List item"
 *   paragraph="Secondary description"
 *   leadingProps={{ type: 'avatar', avatarProps: { name: 'John Doe' } }}
 *   trailingProps={{ type: 'tagChevron', tagChevronProps: { showTag: true, tagLabel: 'New', tagColor: 'brand' } }}
 * />
 * ```
 */
export declare const ListItemGeneral: FC<ListItemGeneralProps>;
