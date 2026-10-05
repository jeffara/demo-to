export declare const LEADING_TAG_KEYS: readonly ["leading_variant", "leading_avatar_variant", "leading_avatar_icon", "leading_flag", "leading_icon", "leading_paymentMethod"];
export declare const CONTENT_TAG_KEYS: readonly ["label", "label_icon", "paragraph", "paragraph_support", "tag_label"];
export declare const removeTagKeys: (data: Record<string, unknown>, keys: readonly string[]) => Record<string, unknown>;
export declare const omitUndefinedValues: (data: Record<string, unknown>) => Record<string, unknown>;
export declare const mergeTagSlice: (prev: Record<string, unknown>, keys: readonly string[], slice: Record<string, unknown>) => Record<string, unknown>;
