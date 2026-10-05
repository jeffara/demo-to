import { classNamesMerge as l } from "../../../../../utils/classNamesMerge.js";
const e = "chart-donut", _ = "progress-circle__circle--dimmed", o = (t, r, c) => ({
  container: l(e, {
    [`${e}--small`]: t,
    [`${e}--large`]: !t,
    [`${e}--font-break`]: t && r,
    [`${e}--skeleton`]: c
  }),
  chart: `${e}__chart`,
  svg: `${e}__svg`,
  centerText: "progress-circle__circle--text",
  centerLabel: `${e}__total-label`,
  centerValue: `${e}__total-value`,
  legend: `${e}__legend`,
  dimmedSlice: _
});
export {
  _ as DIMMED_SLICE_CLASS,
  o as buildChartDonutClasses
};
