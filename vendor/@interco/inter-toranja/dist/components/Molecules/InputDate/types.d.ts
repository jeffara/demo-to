import { InputProps, PickerRange } from '../InputBase/types';
export type InputDateProps = Omit<InputProps<undefined>, 'phoneType' | 'type' | 'counter' | 'showCounter' | 'state' | 'suppressNativeDatePicker'> & {
    state?: Exclude<InputProps<undefined>['state'], 'success'>;
    pickerRange?: PickerRange;
};
