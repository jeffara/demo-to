import { STATE } from '../../../../utils/pattern';
type PaginationTextState = `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
export declare const resolvePaginationTextState: (isSkeleton: boolean, isInteractive: boolean) => PaginationTextState;
export {};
