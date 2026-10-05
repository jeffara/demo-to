import { BEMClassNames } from '../types/shared';
export declare enum SIZE {
    SMALL = "small",
    LARGE = "large",
    MEDIUM = "medium",
    EXTRA_LARGE = "extraLarge"
}
export declare enum STATE {
    ENABLED = "enabled",
    ERROR = "error",
    SUCCESS = "success",
    DISABLED = "disabled",
    READ_ONLY = "readonly",
    LOADING = "loading",
    SKELETON = "skeleton"
}
export declare enum VARIANT {
    DEFAULT = "default",
    DESTRUCTIVE = "destructive",
    INVERSE = "inverse",
    ICON = "icon",
    AVATAR = "avatar",
    CONTAINED = "contained",
    INDETERMINATE = "indeterminate"
}
export declare enum MODIFIERS {
    SMALL = "--small",
    LARGE = "--large",
    MEDIUM = "--medium",
    ENABLED = "--enabled",
    DISABLED = "--disabled",
    LOADING = "--loading",
    SKELETON = "--skeleton",
    FOCUSED = "--focused",
    HOVERED = "--hovered",
    PRESSED = "--pressed"
}
export declare enum MODIFIERS_STYLE_TYPE {
    DEFAULT = "--default",
    DESTRUCTIVE = "--destructive",
    INVERSE = "--inverse"
}
export declare enum HIERARCHY {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SECONDARY_OUTLINED = "secondaryOutlined",
    TERTIARY = "tertiary"
}
export type StyleType = 'default' | 'destructive' | 'inverse';
export declare enum FEEDBACK {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFORMATION = "information",
    PENDING = "pending",
    SCHEDULED = "scheduled"
}
export declare enum ColorType {
    Success = "success",
    Error = "error",
    Warning = "warning",
    Information = "information",
    Info = "info",
    Default = "default"
}
export declare enum COUNTRY {
    ARGENTINA = "argentina",
    BRAZIL = "brazil",
    GLOBE = "globe",
    SPAIN = "spain",
    UNITED_STATES = "unitedStates"
}
export declare enum TAGGING_EVENT {
    DISPLAY = "display",
    INTERACTION_CLICK = "interaction_click",
    ERROR_VIEW = "error_view",
    MODAL_VIEW = "modal_view"
}
export declare enum THEME {
    PF_LIGHT = "pf-light",
    PF_DARK = "pf-dark",
    PJ_LIGHT = "pj-light",
    PJ_DARK = "pj-dark"
}
export declare enum SURFACE {
    WEBVIEW = "webview",
    DESKTOP = "desktop"
}
export declare const createBEMClassNames: (baseClass: string, style?: StyleType) => BEMClassNames;
