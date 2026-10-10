import { RefObject, MutableRefObject } from 'react';
import { TimelineFillingEnum } from './enums';
import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
interface SegmentItem {
    icon?: IconName;
    label?: string;
    disabled?: boolean;
}
type TimelineFilling = `${TimelineFillingEnum}`;
type IconLabelItem = Required<Pick<SegmentItem, 'icon' | 'label'>> & {
    disabled?: boolean;
};
type LabelOnlyItem = Required<Pick<SegmentItem, 'label'>> & {
    disabled?: boolean;
};
type IconOnlyItem = Required<Pick<SegmentItem, 'icon'>> & {
    disabled?: boolean;
};
export type SegmentItemProps = IconLabelItem | LabelOnlyItem | IconOnlyItem;
type LabelArray = [LabelOnlyItem, LabelOnlyItem] | [LabelOnlyItem, LabelOnlyItem, LabelOnlyItem] | [LabelOnlyItem, LabelOnlyItem, LabelOnlyItem, LabelOnlyItem];
type IconLabelArray = [IconLabelItem, IconLabelItem] | [IconLabelItem, IconLabelItem, IconLabelItem];
type IconArray = [IconOnlyItem, IconOnlyItem] | [IconOnlyItem, IconOnlyItem, IconOnlyItem] | [IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem] | [IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem, IconOnlyItem];
type LabelOrIconLabelSegments = LabelArray | IconLabelArray;
type DefaultDensitySegments = LabelOrIconLabelSegments | IconArray;
type CompactDensitySegments = [IconOnlyItem, IconOnlyItem];
export type SegmentedControlDensity = 'default' | 'compact';
type SegmentedControlSharedProps = {
    onTag?: (data: TagProps) => void;
    onClick: (item: SegmentItemProps, index: number) => void;
    state?: 'enabled' | 'skeleton';
    filling?: TimelineFilling;
};
export type SegmentedControlProps = (SegmentedControlSharedProps & {
    density?: 'default';
    segments: DefaultDensitySegments;
}) | (SegmentedControlSharedProps & {
    density: 'compact';
    segments: CompactDensitySegments;
});
export interface SelectedSegmentProps {
    icon_selected: string;
    label_selected: string | false;
}
export type BackgroundStyle = {
    left: string;
    width: string;
    height: string;
    top: string;
};
export type UseSegmentedControlPropertiesReturn = {
    segmentProperties: string;
    getSelectedSegmentProperties: (item: SegmentItemProps) => SelectedSegmentProps;
};
export type UseSegmentedControlClassesReturn = {
    containerClass: string;
    getSegmentClasses: (isActive: boolean, isDisabled: boolean) => string;
    getTextClasses: (isActive: boolean) => string;
};
export type SegmentedControlState = 'enabled' | 'skeleton' | undefined;
export type UseSegmentedControlBackgroundReturn = [
    BackgroundStyle,
    RefObject<HTMLDivElement | null>,
    MutableRefObject<(HTMLDivElement | null)[]>
];
export {};
