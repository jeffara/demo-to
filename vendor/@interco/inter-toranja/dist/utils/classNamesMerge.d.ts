type ClassNameValue = string | number | bigint | boolean | undefined | null;
type ClassNameMapping = Record<string, boolean | undefined | null>;
type ClassNameArgument = ClassNameValue | ClassNameMapping;
export declare function classNamesMerge(...args: ClassNameArgument[]): string;
export {};
