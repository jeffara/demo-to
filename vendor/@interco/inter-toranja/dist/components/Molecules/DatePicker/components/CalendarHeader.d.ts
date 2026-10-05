import { FC } from 'react';
import { CalendarHeaderDropdownType, CalendarHeaderOption } from '../types';
interface CalendarHeaderProps {
    monthLabel: string;
    yearLabel: string;
    monthTitleId: string;
    showPrevious: boolean;
    showNext: boolean;
    isDisabled: boolean;
    openDropdown: CalendarHeaderDropdownType | null;
    monthOptions: CalendarHeaderOption[];
    yearOptions: CalendarHeaderOption[];
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    onMonthChipClick: () => void;
    onYearChipClick: () => void;
    onMonthSelect: (monthIndex: number) => void;
    onYearSelect: (year: number) => void;
    onCloseDropdown: () => void;
}
export declare const CalendarHeader: FC<CalendarHeaderProps>;
export {};
