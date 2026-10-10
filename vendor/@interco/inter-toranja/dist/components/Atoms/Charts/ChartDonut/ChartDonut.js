import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { CHART_GEOMETRY as t } from "./ChartDonut.helper.js";
import { useChartDonut as I } from "./hooks/useChartDonut.js";
import { TextWeight as c, TextType as d, TextSize as h } from "../../Text/types.js";
import { Legend as P } from "../Legend/Legend.js";
import { Text as u } from "../../Text/Text.js";
import '../../../../assets/ChartDonut.css';const H = (x) => {
  const {
    classes: a,
    sliceItems: f,
    legendItems: v,
    shouldShowLegend: p,
    shouldShowCenterText: g,
    shouldShowCenterLabel: S,
    isSkeleton: n,
    isInteractive: k,
    centerLabel: m,
    centerValue: i,
    centerValueRef: y,
    chartRef: T,
    trackColor: w,
    containerAccessibility: b,
    chartAccessibility: C,
    handleSliceClick: B,
    handleSliceHighlight: s,
    handlePreventFocus: l,
    handleChartPointerLeave: D,
    handleSliceFocus: L,
    handleSliceBlur: N,
    handleSliceKeyDown: W,
    legendOrientation: z
  } = I(x);
  return /* @__PURE__ */ o("div", { "data-testid": "container", className: a.container, ...b, children: [
    /* @__PURE__ */ o(
      "div",
      {
        ref: T,
        "data-testid": "chart",
        className: a.chart,
        ...C,
        onMouseDown: l,
        children: [
          g && /* @__PURE__ */ o("div", { "data-testid": "text", className: a.centerText, children: [
            S && /* @__PURE__ */ r("div", { className: a.centerLabel, children: /* @__PURE__ */ r(
              u,
              {
                textSize: h.Small,
                textType: d.Body,
                textWeight: c.Regular,
                colorVariant: "secondary",
                children: m
              }
            ) }),
            i !== "" && /* @__PURE__ */ r("div", { ref: y, className: a.centerValue, children: /* @__PURE__ */ r(
              u,
              {
                textSize: h.Large,
                textType: d.Body,
                textWeight: c.Bold,
                colorVariant: "primary",
                children: i
              }
            ) })
          ] }),
          /* @__PURE__ */ r(
            "svg",
            {
              className: a.svg,
              viewBox: `0 0 ${t.viewBoxSize} ${t.viewBoxSize}`,
              onPointerLeave: D,
              children: /* @__PURE__ */ o("g", { "data-testid": "slice-group", transform: t.sliceStartTransform, children: [
                /* @__PURE__ */ r(
                  "circle",
                  {
                    "data-testid": n ? "skeleton-chart" : "chart-track",
                    cx: t.center,
                    cy: t.center,
                    r: t.radius,
                    fill: "none",
                    stroke: w,
                    strokeWidth: t.strokeWidth
                  }
                ),
                !n && f.map((e) => /* @__PURE__ */ r(
                  "circle",
                  {
                    "data-testid": e.testId,
                    className: e.chartClass,
                    cx: t.center,
                    cy: t.center,
                    r: t.radius,
                    fill: "transparent",
                    stroke: e.color,
                    strokeLinecap: "butt",
                    pointerEvents: e.pointerEvents,
                    strokeWidth: t.strokeWidth,
                    strokeDasharray: e.dasharray,
                    strokeDashoffset: e.dashoffset,
                    tabIndex: k ? 0 : void 0,
                    role: "button",
                    "aria-label": [e.label, e.value].filter(Boolean).join(", "),
                    onClick: () => B(e),
                    onPointerEnter: () => s(e),
                    onPointerDown: () => s(e),
                    onMouseDown: l,
                    onFocus: () => L(e),
                    onBlur: N,
                    onKeyDown: (E) => W(E, e)
                  },
                  e.index
                ))
              ] })
            }
          )
        ]
      }
    ),
    p && /* @__PURE__ */ r("div", { className: a.legend, children: /* @__PURE__ */ r(P, { orientation: z, items: v }) })
  ] });
};
export {
  H as ChartDonut
};
