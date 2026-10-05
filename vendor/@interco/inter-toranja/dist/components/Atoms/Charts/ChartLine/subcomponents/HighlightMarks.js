import { jsxs as n, jsx as t } from "react/jsx-runtime";
const x = ({
  seriesPaths: a,
  categoryIndex: r,
  highlightX: g,
  chartHeight: c,
  classes: h
}) => /* @__PURE__ */ n("g", { "data-testid": "highlight", className: h.highlight, children: [
  /* @__PURE__ */ t(
    "line",
    {
      className: h.highlightLine,
      x1: g,
      x2: g,
      y1: 0,
      y2: c
    }
  ),
  a.map((i) => {
    const l = i.points[r];
    return (l == null ? void 0 : l.value) === null || (l == null ? void 0 : l.value) === void 0 ? null : /* @__PURE__ */ t(
      "circle",
      {
        className: h.highlightDot,
        cx: l.x,
        cy: l.y,
        r: 4,
        fill: i.color
      },
      `${i.key}-highlight`
    );
  })
] });
export {
  x as HighlightMarks
};
