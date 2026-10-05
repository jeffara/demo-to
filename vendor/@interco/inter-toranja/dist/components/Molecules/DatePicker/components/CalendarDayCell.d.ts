import { FC, KeyboardEvent } from 'react';
import { CalendarDayView } from '../types';
interface CalendarDayCellProps {
    day: CalendarDayView;
    onDayClick: (date: Date) => void;
    onDayKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}
export declare const CalendarDayCell: FC<CalendarDayCellProps>;
export {};
