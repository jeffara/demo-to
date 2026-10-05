import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { useChartMeter as V } from "./hooks/useChartMeter.js";
import { TextWeight as i, TextType as d, TextSize as a } from "../../Text/types.js";
import { Legend as I } from "../Legend/Legend.js";
import { Text as r } from "../../Text/Text.js";
import { STATE as l } from "../../../../utils/pattern.js";
import '../../../../assets/components/Atoms/Charts/ChartMeter/ChartMeter.modules.css';/* empty css                        */
const D = ({
  state: p,
  title: n,
  bars: S,
  total: v,
  leadingLabel: c,
  leadingValue: N,
  trailingLabel: m,
  trailingValue: y,
  isSensitiveText: B,
  legend: E = [],
  value: z,
  valueBuilder: W,
  forceColor: k,
  othersColor: M,
  palette: f
}) => {
  const {
    isSkeleton: L,
    barItems: K,
    formattedLeadingValue: h,
    formattedTrailingValue: x,
    legendItems: g,
    shouldShowLegend: T,
    classes: t,
    containerAccessibility: u,
    meterAccessibility: O
  } = V({
    state: p,
    title: n,
    bars: S,
    total: v,
    legend: E,
    value: z,
    valueBuilder: W,
    isSensitiveText: B,
    forceColor: k,
    othersColor: M,
    palette: f,
    leadingValue: N,
    trailingValue: y
  });
  return L ? /* @__PURE__ */ o("div", { "data-testid": "container", className: t.container, ...u, children: [
    n && /* @__PURE__ */ e(
      r,
      {
        state: l.SKELETON,
        textSize: a.Medium,
        textType: d.Body,
        textWeight: i.Regular,
        children: n
      }
    ),
    /* @__PURE__ */ e("div", { className: t.skeletonBars }),
    /* @__PURE__ */ o("div", { className: t.details, children: [
      /* @__PURE__ */ o("div", { className: t.leading, children: [
        h !== void 0 && /* @__PURE__ */ e(
          r,
          {
            state: l.SKELETON,
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Bold,
            children: h
          }
        ),
        c && /* @__PURE__ */ e(
          r,
          {
            state: l.SKELETON,
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Regular,
            children: c
          }
        )
      ] }),
      y !== void 0 && /* @__PURE__ */ o("div", { className: t.trailing, children: [
        x !== void 0 && /* @__PURE__ */ e(
          r,
          {
            state: l.SKELETON,
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Bold,
            children: x
          }
        ),
        m && /* @__PURE__ */ e(
          r,
          {
            state: l.SKELETON,
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Regular,
            children: m
          }
        )
      ] })
    ] }),
    T && /* @__PURE__ */ e("div", { "data-testid": "legend-skeleton", className: t.skeletonLegend, children: g.map((s, R) => /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `legend-skeleton-item-${R + 1}`,
        className: t.skeletonLegendItem,
        children: [
          /* @__PURE__ */ o("div", { className: t.skeletonLegendLabel, children: [
            /* @__PURE__ */ e("div", { className: t.skeletonLegendIndicator }),
            /* @__PURE__ */ e(
              r,
              {
                state: l.SKELETON,
                textSize: a.Small,
                textType: d.Body,
                textWeight: i.Regular,
                children: s.label
              }
            )
          ] }),
          /* @__PURE__ */ e(
            r,
            {
              state: l.SKELETON,
              textSize: a.Small,
              textType: d.Body,
              textWeight: i.Bold,
              children: s.value
            }
          )
        ]
      },
      `${s.label}-${s.color}`
    )) })
  ] }) : /* @__PURE__ */ o("div", { "data-testid": "container", className: t.container, ...u, children: [
    n && /* @__PURE__ */ e(
      r,
      {
        textSize: a.Medium,
        textType: d.Body,
        textWeight: i.Regular,
        colorVariant: "secondary",
        children: n
      }
    ),
    /* @__PURE__ */ o("div", { "data-testid": "bars", className: t.bars, ...O, children: [
      K.map((s) => /* @__PURE__ */ e(
        "div",
        {
          "data-testid": s.testId,
          className: t.bar,
          style: {
            width: s.width,
            backgroundColor: s.backgroundColor
          }
        },
        s.key
      )),
      /* @__PURE__ */ e("div", { className: t.background })
    ] }),
    /* @__PURE__ */ o("div", { className: t.details, children: [
      /* @__PURE__ */ o("div", { className: t.leading, children: [
        h !== void 0 && /* @__PURE__ */ e(
          r,
          {
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Bold,
            colorVariant: "primary",
            children: h
          }
        ),
        c && /* @__PURE__ */ e(
          r,
          {
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Regular,
            colorVariant: "secondary",
            children: c
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: t.trailing, children: [
        x !== void 0 && /* @__PURE__ */ e(
          r,
          {
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Bold,
            colorVariant: "primary",
            children: x
          }
        ),
        m && /* @__PURE__ */ e(
          r,
          {
            textSize: a.Medium,
            textType: d.Body,
            textWeight: i.Regular,
            colorVariant: "secondary",
            children: m
          }
        )
      ] })
    ] }),
    T && /* @__PURE__ */ e(I, { orientation: "vertical", items: g })
  ] });
};
export {
  D as ChartMeter
};
