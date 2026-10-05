import { STATE, VARIANT } from '../../../utils/pattern';
export interface SectionSubtitleProps {
    subtitle: string;
    trailingLabel?: string;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    trailingValue?: {
        value: string;
        variant: `${STATE.ERROR}` | `${VARIANT.DEFAULT}`;
    };
}
