import { resolveAriaSort as N, resolveSortIconColor as g, resolveSortIconAsset as V, resolveLabelColorVariant as p } from "../utils/tableColumnHeaderState.js";
import { classNamesMerge as D } from "../../../../../../utils/classNamesMerge.js";
import { STATE as i, VARIANT as d } from "../../../../../../utils/pattern.js";
const x = (m) => {
  const {
    label: u,
    status: n = "default",
    sortable: o = !1,
    sortDirection: t = null,
    align: b = "start",
    showCheckbox: s = !1,
    checkbox: e,
    forceHover: a = !1,
    onClick: h
  } = m, C = s && !u, r = n === "skeleton", l = n === "ordered" || t !== null, c = a, f = o && !!h, A = D(
    "table-column-header",
    `table-column-header--align-${b}`,
    C && "table-column-header--checkbox-only",
    r && "table-column-header--skeleton",
    l && "table-column-header--ordered",
    o && "table-column-header--sortable",
    a && "table-column-header--hover"
  ), E = r ? i.SKELETON : i.ENABLED, S = p(l, c), v = V(o, t), I = g(l, c), T = e != null && e.indeterminate ? d.INDETERMINATE : d.DEFAULT, k = N(t, o);
  return {
    rootClasses: A,
    controlState: E,
    labelColorVariant: S,
    isSkeleton: r,
    sortable: o,
    sortIconAsset: v,
    sortIconColor: I,
    showCheckbox: s,
    checkboxVariant: T,
    checkboxChecked: (e == null ? void 0 : e.checked) ?? !1,
    checkboxOnChange: e == null ? void 0 : e.onChange,
    ariaSort: k,
    isSortInteractive: f
  };
};
export {
  x as useTableColumnHeader
};
