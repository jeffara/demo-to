import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { useChartBar as G } from "./hooks/useChartBar.js";
import { Legend as T } from "../Legend/Legend.js";
import { ChartBarPlot as q } from "./subcomponents/ChartBarPlot.js";
import { ChartBarXAxis as z } from "./subcomponents/ChartBarXAxis.js";
import { ChartBarYAxis as E } from "./subcomponents/ChartBarYAxis.js";
import '../../../../assets/ChartBar.css';const V = (s) => {
  const {
    isSkeleton: l,
    isInteractive: i,
    orientation: h,
    chartHeight: d,
    chartAreaHeight: n,
    plotWidth: c,
    shouldAnimate: m,
    containerWidth: u,
    yAxisPosition: r,
    shouldShowXAxis: v,
    shouldShowYAxis: g,
    shouldShowGridLines: p,
    shouldShowLegend: w,
    shouldShowTooltip: A,
    barRects: x,
    xLabels: y,
    yLabels: f,
    valueLabels: P,
    legendItems: B,
    thresholdPosition: L,
    highlight: C,
    tooltipItems: b,
    highlightAnchor: S,
    highlightAnnouncement: N,
    classes: e,
    containerAccessibility: k,
    containerRef: D,
    chartRef: I,
    handlePointerPreview: K,
    handlePointerLeave: R,
    handleClick: j,
    handleKeyDown: H,
    handleBlur: W
  } = G(s), a = g ? /* @__PURE__ */ t(E, { yLabels: f, chartAreaHeight: n, classes: e }) : null, X = i ? H : void 0, Y = i ? W : void 0;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: D,
      "data-testid": "container",
      className: e.container,
      style: { width: u },
      ...k,
      onKeyDown: X,
      onBlur: Y,
      children: [
        i && /* @__PURE__ */ t(
          "div",
          {
            className: "sr-only",
            role: "status",
            "aria-live": "polite",
            "data-testid": "highlight-announcement",
            children: N
          }
        ),
        /* @__PURE__ */ o("div", { className: e.body, children: [
          r === "start" && a,
          /* @__PURE__ */ o("div", { className: e.plot, children: [
            /* @__PURE__ */ t(
              q,
              {
                isSkeleton: l,
                isInteractive: i,
                shouldAnimate: m,
                orientation: h,
                chartHeight: d,
                chartAreaHeight: n,
                plotWidth: c,
                shouldShowGridLines: p,
                shouldShowTooltip: A,
                barRects: x,
                valueLabels: P,
                thresholdPosition: L,
                highlight: C,
                tooltipItems: b,
                highlightAnchor: S,
                classes: e,
                chartRef: I,
                onPointerPreview: K,
                onPointerLeave: R,
                onClick: j
              }
            ),
            v && /* @__PURE__ */ t(z, { xLabels: y, classes: e })
          ] }),
          r === "end" && a
        ] }),
        w && /* @__PURE__ */ t(T, { orientation: "vertical", items: B })
      ]
    }
  );
};
export {
  V as ChartBar
};
