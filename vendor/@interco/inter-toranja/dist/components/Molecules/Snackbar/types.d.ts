import { SVGProps } from 'react';
import { TagProps } from '../../../types/shared';
import { FEEDBACK, VARIANT } from '../../../utils/pattern';
export type SnackbarProps = {
    variant: `${FEEDBACK.SUCCESS}` | `${FEEDBACK.WARNING}` | `${FEEDBACK.ERROR}` | `${VARIANT.DEFAULT}`;
    IconSvg?: React.ComponentType<SVGProps<SVGSVGElement>>;
    title?: string;
    description: string;
    onTag?: (data: TagProps) => void;
    showButtonSnackbar?: boolean;
    onClickButtonSnackbar?: () => void;
    labelButton?: string;
    show: boolean;
    onClose: () => void;
};
export declare enum TAG_TYPE {
    DISPLAY = "display",
    BUTTON = "button",
    DISMISS = "dismiss"
}
export type TagType = `${TAG_TYPE}`;
