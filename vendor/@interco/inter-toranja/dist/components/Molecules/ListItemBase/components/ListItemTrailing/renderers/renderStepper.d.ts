import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { StepperTrailingProps } from '../types';
import { TagProps } from '../../../../../../types/shared';
export declare const renderStepper: (props: StepperTrailingProps, state: ListItemState, onTag?: (data: TagProps) => void, nestedLabel?: string) => ReactNode;
