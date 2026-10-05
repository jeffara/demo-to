import { ForceBarProps } from '../../InputBase/types';
import { InputPasswordProps } from '../InputPassword';
interface UseInputPasswordReturn {
    inputProps: Omit<InputPasswordProps, 'showForceBar'>;
    forceBar: ForceBarProps & {
        shouldRender: boolean;
        className: string;
    };
}
export declare const useInputPassword: (props: InputPasswordProps) => UseInputPasswordReturn;
export {};
