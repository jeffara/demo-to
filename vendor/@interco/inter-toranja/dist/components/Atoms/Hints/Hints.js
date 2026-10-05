import { jsx as r, Fragment as o } from "react/jsx-runtime";
import f from "./ErrorHint/index.js";
import m from "./Info/index.js";
import d from "./SuccessHint/index.js";
import { EHintsType as e } from "./types.js";
function p({ type: i, hints: t, className: n, showIcon: s = !1 }) {
  return i === e.ERROR ? /* @__PURE__ */ r("div", { className: `hints ${n ?? ""}`, "data-testid": "error-hint", children: /* @__PURE__ */ r(f, { hints: t, showIcon: s }) }) : i === e.SUCCESS ? /* @__PURE__ */ r("div", { className: `hints ${n ?? ""}`, "data-testid": "success-hint", children: /* @__PURE__ */ r(d, { hints: t, showIcon: s }) }) : i === e.INFO ? /* @__PURE__ */ r("div", { className: `hints ${n}`, children: /* @__PURE__ */ r(m, { hints: t }) }) : /* @__PURE__ */ r(o, {});
}
export {
  p as default
};
