import { FC } from 'react';
import { CalendarHeaderOption } from '../types';
interface CalendarHeaderDropdownProps {
    id: string;
    testId: string;
    options: CalendarHeaderOption[];
    onSelect: (value: number) => void;
}
export declare const CalendarHeaderDropdown: FC<CalendarHeaderDropdownProps>;
export {};
