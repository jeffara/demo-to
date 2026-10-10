const e = (t, n) => typeof n == "function" ? n(t) : t[n], f = (t, n) => t.find((u) => u.id === n);
export {
  f as findColumnById,
  e as resolveColumnValue
};
