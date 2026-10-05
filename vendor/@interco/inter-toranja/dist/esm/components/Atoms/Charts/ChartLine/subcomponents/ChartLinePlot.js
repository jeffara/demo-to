import { jsxs as u, jsx as o } from "react/jsx-runtime";
import { ChartLineSeriesGroup as G } from "./ChartLineSeriesGroup.js";
import { ChartLineTooltip as M } from "./ChartLineTooltip.js";
import { ChartSvg as y } from "./ChartSvg.js";
import { GridLines as N } from "./GridLines.js";
import { HighlightMarks as T } from "./HighlightMarks.js";
const b = ({
  plotWidth: t,
  chartHeight: r,
  yLabels: a,
  seriesPaths: d,
  classes: n
}) => /* @__PURE__ */ u(
  y,
  {
    testId: "skeleton-chart",
    className: n.skeletonChart,
    plotWidth: t,
    chartHeight: r,
    children: [
      /* @__PURE__ */ o(N, { yLabels: a, plotWidth: t, classes: n }),
      d[0] && /* @__PURE__ */ o(
        "path",
        {
          className: n.series,
          d: d[0].path,
          stroke: "var(--color-surface-disabled)",
          fill: "none",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w = ({
  plotWidth: t,
  chartHeight: r,
  shouldLockPlotWidth: a,
  yLabels: d,
  seriesPaths: n,
  shouldShowGridLines: p,
  shouldShowDots: k,
  thresholdY: m,
  highlight: f,
  highlightX: l,
  classes: e
}) => /* @__PURE__ */ u(
  y,
  {
    plotWidth: t,
    chartHeight: r,
    shouldLockPlotWidth: a,
    children: [
      p && /* @__PURE__ */ o(N, { yLabels: d, plotWidth: t, classes: e, withTestIds: !0 }),
      n.map((i) => /* @__PURE__ */ o(
        G,
        {
          seriesItem: i,
          shouldShowDots: k,
          classes: e
        },
        i.key
      )),
      m !== void 0 && /* @__PURE__ */ o(
        "line",
        {
          "data-testid": "threshold",
          className: e.threshold,
          x1: "0",
          x2: t,
          y1: m,
          y2: m
        }
      ),
      f !== null && l !== null && /* @__PURE__ */ o(
        T,
        {
          seriesPaths: n,
          categoryIndex: f.categoryIndex,
          highlightX: l,
          chartHeight: r,
          classes: e
        }
      )
    ]
  }
), I = ({
  isSkeleton: t,
  isInteractive: r,
  chartHeight: a,
  chartAreaHeight: d,
  plotWidth: n,
  shouldLockPlotWidth: p,
  shouldShowGridLines: k,
  shouldShowDots: m,
  shouldShowTooltip: f,
  seriesPaths: l,
  yLabels: e,
  thresholdY: i,
  highlight: v,
  tooltipItems: L,
  highlightX: C,
  classes: c,
  chartRef: S,
  onPointerPreview: x,
  onPointerLeave: j,
  onClick: E
}) => /* @__PURE__ */ u(
  "div",
  {
    ref: S,
    "data-testid": "chart",
    className: c.chart,
    style: { height: d },
    onPointerMove: r ? x : void 0,
    onPointerDown: r ? x : void 0,
    onPointerLeave: r ? j : void 0,
    onClick: r ? E : void 0,
    children: [
      t ? /* @__PURE__ */ o(
        b,
        {
          plotWidth: n,
          chartHeight: a,
          yLabels: e,
          seriesPaths: l,
          classes: c
        }
      ) : /* @__PURE__ */ o(
        w,
        {
          plotWidth: n,
          chartHeight: a,
          shouldLockPlotWidth: p,
          yLabels: e,
          seriesPaths: l,
          shouldShowGridLines: k,
          shouldShowDots: m,
          thresholdY: i,
          highlight: v,
          highlightX: C,
          classes: c
        }
      ),
      f && v !== null && C !== null && /* @__PURE__ */ o("div", { className: c.tooltip, style: { left: C }, children: /* @__PURE__ */ o(M, { title: v.category, items: L }) })
    ]
  }
);
export {
  I as ChartLinePlot
};
