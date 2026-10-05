import { classNamesMerge as e } from "../../../../../utils/classNamesMerge.js";
const a = "chart-bar", $ = (r, i, _, t, l) => ({
  container: e(a, {
    [`${a}--small`]: r,
    [`${a}--large`]: !r,
    [`${a}--skeleton`]: i,
    [`${a}--vertical`]: _ === "vertical",
    [`${a}--horizontal`]: _ === "horizontal",
    [`${a}--y-start`]: t === "start",
    [`${a}--y-end`]: t === "end",
    [`${a}--fill-height`]: l
  }),
  body: `${a}__body`,
  yAxis: `${a}__y-axis`,
  yAxisSizer: `${a}__y-axis-sizer`,
  yAxisSizerLabel: e(`${a}__y-axis-sizer-label`, "type-caption-regular"),
  yAxisLabel: e(`${a}__y-axis-label`, "type-caption-regular"),
  plot: `${a}__plot`,
  chart: `${a}__chart`,
  grid: `${a}__grid`,
  gridLine: `${a}__grid-line`,
  bars: `${a}__bars`,
  bar: `${a}__bar`,
  barAnimated: `${a}__bar--animated`,
  barNegative: `${a}__bar--negative`,
  barDimmed: `${a}__bar--dimmed`,
  threshold: `${a}__threshold`,
  xAxis: `${a}__x-axis`,
  xAxisLabel: e(`${a}__x-axis-label`, "type-caption-regular"),
  tooltip: `${a}__tooltip`,
  skeletonChart: `${a}__skeleton-chart`
});
export {
  $ as buildChartBarClasses
};
