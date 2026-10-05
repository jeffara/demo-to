import { jsx as n } from "react/jsx-runtime";
const g = ({
  labels: o,
  plotWidth: s,
  chartHeight: a,
  orientation: c,
  classes: r,
  withTestIds: t = !1
}) => /* @__PURE__ */ n("g", { "data-testid": t ? "grid" : void 0, className: r.grid, children: o.map((e) => {
  const i = e.offset ?? 0, d = c === "vertical";
  return /* @__PURE__ */ n(
    "line",
    {
      "data-testid": t ? `grid-line-${e.index + 1}` : void 0,
      className: r.gridLine,
      x1: d ? 0 : i,
      x2: d ? s : i,
      y1: d ? i : 0,
      y2: d ? i : a
    },
    `grid-${e.index}`
  );
}) });
export {
  g as GridLines
};
