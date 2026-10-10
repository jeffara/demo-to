import { formatDisplayValue as m } from "../../shared/chart.helper.js";
import { resolveChartDonutCenterTextMaxWidth as E, CHART_GEOMETRY as T, MIN_CENTER_VALUE_FONT_SIZE_PX as y, buildDonutSliceItems as A, formatMonetarySliceValue as b } from "../ChartDonut.helper.js";
import { classNamesMerge as h } from "../../../../../utils/classNamesMerge.js";
import { SIZE as d, STATE as L } from "../../../../../utils/pattern.js";
const C = "Gráfico de rosca", _ = "var(--color-surface-neutral-default)", v = "var(--color-surface-disabled)", p = (e, r, o) => {
  const t = e === d.SMALL, s = r === L.SKELETON || o;
  return {
    isSmall: t,
    isSkeleton: s,
    isInteractive: !s
  };
}, z = (e, r, o, t) => (e ?? r) && !o && t > 0, N = (e, r, o, t, s, n, a) => {
  const l = b(
    s,
    t[e] ?? 0,
    n,
    a
  );
  return {
    centerLabel: r[e] ?? "",
    centerValue: l ?? o[e] ?? ""
  };
}, B = ({
  isSmall: e,
  isSkeleton: r,
  highlightedIndex: o,
  labels: t,
  formattedValues: s,
  slices: n,
  totalLabel: a,
  totalValue: l,
  valueBuilder: i,
  isSensitiveText: u
}) => {
  const c = !!a, f = !e && !r && (c || l !== void 0), S = m(l, i, u) ?? "";
  return o === null ? {
    shouldShowCenterLabel: c,
    shouldShowCenterText: f,
    centerLabel: a ?? "",
    centerValue: S
  } : {
    shouldShowCenterLabel: c,
    shouldShowCenterText: f,
    ...N(
      o,
      t,
      s,
      n,
      l,
      i,
      u
    )
  };
}, F = (e) => e ? {
  trackColor: v,
  containerAccessibility: { "aria-busy": !0, "aria-label": C },
  chartAccessibility: { "aria-hidden": !0 }
} : {
  trackColor: _,
  containerAccessibility: { role: "group", "aria-label": C },
  chartAccessibility: {}
}, H = (e, r, o, t, s, n) => e ? [] : A(r, o, t, s, n), K = (e, r, o) => e.map((t) => ({
  ...t,
  chartClass: h(t.chartClass, {
    [o]: r !== null && r !== t.index
  })
})), k = (e, r, o) => {
  const t = e == null ? void 0 : e.firstElementChild;
  if (!(t instanceof HTMLElement) || !r)
    return;
  const s = o !== void 0 && o > 0 ? E(o) : T.centerTextWidth;
  t.style.fontSize = "";
  let n = Number.parseFloat(getComputedStyle(t).fontSize);
  if (Number.isFinite(n))
    for (; t.scrollWidth > s && n > y; )
      n -= 1, t.style.fontSize = `${n}px`;
};
export {
  K as applySliceHighlightClasses,
  k as fitCenterValueFontSize,
  H as resolveBaseSliceItems,
  B as resolveCenterPresentation,
  F as resolveChartDonutAccessibility,
  p as resolveChartDonutFlags,
  z as resolveShouldShowLegend
};
