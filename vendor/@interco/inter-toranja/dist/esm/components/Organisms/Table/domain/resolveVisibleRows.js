import { filterRows as f } from "./filterRows.js";
import { paginateRows as a } from "./paginateRows.js";
import { sortRows as m } from "./sortRows.js";
const R = (r) => {
  const { rows: s, columns: t, sort: n, filter: i = "", pagination: e } = r, l = f(s, t, i), o = m(l, t, n);
  return e ? a(o, e) : {
    rows: o,
    pageCount: 1,
    totalItems: o.length,
    pageIndex: 0,
    offset: { initial: o.length > 0 ? 1 : 0, final: o.length }
  };
};
export {
  R as resolveVisibleRows
};
