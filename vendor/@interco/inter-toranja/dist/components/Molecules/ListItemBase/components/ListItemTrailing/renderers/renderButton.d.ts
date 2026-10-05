import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { ButtonTrailingProps } from '../types';
import { TagProps } from '../../../../../../types/shared';
export declare const renderButton: (props: ButtonTrailingProps, state: ListItemState, onTag?: (data: TagProps) => void, nestedLabel?: string) => ReactNode;
