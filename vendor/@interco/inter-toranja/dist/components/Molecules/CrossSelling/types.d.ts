import { TagProps } from '../../../types/shared';
import { STATE } from '../../../utils/pattern';
export declare enum CrossSellingVariant {
    Checkbox = "checkbox",
    Chevron = "chevron"
}
export interface BaseCrossSellingProps {
    description?: string;
    state?: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    subtitle: string;
    tag?: string;
    title: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onTag?: (data: TagProps) => void;
    link?: {
        label: string;
        href: string;
        onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    };
}
type CheckboxVariant = {
    variant: CrossSellingVariant.Checkbox | `${CrossSellingVariant.Checkbox}`;
    onCheckboxChange: (isChecked: boolean) => void;
    isChecked?: boolean;
};
type ChevronVariant = {
    variant?: CrossSellingVariant.Chevron | `${CrossSellingVariant.Chevron}`;
    onCheckboxChange?: never;
    isChecked?: never;
};
export type CrossSellingProps = BaseCrossSellingProps & (CheckboxVariant | ChevronVariant);
export {};
