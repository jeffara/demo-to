import { jsx as i } from "react/jsx-runtime";
import { resolveColumnAlign as c } from "../shared/resolveColumnAlign.js";
import { TableColumnHeader as f } from "../TableColumnHeader/TableColumnHeader.js";
const p = (t, r) => t ? "skeleton" : r ? "ordered" : "default", k = ({
  columns: t,
  isSkeleton: r = !1,
  isLoading: a = !1,
  getColumnSortDirection: s,
  onSortColumn: d,
  selectionColumnId: l,
  selectionHeaderCheckbox: n
}) => /* @__PURE__ */ i("thead", { className: "table__head", children: /* @__PURE__ */ i("tr", { children: t.map((e) => {
  const o = s(e.id), h = e.id === l, b = e.cellType === "checkbox";
  return /* @__PURE__ */ i(
    f,
    {
      label: e.header,
      minWidth: e.minWidth,
      align: c(e),
      sortable: e.sortable,
      sortDirection: o,
      status: p(r, o),
      showCheckbox: b,
      checkbox: h ? n : void 0,
      onClick: e.sortable && !a && !r ? () => {
        d(e.id);
      } : void 0
    },
    e.id
  );
}) }) });
export {
  k as TableHead
};
