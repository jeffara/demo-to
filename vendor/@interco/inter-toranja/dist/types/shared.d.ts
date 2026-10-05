import { HIERARCHY, SIZE } from '../utils/pattern';
export type Size = SIZE.LARGE | SIZE.SMALL;
export type Hierarchy = HIERARCHY.PRIMARY | HIERARCHY.SECONDARY | HIERARCHY.TERTIARY;
export interface Modifiers {
    small: string;
    large: string;
    medium: string;
    enabled: string;
    disabled: string;
    loading: string;
}
export interface ElementClassNames {
    base: string;
    modifier: Modifiers;
}
export interface BEMClassNames {
    block: string;
    skeleton: string;
    element: {
        primary: ElementClassNames;
        secondary: ElementClassNames;
        secondaryOutlined: ElementClassNames;
        tertiary: ElementClassNames;
    };
}
export interface ComponentPropertiesTag {
    component_name?: string;
    style?: string;
    size?: string;
    hierarchy?: string;
    state?: string;
    label?: string;
    hint?: string;
    value?: string;
    [key: string]: string | undefined | boolean | number;
}
export type TagProps = (data?: Record<string, unknown>) => {
    ComponentProperties: ComponentPropertiesTag;
    CustomParameters?: {
        nested_in?: string;
        nested_label?: string;
        nested_variant?: string;
        nested_type?: string;
        nested_size?: string;
        nested_title?: string;
    };
};
export type MoleculesTagProps = {
    data?: Record<string, unknown>;
    customProperties?: ComponentPropertiesTag;
};
