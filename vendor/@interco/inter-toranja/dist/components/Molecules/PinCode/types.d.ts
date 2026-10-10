import { FormEvent, RefObject } from 'react';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type PinCodeInputState = `${STATE.ERROR}` | `${STATE.SKELETON}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.READ_ONLY}`;
export type PinCodeProps = {
    fields?: 3 | 4 | 5 | 6;
    state?: PinCodeInputState;
    hints?: string[];
    hidden?: boolean;
    type?: 'text' | 'number';
    onTag?: (data: TagProps) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onGetValue?: (value: string) => void;
    onComplete?: (value: string) => void;
    onStateChange?: (state: PinCodeInputState) => void;
    placeholder?: string;
    disabled?: boolean;
};
export type PinCodeInputType = NonNullable<PinCodeProps['type']>;
export type UsePinCodeParams = Pick<PinCodeProps, 'fields' | 'state' | 'disabled' | 'hidden' | 'type' | 'onGetValue' | 'onComplete' | 'onStateChange'>;
export interface UsePinCodeReturn {
    valuePinCode: string[];
    fieldsetKeys: RefObject<string[]>;
    inputRefs: RefObject<(HTMLInputElement | null)[]>;
    fieldsetRefs: RefObject<(HTMLFieldSetElement | null)[]>;
    isDisabled: boolean;
    isError: boolean;
    isSkeleton: boolean;
    isReadOnly: boolean;
    typeInput: 'password' | 'text';
    handleInput: (e: FormEvent<HTMLInputElement>, index: number) => void;
    handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    handleNavigation: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    handleFocus: (index: number) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleContainerPointerDown: (e: React.MouseEvent | React.PointerEvent) => void;
    getClassNames: (index: number) => string;
    getInputClassNames: (index: number) => string;
}
