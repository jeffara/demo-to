import { jsx as a } from "react/jsx-runtime";
import { Spinner as o } from "../../../../Atoms/ProgressIndicator/Spinner/Spinner.js";
import '../../../../../assets/components/Organisms/Table/components/TableLoadingBody/TableLoadingBody.modules.css';/* empty css                              */
const t = ({ columnCount: e }) => /* @__PURE__ */ a("tbody", { className: "table-loading-body", "data-testid": "TableLoadingBody", "aria-busy": "true", children: /* @__PURE__ */ a("tr", { children: /* @__PURE__ */ a("td", { className: "table-loading-body__cell", colSpan: e, children: /* @__PURE__ */ a("div", { className: "table-loading-body__content", children: /* @__PURE__ */ a(o, { size: "large" }) }) }) }) });
export {
  t as TableLoadingBody
};
