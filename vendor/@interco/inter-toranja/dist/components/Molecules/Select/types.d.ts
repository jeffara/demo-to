import { MouseEvent } from 'react';
import { InputProps } from '../InputBase/types';
import { ListItemLeadingProps } from '../ListItemBase/components/ListItemLeading/types';
import { ListItemGeneralTrailingProps } from '../ListItemGeneral/types';
import { TagProps } from '../../../types/shared';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    leadingProps?: ListItemLeadingProps;
    trailingProps?: ListItemGeneralTrailingProps;
}
export type SelectProps = Omit<InputProps<undefined>, 'phoneType' | 'type' | 'counter' | 'showCounter'> & {
    options?: SelectOption[];
    onOptionSelect?: (option: SelectOption) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onClickHelper?: () => void;
    /**
     * **Somente Select desktop** (`toranja-surface="desktop"` + `options`).
     * Com valor selecionado, oculta o label visual e reduz a altura do campo; o nome permanece em `aria-label`.
     * Default `false`. Ignorado em webview.
     */
    hideLabelWhenFilled?: boolean;
};
export interface SelectOptionsPanelProps {
    id: string;
    options: SelectOption[];
    selectedValue?: string;
    onSelect: (option: SelectOption) => void;
    onTag?: (data: TagProps) => void;
    testId?: string;
}
