import { jsx as i } from "react/jsx-runtime";
const e = ({ xLabels: t, classes: a }) => /* @__PURE__ */ i("div", { "data-testid": "x-axis", className: a.xAxis, children: t.map((x) => /* @__PURE__ */ i(
  "span",
  {
    "data-testid": `x-axis-label-${x.index + 1}`,
    className: a.xAxisLabel,
    style: { left: x.left },
    children: x.label
  },
  `x-${x.index}-${x.label}`
)) });
export {
  e as ChartBarXAxis
};
