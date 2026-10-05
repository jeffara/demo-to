import { BottomSheetCountryContentState, BottomSheetCountryItem, BottomSheetCountryProps } from '../types';
export interface UseBottomSheetCountryReturn {
    rootClasses: string;
    searchClasses: string;
    emptyClasses: string;
    listClasses: string;
    searchTerm: string;
    searchPlaceholder: string;
    featuredTitle: string;
    allTitle: string;
    contentState: BottomSheetCountryContentState;
    sortedFilteredItems: BottomSheetCountryItem[];
    filteredFeaturedItems: BottomSheetCountryItem[];
    shouldShowSearch: boolean;
    shouldShowFeaturedSection: boolean;
    shouldShowAllTitle: boolean;
    shouldShowEmptyState: boolean;
    emptyTitle: string;
    emptyDescription: string;
    handleSearchChange: (value: string) => void;
    handleSelect: (item: BottomSheetCountryItem) => void;
    isItemSelected: (value: string) => boolean;
}
export declare const useBottomSheetCountry: (props: BottomSheetCountryProps) => UseBottomSheetCountryReturn;
