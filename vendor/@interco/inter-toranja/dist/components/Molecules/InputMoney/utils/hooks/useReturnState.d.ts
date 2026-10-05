import { InputMoneyProps } from '../../types';
export declare const useReturnState: (state: InputMoneyProps["state"], typeValue: InputMoneyProps["typeValue"], variantNumeric: InputMoneyProps["variantNumeric"]) => {
    isReadOnly: boolean;
    isDisabled: boolean;
    isError: boolean;
    isSkeleton: boolean;
    isNumberInteger: boolean;
};
