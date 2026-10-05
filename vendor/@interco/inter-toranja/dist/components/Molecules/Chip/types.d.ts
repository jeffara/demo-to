import { HTMLAttributes } from 'react';
import { FlagName } from '../../Atoms/Flag/types';
import { IconName, STATE } from '../../../main';
import { TagProps } from '../../../types/shared';
export interface ChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    label?: string;
    onClick?: () => void;
    selected?: boolean;
    leadingIcon?: IconName;
    trailingIcon?: IconName;
    state: `${STATE.SKELETON}` | `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.LOADING}`;
    onTag?: (data: TagProps) => void;
    variant?: 'default' | 'flag';
    flagIcon?: FlagName;
}
