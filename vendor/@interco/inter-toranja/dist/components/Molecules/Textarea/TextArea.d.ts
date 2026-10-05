import { FC } from 'react';
import { TextareaProps } from './types';
export declare enum FieldsetTextareaWrapperClasses {
    BASE = "fieldset-textarea__textarea-wrapper",
    FOCUSED = "fieldset-textarea__textarea-wrapper--focused",
    ERROR = "fieldset-textarea__textarea-wrapper--error",
    DISABLED = "fieldset-textarea__textarea-wrapper--disabled",
    READ_ONLY = "fieldset-textarea__textarea-wrapper--readonly",
    HOVER = "fieldset-textarea__textarea-wrapper--hover",
    INPUT_DISABLED = "fieldset-textarea__textarea-wrapper__textarea--disabled",
    INPUT_READ_ONLY = "fieldset-textarea__textarea-wrapper__textarea--readonly",
    INPUT_ERROR = "fieldset-textarea__textarea-wrapper__textarea--error"
}
export declare const TextArea: FC<TextareaProps>;
