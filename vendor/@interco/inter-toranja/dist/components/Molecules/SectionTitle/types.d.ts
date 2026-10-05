import { IconName } from '../../Atoms/Icon/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export type SectionTitleVariant = 'default' | 'navigation';
type SectionTitleBaseProps = {
    title: string;
    showDescription?: boolean;
    description?: string;
    maxLines?: number;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}` | `${STATE.DISABLED}`;
    iconState?: `${STATE.ENABLED}` | `${STATE.DISABLED}`;
    /**
     * Custom Icon for default variant.
     * When variant is 'navigation', this property is ignored and always uses IcChevronRight.
     */
    icon?: IconName;
    onTag?: (data: TagProps) => void;
};
type SectionTitleNavigationProps = SectionTitleBaseProps & {
    variant: 'navigation';
    showIcon?: true;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};
type SectionTitleDefaultWithIconProps = SectionTitleBaseProps & {
    variant?: 'default';
    showIcon: true;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};
type SectionTitleDefaultWithoutIconProps = SectionTitleBaseProps & {
    variant?: 'default';
    showIcon?: false;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export type SectionTitleProps = SectionTitleNavigationProps | SectionTitleDefaultWithIconProps | SectionTitleDefaultWithoutIconProps;
export {};
