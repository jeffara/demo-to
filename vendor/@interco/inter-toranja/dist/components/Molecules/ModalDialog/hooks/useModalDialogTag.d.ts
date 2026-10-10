import { TagProps } from '../../../../types/shared';
interface UseModalDialogTagArgs {
    meetsCondition: boolean;
    onTagFn: (data: TagProps) => void;
    title: string;
}
export declare const useModalDialogTag: ({ meetsCondition, onTagFn, title, }: UseModalDialogTagArgs) => void;
export {};
