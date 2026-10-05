import { jsx as r, Fragment as a } from "react/jsx-runtime";
import '../../../../assets/components/Atoms/Hints/Info/Info.modules.css';/* empty css                  */
const i = ({ hints: l }) => l.length === 0 ? null : /* @__PURE__ */ r(a, { children: l.map((e) => /* @__PURE__ */ r("div", { className: "info", children: /* @__PURE__ */ r("span", { className: "type-label-medium-regular", children: e }, `info-${e.split(" ")}`) }, e)) });
export {
  i as default
};
