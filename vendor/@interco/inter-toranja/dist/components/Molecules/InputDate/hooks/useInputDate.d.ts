import { MouseEvent as ReactMouseEvent, RefObject } from 'react';
import { InputDateProps } from '../types';
import { DatePickerValue } from '../../DatePicker/types';
export interface UseInputDateReturn {
    rootClasses: string;
    pickerClasses: string;
    rootRef: RefObject<HTMLDivElement | null>;
    pickerRef: RefObject<HTMLDivElement | null>;
    isPickerOpen: boolean;
    isDesktop: boolean;
    pickerId: string;
    pickerValue: Date | null;
    minDate?: Date;
    maxDate?: Date;
    locale: string;
    inputBaseProps: InputDateProps & {
        suppressNativeDatePicker: boolean;
    };
    handleRootClick: (event: ReactMouseEvent<HTMLDivElement>) => void;
    handlePickerChange: (value: DatePickerValue) => void;
}
export declare const useInputDate: (props: InputDateProps) => UseInputDateReturn;
