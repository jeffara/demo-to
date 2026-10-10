import { ReactNode } from 'react';
import { TableCellAlign, TableVisualState } from '../shared/types';
import { IconName } from '../../../../Atoms/Icon/types';
import { PAYMENT } from '../../../../Atoms/PaymentMethods/types';
import { SignalProps } from '../../../../Atoms/Signal/types';
import { TagProps } from '../../../../Atoms/Tag/types';
import { AvatarColor, AvatarProps, AvatarVariant } from '../../../../Molecules/Avatar/types';
import { IconButtonProps, RegularButtonProps } from '../../../../Molecules/Button/types';
import { MenuPopupSize } from '../../../../Molecules/MenuPopup/types';
import { FEEDBACK, SIZE } from '../../../../../utils/pattern';
type TableAvatarContentProps = {
    variant: `${AvatarVariant.Icon}`;
    icon: Extract<AvatarProps, {
        variant: `${AvatarVariant.Icon}`;
    }>['icon'];
    color: `${AvatarColor}`;
    size: `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
};
export type TableCellType = 'checkbox' | 'text' | 'counter' | 'status' | 'tags' | 'value' | 'button' | 'icon' | 'avatar' | 'paymentMethod' | 'iconButton' | 'iconButtonMenu' | 'signal';
export type TableTagItem = Pick<TagProps, 'label' | 'color' | 'hierarchy' | 'size'>;
interface TableCellBaseProps {
    visualState?: TableVisualState;
    align?: TableCellAlign;
    minWidth?: number;
}
export interface TableCheckboxCellProps extends TableCellBaseProps {
    type: 'checkbox';
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export interface TableTextCellProps extends TableCellBaseProps {
    type: 'text';
    label: string;
    description?: string;
    icon?: IconName;
}
export interface TableCounterCellProps extends TableCellBaseProps {
    type: 'counter';
    value?: number;
    min?: number;
    max?: number;
}
export interface TableValueCellProps extends TableCellBaseProps {
    type: 'value';
    value: string;
    description?: string;
}
export interface TableButtonCellProps extends TableCellBaseProps {
    type: 'button';
    button: Pick<RegularButtonProps, 'label' | 'variant' | 'hierarchy' | 'size' | 'onClick'>;
}
export interface TableStatusCellProps extends TableCellBaseProps {
    type: 'status';
    tag: TableTagItem;
}
export interface TableTagsCellProps extends TableCellBaseProps {
    type: 'tags';
    tags: TableTagItem[];
}
export interface TableIconCellProps extends TableCellBaseProps {
    type: 'icon';
    icon: IconName;
}
export interface TableAvatarCellProps extends TableCellBaseProps {
    type: 'avatar';
    avatar: TableAvatarContentProps;
}
export interface TablePaymentMethodCellProps extends TableCellBaseProps {
    type: 'paymentMethod';
    paymentMethod: `${PAYMENT}`;
}
export interface TableIconButtonCellProps extends TableCellBaseProps {
    type: 'iconButton';
    iconButton: Pick<IconButtonProps, 'icon' | 'hierarchy' | 'size' | 'onClick'>;
}
export interface TableIconButtonMenuItem {
    id: string;
    label: string;
    icon: IconName;
    disabled?: boolean;
    onSelect: () => void;
}
export type TableIconButtonMenuSize = MenuPopupSize;
export interface TableIconButtonMenuCellProps extends TableCellBaseProps {
    type: 'iconButtonMenu';
    iconButton: Pick<IconButtonProps, 'icon' | 'hierarchy' | 'size'>;
    menuItems: [TableIconButtonMenuItem, ...TableIconButtonMenuItem[]];
    menuAriaLabel?: string;
    menuSize?: TableIconButtonMenuSize;
}
export interface TableSignalCellProps extends TableCellBaseProps {
    type: 'signal';
    variant?: `${FEEDBACK}`;
    size?: SignalProps['size'];
}
type TableCheckboxOrCounterCellProps = TableCheckboxCellProps | TableCounterCellProps;
type TableButtonOrIconButtonCellProps = TableButtonCellProps | TableIconButtonCellProps | TableIconButtonMenuCellProps;
export type TableActionCellProps = TableCheckboxOrCounterCellProps | TableButtonOrIconButtonCellProps;
type TableTextOrValueCellProps = TableTextCellProps | TableValueCellProps;
type TableStatusOrTagsCellProps = TableStatusCellProps | TableTagsCellProps;
type TableStatusOrSignalCellProps = TableStatusOrTagsCellProps | TableSignalCellProps;
export type TableContentCellProps = TableTextOrValueCellProps | TableStatusOrSignalCellProps;
type TableIconOrAvatarCellProps = TableIconCellProps | TableAvatarCellProps;
export type TableVisualCellProps = TableIconOrAvatarCellProps | TablePaymentMethodCellProps;
export interface TableSkeletonCellProps {
    visualState: 'skeleton';
    type: TableCellType;
    align?: TableCellAlign;
    minWidth?: number;
}
export type TableCellProps = TableSkeletonCellProps | TableCheckboxCellProps | TableTextCellProps | TableCounterCellProps | TableValueCellProps | TableButtonCellProps | TableStatusCellProps | TableTagsCellProps | TableIconCellProps | TableAvatarCellProps | TablePaymentMethodCellProps | TableIconButtonCellProps | TableIconButtonMenuCellProps | TableSignalCellProps;
export type TableCellRendererProps = TableCellProps & {
    children?: ReactNode;
};
export {};
