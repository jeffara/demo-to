import { DateType, MaskType, PhoneTypeValue } from '../utils/inputEnums';
import { InputFieldValue, ResolvedInputValueProps } from '../types';
export type { ResolvedInputValueProps } from '../types';
export declare const shouldRenderInputLabel: (type: string, showContent: boolean, suppressVisualLabel: boolean) => boolean;
export declare const resolveInputBaseContainerClassName: (isTypeSearch: boolean, suppressVisualLabel: boolean, showContent: boolean) => string;
export declare const buildAccessibleNameWhenLabelSuppressed: (suppressVisualLabel: boolean, label: string, ariaLabel?: string) => {
    "aria-label"?: string;
};
export declare const resolveControlledInputValueProps: ({ showContent, value, defaultValue, mask, phoneType, dateType, }: {
    showContent: boolean;
    value: InputFieldValue | undefined;
    defaultValue: InputFieldValue;
    mask?: MaskType;
    phoneType: PhoneTypeValue;
    dateType: DateType;
}) => ResolvedInputValueProps;
