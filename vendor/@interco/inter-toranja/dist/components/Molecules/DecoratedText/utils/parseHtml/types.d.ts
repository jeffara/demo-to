export interface ParsedElement {
    type: 'text' | 'element';
    content: string;
    tagName?: string;
    attributes?: Record<string, string>;
    children?: ParsedElement[];
}
export interface ParserState {
    elements: ParsedElement[];
    stack: ParsedElement[];
    currentParent: ParsedElement | null;
    lastIndex: number;
}
