import { SegmentItemProps, SegmentedControlDensity } from '../types';
import { SIZE } from '../../../../utils/pattern';
export declare const getSegmentKey: (item: SegmentItemProps, index: number) => string;
export declare const getSegmentIconName: (segment: SegmentItemProps) => string;
export declare const getSegmentLabel: (segment: SegmentItemProps) => string;
export declare const isIconOnlySegment: (segment: SegmentItemProps) => boolean;
export declare const resolveSegmentIconSize: (density?: SegmentedControlDensity) => typeof SIZE.SMALL | typeof SIZE.MEDIUM;
export declare const resolveSegmentedControlDensity: (density?: SegmentedControlDensity) => SegmentedControlDensity;
