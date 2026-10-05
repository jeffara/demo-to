import { CalendarCellType, DatePickerValue, DateRange } from '../types';
export declare const startOfDay: (date: Date) => Date;
export declare const isSameDay: (left: Date, right: Date) => boolean;
export declare const isBeforeDay: (left: Date, right: Date) => boolean;
export declare const isAfterDay: (left: Date, right: Date) => boolean;
export declare const isDateRange: (value: DatePickerValue) => value is DateRange;
export declare const toIsoDate: (date: Date) => string;
export declare const isMinAfterMax: (minDate?: Date, maxDate?: Date) => boolean;
export declare const isDateDisabled: (date: Date, options: {
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    disabledDates?: (date: Date) => boolean;
}) => boolean;
export declare const getCellType: (date: Date, options: {
    selectionMode: "single" | "range";
    value: DatePickerValue;
    today: Date;
    isOutsideMonth: boolean;
}) => CalendarCellType;
export declare const isSelectedCell: (cellType: CalendarCellType) => boolean;
