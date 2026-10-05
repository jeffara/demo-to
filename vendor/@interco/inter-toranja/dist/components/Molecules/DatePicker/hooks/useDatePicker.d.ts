import { KeyboardEvent } from 'react';
import { CalendarHeaderDropdownType, CalendarHeaderOption, CalendarMonthView, DatePickerProps } from '../types';
interface UseDatePickerReturn {
    rootClasses: string;
    pickerId: string;
    disabled: boolean;
    weekdayLabels: string[];
    months: CalendarMonthView[];
    openHeaderDropdown: CalendarHeaderDropdownType | null;
    monthOptions: CalendarHeaderOption[];
    yearOptions: CalendarHeaderOption[];
    handleDayClick: (date: Date) => void;
    handleDayKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    handlePreviousMonth: () => void;
    handleNextMonth: () => void;
    handleMonthChipClick: () => void;
    handleYearChipClick: () => void;
    handleMonthSelect: (monthIndex: number) => void;
    handleYearSelect: (year: number) => void;
    handleCloseHeaderDropdown: () => void;
    showControls: boolean;
    showButtons: boolean;
    handleClear: () => void;
    handleApply: () => void;
}
export declare const useDatePicker: (props: DatePickerProps) => UseDatePickerReturn;
export {};
