import { ListItemContentProps } from '../ListItemBase/components/ListItemContent/types';
import { ListItemLeadingProps } from '../ListItemBase/components/ListItemLeading/types';
import { ListItemSharedProps } from '../ListItemBase/types/shared';
import { Color } from '../../Atoms/Tag/types';
/**
 * General Trailing variants
 */
export type GeneralTrailingType = 'tagChevron' | 'badge' | 'text';
/**
 * TagChevron specific props
 */
export interface TagChevronProps {
    /**
     * Whether to show the Tag
     * @default false
     */
    showTag?: boolean;
    /**
     * Tag label
     */
    tagLabel?: string;
    /**
     * Tag color
     */
    tagColor?: Color;
}
/**
 * Badge specific props
 */
export interface BadgeProps {
    /**
     * Whether to show the Badge
     * @default false
     */
    showBadge?: boolean;
    /**
     * Badge value (number or string)
     */
    badgeValue?: string | number;
    /**
     * Whether to show the date
     * @default false
     */
    showDate?: boolean;
    /**
     * Formatted date (HH:MM, "Yesterday", DD/MM/YYYY)
     */
    date?: string;
}
/**
 * Text specific props
 */
export interface TextProps {
    /**
     * Trailing label (required for text variant)
     */
    labelTrailing: string;
    /**
     * Trailing label color
     * @default 'neutral'
     */
    labelTrailingColor?: 'neutral' | 'success';
    /**
     * Trailing paragraph (optional)
     */
    paragraphTrailing?: string;
}
/**
 * TagChevron trailing props
 */
export interface TagChevronTrailingProps {
    /**
     * Trailing type
     */
    type: 'tagChevron';
    /**
     * TagChevron specific configuration
     */
    tagChevronProps?: TagChevronProps;
}
/**
 * Badge trailing props
 */
export interface BadgeTrailingProps {
    /**
     * Trailing type
     */
    type: 'badge';
    /**
     * Badge specific configuration
     */
    badgeProps?: BadgeProps;
}
/**
 * Text trailing props
 */
export interface TextTrailingProps {
    /**
     * Trailing type
     */
    type: 'text';
    /**
     * Text specific configuration
     */
    textProps: TextProps;
}
/**
 * Union type for all trailing variants
 */
export type ListItemGeneralTrailingProps = TagChevronTrailingProps | BadgeTrailingProps | TextTrailingProps;
/**
 * Props for ListItemGeneral
 */
export interface ListItemGeneralProps extends Omit<ListItemSharedProps, 'leading' | 'content' | 'trailing' | 'gridModifier'> {
    /**
     * Leading props
     */
    leadingProps?: ListItemLeadingProps;
    /**
     * Content label (required)
     */
    label: string;
    /**
     * Content label icon (optional)
     */
    labelIcon?: ListItemContentProps['labelIcon'];
    /**
     * Content paragraph (optional)
     */
    paragraph?: string;
    /**
     * Content support paragraph (optional)
     */
    paragraphSupport?: string;
    /**
     * Content tags (optional)
     */
    tags?: ListItemContentProps['tags'];
    /**
     * Trailing variant (Figma: variant)
     */
    trailingVariant?: GeneralTrailingType;
    /**
     * Trailing props (optional)
     */
    trailingProps?: ListItemGeneralTrailingProps;
    /**
     * Whether to show the Leading area
     * @default true
     */
    showLeading?: boolean;
}
