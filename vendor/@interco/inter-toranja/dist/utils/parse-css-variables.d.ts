export interface CssVariableToken {
    varName: string;
    value: string;
}
export interface ParseCssVariableLinesOptions {
    prefix: string;
    nameFilter?: (namePart: string) => boolean;
}
export declare function parseCssVariableLines(css: string, options: ParseCssVariableLinesOptions): CssVariableToken[];
