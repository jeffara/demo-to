export type TableBodyMode = 'loading' | 'skeleton' | 'error' | 'empty' | 'data';
interface ResolveTableBodyModeInput {
    isLoading: boolean;
    skeleton: boolean;
    error?: string;
    totalItemCount: number;
}
export declare const resolveTableBodyMode: ({ isLoading, skeleton, error, totalItemCount, }: ResolveTableBodyModeInput) => TableBodyMode;
export {};
