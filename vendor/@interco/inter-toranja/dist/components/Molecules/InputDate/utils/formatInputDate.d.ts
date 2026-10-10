import { DateType } from '../../InputBase/utils/inputEnums';
export declare const parseMaskedDate: (value: string, dateType: DateType) => Date | null;
export declare const formatMaskedDate: (date: Date, dateType: DateType) => string;
export declare const getDatePickerLocale: (dateType: DateType) => string;
