import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { NeutralIconButtonTrailingProps } from '../types';
import { TagProps } from '../../../../../../types/shared';
export declare const renderNeutralIconButton: (props: NeutralIconButtonTrailingProps, state: ListItemState, onTag?: (data: TagProps) => void, nestedLabel?: string) => ReactNode;
