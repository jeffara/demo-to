import { CssVariableToken } from '../parse-css-variables';
export type LightDarkMode = 'light' | 'dark';
export interface BasePaletteToken {
    mode: LightDarkMode;
    family: string;
    tone: number;
    hex: string;
    varName: string;
}
export interface DeprecatedToken {
    varName: string;
    hex: string | null;
    filePath?: string;
    note?: string;
    replacement?: string;
}
export interface RoleToken {
    category: string;
    role: string;
    rest: string;
    hex: string;
    varName: string;
}
export declare function parseBasePalette(css: string): BasePaletteToken[];
export declare function mapFamilyDisplayName(family: string): string;
export declare function parseDeprecated(css: string, filePath?: string): DeprecatedToken[];
export declare function parseRoles(css: string): RoleToken[];
export declare function parseGradients(css: string): CssVariableToken[];
export declare function groupFamilies(tokens: BasePaletteToken[]): Record<string, BasePaletteToken[]>;
