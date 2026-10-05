import { BottomSheetProps } from '../types';
import { TagProps } from '../../../../types/shared';
export declare const createBottomSheetChildTag: (onTag: BottomSheetProps["onTag"], title?: string) => ((childTag: TagProps) => void) | undefined;
