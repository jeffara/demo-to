import { jsx as l } from "react/jsx-runtime";
import { resolveColumnAlign as d } from "../shared/resolveColumnAlign.js";
import { TableCell as m } from "../TableCell/TableCell.js";
import { TableRow as n } from "../TableRow/TableRow.js";
import '../../../../../assets/TableSkeletonBody.css';const f = ({
  columns: a,
  rowCount: r,
  showDivider: i,
  striped: s
}) => /* @__PURE__ */ l("tbody", { className: "table-skeleton-body", "data-testid": "TableSkeletonBody", "aria-busy": "true", children: Array.from({ length: r }, (o, t) => `table-skeleton-row-${t + 1}`).map(
  (o, t) => /* @__PURE__ */ l(
    n,
    {
      visualState: "skeleton",
      showDivider: i,
      striped: s && t % 2 === 1,
      children: a.map((e) => /* @__PURE__ */ l(
        m,
        {
          type: e.cellType,
          visualState: "skeleton",
          align: d(e, "start"),
          minWidth: e.minWidth
        },
        e.id
      ))
    },
    o
  )
) });
export {
  f as TableSkeletonBody
};
