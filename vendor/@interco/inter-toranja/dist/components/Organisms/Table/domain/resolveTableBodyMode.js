const o = ({
  isLoading: r,
  skeleton: e,
  error: t,
  totalItemCount: n
}) => r ? "loading" : e ? "skeleton" : t ? "error" : n === 0 ? "empty" : "data";
export {
  o as resolveTableBodyMode
};
