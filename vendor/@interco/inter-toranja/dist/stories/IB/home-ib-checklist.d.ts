import { HomeIbChecklistGroup, HomeIbChecklistItem, HomeIbClassification } from './types';
export declare const createChecklistItem: (name: string, path: string, status: HomeIbClassification, issueHint?: string) => HomeIbChecklistItem;
export declare const HOME_IB_CHECKLIST: HomeIbChecklistGroup[];
