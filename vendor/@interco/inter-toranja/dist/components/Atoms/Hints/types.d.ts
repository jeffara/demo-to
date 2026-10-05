export declare enum EHintsType {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
export interface HintsProps {
    hints: string[];
    type: `${EHintsType.ERROR}` | `${EHintsType.INFO}` | `${EHintsType.SUCCESS}` | `${EHintsType.WARNING}`;
    className?: string;
    showIcon?: boolean;
}
