import { FeedbackScreenVariant as e } from "./types.js";
import { FEEDBACK as i } from "../../../utils/pattern.js";
const r = {
  [e.GENERIC_ERROR]: {
    title: "Ocorreu um erro",
    description: "Não foi possível concluir a ação. Tente mais tarde.",
    signalVariant: i.ERROR,
    primaryButtonLabel: "Entendi"
  },
  [e.SERVICE_UNAVAILABLE]: {
    title: "Serviço indisponível",
    description: "No momento não é possível acessar esse serviço. Tente mais tarde.",
    signalVariant: i.WARNING,
    primaryButtonLabel: "Entendi"
  },
  [e.NO_INTERNET_CONNECTION]: {
    title: "Sem conexão à internet",
    description: "Verifique se há uma rede disponível para continuar.",
    signalVariant: i.WARNING,
    primaryButtonLabel: "Entendi"
  }
}, a = {
  SHOW_HEADER: !0,
  SHOW_ALERT: !1,
  SHOW_SECONDARY_BUTTON: !1,
  SHOW_TERTIARY_BUTTON: !1
};
export {
  a as DEFAULT_CONFIG,
  r as PREDEFINED_CONTENT
};
