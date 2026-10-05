import { jsx as s, Fragment as a, jsxs as t } from "react/jsx-runtime";
import '../../../../assets/components/Atoms/Hints/SuccessHint/success.modules.css';/* empty css                     */
import i from "../../../../_virtual/index.js";
const d = ({ hints: c, showIcon: r }) => /* @__PURE__ */ s(a, { children: c.filter((e) => e.trim() !== "").map((e) => /* @__PURE__ */ t("div", { className: "success", children: [
  !r && /* @__PURE__ */ s(
    i,
    {
      "aria-hidden": "true",
      color: "var(--color-text-feedback-success-default)",
      height: 16,
      width: 16
    }
  ),
  /* @__PURE__ */ s("span", { className: "type-label-medium-regular", children: e }, `success-${e.split(" ")}`)
] }, e)) });
export {
  d as default
};
