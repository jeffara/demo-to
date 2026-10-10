import { jsx as n } from "react/jsx-runtime";
import { mapColumnToCellProps as T } from "../../application/mapColumnToCellProps.js";
import { TableCell as v } from "../TableCell/TableCell.js";
import { TableRow as x } from "../TableRow/TableRow.js";
const P = (r, o) => r ? o ? "selected" : "enabled" : "disabled", j = ({
  row: r,
  rowIndex: o,
  columns: i,
  showDivider: p,
  striped: m,
  statusColor: b,
  selectionColumnId: t,
  isRowSelected: s,
  isRowSelectable: c,
  onRowSelectionChange: d,
  onClick: f,
  onDoubleClick: u
}) => {
  const a = P(c, s), h = (e) => {
    const l = T(e, r, a);
    return !t || e.id !== t ? l : {
      ...l,
      type: "checkbox",
      checked: s,
      onChange: (C) => {
        d(r, o, C);
      }
    };
  };
  return /* @__PURE__ */ n(
    x,
    {
      visualState: a,
      showDivider: p,
      striped: m,
      statusColor: b,
      onClick: f,
      onDoubleClick: u,
      children: i.map((e) => /* @__PURE__ */ n(v, { ...h(e) }, e.id))
    }
  );
};
export {
  j as TableBodyRow
};
