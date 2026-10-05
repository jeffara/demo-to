import { FEEDBACK } from '../../../utils/pattern';
export declare const PREDEFINED_CONTENT: {
    readonly genericError: {
        readonly title: "Ocorreu um erro";
        readonly description: "Não foi possível concluir a ação. Tente mais tarde.";
        readonly signalVariant: FEEDBACK.ERROR;
        readonly primaryButtonLabel: "Entendi";
    };
    readonly serviceUnavailable: {
        readonly title: "Serviço indisponível";
        readonly description: "No momento não é possível acessar esse serviço. Tente mais tarde.";
        readonly signalVariant: FEEDBACK.WARNING;
        readonly primaryButtonLabel: "Entendi";
    };
    readonly noInternetConnection: {
        readonly title: "Sem conexão à internet";
        readonly description: "Verifique se há uma rede disponível para continuar.";
        readonly signalVariant: FEEDBACK.WARNING;
        readonly primaryButtonLabel: "Entendi";
    };
};
export declare const DEFAULT_CONFIG: {
    readonly SHOW_HEADER: true;
    readonly SHOW_ALERT: false;
    readonly SHOW_SECONDARY_BUTTON: false;
    readonly SHOW_TERTIARY_BUTTON: false;
};
