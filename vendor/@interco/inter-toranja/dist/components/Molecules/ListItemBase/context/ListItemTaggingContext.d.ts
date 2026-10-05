import { FC, ReactNode } from 'react';
export type ListItemTagData = Record<string, unknown>;
export type ListItemSetTagData = (data: ListItemTagData | ((prev: ListItemTagData) => ListItemTagData)) => void;
export interface ListItemTaggingContextType {
    tagData: ListItemTagData;
    setTagData: ListItemSetTagData;
}
export declare const ListItemTaggingContext: import('react').Context<ListItemTaggingContextType | undefined>;
export interface ListItemTaggingProviderProps {
    value: ListItemTaggingContextType;
    children: ReactNode;
}
export declare const ListItemTaggingProvider: FC<ListItemTaggingProviderProps>;
