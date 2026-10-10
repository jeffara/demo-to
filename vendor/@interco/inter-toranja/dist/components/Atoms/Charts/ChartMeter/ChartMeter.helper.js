import { DEFAULT_CHART_PALETTE as n, formatDisplayValue as m, getChartPaletteColors as _ } from "../shared/chart.helper.js";
const s = 6, B = "Outros", o = (t, l, e) => {
  if (t.length <= s)
    return { bars: t, label: l, value: e };
  const a = t.slice(s - 1).reduce((r, u) => r + u, 0);
  return {
    bars: [...t.slice(0, s - 1), a],
    label: [...l.slice(0, s - 1), B],
    value: [
      ...e.slice(0, s - 1),
      e.slice(s - 1).reduce((r, u) => r + u, 0)
    ]
  };
}, p = (t, l) => t.map((e) => l > 0 ? e / l * 100 : 0), E = (t, l, e, a, r = n) => l && t === s - 1 && a ? a : (e == null ? void 0 : e[t]) ?? _(r)[t], L = (t, l, e, a, r, u, A = n) => t.bars.map((g, c) => ({
  label: t.label[c] ?? "-",
  value: m(t.value[c], e, a) ?? "-",
  color: E(c, l, r, u, A)
}));
export {
  s as MAX_BARS,
  L as buildLegendItems,
  p as computeBarPercentages,
  o as groupOverflowBars,
  E as resolveBarColor
};
