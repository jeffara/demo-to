import { InputMoneyProps, ActionType } from '../../types';
import { ApplyMaskParams } from '../applyMask';
export declare const useValue: (onChange: InputMoneyProps["onChange"], defaultValue: InputMoneyProps["defaultValue"] | undefined, minValue: InputMoneyProps["minValue"], maxValue: InputMoneyProps["maxValue"], params: ApplyMaskParams) => {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    updateValue: (newValue: number) => void;
    handleValueChange: (action: `${ActionType.INCREMENT}` | `${ActionType.DECREMENT}`, fixedValue?: number) => void;
};
