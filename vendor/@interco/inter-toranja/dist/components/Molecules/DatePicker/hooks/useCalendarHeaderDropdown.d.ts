import { KeyboardEvent } from 'react';
import { CalendarHeaderOption } from '../types';
interface UseCalendarHeaderDropdownParams {
    id: string;
    options: CalendarHeaderOption[];
    onSelect: (value: number) => void;
}
interface UseCalendarHeaderDropdownReturn {
    activeOptionId: string | undefined;
    setOptionRef: (index: number, node: HTMLDivElement | null) => void;
    handleOptionFocus: (index: number) => void;
    handleOptionKeyDown: (event: KeyboardEvent<HTMLDivElement>, index: number, option: CalendarHeaderOption) => void;
    handleOptionClick: (option: CalendarHeaderOption) => void;
}
export declare const useCalendarHeaderDropdown: ({ id, options, onSelect, }: UseCalendarHeaderDropdownParams) => UseCalendarHeaderDropdownReturn;
export {};
