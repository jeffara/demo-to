import { FC } from 'react';
import { ListItemLeadingProps } from './types';
/**
 * ListItemLeading - Renders the Leading area
 * Reuses logic from legacy ListItem.tsx
 *
 * Supports: Avatar, Checkbox, Flag, Icon, Image, Indicator, NumberText, PaymentMethod, Slot
 *
 * Contributes tagging data (only relevant properties for each variant):
 * - Avatar: leading_variant, leading_avatar_variant, leading_avatar_icon
 * - Flag: leading_variant, leading_flag
 * - Icon: leading_variant, leading_icon
 * - Indicator: leading_variant, leading_icon
 * - PaymentMethod: leading_variant, leading_paymentMethod
 * - Image/Checkbox/NumberText/Slot: leading_variant only
 */
export declare const ListItemLeading: FC<ListItemLeadingProps>;
