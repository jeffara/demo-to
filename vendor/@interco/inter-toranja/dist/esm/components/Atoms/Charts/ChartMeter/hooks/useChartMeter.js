import { useRef as C, useMemo as n, useState as H, useEffect as K } from "react";
import { DEFAULT_CHART_PALETTE as U, formatDisplayValue as T } from "../../shared/chart.helper.js";
import { MAX_BARS as X, groupOverflowBars as v, computeBarPercentages as F, resolveBarColor as j, buildLegendItems as q } from "../ChartMeter.helper.js";
import { classNamesMerge as e } from "../../../../../utils/classNamesMerge.js";
import { STATE as S } from "../../../../../utils/pattern.js";
const t = "chart-meter", M = "chart-meter__skeleton", h = 100, z = {
  container: e(t),
  bars: e(`${t}__bars`),
  bar: e(`${t}__bar`),
  background: e(`${t}__background`),
  details: e(`${t}__details`),
  leading: e(`${t}__leading`),
  trailing: e(`${t}__trailing`),
  skeletonBars: e(M, `${M}--bars`),
  skeletonLegend: e(`${t}__skeleton-legend`),
  skeletonLegendItem: e(`${t}__skeleton-legend-item`),
  skeletonLegendIndicator: e(`${t}__skeleton-legend-indicator`),
  skeletonLegendLabel: e(`${t}__skeleton-legend-label`)
}, Z = ({
  state: p = S.ENABLED,
  title: R,
  bars: g,
  total: I,
  legend: f = [],
  value: L = [],
  valueBuilder: c,
  isSensitiveText: l = !1,
  forceColor: i,
  othersColor: m,
  palette: _ = U,
  leadingValue: O,
  trailingValue: w
}) => {
  const E = C(null), s = p === S.SKELETON, u = g.length > X, a = n(() => v(g, f, L), [g, f, L]), A = I ?? a.bars.reduce((b, r) => b + r, 0), o = n(
    () => F(a.bars, A),
    [a.bars, A]
  ), [k, y] = H(() => o.map(() => 0)), B = n(
    () => a.bars.map((b, r) => ({
      key: `${a.label[r] ?? "bar"}-${r}`,
      testId: `bar-${r + 1}`,
      width: `${k[r] ?? 0}%`,
      backgroundColor: j(r, u, i, m, _)
    })),
    [a.bars, a.label, k, u, i, m, _]
  ), N = n(
    () => q(
      a,
      u,
      c,
      l,
      i,
      m,
      _
    ),
    [a, u, c, l, i, m, _]
  ), P = f.length > 0 && a.bars.length > 0, $ = n(
    () => Math.min(
      h,
      Math.round(o.reduce((b, r) => b + r, 0))
    ),
    [o]
  ), d = R ?? "Medidor", V = n(() => s ? {
    "aria-busy": !0,
    "aria-label": d
  } : {}, [s, d]), D = n(() => {
    if (!s)
      return {
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": h,
        "aria-valuenow": $,
        "aria-label": d
      };
  }, [s, $, d]);
  return K(() => (E.current = setTimeout(() => {
    y(o);
  }, 100), () => {
    E.current && clearTimeout(E.current);
  }), [o]), {
    isSkeleton: s,
    barItems: B,
    formattedLeadingValue: T(O, c, l),
    formattedTrailingValue: T(w, c, l),
    legendItems: N,
    shouldShowLegend: P,
    classes: z,
    containerAccessibility: V,
    meterAccessibility: D
  };
};
export {
  Z as useChartMeter
};
