import { jsx as e, Fragment as t, jsxs as i } from "react/jsx-runtime";
import '../../../../assets/components/Atoms/Hints/ErrorHint/error.modules.css';/* empty css                   */
import l from "../../../../_virtual/index3.js";
const c = ({ hints: o, showIcon: a }) => /* @__PURE__ */ e(t, { children: o.filter((r) => r.trim() !== "").map((r) => /* @__PURE__ */ i("div", { className: "error", children: [
  !a && /* @__PURE__ */ e(
    l,
    {
      "aria-hidden": "true",
      color: "var(--color-text-feedback-error-default)",
      height: 16,
      width: 16
    }
  ),
  /* @__PURE__ */ e("span", { className: "type-label-medium-regular", children: r }, `error-${r.split(" ")}`)
] }, r)) });
export {
  c as default
};
