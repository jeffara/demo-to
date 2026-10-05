import { ListItemTrailingProps, TrailingType } from './types';
import { ListItemState } from '../../types/shared';
export declare const TRAILING_TAG_KEYS: readonly ["trailing_variant", "tag_trailing_label", "trailing_badge_show_badge", "trailing_badge_show_date", "trailing_text_label", "trailing_text_color", "trailing_button_label", "trailing_button_variant", "trailing_button_hierarchy", "trailing_button_state", "trailing_button_leading_icon", "trailing_iconbutton1_variant", "trailing_iconbutton1_hierarchy", "trailing_iconbutton1_state", "trailing_iconbutton1_icon", "trailing_iconbutton2_variant", "trailing_iconbutton2_hierarchy", "trailing_iconbutton2_state", "trailing_iconbutton2_icon", "trailing_neutralIconButton_state", "trailing_neutralIconButton_icon", "trailing_checkbox_checked", "trailing_radio_checked", "trailing_radio_value", "trailing_stepper_value", "trailing_stepper_min", "trailing_stepper_max", "trailing_switch_checked"];
type TrailingTagKey = (typeof TRAILING_TAG_KEYS)[number];
type TrailingTagData = Partial<Record<TrailingTagKey, unknown>>;
export declare const createTrailingTagData: (type: TrailingType, props: ListItemTrailingProps, state: ListItemState) => TrailingTagData;
export {};
