import { MouseEvent, RefObject } from 'react';
import { SelectOption, SelectProps } from '../types';
export interface UseSelectReturn {
    rootClasses: string;
    triggerClasses: string;
    panelClasses: string;
    rootRef: RefObject<HTMLDivElement | null>;
    panelRef: RefObject<HTMLDivElement | null>;
    triggerRef: RefObject<HTMLDivElement | null>;
    isPanelOpen: boolean;
    hasDesktopPicker: boolean;
    panelId: string;
    listboxId: string;
    triggerId: string;
    selectedValue: string | undefined;
    options: SelectOption[] | undefined;
    handleTriggerClick: (event: MouseEvent<HTMLDivElement>) => void;
    handleHelperClick: (event?: MouseEvent) => void;
    handleOptionSelect: (option: SelectOption) => void;
    inputBaseProps: Omit<SelectProps, 'options' | 'onOptionSelect' | 'onClick' | 'onClickHelper' | 'label'>;
    label: string;
}
export declare const useSelect: (props: SelectProps) => UseSelectReturn;
