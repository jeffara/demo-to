type FieldIdPrefix = 'input' | 'textarea';
export declare const CHARACTER_LIMIT_REACHED_MESSAGE = "Limite de caracteres atingido";
export declare const sanitizeHintMessages: (messages: string[]) => string[];
export declare const normalizeMessages: (value?: string | string[]) => string[];
export declare const INPUT_BASE_MAX_ERROR_MESSAGES = 3;
export interface ResolvedFormFieldHints {
    sanitizedHints: string[];
    errorMessages: string[];
    successMessage: string;
    infoHints: string[];
    shouldShowErrors: boolean;
    shouldShowSuccess: boolean;
    shouldShowInfoHints: boolean;
    shouldShowHints: boolean;
}
interface ResolveFormFieldHintsParams {
    hints?: string | string[];
    error?: string | string[];
    success?: string;
    validationErrors?: string[];
    isError: boolean;
    isSuccess?: boolean;
    showHint?: boolean;
    maxErrorMessages?: number;
}
export declare const resolveFormFieldHints: ({ hints, error, success, validationErrors, isError, isSuccess, showHint, maxErrorMessages, }: ResolveFormFieldHintsParams) => ResolvedFormFieldHints;
export declare const buildFieldId: (prefix: FieldIdPrefix, propsId: string | undefined, label: string) => string;
export declare const buildFieldDescriptionIds: (fieldId: string) => {
    hintsId: string;
    counterId: string;
    limitMessageId: string;
};
export declare const buildAriaDescribedBy: (ids: Array<string | undefined>) => string | undefined;
export declare const getClearFieldAriaLabel: (label: string) => string;
export {};
