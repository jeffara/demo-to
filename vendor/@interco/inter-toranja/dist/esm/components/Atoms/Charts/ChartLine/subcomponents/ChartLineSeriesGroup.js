import { jsxs as r, jsx as d } from "react/jsx-runtime";
const c = (t, a, o, l) => a.value === null ? null : /* @__PURE__ */ d(
  "circle",
  {
    "data-testid": `dot-${t.testId}-${o + 1}`,
    className: l.dot,
    cx: a.x,
    cy: a.y,
    r: 4,
    fill: t.color
  },
  `${t.key}-dot-${o}`
), u = ({
  seriesItem: t,
  shouldShowDots: a,
  classes: o
}) => /* @__PURE__ */ r("g", { "data-testid": t.testId, children: [
  /* @__PURE__ */ d(
    "path",
    {
      className: o.seriesAnimated,
      d: t.path,
      pathLength: 1,
      stroke: t.color,
      fill: "none"
    },
    t.animationKey
  ),
  a && t.points.map(
    (l, n) => c(t, l, n, o)
  )
] });
export {
  u as ChartLineSeriesGroup
};
