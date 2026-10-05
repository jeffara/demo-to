import { ReactElement } from 'react';
import { IconSizeMapKey } from '../Icon/utils/sizeUtils';
import { COUNTRY, STATE } from '../../../utils/pattern';
declare const IconFlag: (leadingFlag: `${COUNTRY}`, state: `${STATE}`, size?: IconSizeMapKey) => ReactElement;
export default IconFlag;
