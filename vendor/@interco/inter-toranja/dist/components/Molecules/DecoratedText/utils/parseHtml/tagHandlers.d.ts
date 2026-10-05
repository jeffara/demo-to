import { ParserState } from './types';
export declare const addTextNode: (state: ParserState, content: string) => void;
export declare const handleOpeningTag: (state: ParserState, tagName: string, attributesStr: string) => void;
export declare const handleClosingTag: (state: ParserState, tagName: string) => void;
export declare const closeRemainingTags: (state: ParserState) => void;
