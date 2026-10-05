import { ReactNode } from 'react';
import { STATE } from '../../../utils/pattern';
export declare enum TextWeight {
    Regular = "regular",
    Bold = "bold",
    Medium = "medium"
}
export declare enum TextType {
    Display = "display",
    Title = "title",
    Body = "body",
    Label = "label",
    Link = "link",
    Caption = "caption",
    Code = "code"
}
export declare enum TextSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum TextVariant {
    Primary = "primary",
    Secondary = "secondary",
    Brand = "brand"
}
export declare enum TextColorScheme {
    Disabled = "disabled",
    Neutral = "neutral",
    Brand = "brand",
    Static = "static",
    StaticWhite = "static-white",
    Feedback = "feedback",
    Accent = "accent"
}
type TextNeutralColorVariants = 'primary' | 'secondary' | 'inverse';
type TextBrandColorVariants = 'primary' | 'secondary' | 'tertiary' | 'inverse';
type TextStaticColorVariants = 'black' | 'orange';
type TextStaticWhiteColorVariants = 'default' | 'soft';
type TextFeedbackColorVariants = 'success' | 'warning' | 'error' | 'information';
type TextAccentColorVariants = 'red' | 'brown' | 'orange' | 'gold' | 'yellow' | 'green' | 'mint' | 'cyan' | 'blue' | 'purple' | 'pink';
export type TextColorSchemeVariants = {
    [TextColorScheme.Disabled]: never;
    [TextColorScheme.Neutral]: TextNeutralColorVariants;
    [TextColorScheme.Brand]: TextBrandColorVariants;
    [TextColorScheme.Static]: TextStaticColorVariants;
    [TextColorScheme.StaticWhite]: TextStaticWhiteColorVariants;
    [TextColorScheme.Feedback]: TextFeedbackColorVariants;
    [TextColorScheme.Accent]: TextAccentColorVariants;
};
export type TextProps<Scheme extends TextColorScheme = TextColorScheme.Neutral> = {
    id?: string;
    state?: `${STATE.ENABLED}` | `${STATE.DISABLED}` | `${STATE.SKELETON}`;
    children: ReactNode;
    textSize: `${TextSize}`;
    textWeight?: `${TextWeight}`;
    colorScheme?: `${Scheme}`;
    colorVariant?: `${TextColorSchemeVariants[Scheme]}`;
    colorStrong?: boolean;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong' | 'p';
} & ({
    textType: `${TextType.Title}`;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} | {
    textType: `${TextType.Body}`;
    as?: 'span' | 'strong' | 'p';
    textWeight?: Omit<TextWeight, TextWeight.Medium>;
} | {
    textType: `${TextType.Caption}`;
    as?: 'span' | 'strong' | 'p';
    textSize: `${TextSize.Medium}` | `${TextSize.Small}`;
} | {
    textType: `${TextType.Label}` | `${TextType.Link}` | `${TextType.Code}` | `${TextType.Display}`;
    as?: 'span' | 'strong' | 'p';
});
export {};
