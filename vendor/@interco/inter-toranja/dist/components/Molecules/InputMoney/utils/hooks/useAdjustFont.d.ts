export declare const useAdjustFont: (showButtons: boolean) => {
    fontSize: number;
    setFontSize: React.Dispatch<React.SetStateAction<number>>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    containerRef: React.RefObject<HTMLInputElement | null>;
    adjustFont: (inputValue: string) => void;
    handleFocus: () => void;
};
