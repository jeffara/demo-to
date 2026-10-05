import { ReactNode } from 'react';
import { TagProps } from '../../../types/shared';
import { ColorType, SIZE, STATE } from '../../../utils/pattern';
export type ColorTypeAccept = `${ColorType.Default}` | `${ColorType.Success}` | `${ColorType.Error}` | `${ColorType.Warning}` | `${ColorType.Information}`;
export interface WidgetProps {
    color?: ColorTypeAccept;
    timeAgo?: string;
    tag?: string;
    title?: string;
    showHeader?: boolean;
    tagColor?: ColorTypeAccept;
    children: ReactNode;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
    state?: `${STATE.ENABLED}` | `${STATE.ERROR}` | `${STATE.SKELETON}`;
    onClick: () => void;
    onTag?: (data: TagProps) => void;
}
