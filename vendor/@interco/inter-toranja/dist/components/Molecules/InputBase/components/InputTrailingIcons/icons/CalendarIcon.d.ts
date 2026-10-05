import { ReactElement } from 'react';
interface CalendarIconProps {
    onOpenDatePicker: () => void;
    isDisabled: boolean;
}
export declare const CalendarIcon: ({ onOpenDatePicker, isDisabled }: CalendarIconProps) => ReactElement;
export {};
