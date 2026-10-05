import { TagProps } from '../../../types/shared';
export type DatePickerSelectionMode = 'single' | 'range';
export type DatePickerWeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarHeaderDropdownType = 'month' | 'year';
export interface CalendarHeaderOption {
    value: number;
    label: string;
    isDisabled: boolean;
    isSelected: boolean;
}
export type CalendarCellType = 'today' | 'unselected' | 'outside-month' | 'selected' | 'start' | 'middle' | 'end' | 'middle-today';
export interface DateRange {
    start: Date | null;
    end: Date | null;
}
export type DatePickerValue = Date | DateRange | null;
export interface DatePickerProps {
    value?: DatePickerValue;
    defaultValue?: DatePickerValue;
    onChange?: (value: DatePickerValue) => void;
    selectionMode?: DatePickerSelectionMode;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: (date: Date) => boolean;
    visibleMonth?: Date;
    onVisibleMonthChange?: (date: Date) => void;
    disabled?: boolean;
    locale?: string;
    weekStartsOn?: DatePickerWeekStart;
    id?: string;
    onTag?: (data: TagProps) => void;
    showControls?: boolean;
    showButtons?: boolean;
}
export interface CalendarDay {
    date: Date;
    isoDate: string;
    isOutsideMonth: boolean;
}
export interface CalendarDayView extends CalendarDay {
    dayNumber: number;
    cellType: CalendarCellType;
    isDisabled: boolean;
    isToday: boolean;
    isSelected: boolean;
    tabIndex: 0 | -1;
    dayClasses: string;
    ariaLabel: string;
}
export interface CalendarMonthView {
    month: Date;
    monthLabel: string;
    yearLabel: string;
    monthTitleId: string;
    weeks: CalendarDayView[][];
}
