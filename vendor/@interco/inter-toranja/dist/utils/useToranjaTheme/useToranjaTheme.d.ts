import { THEME } from '../pattern';
export type ToranjaTheme = `${THEME.PF_LIGHT}` | `${THEME.PF_DARK}` | `${THEME.PJ_LIGHT}` | `${THEME.PJ_DARK}`;
interface UseToranjaThemeOptions {
    defaultTheme?: ToranjaTheme;
    storage?: 'localStorage' | false;
    storageKey?: string;
}
export declare function getToranjaTheme(): ToranjaTheme | undefined;
export declare function setToranjaTheme(theme: ToranjaTheme, options?: Pick<UseToranjaThemeOptions, 'storage' | 'storageKey'>): void;
export declare function useToranjaTheme(options?: UseToranjaThemeOptions): {
    theme: ToranjaTheme;
    setTheme: (theme: ToranjaTheme) => void;
    themes: ReadonlyArray<ToranjaTheme>;
};
export {};
