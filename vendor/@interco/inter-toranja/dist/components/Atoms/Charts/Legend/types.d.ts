export interface LegendItem {
    label: string;
    value?: string;
    color: string;
}
export type LegendOrientation = 'horizontal' | 'vertical';
export interface LegendProps {
    items: LegendItem[];
    orientation: LegendOrientation;
}
