import { useState as S, useCallback as s } from "react";
const f = (o, n) => {
  if ((o == null ? void 0 : o.columnId) !== n)
    return { columnId: n, direction: "asc" };
  if (o.direction === "asc")
    return { columnId: n, direction: "desc" };
}, v = (o) => {
  const { sortBy: n, onSortChange: e } = o, [c, u] = S(null), r = n !== void 0, t = r ? n : c, d = s(
    (i) => {
      const l = f(t, i);
      r || u(l ?? null), e == null || e(l ?? null);
    },
    [r, e, t]
  ), a = s(
    (i) => (t == null ? void 0 : t.columnId) !== i ? null : t.direction,
    [t]
  );
  return {
    sort: t,
    handleSortColumn: d,
    getColumnSortDirection: a
  };
};
export {
  v as useTableSort
};
