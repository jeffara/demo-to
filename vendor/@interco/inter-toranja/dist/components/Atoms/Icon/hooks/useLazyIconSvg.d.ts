import { IconName } from '../types';
interface UseLazyIconSvgReturn {
    iconSvgSrc: string | null;
    isLoading: boolean;
}
export declare const useLazyIconSvg: ({ name }: {
    name: IconName;
}) => UseLazyIconSvgReturn;
export {};
