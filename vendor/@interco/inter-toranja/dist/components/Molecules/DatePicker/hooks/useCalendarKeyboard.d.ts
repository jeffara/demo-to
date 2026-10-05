import { KeyboardEvent } from 'react';
import { DatePickerWeekStart } from '../types';
interface UseCalendarKeyboardParams {
    focusedDate: Date;
    onFocusedDateChange: (date: Date) => void;
    visibleMonth: Date;
    onVisibleMonthChange: (date: Date) => void;
    weekStartsOn: DatePickerWeekStart;
    isDisabled: boolean;
    onSelect: (date: Date) => void;
}
interface UseCalendarKeyboardReturn {
    handleDayKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}
export declare const useCalendarKeyboard: ({ focusedDate, onFocusedDateChange, visibleMonth, onVisibleMonthChange, weekStartsOn, isDisabled, onSelect, }: UseCalendarKeyboardParams) => UseCalendarKeyboardReturn;
export {};
