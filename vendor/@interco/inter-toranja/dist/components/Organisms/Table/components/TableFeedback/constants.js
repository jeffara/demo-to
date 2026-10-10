const t = {
  empty: {
    title: "Nenhuma informação disponível",
    description: "No momento não existem informações disponíveis por aqui."
  },
  noResults: {
    title: "Sem resultado para a busca",
    description: "Tente pesquisar utilizando outro termo."
  },
  noFilters: {
    title: "Sem resultado para o filtro",
    description: "Tente filtrar utilizando outras categorias."
  }
}, o = "Indisponível", s = "Não é possível acessar as informações nesse momento. Tente novamente mais tarde.", n = "Tentar novamente", a = (e) => e ? `Sem resultado para "${e}"` : t.noResults.title;
export {
  s as TABLE_ERROR_DEFAULT_DESCRIPTION,
  n as TABLE_ERROR_RETRY_LABEL,
  o as TABLE_ERROR_TITLE,
  t as TABLE_FEEDBACK_TEMPLATES,
  a as getNoResultsTitle
};
