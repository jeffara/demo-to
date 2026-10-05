import { FC, KeyboardEvent } from 'react';
import { CalendarMonthView, CalendarHeaderDropdownType, CalendarHeaderOption } from '../types';
interface CalendarMonthProps {
    monthView: CalendarMonthView;
    weekdayLabels: string[];
    showControls: boolean;
    showPrevious: boolean;
    showNext: boolean;
    isDisabled: boolean;
    openHeaderDropdown: CalendarHeaderDropdownType | null;
    monthOptions: CalendarHeaderOption[];
    yearOptions: CalendarHeaderOption[];
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    onMonthChipClick: () => void;
    onYearChipClick: () => void;
    onMonthSelect: (monthIndex: number) => void;
    onYearSelect: (year: number) => void;
    onCloseHeaderDropdown: () => void;
    onDayClick: (date: Date) => void;
    onDayKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}
export declare const CalendarMonth: FC<CalendarMonthProps>;
export {};
