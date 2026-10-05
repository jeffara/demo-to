import { AlignmentTrailingMode } from '../types/alignment';
interface TrailingAlignmentInput {
    explicitMode?: AlignmentTrailingMode;
    trailingType?: string;
    hasParagraphTrailing?: boolean;
}
export declare const resolveAlignmentTrailingMode: ({ explicitMode, trailingType, hasParagraphTrailing, }: TrailingAlignmentInput) => AlignmentTrailingMode;
export {};
