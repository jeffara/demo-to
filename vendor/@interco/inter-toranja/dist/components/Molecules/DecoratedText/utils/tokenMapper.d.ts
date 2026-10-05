import { TextColorToken, TypographyToken } from '../types';
export declare const typographyTokenToClass: (token: TypographyToken) => string;
export declare const colorTokenToClass: (token: TextColorToken) => string;
export declare const isValidTextColorToken: (token: string) => token is TextColorToken;
export declare const tokenToTextCSSVar: (token: TextColorToken) => string;
