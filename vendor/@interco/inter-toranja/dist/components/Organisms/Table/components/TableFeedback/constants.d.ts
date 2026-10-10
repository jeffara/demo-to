import { TableFeedbackVariant } from '../../types';
export interface TableFeedbackTemplate {
    title: string;
    description: string;
}
export declare const TABLE_FEEDBACK_TEMPLATES: Record<TableFeedbackVariant, TableFeedbackTemplate>;
export declare const TABLE_ERROR_TITLE = "Indispon\u00EDvel";
export declare const TABLE_ERROR_DEFAULT_DESCRIPTION = "N\u00E3o \u00E9 poss\u00EDvel acessar as informa\u00E7\u00F5es nesse momento. Tente novamente mais tarde.";
export declare const TABLE_ERROR_RETRY_LABEL = "Tentar novamente";
export declare const getNoResultsTitle: (searchTerm?: string) => string;
