import { scaleValueAxis as g, buildHighlightAnnouncement as m, buildTooltipItems as u } from "../ChartBar.helper.js";
import { resolveChartFlags as d, resolveChartVisibility as v, resolveAccessibleName as b, buildContainerAccessibility as C } from "../../shared/resolveChartState.js";
import { resolveChartAreaHeight as E, resolveChartHeight as G } from "../../shared/resolveChartState.js";
import { CHART_VERTICAL_PADDING as f, CHART_HORIZONTAL_PADDING as p } from "../../shared/chart.helper.js";
const N = (e, i, o, t) => d(e, i, o, t), R = ({
  isInteractive: e,
  showXAxis: i,
  showYAxis: o,
  showGridLines: t,
  showLegend: r,
  showTooltip: c,
  categoriesCount: l
}) => v({
  isInteractive: e,
  showXAxis: i,
  showYAxis: o,
  showGridLines: t,
  showLegend: r,
  showTooltip: c,
  itemsCount: l,
  defaultShowLegend: !1
}), T = (e, i) => b(
  e,
  `Gráfico de barras com ${i} categoria${i === 1 ? "" : "s"}`
), V = (e, i, o) => C({
  isSkeleton: e,
  isInteractive: i,
  accessibleName: o,
  keyShortcuts: i ? "ArrowLeft ArrowRight ArrowUp ArrowDown Enter Space Escape" : void 0
}), H = (e, i, o) => e ? i : o, y = (e) => e ? f : p, w = (e) => e.x + e.width / 2, I = (e) => e.y + e.height / 2, L = ({
  highlight: e,
  orientation: i,
  plotWidth: o,
  chartHeight: t,
  threshold: r,
  shouldShowThreshold: c,
  domain: l,
  barRectsCenters: A
}) => {
  const s = i === "vertical", h = !c || r === void 0 ? void 0 : g(
    r,
    l.min,
    l.max,
    H(s, t, o),
    y(s),
    s
  );
  if (e === null)
    return {
      tooltipItems: [],
      highlightAnchor: null,
      highlightAnnouncement: "",
      thresholdPosition: h
    };
  const n = A[e.categoryIndex];
  let a = null;
  return n && s ? a = w(n) : n && (a = I(n)), {
    tooltipItems: u(e),
    highlightAnchor: a,
    highlightAnnouncement: m(e),
    thresholdPosition: h
  };
};
export {
  T as buildAccessibleName,
  V as buildContainerAccessibility,
  E as resolveChartAreaHeight,
  N as resolveChartBarFlags,
  R as resolveChartBarVisibility,
  G as resolveChartHeight,
  L as resolveHighlightDerived
};
