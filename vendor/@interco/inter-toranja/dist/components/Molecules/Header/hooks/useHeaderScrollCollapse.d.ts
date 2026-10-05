interface UseHeaderScrollCollapseParams {
    isEnabled: boolean;
    scrollContainer?: HTMLElement | null;
}
export declare const useHeaderScrollCollapse: ({ isEnabled, scrollContainer, }: UseHeaderScrollCollapseParams) => {
    isCollapsed: boolean;
};
export {};
