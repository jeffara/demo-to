import { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from 'react';
import { InputState } from '../../InputBase/types';
import { SelectOption, SelectProps } from '../types';
export interface SelectPanelFlags {
    hasDesktopPicker: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isPanelBlocked: boolean;
    canOpenPanel: boolean;
}
export interface DesktopPickerInputProps {
    'aria-haspopup'?: 'listbox';
    'aria-expanded'?: boolean;
    'aria-controls'?: string;
    onKeyDown?: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}
export declare const shouldSuppressSelectVisualLabel: (hideLabelWhenFilled: boolean | undefined, selectedValue: string | undefined) => boolean;
export declare const resolveFieldValue: (value: SelectProps["value"]) => string | undefined;
export declare const findSelectedOption: (options: SelectOption[] | undefined, selectedValue: string | undefined) => SelectOption | undefined;
export declare const resolveSelectPanelFlags: ({ surface, options, disabled, readOnly, state, }: {
    surface: string;
    options: SelectOption[] | undefined;
    disabled?: boolean;
    readOnly?: boolean;
    state: InputState;
}) => SelectPanelFlags;
export declare const getDesktopPickerInputProps: ({ hasDesktopPicker, isPanelOpen, listboxId, onKeyDown, onClick, }: {
    hasDesktopPicker: boolean;
    isPanelOpen: boolean;
    listboxId: string;
    onKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}) => DesktopPickerInputProps;
export declare const handleSelectTriggerClick: ({ event, isPanelBlocked, canOpenPanel, onClick, togglePanel, }: {
    event: MouseEvent<HTMLElement>;
    isPanelBlocked: boolean;
    canOpenPanel: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    togglePanel: () => void;
}) => void;
export declare const handleSelectTriggerKeyDown: ({ event, canOpenPanel, openPanel, togglePanel, }: {
    event: ReactKeyboardEvent<HTMLInputElement>;
    canOpenPanel: boolean;
    openPanel: () => void;
    togglePanel: () => void;
}) => void;
