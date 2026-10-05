import { TextareaHTMLAttributes } from 'react';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface UseTextareaHandlersProps {
    propValue?: string | number;
    state?: State;
    initialHintsMensagens?: string[];
    counter: number;
    onTag?: (data: TagProps) => void;
    props: Partial<TextareaProps>;
    label: string;
    placeholder: string;
    showHint?: boolean;
    showCounter?: boolean;
    propsId?: string;
    propsAriaDescribedBy?: string;
}
export type State = `${STATE.ERROR}` | `${STATE.SKELETON}` | `${STATE.LOADING}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.READ_ONLY}`;
export type TextareaProps = TextAreaAttributes & {
    hints?: string[];
    label: string;
    onHelper?: () => void;
    showCounter?: boolean;
    showHelper?: boolean;
    showHint?: boolean;
    state?: State;
    counter?: number;
    onTag?: (data: TagProps) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export {};
