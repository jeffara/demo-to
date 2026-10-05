import { useRef as z, useState as P, useMemo as n, useLayoutEffect as ve } from "react";
import { syncChartBarSeries as De, getValueDomain as Ee, buildBarRects as Te, buildCategoryAxisLabels as Be, buildValueTickLabels as Ge, resolveCategoryLabelLeft as X, buildLegendItems as Ne } from "../ChartBar.helper.js";
import { buildChartBarClasses as Ie } from "./buildChartBarClasses.js";
import { resolveChartBarFlags as We, resolveChartBarVisibility as xe, resolveHighlightDerived as Fe, buildAccessibleName as Me, buildContainerAccessibility as Oe } from "./resolveChartBarState.js";
import { useChartBarInteraction as Ve } from "./useChartBarInteraction.js";
import { SIZE as ke, STATE as ze } from "../../../../../utils/pattern.js";
import { resolveChartHeight as Pe, resolveChartAreaHeight as Xe } from "../../shared/resolveChartState.js";
import { resolveGridX as Y, resolveGridY as Z, CHART_VERTICAL_PADDING as Ye, CHART_HORIZONTAL_PADDING as Ze } from "../../shared/chart.helper.js";
const tt = ({
  size: q = ke.LARGE,
  state: K = ze.ENABLED,
  orientation: o = "vertical",
  categories: D,
  values: E,
  valueLabels: T,
  xLabelInterval: f,
  yLabelInterval: p,
  showXAxis: j,
  showYAxis: J,
  yAxisPosition: _ = "start",
  showGridLines: Q,
  showLegend: U,
  showTooltip: $,
  isSelectionSticky: ee = !1,
  threshold: A,
  chartWidth: te,
  chartHeight: B,
  shouldFillHeight: se = !1,
  valueBuilder: u,
  isSensitiveText: m = !1,
  forceColor: C,
  palette: w,
  ariaLabel: oe,
  onHighlightChange: ie,
  onTag: re
}) => {
  const G = z(null), y = z(null), [N, ne] = P(0), [he, ce] = P(0), { categories: i, values: a } = n(
    () => De(D, E),
    [D, E]
  ), { isSkeleton: L, isSmall: R, isInteractive: b, canFillHeight: g, containerWidth: I } = We(q, K, se, te), h = Pe({
    chartHeight: B,
    canFillHeight: g,
    isSmall: R,
    measuredHeight: he
  }), c = Math.max(N, 1), ae = N > 0, de = Xe(g, h), t = o === "vertical", {
    shouldShowXAxis: W,
    shouldShowYAxis: x,
    shouldShowGridLines: F,
    shouldShowLegend: M,
    shouldShowTooltip: O
  } = xe({
    isInteractive: b,
    showXAxis: j,
    showYAxis: J,
    showGridLines: Q,
    showLegend: U,
    showTooltip: $,
    categoriesCount: i.length
  }), r = n(() => Ee(a, A), [a, A]), V = n(
    () => Te({
      categories: i,
      values: a,
      width: c,
      height: h,
      domain: r,
      orientation: o,
      forceColor: C,
      palette: w
    }),
    [i, a, c, h, r, o, C, w]
  ), H = n(
    () => Be(i, t ? f : p),
    [i, t, f, p]
  ), d = n(
    () => Ge(
      r.min,
      r.max,
      T,
      t ? p : f,
      u,
      m
    ),
    [
      r.min,
      r.max,
      T,
      t,
      p,
      f,
      u,
      m
    ]
  ), le = n(() => t ? H.map((e) => ({
    ...e,
    left: X(e.position)
  })) : d.map((e) => {
    const s = 1 - e.position;
    return {
      ...e,
      position: s,
      left: X(s),
      offset: Y(s, c)
    };
  }), [t, H, d, c]), v = n(() => t ? d.map((e) => ({
    ...e,
    offset: Z(e.position, h)
  })) : H.map((e) => ({
    ...e,
    offset: Z(e.position, h, Ye)
  })), [t, d, H, h]), ue = n(() => t ? v : d.map((e) => {
    const s = 1 - e.position;
    return {
      ...e,
      position: s,
      offset: Y(s, c, Ze)
    };
  }), [t, v, d, c]), me = n(
    () => Ne(i, a, C, w, u, m),
    [i, a, C, w, u, m]
  ), {
    highlight: k,
    handlePointerPreview: ge,
    handlePointerLeave: fe,
    handleClick: pe,
    handleKeyDown: Ae,
    handleBlur: Ce
  } = Ve({
    isInteractive: b,
    isSelectionSticky: ee,
    orientation: o,
    categories: i,
    values: a,
    valueBuilder: u,
    isSensitiveText: m,
    taggingProperties: {
      x_axis: W,
      y_axis: x,
      y_axis_position: _,
      grid_lines: F,
      threshold: A !== void 0 && r.shouldShowThreshold,
      tooltip: O,
      default_legend: M,
      orientation: o
    },
    chartRef: y,
    containerRef: G,
    onHighlightChange: ie,
    onTag: re
  }), { tooltipItems: we, highlightAnchor: Le, highlightAnnouncement: Re, thresholdPosition: be } = Fe({
    highlight: k,
    orientation: o,
    plotWidth: c,
    chartHeight: h,
    threshold: A,
    shouldShowThreshold: r.shouldShowThreshold,
    domain: r,
    barRectsCenters: V
  }), He = Ie(
    R,
    L,
    o,
    _,
    g
  ), Se = Me(oe, i.length), _e = Oe(
    L,
    b,
    Se
  );
  return ve(() => {
    const e = y.current;
    if (!e)
      return;
    const s = () => {
      const S = e.getBoundingClientRect();
      S.width > 0 && ne(S.width), g && S.height > 0 && ce(S.height);
    };
    s();
    const ye = requestAnimationFrame(s), l = typeof ResizeObserver > "u" ? void 0 : new ResizeObserver(s);
    return l == null || l.observe(e), () => {
      cancelAnimationFrame(ye), l == null || l.disconnect();
    };
  }, [R, L, g, I, B, o]), {
    isSkeleton: L,
    isSmall: R,
    isInteractive: b,
    orientation: o,
    chartHeight: h,
    chartAreaHeight: de,
    plotWidth: c,
    shouldAnimate: ae,
    containerWidth: I,
    yAxisPosition: _,
    shouldShowXAxis: W,
    shouldShowYAxis: x,
    shouldShowGridLines: F,
    shouldShowLegend: M,
    shouldShowTooltip: O,
    barRects: V,
    xLabels: le,
    yLabels: v,
    valueLabels: ue,
    legendItems: me,
    thresholdPosition: be,
    highlight: k,
    tooltipItems: we,
    highlightAnchor: Le,
    highlightAnnouncement: Re,
    classes: He,
    containerAccessibility: _e,
    containerRef: G,
    chartRef: y,
    handlePointerPreview: ge,
    handlePointerLeave: fe,
    handleClick: pe,
    handleKeyDown: Ae,
    handleBlur: Ce
  };
};
export {
  tt as useChartBar
};
