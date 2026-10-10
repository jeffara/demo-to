import { TABLE_SELECTION_COLUMN_ID as o } from "./constants.js";
import { resolveColumnValue as u } from "../domain/resolveColumnValue.js";
const S = (e) => typeof e == "object" && e !== null, d = (e) => e.find((t) => t.cellType === "checkbox"), a = (e, t) => {
  const r = d(e);
  if (r)
    return r.id;
  if (t)
    return o;
}, k = (e, t) => {
  if (!t || d(e))
    return e;
  const r = {
    id: o,
    accessor: () => !1,
    header: "",
    cellType: "checkbox",
    minWidth: 48,
    align: "center"
  };
  return t.position === "END" ? [...e, r] : [r, ...e];
}, h = (e) => S(e) && "checked" in e ? !!e.checked : !!e, m = (e, t, r, c) => {
  if (!r || r === o)
    return {};
  const i = t.find((n) => n.id === r);
  return i ? e.reduce((n, s, l) => {
    const f = c ? c(s, l) : String(l);
    return h(u(s, i.accessor)) && (n[f] = !0), n;
  }, {}) : {};
};
export {
  d as findDeclarativeSelectionColumn,
  k as injectSelectionColumn,
  m as resolveInitialSelectedRowIds,
  a as resolveSelectionColumnId
};
