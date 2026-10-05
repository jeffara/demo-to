import { STATE } from '../../../utils/pattern';
export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    state?: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON;
}
