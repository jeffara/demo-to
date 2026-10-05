import { AnchorHTMLAttributes } from 'react';
import { TextSize } from '../../Atoms/Text/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    onTag?: (data: TagProps) => void;
    label: string;
    size?: `${TextSize}`;
    state?: `${STATE.SKELETON}` | `${STATE.ENABLED}`;
    variant?: 'default' | 'neutral' | 'staticBlack' | 'staticBlackUnderline' | 'staticWhite' | 'staticWhiteUnderline';
};
