import { useRef as P, useState as k, useMemo as d, useLayoutEffect as bt } from "react";
import { getYDomain as vt, buildSeriesPaths as At, resolveXLabelLeft as St, buildYTickLabels as Ct, buildLegendItems as yt } from "../ChartLine.helper.js";
import { buildChartLineClasses as Ht } from "./buildChartLineClasses.js";
import { resolveChartLineFlags as Et, resolveChartLineVisibility as xt, resolveHighlightDerived as Rt, buildAccessibleName as It, buildContainerAccessibility as Wt } from "./resolveChartLineState.js";
import { useChartLineInteraction as _t } from "./useChartLineInteraction.js";
import { SIZE as zt, STATE as Dt } from "../../../../../utils/pattern.js";
import { resolveChartHeight as Pt, resolveChartAreaHeight as kt } from "../../shared/resolveChartState.js";
import { filterLabelsByInterval as Ft, resolveGridY as Mt } from "../../shared/chart.helper.js";
const Kt = ({
  size: F = zt.LARGE,
  state: M = Dt.ENABLED,
  series: t,
  categories: s,
  yLabels: A,
  xLabelInterval: S,
  yLabelInterval: C,
  showDots: Y = !1,
  showXAxis: G,
  showYAxis: N,
  yAxisPosition: p = "start",
  showGridLines: X,
  showLegend: B,
  showTooltip: O,
  isSelectionSticky: T = !1,
  threshold: c,
  chartWidth: q,
  chartHeight: y,
  shouldFillHeight: K = !1,
  valueBuilder: w,
  isSensitiveText: b = !1,
  forceColor: h,
  palette: a = "categorical",
  ariaLabel: V,
  onHighlightChange: Z,
  onTag: j
}) => {
  const H = P(null), v = P(null), [E, J] = k(0), [Q, U] = k(0), { isSkeleton: m, isSmall: u, isInteractive: g, canFillHeight: r, containerWidth: x } = Et(F, M, K, q), n = Pt({
    chartHeight: y,
    canFillHeight: r,
    isSmall: u,
    measuredHeight: Q
  }), f = Math.max(E, 1), $ = E > 0, tt = kt(r, n), {
    shouldShowXAxis: R,
    shouldShowYAxis: I,
    shouldShowGridLines: W,
    shouldShowLegend: _,
    shouldShowTooltip: z,
    shouldShowDots: et
  } = xt({
    isInteractive: g,
    showXAxis: G,
    showYAxis: N,
    showGridLines: X,
    showLegend: B,
    showTooltip: O,
    showDots: Y,
    seriesCount: t.length
  }), o = d(() => vt(t, c), [t, c]), it = d(
    () => At(
      t,
      s,
      f,
      n,
      o,
      h,
      a
    ),
    [t, s, f, n, o, h, a]
  ), nt = d(
    () => Ft(s, S).map((e) => ({
      ...e,
      left: St(e.position)
    })),
    [s, S]
  ), ot = d(
    () => Ct(
      o.min,
      o.max,
      A,
      C,
      w,
      b
    ).map((e) => ({
      ...e,
      offset: Mt(e.position, n)
    })),
    [
      o.min,
      o.max,
      A,
      C,
      w,
      b,
      n
    ]
  ), st = d(
    () => yt(t, h, a),
    [t, h, a]
  ), {
    highlight: D,
    handlePointerPreview: ht,
    handlePointerLeave: at,
    handleClick: rt,
    handleKeyDown: lt,
    handleBlur: dt
  } = _t({
    isInteractive: g,
    isSelectionSticky: T,
    categories: s,
    series: t,
    forceColor: h,
    palette: a,
    valueBuilder: w,
    isSensitiveText: b,
    taggingProperties: {
      x_axis: R,
      y_axis: I,
      y_axis_position: p,
      grid_lines: W,
      threshold: c !== void 0,
      tooltip: z,
      default_legend: _
    },
    chartRef: v,
    containerRef: H,
    onHighlightChange: Z,
    onTag: j
  }), { tooltipItems: ct, highlightX: mt, highlightAnnouncement: ut, thresholdY: gt } = Rt({
    highlight: D,
    categoriesCount: s.length,
    plotWidth: f,
    threshold: c,
    domain: o,
    chartHeight: n
  }), ft = Ht(u, m, p, r), Lt = It(V, t.length), pt = Wt(
    m,
    g,
    Lt
  );
  return bt(() => {
    const e = v.current;
    if (!e)
      return;
    const l = () => {
      const L = e.getBoundingClientRect();
      L.width > 0 && J(L.width), r && L.height > 0 && U(L.height);
    };
    l();
    const wt = requestAnimationFrame(l), i = typeof ResizeObserver > "u" ? void 0 : new ResizeObserver(l);
    return i == null || i.observe(e), i || window.addEventListener("resize", l), () => {
      cancelAnimationFrame(wt), i == null || i.disconnect(), i || window.removeEventListener("resize", l);
    };
  }, [u, m, r, x, y]), {
    isSkeleton: m,
    isSmall: u,
    isInteractive: g,
    chartHeight: n,
    chartAreaHeight: tt,
    plotWidth: f,
    shouldLockPlotWidth: $,
    containerWidth: x,
    yAxisPosition: p,
    shouldShowXAxis: R,
    shouldShowYAxis: I,
    shouldShowGridLines: W,
    shouldShowLegend: _,
    shouldShowTooltip: z,
    shouldShowDots: et,
    seriesPaths: it,
    xLabels: nt,
    yLabels: ot,
    legendItems: st,
    thresholdY: gt,
    highlight: D,
    tooltipItems: ct,
    highlightX: mt,
    highlightAnnouncement: ut,
    classes: ft,
    containerAccessibility: pt,
    containerRef: H,
    chartRef: v,
    handlePointerPreview: ht,
    handlePointerLeave: at,
    handleClick: rt,
    handleKeyDown: lt,
    handleBlur: dt
  };
};
export {
  Kt as useChartLine
};
