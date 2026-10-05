import { DEFAULT_SMALL_CHART_HEIGHT as s, DEFAULT_LARGE_CHART_HEIGHT as n } from "./chart.helper.js";
import { STATE as u, SIZE as A } from "../../../../utils/pattern.js";
const g = (t, e, r, o) => {
  const i = e === u.SKELETON, l = t === A.SMALL;
  return {
    isSkeleton: i,
    isSmall: l,
    isInteractive: !l && !i,
    canFillHeight: l && r,
    containerWidth: l ? o : void 0
  };
}, d = ({
  chartHeight: t,
  canFillHeight: e,
  isSmall: r,
  measuredHeight: o
}) => t ?? (e ? o || s : r ? s : n), f = (t, e) => t ? "100%" : e, S = ({
  isInteractive: t,
  showXAxis: e,
  showYAxis: r,
  showGridLines: o,
  showLegend: i,
  showTooltip: l,
  itemsCount: a,
  defaultShowLegend: h = !1
}) => ({
  shouldShowXAxis: t && (e ?? !0),
  shouldShowYAxis: t && (r ?? !0),
  shouldShowGridLines: t && (o ?? !0),
  shouldShowLegend: t && (i ?? h) && a > 0,
  shouldShowTooltip: t && (l ?? !0)
}), L = (t, e) => t ?? e, T = ({
  isSkeleton: t,
  isInteractive: e,
  accessibleName: r,
  keyShortcuts: o
}) => t ? {
  "aria-busy": !0,
  "aria-label": r
} : e ? {
  role: "application",
  tabIndex: 0,
  "aria-label": r,
  ...o ? { "aria-keyshortcuts": o } : {}
} : {
  role: "img",
  "aria-label": r
};
export {
  T as buildContainerAccessibility,
  L as resolveAccessibleName,
  f as resolveChartAreaHeight,
  g as resolveChartFlags,
  d as resolveChartHeight,
  S as resolveChartVisibility
};
