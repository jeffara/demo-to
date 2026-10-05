import { FlagName } from '../../Atoms/Flag/types';
import { BottomSheetProps } from '../../Molecules/BottomSheet/types';
export type BottomSheetCountryContentState = 'default' | 'noResults' | 'noItems';
export interface BottomSheetCountryItem {
    value: string;
    label: string;
    description?: string;
    flag: FlagName;
}
export interface BottomSheetCountryProps extends Omit<BottomSheetProps, 'slot'> {
    items: BottomSheetCountryItem[];
    featuredItems?: BottomSheetCountryItem[];
    selectedValue?: string;
    showSearch?: boolean;
    showFeatured?: boolean;
    featuredTitle?: string;
    allTitle?: string;
    searchPlaceholder?: string;
    initialSearchTerm?: string;
    onSelect: (item: BottomSheetCountryItem) => void;
}
