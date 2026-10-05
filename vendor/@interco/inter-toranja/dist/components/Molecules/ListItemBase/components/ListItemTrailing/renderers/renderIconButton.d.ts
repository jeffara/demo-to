import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { IconButtonTrailingProps } from '../types';
import { TagProps } from '../../../../../../types/shared';
export declare const renderIconButton: (props: IconButtonTrailingProps, state: ListItemState, onTag?: (data: TagProps) => void, nestedLabel?: string) => ReactNode;
