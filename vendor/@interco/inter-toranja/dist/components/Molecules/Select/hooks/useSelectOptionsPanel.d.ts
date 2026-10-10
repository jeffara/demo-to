import { KeyboardEvent } from 'react';
import { CalendarHeaderOption } from '../../DatePicker/types';
interface UseSelectOptionsPanelParams {
    id: string;
    options: CalendarHeaderOption[];
    onSelect: (index: number) => void;
}
interface UseSelectOptionsPanelReturn {
    activeOptionId: string | undefined;
    setOptionRef: (index: number, node: HTMLDivElement | null) => void;
    handleOptionFocus: (index: number) => void;
    handleOptionKeyDown: (event: KeyboardEvent<HTMLDivElement>, index: number, option: CalendarHeaderOption) => void;
    handleOptionClick: (option: CalendarHeaderOption) => void;
}
export declare const useSelectOptionsPanel: ({ id, options, onSelect, }: UseSelectOptionsPanelParams) => UseSelectOptionsPanelReturn;
export {};
