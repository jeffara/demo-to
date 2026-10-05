export type HomeIbClassification = 'EXISTS_IDENTICAL' | 'EXISTS_NEEDS_RESPONSIVE' | 'EXISTS_NEEDS_VARIANT' | 'NEW_DESKTOP_ONLY' | 'NEW_PARALLEL' | 'NEW';
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
