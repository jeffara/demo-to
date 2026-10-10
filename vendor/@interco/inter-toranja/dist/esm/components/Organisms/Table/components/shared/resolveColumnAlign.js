const n = (e, r) => e.align ? e.align : e.cellType === "checkbox" ? "center" : r;
export {
  n as resolveColumnAlign
};
