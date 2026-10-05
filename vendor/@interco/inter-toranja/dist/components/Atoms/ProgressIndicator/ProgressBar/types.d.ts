import { STATE } from '../../../../utils/pattern';
export declare enum ProgressBarVariant {
    Default = "default",
    Stepped = "stepped",
    FullWidth = "fullWidth"
}
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
type ProgressBarBaseProps = {
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
};
export type ProgressBarSteppedProps = ProgressBarBaseProps & {
    variant: `${ProgressBarVariant.Stepped}`;
    steps: IntRange<3, 7> | 0;
    active: IntRange<0, 7>;
};
export type ProgressBarDefaultProps = ProgressBarBaseProps & {
    variant: `${ProgressBarVariant.Default}` | `${ProgressBarVariant.FullWidth}`;
    progress: IntRange<0, 101>;
};
export type ProgressBarProps = ProgressBarSteppedProps | ProgressBarDefaultProps;
export {};
