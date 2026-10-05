import { BadgeProps } from '../../Atoms/Badge/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
type Tab = {
    label: string;
    selected?: boolean;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}` | `${STATE.DISABLED}`;
    badge?: BadgeProps;
    onClick?: (label: string, index: number) => void;
};
export type TabsProps = {
    tabs: [Tab, Tab, ...Tab[]];
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    scrollable?: boolean;
    onTag?: (data: TagProps) => void;
};
export interface TabItemProps {
    tab: Tab;
    index: number;
    isActive: boolean;
    isDisabled: boolean;
    isSkeleton: boolean;
    handleTabClick: (index: number) => void;
    scrollable: boolean;
    generalState: TabsProps['state'];
    activeIndicatorLayoutId: string;
}
export {};
