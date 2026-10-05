import { ReactNode } from 'react';
import { ListItemViewOrientationEnum, ListItemViewTrailingTypeEnum, ListItemViewValueColorEnum, ListItemViewValueTypeEnum } from './enums';
import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../Atoms/Tag/types';
import { TagProps as OnTagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type ListItemViewOrientation = `${ListItemViewOrientationEnum}`;
export type ListItemViewValueType = `${ListItemViewValueTypeEnum}`;
export type ListItemViewValueColor = `${ListItemViewValueColorEnum}`;
export type ListItemViewTrailingType = `${ListItemViewTrailingTypeEnum}`;
export interface ListItemViewTagValue {
    valueType: `${ListItemViewValueTypeEnum.TAG}`;
    value: ReactNode;
    tagColor: string;
    tagHierarchy: Pick<TagProps, 'hierarchy'>;
    valueColor?: never;
}
export interface ListItemViewTextValue {
    valueType: `${ListItemViewValueTypeEnum.TEXT}`;
    value: ReactNode;
    valueColor: ListItemViewValueColor;
    tagColor?: never;
    tagHierarchy?: never;
}
export interface ListItemViewTrailingButton {
    trailingType: `${ListItemViewTrailingTypeEnum.BUTTON}`;
    trailing: string;
    onActionTrailing: () => void;
}
export interface ListItemViewTrailingIcon {
    trailingType: `${ListItemViewTrailingTypeEnum.ICON}`;
    trailing: IconName;
    onActionTrailing: () => void;
}
export interface ListItemViewNoTrailing {
    trailingType?: never;
    trailing?: never;
    onActionTrailing?: () => never;
}
export type ListItemViewTrailing = ListItemViewTrailingButton | ListItemViewTrailingIcon | ListItemViewNoTrailing;
export type ListItemViewValue = ListItemViewTagValue | ListItemViewTextValue;
export interface ListItemViewBaseProps {
    orientation: ListItemViewOrientation;
    label: string;
    state?: `${STATE.SKELETON}` | `${STATE.ENABLED}`;
    alignRight?: boolean;
    helper?: boolean;
    helperOnClick?: () => void;
    onTag?: (tag: OnTagProps) => void;
}
export type ListItemViewProps = ListItemViewBaseProps & ListItemViewValue & ListItemViewTrailing;
export type LabelSectionProps = Pick<ListItemViewProps, 'label' | 'helper' | 'orientation' | 'state' | 'helperOnClick' | 'onTag'> & {
    isEnabled: boolean;
    className: string;
};
export type ValueSectionProps = Pick<ListItemViewProps, 'value' | 'valueType' | 'tagColor'> & {
    tagHierarchy?: TagProps['hierarchy'];
    isEnabled: boolean;
    className: string;
};
export type TrailingSectionProps = Pick<ListItemViewProps, 'trailing' | 'trailingType' | 'onActionTrailing' | 'onTag'> & {
    isEnabled: boolean;
    className: string;
    label: string;
};
