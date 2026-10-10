import { calculatePageOffset as g } from "./calculatePageOffset.js";
const u = (t, e) => e <= 0 ? 0 : Math.min(Math.max(t, 0), e - 1), I = (t, e) => t <= 0 || e <= 0 ? 0 : Math.ceil(t / e), f = (t, e, n, s) => t > 0 ? g(e, n, s) : { initial: 0, final: 0 }, x = (t, e) => {
  if (e.mode === "manual") {
    const o = e.totalItems ?? t.length, l = e.pageCount, r = u(e.pageIndex, l);
    return {
      rows: t,
      pageCount: l,
      totalItems: o,
      pageIndex: r,
      offset: f(
        l,
        r,
        e.pageSize,
        o
      )
    };
  }
  const n = t.length, s = I(n, e.pageSize), a = u(e.pageIndex, s), c = a * e.pageSize, m = c + e.pageSize;
  return {
    rows: t.slice(c, m),
    pageCount: s,
    totalItems: n,
    pageIndex: a,
    offset: f(s, a, e.pageSize, n)
  };
};
export {
  x as paginateRows
};
