import { formatDisplayValue as m } from "../../shared/chart.helper.js";
import { buildDonutSliceItems as E, CHART_GEOMETRY as T, MIN_CENTER_VALUE_FONT_SIZE_PX as h, formatMonetarySliceValue as y } from "../ChartDonut.helper.js";
import { classNamesMerge as A } from "../../../../../utils/classNamesMerge.js";
import { SIZE as b, STATE as L } from "../../../../../utils/pattern.js";
const S = "Gráfico de rosca", d = "var(--color-surface-neutral-default)", _ = "var(--color-surface-disabled)", V = (e, r, t) => {
  const o = e === b.SMALL, s = r === L.SKELETON || t;
  return {
    isSmall: o,
    isSkeleton: s,
    isInteractive: !s
  };
}, p = (e, r, t, o) => (e ?? r) && !t && o > 0, N = (e, r, t, o, s, n, c) => {
  const l = y(
    s,
    o[e] ?? 0,
    n,
    c
  );
  return {
    centerLabel: r[e] ?? "",
    centerValue: l ?? t[e] ?? ""
  };
}, z = ({
  isSmall: e,
  isSkeleton: r,
  highlightedIndex: t,
  labels: o,
  formattedValues: s,
  slices: n,
  totalLabel: c,
  totalValue: l,
  valueBuilder: i,
  isSensitiveText: u
}) => {
  const a = !!c, f = !e && !r && (a || l !== void 0), C = m(l, i, u) ?? "";
  return t === null ? {
    shouldShowCenterLabel: a,
    shouldShowCenterText: f,
    centerLabel: c ?? "",
    centerValue: C
  } : {
    shouldShowCenterLabel: a,
    shouldShowCenterText: f,
    ...N(
      t,
      o,
      s,
      n,
      l,
      i,
      u
    )
  };
}, B = (e) => e ? {
  trackColor: _,
  containerAccessibility: { "aria-busy": !0, "aria-label": S },
  chartAccessibility: { "aria-hidden": !0 }
} : {
  trackColor: d,
  containerAccessibility: { role: "group", "aria-label": S },
  chartAccessibility: {}
}, F = (e, r, t, o, s, n) => e ? [] : E(r, t, o, s, n), H = (e, r, t) => e.map((o) => ({
  ...o,
  chartClass: A(o.chartClass, {
    [t]: r !== null && r !== o.index
  })
})), K = (e, r) => {
  const t = e == null ? void 0 : e.firstElementChild;
  if (!(t instanceof HTMLElement) || !r)
    return;
  t.style.fontSize = "";
  let o = Number.parseFloat(getComputedStyle(t).fontSize);
  if (Number.isFinite(o))
    for (; t.scrollWidth > T.centerTextWidth && o > h; )
      o -= 1, t.style.fontSize = `${o}px`;
};
export {
  H as applySliceHighlightClasses,
  K as fitCenterValueFontSize,
  F as resolveBaseSliceItems,
  z as resolveCenterPresentation,
  B as resolveChartDonutAccessibility,
  V as resolveChartDonutFlags,
  p as resolveShouldShowLegend
};
