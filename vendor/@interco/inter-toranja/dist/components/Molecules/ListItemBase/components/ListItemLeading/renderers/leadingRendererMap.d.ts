import { ReactNode } from 'react';
import { ListItemState } from '../../../types/shared';
import { LeadingType, ListItemLeadingProps } from '../types';
type LeadingRenderer = (props: ListItemLeadingProps, state: ListItemState, testId: string) => ReactNode;
export declare const getLeadingRenderer: (type: LeadingType) => LeadingRenderer;
export {};
