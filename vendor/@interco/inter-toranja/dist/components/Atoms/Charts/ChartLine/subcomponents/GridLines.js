import { jsx as r } from "react/jsx-runtime";
const s = ({
  yLabels: t,
  plotWidth: n,
  classes: d,
  withTestIds: e = !1
}) => /* @__PURE__ */ r("g", { "data-testid": e ? "grid" : void 0, className: d.grid, children: t.map((i) => /* @__PURE__ */ r(
  "line",
  {
    "data-testid": e ? `grid-line-${i.index + 1}` : void 0,
    className: d.gridLine,
    x1: "0",
    x2: n,
    y1: i.offset,
    y2: i.offset
  },
  `grid-${i.index}`
)) });
export {
  s as GridLines
};
