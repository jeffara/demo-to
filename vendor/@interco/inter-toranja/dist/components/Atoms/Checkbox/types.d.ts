import { STATE, VARIANT } from '../../../utils/pattern';
export type CheckboxProps = {
    variant?: `${VARIANT.DEFAULT}` | `${VARIANT.INDETERMINATE}` | `${STATE.ERROR}`;
    state: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
    onChange?: (isChecked: boolean) => void;
    checked?: boolean;
};
