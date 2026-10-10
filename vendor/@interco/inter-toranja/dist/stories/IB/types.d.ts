/**
 * Tamarindo IB homologation status. `NEW_DESKTOP_ONLY` marks a desktop-specific
 * surface (not mobile webview homologation), not “absent from Toranja”.
 */
export type HomeIbClassification = 'EXISTS_IDENTICAL' | 'EXISTS_NEEDS_RESPONSIVE' | 'EXISTS_NEEDS_VARIANT' | 'NEW_DESKTOP_ONLY' | 'NEW_PARALLEL' | 'NEW';
export type HomeIbChecklistCatalogEntry = readonly [string, string, HomeIbClassification] | readonly [string, string, HomeIbClassification, string];
export interface HomeIbChecklistItem {
    name: string;
    path: string;
    status: HomeIbClassification;
    issueHint?: string;
}
export interface HomeIbChecklistGroup {
    title: string;
    items: HomeIbChecklistItem[];
}
