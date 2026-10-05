import { FocusEventHandler } from 'react';
import { UpTo3 } from '../InputBase/types';
import { MaskType, PhoneTypeValue } from '../InputBase/utils/inputEnums';
import { BottomSheetCountryItem } from '../../Templates/BottomSheetCountry/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type InputCountryState = `${STATE.ENABLED}` | `${STATE.ERROR}` | `${STATE.DISABLED}` | `${STATE.READ_ONLY}` | `${STATE.LOADING}` | `${STATE.SKELETON}`;
export interface InputCountryOption extends BottomSheetCountryItem {
    prefix: string;
    phoneType?: PhoneTypeValue;
}
export interface InputCountryProps {
    label: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    prefix?: string;
    state?: InputCountryState;
    selectable?: boolean;
    showHint?: boolean;
    hints?: UpTo3<string> | string;
    error?: UpTo3<string>;
    mask?: `${MaskType.PHONE}` | `${MaskType.MONETARY}`;
    phoneType?: PhoneTypeValue;
    onChange?: (value: string) => void;
    onDebouncedChange?: (value: string) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    countryItems: InputCountryOption[];
    featuredCountryItems?: InputCountryOption[];
    selectedCountryValue?: string;
    onCountryChange?: (item: InputCountryOption) => void;
    bottomSheetTitle?: string;
    showCountrySearch?: boolean;
    showCountryFeatured?: boolean;
    countryFeaturedTitle?: string;
    countryAllTitle?: string;
    countrySearchPlaceholder?: string;
    id?: string;
    onTag?: (data: TagProps) => void;
    'data-testid'?: string;
}
