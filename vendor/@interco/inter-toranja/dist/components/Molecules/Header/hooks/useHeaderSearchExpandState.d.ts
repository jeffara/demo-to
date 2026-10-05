interface UseHeaderSearchExpandStateParams {
    isSearchOpen: boolean;
    isPermanentSearch: boolean;
    onSearchOpenChange?: (isOpen: boolean) => void;
}
interface UseHeaderSearchExpandStateReturn {
    isSearchFieldVisible: boolean;
    isSearchUiExpanded: boolean;
    areTrailingIconsHidden: boolean;
    handleSearchExitComplete: () => void;
    handleCloseSearch: () => void;
}
export declare const useHeaderSearchExpandState: ({ isSearchOpen, isPermanentSearch, onSearchOpenChange, }: UseHeaderSearchExpandStateParams) => UseHeaderSearchExpandStateReturn;
export {};
