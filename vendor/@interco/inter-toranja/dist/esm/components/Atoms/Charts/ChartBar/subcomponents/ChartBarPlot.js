import { jsxs as T, jsx as i } from "react/jsx-runtime";
import { useRef as j, useState as G, useLayoutEffect as O } from "react";
import { ChartBarBars as D } from "./ChartBarBars.js";
import { ChartBarTooltip as E } from "./ChartBarTooltip.js";
import { ChartSvg as M } from "./ChartSvg.js";
import { GridLines as V } from "./GridLines.js";
import { clampTooltipAnchor as w } from "../../shared/chart.helper.js";
const q = ({
  orientation: t,
  plotWidth: r,
  chartHeight: n,
  thresholdPosition: e,
  classes: o
}) => t === "vertical" ? /* @__PURE__ */ i(
  "line",
  {
    "data-testid": "threshold",
    className: o.threshold,
    x1: "0",
    x2: r,
    y1: e,
    y2: e
  }
) : /* @__PURE__ */ i(
  "line",
  {
    "data-testid": "threshold",
    className: o.threshold,
    x1: e,
    x2: e,
    y1: "0",
    y2: n
  }
), F = (t, r, n, e, o, d) => t ? {
  left: w(r, n, o)
} : {
  top: w(r, e, d),
  left: "50%"
}, J = (t, r, n) => t && r !== null && n !== null, K = (t, r, n, e) => t ? {
  onPointerMove: r,
  onPointerDown: r,
  onPointerLeave: n,
  onClick: e
} : {}, P = ({
  shouldRenderTooltip: t,
  highlightAnchor: r,
  isVertical: n,
  plotWidth: e,
  chartHeight: o,
  highlight: d,
  tooltipItems: a,
  orientation: v
}) => {
  const c = j(null), [m, y] = G({ width: 0, height: 0 });
  return O(() => {
    const f = c.current;
    if (!f || !t)
      return;
    const s = () => {
      const u = f.getBoundingClientRect();
      y((l) => l.width === u.width && l.height === u.height ? l : { width: u.width, height: u.height });
    };
    if (s(), typeof ResizeObserver > "u")
      return;
    const p = new ResizeObserver(s);
    return p.observe(f), () => {
      p.disconnect();
    };
  }, [t, d, a, v, e, o]), !t || r === null ? {
    tooltipRef: c,
    tooltipStyle: void 0
  } : {
    tooltipRef: c,
    tooltipStyle: F(
      n,
      r,
      m.width,
      m.height,
      e,
      o
    )
  };
}, Q = ({
  shouldRender: t,
  valueLabels: r,
  plotWidth: n,
  chartHeight: e,
  orientation: o,
  classes: d
}) => t ? /* @__PURE__ */ i(
  V,
  {
    labels: r,
    plotWidth: n,
    chartHeight: e,
    orientation: o,
    classes: d,
    withTestIds: !0
  }
) : null, U = ({
  thresholdPosition: t,
  orientation: r,
  plotWidth: n,
  chartHeight: e,
  classes: o
}) => t === void 0 ? null : /* @__PURE__ */ i(
  q,
  {
    orientation: r,
    plotWidth: n,
    chartHeight: e,
    thresholdPosition: t,
    classes: o
  }
), X = ({
  shouldRender: t,
  tooltipRef: r,
  tooltipStyle: n,
  classes: e,
  tooltipItems: o
}) => t ? /* @__PURE__ */ i(
  "div",
  {
    ref: r,
    "data-testid": "tooltip-position",
    className: e.tooltip,
    style: n,
    children: /* @__PURE__ */ i(E, { items: o })
  }
) : null, H = ({
  isSkeleton: t,
  isInteractive: r,
  shouldAnimate: n,
  orientation: e,
  chartHeight: o,
  chartAreaHeight: d,
  plotWidth: a,
  shouldShowGridLines: v,
  shouldShowTooltip: c,
  barRects: m,
  valueLabels: y,
  thresholdPosition: f,
  highlight: s,
  tooltipItems: p,
  highlightAnchor: u,
  classes: l,
  chartRef: R,
  onPointerPreview: C,
  onPointerLeave: b,
  onClick: z
}) => {
  const B = e === "vertical", x = J(c, s, u), L = t ? null : (s == null ? void 0 : s.categoryIndex) ?? null, N = K(
    r,
    C,
    b,
    z
  ), { tooltipRef: S, tooltipStyle: I } = P({
    shouldRenderTooltip: x,
    highlightAnchor: u,
    isVertical: B,
    plotWidth: a,
    chartHeight: o,
    highlight: s,
    tooltipItems: p,
    orientation: e
  });
  return /* @__PURE__ */ T(
    "div",
    {
      ref: R,
      "data-testid": "chart",
      className: l.chart,
      style: { height: d },
      ...N,
      children: [
        /* @__PURE__ */ T(
          M,
          {
            testId: t ? "skeleton-chart" : void 0,
            className: t ? l.skeletonChart : void 0,
            plotWidth: a,
            chartHeight: o,
            children: [
              /* @__PURE__ */ i(
                Q,
                {
                  shouldRender: v && !t,
                  valueLabels: y,
                  plotWidth: a,
                  chartHeight: o,
                  orientation: e,
                  classes: l
                }
              ),
              /* @__PURE__ */ i(
                D,
                {
                  barRects: m,
                  isSkeleton: t,
                  shouldAnimate: n,
                  highlightIndex: L,
                  classes: l
                }
              ),
              /* @__PURE__ */ i(
                U,
                {
                  thresholdPosition: f,
                  orientation: e,
                  plotWidth: a,
                  chartHeight: o,
                  classes: l
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i(
          X,
          {
            shouldRender: x,
            tooltipRef: S,
            tooltipStyle: I,
            classes: l,
            tooltipItems: p
          }
        )
      ]
    }
  );
};
export {
  H as ChartBarPlot
};
