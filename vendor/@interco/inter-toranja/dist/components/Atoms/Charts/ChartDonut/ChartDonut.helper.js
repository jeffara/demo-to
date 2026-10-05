import { formatDisplayValue as I, maskValue as b, getChartPaletteColors as y, DEFAULT_CHART_PALETTE as C } from "../shared/chart.helper.js";
const h = 16, T = 1.5, a = 6, A = 1, R = "Outros", D = 0.78, N = 216, S = N / 2, O = Math.round(S * (1 - D)), E = S - O / 2, _ = {
  viewBoxSize: N,
  center: S,
  radius: E,
  strokeWidth: O,
  circumference: Number((2 * Math.PI * E).toFixed(0)),
  centerTextWidth: 136,
  centerTextHeight: 40,
  sliceStartTransform: `rotate(-90 ${S} ${S})`
}, Z = 10, L = "R$", g = (e) => e.trimStart().startsWith(L), P = (e, r) => typeof e == "string" ? g(e) : !!(r != null && r.prefix && g(r.prefix)), M = (e) => {
  const t = e.replace(/R\$\s*/g, "").trim().replace(/\./g, "").replace(",", "."), n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : null;
}, w = (e) => e.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }).replace(/\u00a0/g, " "), V = (e, r, t, n = !1) => {
  if (!P(e, t) || e === void 0)
    return;
  if (typeof e == "number")
    return I(r / 100 * e, t, n);
  const s = M(e);
  if (s === null)
    return;
  const c = w(r / 100 * s);
  return n ? b(c) : c;
};
function K(e, r) {
  return !e || !r || e.length !== r.length ? !1 : e.every((t, n) => t === r[n]);
}
const Y = (e) => e / h > T, q = () => {
  if (typeof document > "u")
    return h;
  const e = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  return Number.isFinite(e) ? e : h;
}, F = (e) => `${e / 100 * _.circumference} ${_.circumference}`, z = (e) => -(e / 100 * _.circumference), U = (e, r, t) => {
  const n = e.length > a;
  if (!n)
    return { slice: e, label: r, value: t, hasOverflow: n };
  const s = e.slice(a - 1), c = t.slice(a - 1), i = c.length > 0 && c.every((l) => typeof l == "number");
  return {
    slice: [
      ...e.slice(0, a - 1),
      s.reduce((l, o) => l + o, 0)
    ],
    label: [...r.slice(0, a - 1), R],
    value: [
      ...t.slice(0, a - 1),
      i ? c.reduce((l, o) => l + Number(o), 0) : s.reduce((l, o) => l + o, 0)
    ],
    hasOverflow: !0
  };
}, v = (e) => e === R, $ = (e, r, t) => e === void 0 || !Number.isInteger(e) ? !1 : e >= 0 && e <= r && !t.has(e), B = (e, r) => r.slice !== e.slice ? r.slice - e.slice : e.originalIndex - r.originalIndex, H = (e, r, t) => {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), c = [];
  e.forEach((o) => {
    const u = r == null ? void 0 : r[o.originalIndex];
    if (!$(u, t, n)) {
      c.push(o);
      return;
    }
    n.add(u), s.set(u, o);
  }), c.sort(B);
  const i = [];
  let l = 0;
  return e.forEach((o, u) => {
    const m = s.get(u);
    if (m) {
      i.push(m);
      return;
    }
    const p = c[l];
    p && (i.push(p), l += 1);
  }), i;
}, W = (e, r) => ({
  slice: e.map((t) => t.slice),
  label: e.map((t) => t.label),
  value: e.map((t) => t.value),
  forceColor: r ? e.map((t) => r[t.originalIndex]) : void 0
}), X = ({
  slice: e,
  label: r,
  value: t,
  forceIndex: n,
  forceColor: s
}) => {
  const c = e.map((f, d) => ({
    originalIndex: d,
    slice: f,
    label: r[d] ?? "",
    value: t[d] ?? f
  })), i = c.filter((f) => !v(f.label)), l = c.filter((f) => v(f.label)), u = e.length > a ? a - 1 : i.length, m = Math.min(i.length, u) - 1, p = H(i, n, m);
  return W([...p, ...l], s);
}, G = (e) => {
  const r = X(e), t = U(r.slice, r.label, r.value);
  return r.forceColor ? {
    ...t,
    forceColor: t.hasOverflow ? r.forceColor.slice(0, a - 1) : r.forceColor
  } : t;
}, j = (e) => e.map((r) => r > 0 ? Math.max(r, A) : 0), k = ({
  index: e,
  hasOverflow: r,
  forceColor: t,
  othersColor: n,
  palette: s = C
}) => r && e === a - 1 && n ? n : (t == null ? void 0 : t[e]) ?? y(s)[e] ?? "var(--color-chart-categorical-1)", J = (e, r, t = !1) => e.map((n) => I(n, r, t) ?? ""), Q = (e, r) => r ?? (e ? "vertical" : "horizontal"), ee = (e, r, t, n, s = { hasOverflow: !1 }) => e.slice(0, a).flatMap((l, o) => {
  if (!l)
    return [];
  const u = r.slice(0, o).reduce((f, d) => f + (d ?? 0), 0), m = r[o] ?? 0, p = o + 1;
  return [
    {
      index: o,
      percentage: m,
      dashoffset: z(u),
      dasharray: F(m),
      color: k({ ...s, index: o }),
      label: t[o] ?? "",
      value: n[o] ?? "",
      chartClass: `progress-circle__circle progress-circle__circle--slice progress-circle__circle--chart${p}`,
      testId: `circle${p}`,
      pointerEvents: "visibleStroke"
    }
  ];
}).reverse(), re = (e) => [...e].reverse().map((r) => ({
  label: r.label,
  value: r.value,
  color: r.color
}));
export {
  _ as CHART_GEOMETRY,
  h as DEFAULT_ROOT_FONT_SIZE_PX,
  T as FONT_BREAK_SCALE,
  D as INNER_RADIUS_RATIO,
  R as LABEL_WHEN_MAX_SLICES_REACHED,
  a as MAX_DONUT_SLICES,
  Z as MIN_CENTER_VALUE_FONT_SIZE_PX,
  A as MIN_SLICE_PERCENT,
  j as applyMinSlicePercent,
  K as arraysAreEqual,
  re as buildDonutLegendItems,
  ee as buildDonutSliceItems,
  w as formatBrazilianCurrency,
  J as formatDonutValues,
  V as formatMonetarySliceValue,
  q as getRootFontSizePx,
  U as groupOverflowSlices,
  P as isMonetaryValue,
  X as orderDonutSlices,
  M as parseBrazilianCurrency,
  G as processDonutSlices,
  k as resolveDonutSliceColor,
  Q as resolveLegendOrientation,
  F as resolveSliceDasharray,
  z as resolveSliceDashoffset,
  Y as shouldBreakDonutLayout
};
