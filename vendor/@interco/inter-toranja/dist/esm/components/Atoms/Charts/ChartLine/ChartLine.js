import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { useChartLine as R } from "./hooks/useChartLine.js";
import { Legend as z } from "../Legend/Legend.js";
import '../../../../assets/components/Atoms/Charts/ChartLine/ChartLine.modules.css';/* empty css                       */
import { ChartLinePlot as G } from "./subcomponents/ChartLinePlot.js";
import { ChartLineXAxis as T } from "./subcomponents/ChartLineXAxis.js";
import { ChartLineYAxis as q } from "./subcomponents/ChartLineYAxis.js";
const V = (h) => {
  const {
    isSkeleton: a,
    isInteractive: t,
    chartHeight: d,
    chartAreaHeight: n,
    plotWidth: c,
    shouldLockPlotWidth: m,
    containerWidth: u,
    yAxisPosition: l,
    shouldShowXAxis: v,
    shouldShowYAxis: g,
    shouldShowGridLines: p,
    shouldShowLegend: L,
    shouldShowTooltip: w,
    shouldShowDots: x,
    seriesPaths: y,
    xLabels: P,
    yLabels: r,
    legendItems: f,
    thresholdY: A,
    highlight: C,
    tooltipItems: S,
    highlightX: N,
    highlightAnnouncement: b,
    classes: e,
    containerAccessibility: k,
    containerRef: D,
    chartRef: B,
    handlePointerPreview: I,
    handlePointerLeave: K,
    handleClick: W,
    handleKeyDown: X,
    handleBlur: Y
  } = R(h), s = g ? /* @__PURE__ */ i(q, { yLabels: r, chartAreaHeight: n, classes: e }) : null, j = t ? X : void 0, H = t ? Y : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: D,
      "data-testid": "container",
      className: e.container,
      style: { width: u },
      ...k,
      onKeyDown: j,
      onBlur: H,
      children: [
        t ? /* @__PURE__ */ i(
          "div",
          {
            className: "sr-only",
            role: "status",
            "aria-live": "polite",
            "data-testid": "highlight-announcement",
            children: b
          }
        ) : null,
        /* @__PURE__ */ o("div", { className: e.body, children: [
          l === "start" ? s : null,
          /* @__PURE__ */ o("div", { className: e.plot, children: [
            /* @__PURE__ */ i(
              G,
              {
                isSkeleton: a,
                isInteractive: t,
                chartHeight: d,
                chartAreaHeight: n,
                plotWidth: c,
                shouldLockPlotWidth: m,
                shouldShowGridLines: p,
                shouldShowDots: x,
                shouldShowTooltip: w,
                seriesPaths: y,
                yLabels: r,
                thresholdY: A,
                highlight: C,
                tooltipItems: S,
                highlightX: N,
                classes: e,
                chartRef: B,
                onPointerPreview: I,
                onPointerLeave: K,
                onClick: W
              }
            ),
            v ? /* @__PURE__ */ i(T, { xLabels: P, classes: e }) : null
          ] }),
          l === "end" ? s : null
        ] }),
        L ? /* @__PURE__ */ i(z, { orientation: "horizontal", items: f }) : null
      ]
    }
  );
};
export {
  V as ChartLine
};
