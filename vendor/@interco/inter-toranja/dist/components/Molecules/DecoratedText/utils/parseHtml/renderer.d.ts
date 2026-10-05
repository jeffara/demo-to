import { ReactNode } from 'react';
import { ParsedElement } from './types';
import { LinkTriggers } from '../../types';
export declare const elementToReact: (element: ParsedElement, index: number, linkTriggers?: LinkTriggers, isDisabledOrSkeleton?: boolean) => ReactNode;
export default elementToReact;
