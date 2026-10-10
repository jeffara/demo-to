const i = "termo buscado", u = "Tentar novamente", o = {
  signalVariant: "information",
  title: "Sem resultado para o filtro",
  description: "Tente filtrar utilizando outras categorias."
}, r = {
  signalVariant: "information",
  title: "Nenhuma informação disponível",
  description: "No momento não existem informações disponíveis por aqui."
}, e = {
  signalVariant: "error",
  title: "Ocorreu um erro",
  description: "Não foi possível concluir a ação. Tente mais tarde."
}, a = {
  signalVariant: "warning",
  title: "Sem conexão à internet",
  description: "Verifique se há uma rede disponível para continuar."
}, s = {
  signalVariant: "warning",
  title: "Serviço indisponível",
  description: "No momento não é possível acessar esse serviço. Tente mais tarde."
}, l = (n) => ({
  signalVariant: "information",
  title: `Sem resultado para “${n}”`,
  description: "Tente pesquisar utilizando outro termo."
}), m = (n, t = i) => n === "noResults" ? l(t) : n === "noFilter" ? o : n === "empty" ? r : n === "genericError" ? e : n === "noInternet" ? a : s;
export {
  i as DEFAULT_SEARCH_TERM,
  u as SERVICE_UNAVAILABLE_RETRY_LABEL,
  m as getPanelFeedbackCopy
};
