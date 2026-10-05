export type Color = 'blue' | 'brand' | 'brown' | 'cyan' | 'gold' | 'green' | 'mint' | 'neutral' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';
export type SegmentColor = 'pf-prime' | 'pf-digital' | 'pf-one' | 'pf-win' | 'pj-corporate' | 'pj-digital' | 'pj-enterprise' | 'pj-middle' | 'pj-pro' | 'pj-win';
type State = 'enabled' | 'disabled' | 'skeleton';
export type Hierarchy<T extends Color | SegmentColor> = T extends SegmentColor ? 'strong' : 'strong' | 'soft';
export type TagProps = {
    color: Color | SegmentColor;
    hierarchy: Hierarchy<Color | SegmentColor>;
    label: string;
    size: 'small' | 'large' | 'extraLarge';
    state?: State;
    icon?: React.ReactNode;
};
export {};
