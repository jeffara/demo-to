import { RefObject } from 'react';
import { CalendarHeaderDropdownType } from '../types';
interface UseCalendarHeaderParams {
    monthTitleId: string;
    openDropdown: CalendarHeaderDropdownType | null;
    onCloseDropdown: () => void;
    onMonthSelect: (monthIndex: number) => void;
    onYearSelect: (year: number) => void;
}
interface UseCalendarHeaderReturn {
    headerRef: RefObject<HTMLDivElement | null>;
    monthChipId: string;
    yearChipId: string;
    monthDropdownId: string;
    yearDropdownId: string;
    isMonthDropdownOpen: boolean;
    isYearDropdownOpen: boolean;
    handleMonthSelect: (monthIndex: number) => void;
    handleYearSelect: (year: number) => void;
}
export declare const useCalendarHeader: ({ monthTitleId, openDropdown, onCloseDropdown, onMonthSelect, onYearSelect, }: UseCalendarHeaderParams) => UseCalendarHeaderReturn;
export {};
