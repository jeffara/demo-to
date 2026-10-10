export declare function getFieldSetClassName(isSkeleton: boolean): string;
export declare function getContainerClassName(isReadOnly: boolean): string;
export declare function getTextAreaWrapperClassName({ isDisabled, isError, isFocused, isHovered, isOverLimit, isReadOnly, }: {
    isFocused: boolean;
    isError: boolean;
    isOverLimit: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isHovered: boolean;
}): string;
export declare function getTextareaClassNames({ isDisabled, isReadOnly, isError, isOverLimit, }: {
    isDisabled: boolean;
    isReadOnly: boolean;
    isOverLimit: boolean;
    isError: boolean;
}): string;
export declare function getLabelClassName({ isDisabled, isReadOnly, isFocused, hasValue, }: {
    isDisabled: boolean;
    isReadOnly: boolean;
    isFocused?: boolean;
    hasValue?: boolean;
}): string;
export declare function getIconWrapperClassName({ isDisabled, isReadOnly, }: {
    isDisabled: boolean;
    isReadOnly: boolean;
}): string;
export declare function getHintsClassNames(isDisabled: boolean): string;
export declare function getTextCounterClassName({ isDisabled, isOverLimit, }: {
    isOverLimit: boolean;
    isDisabled: boolean;
}): string;
