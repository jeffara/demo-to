import { jsx as t } from "react/jsx-runtime";
const s = ({ xLabels: a, classes: x }) => /* @__PURE__ */ t("div", { "data-testid": "x-axis", className: x.xAxis, children: a.map((i) => /* @__PURE__ */ t(
  "span",
  {
    "data-testid": `x-axis-label-${i.index + 1}`,
    className: x.xAxisLabel,
    style: { left: i.left },
    children: i.label
  },
  `x-${i.index}-${i.label}`
)) });
export {
  s as ChartLineXAxis
};
