import { ButtonTypeName } from '../../../Molecules/Button/types';
import { SIZE } from '../../../../utils/pattern';
/**
 * Valid size keys for Icon components
 */
export type IconSizeMapKey = `${SIZE.SMALL}` | `${SIZE.MEDIUM}` | `${SIZE.LARGE}`;
/**
 * Maps button size to Icon size
 * LARGE button should use MEDIUM icon size (24px instead of 40px)
 * Small/Medium buttons should use SMALL icon size (16px)
 */
export declare const resolveButtonIconSize: (buttonSize: IconSizeMapKey) => IconSizeMapKey;
/**
 * Maps NeutralIconButton size to Icon size
 * medium/large → 24px (MEDIUM); small → 16px (SMALL)
 * large covers Button default size when used with typeButton="btn-neutral"
 */
export declare const resolveNeutralIconButtonIconSize: (buttonSize: IconSizeMapKey) => IconSizeMapKey;
/**
 * Maps button size to Spinner size, including NeutralIconButton sizing
 */
export declare const resolveButtonSpinnerSize: (buttonSize: IconSizeMapKey, typeButton?: ButtonTypeName) => IconSizeMapKey;
/**
 * Converts size token to pixel value
 * @param size - Size token ('small' | 'medium' | 'large')
 * @param isFlag - Whether this is a flag icon (uses different size mapping)
 */
export declare const getIconSize: (size: IconSizeMapKey, isFlag?: boolean) => number;
