import { FC } from 'react';
import { InputProps, PickerRange } from '../InputBase/types';
import { STATE } from '../../../utils/pattern';
export type InputDateProps = Omit<InputProps<undefined>, 'phoneType' | 'type' | 'counter' | 'showCounter' | 'state'> & {
    state?: Exclude<InputProps<undefined>['state'], `${STATE.SUCCESS}`>;
    pickerRange?: PickerRange;
};
export declare const InputDate: FC<InputDateProps>;
