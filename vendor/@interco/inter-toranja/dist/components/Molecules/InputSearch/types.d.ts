import { InputProps } from '../InputBase/types';
export type InputSearchProps = Omit<InputProps<undefined>, 'phoneType' | 'type' | 'counter' | 'showCounter'>;
