import { JSX } from 'react';
import { TextProps, TextColorScheme } from './types';
export declare const Text: <T extends TextColorScheme>({ state, children, textSize, textType, textWeight, as, id, colorScheme, colorVariant, colorStrong, ...rest }: TextProps<T>) => JSX.Element;
