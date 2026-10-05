import { jsxs as d, jsx as a } from "react/jsx-runtime";
const x = ({
  yLabels: s,
  chartAreaHeight: t,
  classes: e
}) => /* @__PURE__ */ d("div", { "data-testid": "y-axis", className: e.yAxis, style: { height: t }, children: [
  /* @__PURE__ */ a("div", { className: e.yAxisSizer, "aria-hidden": !0, children: s.map((i) => /* @__PURE__ */ a("span", { className: e.yAxisSizerLabel, children: i.label }, `y-sizer-${i.index}-${i.label}`)) }),
  s.map((i) => /* @__PURE__ */ a(
    "span",
    {
      "data-testid": `y-axis-label-${i.index + 1}`,
      className: e.yAxisLabel,
      style: { top: i.offset },
      children: i.label
    },
    `y-${i.index}-${i.label}`
  ))
] });
export {
  x as ChartLineYAxis
};
