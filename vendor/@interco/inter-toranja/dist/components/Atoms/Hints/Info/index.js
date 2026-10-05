import { jsx as l, Fragment as a } from "react/jsx-runtime";
import '../../../../assets/index.css';const m = ({ hints: r }) => r.length === 0 ? null : /* @__PURE__ */ l(a, { children: r.map((e) => /* @__PURE__ */ l("div", { className: "info", children: /* @__PURE__ */ l("span", { className: "type-label-medium-regular", children: e }, `info-${e.split(" ")}`) }, e)) });
export {
  m as default
};
