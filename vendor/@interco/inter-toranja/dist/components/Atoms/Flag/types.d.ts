import { IconName } from '../Icon/types';
import { SIZE, STATE } from '../../../utils/pattern';
export interface FlagProps {
    iconFlag: FlagName;
    contentDescription?: string;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
    state?: `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    id?: string;
}
export type FlagName = Extract<IconName, `ic_flag_${string}`>;
