import { FEEDBACK, SIZE, STATE } from '../../../utils/pattern';
export type SignalProps = {
    variant: `${FEEDBACK}`;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
    state: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
};
