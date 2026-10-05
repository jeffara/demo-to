import { ListItemLeadingProps } from '../components/ListItemLeading/types';
export declare const LIST_ITEM_LEADING_OPTIONS: readonly ["avatar", "checkbox", "flag", "icon", "image", "indicator", "numberText", "paymentMethod", "slot", "none"];
export type ListItemLeadingStoryOption = (typeof LIST_ITEM_LEADING_OPTIONS)[number];
export declare const listItemLeadingPropsMapping: Record<ListItemLeadingStoryOption, ListItemLeadingProps | undefined>;
export declare const listItemLeadingStoryLabels: Record<ListItemLeadingStoryOption, string>;
export declare const resolveListItemLeadingStoryProps: (leadingProps: ListItemLeadingProps | ListItemLeadingStoryOption | undefined) => ListItemLeadingProps | undefined;
