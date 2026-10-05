import { IconName } from '../../Atoms/Icon/types';
import { TextProps, TextSize, TextType } from '../../Atoms/Text/types';
import { AvatarColor, AvatarVariant, InitialCategory } from '../Avatar/types';
import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export declare enum CONTENT_VARIANT {
    SLOT = "slot",
    TEXT = "text"
}
/**
 * Leading element variants for Accordion component
 * Maps to standard VARIANT enum values
 */
export declare enum LeadingVariant {
    Icon = "icon",
    Avatar = "avatar"
}
/**
 * Props for Icon variant of Accordion Leading element
 */
export interface AccordionLeadingIconProps {
    variant: `${LeadingVariant.Icon}`;
    /** Icon element to display - can be any React node */
    icon: IconName;
}
/**
 * Props for Avatar variant of Accordion Leading element
 * Simplified Avatar props for Accordion context
 */
export interface AccordionLeadingAvatarProps {
    variant: `${LeadingVariant.Avatar}`;
    /** Avatar configuration object */
    avatar: {
        /** Avatar variant type */
        variant: `${AvatarVariant.Icon}` | `${AvatarVariant.Initial}` | `${AvatarVariant.Picture}`;
        /** Avatar color scheme */
        color: `${AvatarColor}`;
    } & ({
        variant: `${AvatarVariant.Icon}`;
        /** Icon component to display */
        icon: IconName;
    } | {
        variant: `${AvatarVariant.Initial}`;
        /** Category for initial generation */
        category: `${InitialCategory}`;
        /** Label text for generating initials */
        label: string;
    } | {
        variant: `${AvatarVariant.Picture}`;
        /** Image source URL */
        src: string;
        /** Alternative text for accessibility */
        alt: string;
        /** Error handler for image loading failures */
        onError?: () => void;
    });
}
/**
 * Discriminated union for Accordion Leading element
 * Supports both Icon and Avatar variants with type safety
 */
export type AccordionLeadingProps = AccordionLeadingIconProps | AccordionLeadingAvatarProps;
/**
 * Props interface for AccordionSlot component
 */
export interface AccordionSlotProps {
    /** Content to be rendered inside the slot */
    children: React.ReactNode;
}
export interface AccordionTextProps extends Omit<TextProps, 'textSize' | 'textType' | 'as'> {
    /** Text size - opcional, padrão Medium definido internamente */
    textSize?: TextSize.Medium;
    /** Text type - opcional, padrão Body definido internamente */
    textType?: TextType.Body;
    /** Text as - opcional, padrão 'p' definido internamente */
    as?: 'p';
}
/**
 * Props interface for Accordion component
 */
export interface AccordionProps {
    /** Accordion title (required) */
    title: string;
    /** Optional description displayed below the title */
    description?: string;
    /** Controls whether the Accordion is expanded */
    expand?: boolean;
    /** Shows the leading element to the left of the heading */
    showLeading?: boolean;
    /** Leading element configuration - supports Icon and Avatar variants */
    leading?: AccordionLeadingProps;
    /** Title size: 'medium' | 'large' */
    sizeTitle?: TextSize.Medium | TextSize.Large;
    /** Shows the divider between items */
    showDivider?: boolean;
    /** State of the Accordion */
    state?: STATE.ENABLED | STATE.DISABLED | STATE.SKELETON;
    /** Panel content - accepts both function (new) and ReactNode (backwards compatibility) */
    children: ((component: React.ComponentType<AccordionSlotProps> | React.ComponentType<AccordionTextProps>) => React.ReactNode) | React.ReactNode;
    /** Callback for tracking events */
    onTag?: (data: TagProps) => void;
    /** Content variant */
    contentVariant?: CONTENT_VARIANT.SLOT | CONTENT_VARIANT.TEXT;
}
/**
 * Compound component interface for Accordion
 * Extends React.FC with static properties for compound component pattern
 */
export interface AccordionComponent extends React.FC<AccordionProps> {
    /** Slot component for custom content */
    Slot: React.FC<AccordionSlotProps>;
    /** Text component for simple text content */
    Text: React.ComponentType<AccordionTextProps>;
}
