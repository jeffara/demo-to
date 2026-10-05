import { HintsProps } from '../../../../Atoms/Hints/types';
interface UseResolvedHintsParams {
    hint?: HintsProps['hints'];
    isError: boolean;
    validationError: string | null;
}
interface UseResolvedHintsResult {
    errorMessages: string[];
    infoHints: string[];
    shouldShowErrors: boolean;
    shouldShowInfoHints: boolean;
}
export declare const useResolvedHints: ({ hint, isError, validationError, }: UseResolvedHintsParams) => UseResolvedHintsResult;
export {};
