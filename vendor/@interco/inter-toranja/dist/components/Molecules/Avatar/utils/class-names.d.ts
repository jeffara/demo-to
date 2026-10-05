import { AvatarProps } from '../types';
export declare const getContainerClassName: () => string;
export declare const getAvatarClassName: ({ variant, size, state, color, }: Pick<AvatarProps, "variant" | "size" | "state" | "color">) => string;
export declare const getFlagClassName: (size: AvatarProps["size"]) => string;
