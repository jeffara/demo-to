import { jsx as l } from "react/jsx-runtime";
import { isSkeletonVisualState as n } from "../shared/mapTableVisualState.js";
import { useTableCell as s } from "./hooks/useTableCell.js";
import { renderTableCellContent as d } from "./renderers/index.js";
import '../../../../../assets/components/Organisms/Table/components/TableCell/TableCell.modules.css';/* empty css                       */
const h = (e) => {
  const { rootClasses: t } = s(e), a = e.visualState ?? "enabled", i = e.minWidth !== void 0 ? { minWidth: e.minWidth } : void 0;
  return n(a) ? /* @__PURE__ */ l("td", { "data-testid": "TableCell", className: t, style: i, "aria-hidden": "true", children: /* @__PURE__ */ l("div", { className: "table-cell__content", children: /* @__PURE__ */ l("span", { className: "table-cell__skeleton" }) }) }) : /* @__PURE__ */ l("td", { "data-testid": "TableCell", className: t, style: i, children: /* @__PURE__ */ l("div", { className: "table-cell__content", children: d(e, a) }) });
};
export {
  h as TableCell
};
