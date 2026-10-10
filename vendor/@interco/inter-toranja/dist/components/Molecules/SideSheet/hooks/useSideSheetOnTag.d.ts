import { TagProps } from '../../../../types/shared';
interface UseSideSheetOnTagArgs {
    meetsCondition: boolean;
    onTagFn: (data: TagProps) => void;
    title?: string;
}
export declare const useSideSheetOnTag: ({ meetsCondition, onTagFn, title, }: UseSideSheetOnTagArgs) => void;
export {};
