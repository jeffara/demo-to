import { CalendarHeaderOption } from '../types';
export declare const buildMonthOptions: (locale: string, selectedMonthIndex: number, year: number, minDate?: Date, maxDate?: Date) => CalendarHeaderOption[];
export declare const buildYearOptions: (selectedYear: number, minDate?: Date, maxDate?: Date, rangeBefore?: number, rangeAfter?: number) => CalendarHeaderOption[];
