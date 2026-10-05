import { FC, ReactNode } from 'react';
import { ListItemContextValue } from '../types/shared';
/**
 * Provider props
 */
export interface ListItemProviderProps {
    value: ListItemContextValue;
    children: ReactNode;
}
/**
 * ListItemContext Provider
 */
export declare const ListItemProvider: FC<ListItemProviderProps>;
/**
 * Hook to access ListItemContext
 * @throws {Error} If used outside ListItemProvider
 */
export declare const useListItemContext: () => ListItemContextValue;
