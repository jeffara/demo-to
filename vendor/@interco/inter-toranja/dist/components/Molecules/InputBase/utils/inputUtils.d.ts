import { MaskType, DateType, PhoneTypeValue } from './inputEnums';
export declare function getPlaceholder(mask: MaskType | undefined, placeholder: string | undefined, phoneType?: PhoneTypeValue, dateType?: DateType): string;
export declare function getMaxLength(mask: MaskType | undefined, phoneType: PhoneTypeValue, counter: number): number;
export declare const handleMask: (value: string, maskType?: MaskType, phoneType?: PhoneTypeValue, dateType?: DateType) => string;
export declare const shouldKeepInputFocused: (container: EventTarget | null, relatedTarget: EventTarget | null) => boolean;
