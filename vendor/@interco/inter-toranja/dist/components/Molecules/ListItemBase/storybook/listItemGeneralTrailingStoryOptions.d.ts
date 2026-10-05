import { ListItemGeneralTrailingProps } from '../../ListItemGeneral/types';
export declare const LIST_ITEM_GENERAL_TRAILING_OPTIONS: readonly ["tagChevronOnly", "tagChevronWithTag", "badgeOnly", "badgeWithDate", "badgeDateOnly", "text"];
export type ListItemGeneralTrailingStoryOption = (typeof LIST_ITEM_GENERAL_TRAILING_OPTIONS)[number];
export declare const listItemGeneralTrailingPropsMapping: Record<ListItemGeneralTrailingStoryOption, ListItemGeneralTrailingProps>;
export declare const listItemGeneralTrailingStoryLabels: Record<ListItemGeneralTrailingStoryOption, string>;
export declare const resolveListItemGeneralTrailingStoryProps: (trailingProps: ListItemGeneralTrailingProps | ListItemGeneralTrailingStoryOption | undefined) => ListItemGeneralTrailingProps | undefined;
