import { HTMLAttributes } from 'react';
import { STATE } from '../../../utils/pattern';
export type TypographyToken = 'Type.Display.Large' | 'Type.Display.Medium' | 'Type.Display.Small' | 'Type.Title.Large' | 'Type.Title.Medium' | 'Type.Title.Small' | 'Type.Body.Large.Regular' | 'Type.Body.Large.Bold' | 'Type.Body.Medium.Regular' | 'Type.Body.Medium.Bold' | 'Type.Body.Small.Regular' | 'Type.Body.Small.Bold' | 'Type.Label.Large.Regular' | 'Type.Label.Large.Medium' | 'Type.Label.Large.Bold' | 'Type.Label.Medium.Regular' | 'Type.Label.Medium.Medium' | 'Type.Label.Medium.Bold' | 'Type.Label.Small.Regular' | 'Type.Label.Small.Medium' | 'Type.Label.Small.Bold' | 'Type.Caption.Regular' | 'Type.Caption.Medium' | 'Type.Caption.Bold' | 'Type.Code.Extra.Large' | 'Type.Code.Large' | 'Type.Code.Medium' | 'Type.Code.Small';
export type TextColorToken = 'Color.Text.Disabled' | 'Color.Text.Neutral.Primary' | 'Color.Text.Neutral.Secondary' | 'Color.Text.Neutral.Tertiary' | 'Color.Text.Neutral.Inverse' | 'Color.Text.Static.Black' | 'Color.Text.Static.White.Default' | 'Color.Text.Static.White.Soft' | 'Color.Text.Static.Orange' | 'Color.Text.Brand.Primary' | 'Color.Text.Brand.Secondary' | 'Color.Text.Brand.Tertiary' | 'Color.Text.Brand.Inverse' | 'Color.Text.Feedback.Success.Default' | 'Color.Text.Feedback.Success.Strong' | 'Color.Text.Feedback.Error.Default' | 'Color.Text.Feedback.Error.Strong' | 'Color.Text.Feedback.Warning.Default' | 'Color.Text.Feedback.Warning.Strong' | 'Color.Text.Feedback.Information.Default' | 'Color.Text.Feedback.Information.Strong' | 'Color.Text.Accent.Red.Default' | 'Color.Text.Accent.Red.Strong' | 'Color.Text.Accent.Brown.Default' | 'Color.Text.Accent.Brown.Strong' | 'Color.Text.Accent.Orange.Default' | 'Color.Text.Accent.Orange.Strong' | 'Color.Text.Accent.Gold.Default' | 'Color.Text.Accent.Gold.Strong' | 'Color.Text.Accent.Yellow.Default' | 'Color.Text.Accent.Yellow.Strong' | 'Color.Text.Accent.Green.Default' | 'Color.Text.Accent.Green.Strong' | 'Color.Text.Accent.Mint.Default' | 'Color.Text.Accent.Mint.Strong' | 'Color.Text.Accent.Cyan.Default' | 'Color.Text.Accent.Cyan.Strong' | 'Color.Text.Accent.Blue.Default' | 'Color.Text.Accent.Blue.Strong' | 'Color.Text.Accent.Purple.Default' | 'Color.Text.Accent.Purple.Strong' | 'Color.Text.Accent.Pink.Default' | 'Color.Text.Accent.Pink.Strong';
export type LinkSize = 'small' | 'medium' | 'large';
export type LinkColor = 'neutral' | 'staticBlack' | 'staticWhite' | 'brand';
export interface LinkTriggers {
    [key: string]: () => void;
}
export interface DecoratedTextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
    children: string;
    classStyle?: TypographyToken;
    classColor?: TextColorToken;
    maxLines?: number;
    fullWidth?: boolean;
    linkTriggers?: LinkTriggers;
    testId?: string;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}` | `${STATE.DISABLED}`;
}
