import { useState as v, useCallback as h } from "react";
import { DEFAULT_PAGE_SIZE as O, DEFAULT_PAGE_SIZE_OPTIONS as z } from "./constants.js";
const I = (a, t) => a <= 0 || t <= 0 ? 0 : Math.ceil(a / t), x = (a, t, m, p, g) => ({
  pageIndex: a,
  pageSize: t,
  pageCount: p,
  mode: m,
  totalItems: g
}), L = ({
  props: a,
  rowCount: t
}) => {
  const {
    pagination: m = !1,
    initialPageSize: p = O,
    pageSizeOptions: g = [...z],
    manualPagination: o = !1,
    pageCount: f,
    pageIndex: T,
    totalItems: b,
    onPaginationChange: c
  } = a, [_, C] = v(0), [A, M] = v(p), i = o ? T : void 0, F = i ?? _, l = A, s = o ? "manual" : "client", e = o ? b ?? t : t, d = o ? f ?? I(e, l) : I(e, l), r = h(
    (n) => {
      c == null || c(n);
    },
    [c]
  ), P = h(
    (n) => {
      const u = d > 0 ? Math.min(Math.max(n, 0), d - 1) : 0;
      i === void 0 && C(u), r(
        x(u, l, s, d, e)
      );
    },
    [
      i,
      r,
      s,
      l,
      d,
      e
    ]
  ), S = h(
    (n) => {
      M(n);
      const u = o ? f ?? I(e, n) : I(e, n), E = 0;
      i === void 0 && C(E), r(
        x(E, n, s, u, e)
      );
    },
    [
      f,
      i,
      r,
      o,
      s,
      e
    ]
  );
  return m ? {
    isEnabled: !0,
    pageSizeOptions: g,
    paginationState: x(
      F,
      l,
      s,
      d,
      e
    ),
    handlePageChange: P,
    handlePageSizeChange: S,
    goToPage: P
  } : {
    isEnabled: !1,
    pageSizeOptions: g,
    paginationState: void 0,
    handlePageChange: P,
    handlePageSizeChange: S,
    goToPage: P
  };
};
export {
  L as useTablePagination
};
