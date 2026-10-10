import { useState as N, useRef as T, useEffect as $, useCallback as I, useMemo as q } from "react";
import { injectSelectionColumn as y, resolveSelectionColumnId as z, resolveInitialSelectedRowIds as O } from "./resolveSelectionColumn.js";
import { getRowId as D } from "../domain/getRowId.js";
import { toggleRowSelection as G, resolveSelectionHeaderState as J } from "../domain/toggleSelection.js";
const K = (u) => {
  const s = {};
  return u.forEach((f) => {
    s[f] = !0;
  }), s;
}, L = (u, s, f) => u.filter((a, b) => s.has(f(a, b))), X = (u) => {
  const {
    data: s,
    columns: f,
    visibleRows: a,
    selectionColumn: b,
    selectedRowIds: p,
    onSelectionChange: v,
    validateBeforeSelectRow: c,
    getRowIdFn: h
  } = u, m = y(f, b), R = z(m, b), w = R !== void 0, g = p !== void 0, [V, k] = N(
    () => O(s, m, R, h)
  ), x = T(s.length > 0), E = g ? p : V;
  $(() => {
    g || x.current || s.length === 0 || (k(
      O(s, m, R, h)
    ), x.current = !0);
  }, [s, h, g, m, R]);
  const d = I(
    (e, t) => {
      const l = s.indexOf(e), i = l >= 0 ? l : t;
      return D(e, i, h);
    },
    [s, h]
  ), r = q(() => {
    const e = new Set(
      Object.entries(E).filter(([, n]) => n).map(([n]) => n)
    ), t = a.filter((n) => !c || c(n)).map((n, o) => d(n, o)), l = t.filter((n) => e.has(n)).length, i = t.length > 0 && l === t.length, S = l > 0 && !i;
    return {
      selectedIds: e,
      allSelected: i,
      indeterminate: S
    };
  }, [d, E, c, a]), C = I(
    (e) => {
      const t = K(e.selectedIds);
      g || k(t), v == null || v(
        L(s, e.selectedIds, d),
        e.allSelected
      );
    },
    [s, d, g, v]
  ), A = I(
    (e, t, l) => {
      if (!w)
        return;
      const i = d(e, t), S = r.selectedIds.has(i);
      if (l === S)
        return;
      const n = G(
        { ...r, selectedIds: new Set(r.selectedIds) },
        e,
        t,
        a,
        d,
        c
      ), o = n.selectedIds.has(i);
      S !== o && C(n);
    },
    [
      r,
      C,
      d,
      w,
      c,
      a
    ]
  ), H = I(
    (e) => {
      if (!w)
        return;
      const t = new Set(r.selectedIds), l = a.filter((o) => !c || c(o)).map((o, M) => d(o, M));
      l.forEach((o) => {
        e ? t.add(o) : t.delete(o);
      });
      const i = l.filter(
        (o) => t.has(o)
      ).length, S = l.length > 0 && i === l.length, n = i > 0 && !S;
      C({
        selectedIds: t,
        allSelected: S,
        indeterminate: n
      });
    },
    [
      r,
      C,
      d,
      w,
      c,
      a
    ]
  ), B = I(
    (e, t) => r.selectedIds.has(d(e, t)),
    [r.selectedIds, d]
  ), F = I(
    (e) => !c || c(e),
    [c]
  ), j = J(r);
  return {
    columns: m,
    selectionColumnId: R,
    isSelectionEnabled: w,
    isRowSelected: B,
    isRowSelectable: F,
    handleRowSelectionChange: A,
    handleSelectAllChange: H,
    selectionHeaderCheckbox: {
      checked: j.checked,
      indeterminate: j.indeterminate,
      onChange: H
    }
  };
};
export {
  X as useTableSelection
};
