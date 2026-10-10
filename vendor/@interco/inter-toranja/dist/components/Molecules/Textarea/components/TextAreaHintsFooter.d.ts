import { FC } from 'react';
interface TextAreaHintsFooterProps {
    shouldShowHints: boolean;
    shouldShowErrors: boolean;
    errorMessages: string[];
    infoHints: string[];
    isDisabled: boolean;
    hintsId: string;
    showCounter: boolean;
    counterId: string;
    characterCount: number;
    counter: number;
    isOverLimit: boolean;
    isAtCharacterLimit: boolean;
    limitMessageId: string;
}
export declare const TextAreaHintsFooter: FC<TextAreaHintsFooterProps>;
export {};
