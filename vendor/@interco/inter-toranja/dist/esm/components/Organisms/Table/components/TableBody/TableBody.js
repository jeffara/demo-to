import { jsx as b } from "react/jsx-runtime";
import { TableBodyRow as T } from "./TableBodyRow.js";
const n = ({
  rows: c,
  columns: m,
  resolveRowId: o,
  showDivider: p,
  striped: s,
  enableStatus: y,
  getStatusColor: e,
  selectionColumnId: v,
  isRowSelected: a,
  isRowSelectable: f,
  onRowSelectionChange: k,
  createRowClickHandler: B,
  createRowDoubleClickHandler: R,
  hasRowInteraction: l
}) => /* @__PURE__ */ b("tbody", { className: "table__body", children: c.map((d, i) => /* @__PURE__ */ b(
  T,
  {
    row: d,
    rowIndex: i,
    columns: m,
    showDivider: p,
    striped: s && i % 2 === 1,
    statusColor: y ? e == null ? void 0 : e(d) : void 0,
    selectionColumnId: v,
    isRowSelected: a(d, i),
    isRowSelectable: f(d),
    onRowSelectionChange: k,
    onClick: l ? B(d) : void 0,
    onDoubleClick: l ? R(d) : void 0
  },
  o(d)
)) });
export {
  n as TableBody
};
