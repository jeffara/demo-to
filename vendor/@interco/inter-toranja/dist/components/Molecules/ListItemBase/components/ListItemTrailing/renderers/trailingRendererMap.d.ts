import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { ListItemTrailingProps, TrailingType } from '../types';
import { TagProps } from '../../../../../../types/shared';
type TrailingRenderer = (props: ListItemTrailingProps, state: ListItemState, onTag?: (data: TagProps) => void, nestedLabel?: string) => ReactNode;
export declare const getTrailingRenderer: (type: TrailingType) => TrailingRenderer;
export {};
