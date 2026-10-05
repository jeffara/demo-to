export declare function getInputContainerClassNames({ isTypeSearch, isError, isSuccess, isReadOnly, }: {
    isTypeSearch: boolean;
    isError: boolean;
    isSuccess: boolean;
    isReadOnly: boolean;
}): string;
export declare function getInputClassNames({ isError, isSuccess, isReadOnly, isTypeSearch, hasFlag, }: {
    isTypeSearch: boolean;
    isReadOnly: boolean;
    isError: boolean;
    isSuccess: boolean;
    hasFlag?: boolean;
}): string;
export declare function getHintsClassNames(isDisabled: boolean): string;
export declare function getIconWrapperClassName({ isReadOnly }: {
    isReadOnly: boolean;
}): string;
export declare function getInputLabelClassName({ isReadOnly, hasFlag, isFocused, hasValue, }: {
    isReadOnly: boolean;
    hasFlag: boolean;
    isFocused?: boolean;
    hasValue?: boolean;
}): string;
export declare function getContainerClassName({ isTypeSearch }: {
    isTypeSearch: boolean;
}): string;
export declare function getFieldSetClassName(isSkeleton: boolean): string;
