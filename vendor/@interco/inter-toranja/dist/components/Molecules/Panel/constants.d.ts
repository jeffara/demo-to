import { PanelFeedbackCopy, PanelFeedbackType } from './types';
export declare const DEFAULT_SEARCH_TERM = "termo buscado";
export declare const SERVICE_UNAVAILABLE_RETRY_LABEL = "Tentar novamente";
export declare const getPanelFeedbackCopy: (feedbackType: PanelFeedbackType, searchTerm?: string) => PanelFeedbackCopy;
