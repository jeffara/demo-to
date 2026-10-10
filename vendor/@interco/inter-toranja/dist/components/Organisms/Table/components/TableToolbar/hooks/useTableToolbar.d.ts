import { TableToolbarProps } from '../types';
interface UseTableToolbarReturn {
    rootClasses: string;
    showActions: boolean;
}
export declare const useTableToolbar: ({ trailing }: TableToolbarProps) => UseTableToolbarReturn;
export {};
