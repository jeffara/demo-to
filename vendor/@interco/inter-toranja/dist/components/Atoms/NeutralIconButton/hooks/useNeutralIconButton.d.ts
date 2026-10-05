import { MouseEvent } from 'react';
import { ButtonState, NeutralIconButtonProps } from '../../../Molecules/Button';
interface UseNeutralIconButtonReturn {
    icon: NeutralIconButtonProps['icon'];
    state: ButtonState;
    size: NonNullable<NeutralIconButtonProps['size']>;
    variant: NonNullable<NeutralIconButtonProps['variant']>;
    count: number;
    rest: Omit<NeutralIconButtonProps, 'icon' | 'state' | 'size' | 'showBadge' | 'variant' | 'count' | 'onTag' | 'onClick'>;
    shouldShowBadge: boolean;
    isLargeBadge: boolean;
    containerClasses: string;
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const useNeutralIconButton: (props: NeutralIconButtonProps) => UseNeutralIconButtonReturn;
export {};
