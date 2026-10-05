import { IconColorToken } from './constants/iconColors';
import { IconName } from './constants/iconNames';
import { SIZE, STATE } from '../../../utils/pattern';
export type { IconName };
export interface IconProps {
    asset: IconName;
    contentDescription?: string;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
    state?: `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    color?: IconColorToken;
    id?: string;
    isFlag?: boolean;
}
