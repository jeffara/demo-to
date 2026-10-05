import { jsx as e } from "react/jsx-runtime";
import { Text as s } from "../Text/Text.js";
import { TextWeight as r, TextSize as o, TextType as g } from "../Text/types.js";
import '../../../assets/components/Atoms/Badge/Badge.modules.css';/* empty css                   */
const b = ({ variant: a = "label", count: t, ...d }) => {
  const i = a === "label" ? "badge--label" : "badge--dot", l = t && t >= 100 ? "99+" : t;
  return a === "label" ? /* @__PURE__ */ e("div", { "data-testid": "badge", className: `${i}`, ...d, children: /* @__PURE__ */ e(
    s,
    {
      as: "span",
      textType: g.Caption,
      textSize: o.Medium,
      textWeight: r.Regular,
      children: l
    }
  ) }) : /* @__PURE__ */ e("div", { className: i, "data-testid": "badge", children: /* @__PURE__ */ e(
    "svg",
    {
      "data-testid": "svg-dot",
      xmlns: "http://www.w3.org/2000/svg",
      width: "8",
      height: "8",
      viewBox: "0 0 8 8",
      fill: "none",
      children: /* @__PURE__ */ e("circle", { cx: "4", cy: "4", r: "4", fill: "" })
    }
  ) });
};
export {
  b as Badge
};
