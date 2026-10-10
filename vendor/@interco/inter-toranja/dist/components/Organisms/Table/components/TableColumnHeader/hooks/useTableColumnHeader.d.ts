import { TableColumnHeaderAriaSort } from '../utils/tableColumnHeaderState';
import { TableColumnHeaderProps } from '../types';
import { IconColors } from '../../../../../Atoms/Icon/constants/iconColors';
import { IconName } from '../../../../../Atoms/Icon/types';
import { STATE, VARIANT } from '../../../../../../utils/pattern';
interface UseTableColumnHeaderReturn {
    rootClasses: string;
    controlState: `${STATE.ENABLED}` | `${STATE.SKELETON}`;
    labelColorVariant: 'primary' | 'secondary';
    isSkeleton: boolean;
    sortable: boolean;
    sortIconAsset: IconName | null;
    sortIconColor: typeof IconColors.Neutral.Secondary | typeof IconColors.Neutral.Primary | typeof IconColors.Brand.Default;
    showCheckbox: boolean;
    checkboxVariant: `${VARIANT.DEFAULT}` | `${VARIANT.INDETERMINATE}`;
    checkboxChecked: boolean;
    checkboxOnChange?: (checked: boolean) => void;
    ariaSort?: TableColumnHeaderAriaSort;
    isSortInteractive: boolean;
}
export declare const useTableColumnHeader: (props: TableColumnHeaderProps) => UseTableColumnHeaderReturn;
export {};
