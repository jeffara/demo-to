import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
import { SIZE, STATE, StyleType } from '../../../utils/pattern';
export type ButtonState = `${STATE.DISABLED}` | `${STATE.ENABLED}` | `${STATE.LOADING}` | `${STATE.SKELETON}`;
export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonTypeName = 'btn' | 'btn-icon' | 'btn-fab' | 'btn-neutral' | 'btn-icon-chip';
type ButtonSize = ('btn' extends BaseButtonProps['typeButton'] ? `${SIZE.MEDIUM}` | `${SIZE.LARGE}` : never) | ('btn-icon' extends BaseButtonProps['typeButton'] ? `${SIZE.SMALL}` | `${SIZE.LARGE}` : never);
interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    loading?: boolean;
    leadingIcon?: IconName;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    state?: `${ButtonState}`;
    type?: ButtonType;
    typeButton?: ButtonTypeName;
    label?: 'btn-neutral' | 'btn-icon' extends BaseButtonProps['typeButton'] ? never : string;
    onTag?: (data: TagProps) => void;
}
type Hierarchy = 'primary' | 'secondary' | 'secondaryOutlined' | 'tertiary';
export type NonDestructiveStyleType = Exclude<StyleType, 'destructive'>;
export interface IconButtonProps extends Omit<BaseButtonProps, 'size' | 'typeButton' | 'label' | 'leadingIcon'> {
    size?: `${SIZE.SMALL}` | `${SIZE.LARGE}`;
    hierarchy?: Hierarchy;
    variant?: StyleType;
    icon?: IconName;
}
export interface NeutralIconButtonProps extends Omit<BaseButtonProps, 'size' | 'label' | 'variant' | 'typeButton' | 'leadingIcon'> {
    icon?: IconName;
    showBadge?: boolean;
    variant?: 'dot' | 'label';
    count?: number;
    size?: `${SIZE.SMALL}` | `${SIZE.MEDIUM}`;
}
type Exclusive<T, U> = (T & {
    [K in keyof U]?: never;
}) | (U & {
    [K in keyof T]?: never;
});
interface RegularButtonPropsBase extends Omit<BaseButtonProps, 'size' | 'label'> {
    label?: 'btn' extends BaseButtonProps['typeButton'] ? string : never;
    size?: `${ButtonSize}`;
    hierarchy?: `${Hierarchy}`;
    variant?: Hierarchy extends 'tertiary' ? NonDestructiveStyleType : StyleType;
}
export type RegularButtonProps = Exclusive<{
    hug?: boolean;
}, {
    fill?: boolean;
}> & RegularButtonPropsBase;
export type IconChipProps = {
    onTag?: (data: TagProps) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    state: `${ButtonState}`;
    variant: 'label';
    icon: IconName;
    showBadge: boolean;
    selected: boolean;
} & {
    variant: 'label';
    count: number;
};
export type { FloatingActionButtonProps, FloatingActionButtonState, FloatingActionButtonHierarchy, FloatingActionButtonSize, FloatingActionButtonBehavior, } from './FloatingActionButton/types';
