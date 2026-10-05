import { scaleY as c, buildHighlightAnnouncement as a, scaleX as h, buildTooltipItems as m } from "../ChartLine.helper.js";
import { resolveChartFlags as u, resolveChartVisibility as b, resolveAccessibleName as d, buildContainerAccessibility as g } from "../../shared/resolveChartState.js";
import { resolveChartAreaHeight as L, resolveChartHeight as X } from "../../shared/resolveChartState.js";
const C = (e, i, t, o) => u(e, i, t, o), p = ({
  isInteractive: e,
  showXAxis: i,
  showYAxis: t,
  showGridLines: o,
  showLegend: l,
  showTooltip: n,
  showDots: s,
  seriesCount: r
}) => ({
  ...b({
    isInteractive: e,
    showXAxis: i,
    showYAxis: t,
    showGridLines: o,
    showLegend: l,
    showTooltip: n,
    itemsCount: r,
    defaultShowLegend: !0
  }),
  shouldShowDots: e && s
}), f = (e, i) => d(
  e,
  `Gráfico de linha com ${i} série${i === 1 ? "" : "s"}`
), y = (e, i, t) => g({
  isSkeleton: e,
  isInteractive: i,
  accessibleName: t
}), x = ({
  highlight: e,
  categoriesCount: i,
  plotWidth: t,
  threshold: o,
  domain: l,
  chartHeight: n
}) => {
  const s = o === void 0 ? void 0 : c(o, l.min, l.max, n);
  return e === null ? {
    tooltipItems: [],
    highlightX: null,
    highlightAnnouncement: "",
    thresholdY: s
  } : {
    tooltipItems: m(e),
    highlightX: h(e.categoryIndex, i, t),
    highlightAnnouncement: a(e),
    thresholdY: s
  };
};
export {
  f as buildAccessibleName,
  y as buildContainerAccessibility,
  L as resolveChartAreaHeight,
  X as resolveChartHeight,
  C as resolveChartLineFlags,
  p as resolveChartLineVisibility,
  x as resolveHighlightDerived
};
