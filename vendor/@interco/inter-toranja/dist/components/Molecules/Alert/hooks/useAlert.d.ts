import { MouseEvent } from 'react';
import { AlertProps } from '../types';
import { TagProps } from '../../../../types/shared';
type UseAlertParams = Pick<AlertProps, 'onTag' | 'state' | 'title' | 'link' | 'description' | 'showDescription' | 'showLink'>;
interface UseAlertReturn {
    textsClassName: string;
    hasDescription: boolean;
    hasLink: boolean;
    handleLinkClick: (event: MouseEvent<HTMLAnchorElement>) => void;
    handleLinkTag: (data: TagProps) => void;
}
export declare const useAlert: ({ onTag, state, title, link, description, showDescription, showLink, }: UseAlertParams) => UseAlertReturn;
export {};
