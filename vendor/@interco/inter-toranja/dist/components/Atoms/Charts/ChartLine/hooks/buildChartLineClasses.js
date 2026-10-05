import { classNamesMerge as i } from "../../../../../utils/classNamesMerge.js";
const e = "chart-line", a = (t, s, _, l) => ({
  container: i(e, {
    [`${e}--small`]: t,
    [`${e}--large`]: !t,
    [`${e}--skeleton`]: s,
    [`${e}--y-start`]: _ === "start",
    [`${e}--y-end`]: _ === "end",
    [`${e}--fill-height`]: l
  }),
  body: `${e}__body`,
  yAxis: `${e}__y-axis`,
  yAxisSizer: `${e}__y-axis-sizer`,
  yAxisSizerLabel: i(`${e}__y-axis-sizer-label`, "type-caption-regular"),
  yAxisLabel: i(`${e}__y-axis-label`, "type-caption-regular"),
  plot: `${e}__plot`,
  chart: `${e}__chart`,
  grid: `${e}__grid`,
  gridLine: `${e}__grid-line`,
  series: `${e}__series`,
  seriesAnimated: i(`${e}__series`, `${e}__series--animated`),
  dot: `${e}__dot`,
  threshold: `${e}__threshold`,
  highlight: `${e}__highlight`,
  highlightLine: `${e}__highlight-line`,
  highlightDot: `${e}__highlight-dot`,
  xAxis: `${e}__x-axis`,
  xAxisLabel: i(`${e}__x-axis-label`, "type-caption-regular"),
  tooltip: `${e}__tooltip`,
  skeletonChart: `${e}__skeleton-chart`
});
export {
  a as buildChartLineClasses
};
