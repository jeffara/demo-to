import { ListItemState } from '../types/shared';
import { STATE } from '../../../../utils/pattern';
/**
 * Maps ListItem state to STATE enum (for components that use STATE)
 * Also works as identity function for ListItemState
 */
export declare const mapStateToSTATE: (state: ListItemState) => STATE.ENABLED | STATE.SKELETON | STATE.DISABLED;
/**
 * Alias for backward compatibility
 * @deprecated Use state directly or mapStateToSTATE if you need STATE enum
 */
export declare const mapStateToComponentState: (state: ListItemState) => ListItemState;
