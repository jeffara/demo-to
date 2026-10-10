import { jsx as l } from "react/jsx-runtime";
import { resolveColumnAlign as m } from "../shared/resolveColumnAlign.js";
import { TableCell as d } from "../TableCell/TableCell.js";
import { TableRow as n } from "../TableRow/TableRow.js";
import '../../../../../assets/components/Organisms/Table/components/TableSkeletonBody/TableSkeletonBody.modules.css';/* empty css                               */
const h = ({
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
        d,
        {
          type: e.cellType,
          visualState: "skeleton",
          align: m(e, "start"),
          minWidth: e.minWidth
        },
        e.id
      ))
    },
    o
  )
) });
export {
  h as TableSkeletonBody
};
