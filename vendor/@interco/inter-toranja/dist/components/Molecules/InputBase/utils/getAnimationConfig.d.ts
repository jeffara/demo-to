export declare function getAnimationConfig({ isDisabled, isFocused, isReadOnly, hasValueInput, hasFlag, }: {
    isDisabled: boolean;
    isFocused: boolean;
    isReadOnly: boolean;
    hasValueInput: boolean;
    hasFlag?: boolean;
}): {
    width: string;
    y: number;
    scale?: number;
    x?: number;
};
