import { FC } from 'react';
import { State } from '../types';
import { TagProps } from '../../../../types/shared';
interface TextAreaTrailingIconsProps {
    hasTrailingIcons: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    value: string | number | undefined;
    isEnabled: boolean;
    showHelper: boolean;
    currentState: State | undefined;
    label: string;
    onFocusField: () => void;
    handleClear: () => void;
    onHelper?: () => void;
    onTag?: (data: TagProps) => void;
}
export declare const TextAreaTrailingIcons: FC<TextAreaTrailingIconsProps>;
export {};
