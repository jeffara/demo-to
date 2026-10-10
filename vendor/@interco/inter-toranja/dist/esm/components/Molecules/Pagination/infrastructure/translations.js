const i = {
  ptBR: {
    displaying: "Exibindo",
    display: "Exibir",
    page: "Página",
    of: "de",
    result: "Resultado",
    pagination: "Paginação"
  },
  enUS: {
    displaying: "Showing",
    display: "Show",
    page: "Page",
    of: "of",
    result: "Result",
    pagination: "Pagination"
  }
}, n = (a) => i[a];
export {
  n as getPaginationTranslations
};
