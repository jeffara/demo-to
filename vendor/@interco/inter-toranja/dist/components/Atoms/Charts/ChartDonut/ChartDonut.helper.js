import { formatDisplayValue as I, maskValue as O, getChartPaletteColors as T, DEFAULT_CHART_PALETTE as b } from "../shared/chart.helper.js";
const _ = 16, y = 1.5, a = 6, D = 1, R = "Outros", A = 0.78, C = 216, h = C / 2, N = Math.round(h * (1 - A)), E = h - N / 2, S = {
  viewBoxSize: C,
  center: h,
  radius: E,
  strokeWidth: N,
  circumference: Number((2 * Math.PI * E).toFixed(0)),
  centerTextWidth: 136,
  centerTextHeight: 40,
  sliceStartTransform: `rotate(-90 ${h} ${h})`
}, Z = (e) => Math.round(e * (S.centerTextWidth / S.viewBoxSize)), V = 10, L = "R$", g = (e) => e.trimStart().startsWith(L), M = (e, r) => typeof e == "string" ? g(e) : !!(r != null && r.prefix && g(r.prefix)), P = (e) => {
  const t = e.replace(/R\$\s*/g, "").trim().replace(/\./g, "").replace(",", "."), n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : null;
}, w = (e) => e.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }).replace(/\u00a0/g, " "), K = (e, r, t, n = !1) => {
  if (!M(e, t) || e === void 0)
    return;
  if (typeof e == "number")
    return I(r / 100 * e, t, n);
  const s = P(e);
  if (s === null)
    return;
  const c = w(r / 100 * s);
  return n ? O(c) : c;
};
function Y(e, r) {
  return !e || !r || e.length !== r.length ? !1 : e.every((t, n) => t === r[n]);
}
const q = (e) => e / _ > y, G = () => {
  if (typeof document > "u")
    return _;
  const e = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  return Number.isFinite(e) ? e : _;
}, F = (e) => `${e / 100 * S.circumference} ${S.circumference}`, z = (e) => -(e / 100 * S.circumference), x = (e, r, t) => {
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
}, v = (e) => e === R, U = (e, r, t) => e === void 0 || !Number.isInteger(e) ? !1 : e >= 0 && e <= r && !t.has(e), W = (e, r) => r.slice !== e.slice ? r.slice - e.slice : e.originalIndex - r.originalIndex, $ = (e, r, t) => {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), c = [];
  e.forEach((o) => {
    const u = r == null ? void 0 : r[o.originalIndex];
    if (!U(u, t, n)) {
      c.push(o);
      return;
    }
    n.add(u), s.set(u, o);
  }), c.sort(W);
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
}, B = (e, r) => ({
  slice: e.map((t) => t.slice),
  label: e.map((t) => t.label),
  value: e.map((t) => t.value),
  forceColor: r ? e.map((t) => r[t.originalIndex]) : void 0
}), H = ({
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
  })), i = c.filter((f) => !v(f.label)), l = c.filter((f) => v(f.label)), u = e.length > a ? a - 1 : i.length, m = Math.min(i.length, u) - 1, p = $(i, n, m);
  return B([...p, ...l], s);
}, j = (e) => {
  const r = H(e), t = x(r.slice, r.label, r.value);
  return r.forceColor ? {
    ...t,
    forceColor: t.hasOverflow ? r.forceColor.slice(0, a - 1) : r.forceColor
  } : t;
}, J = (e) => e.map((r) => r > 0 ? Math.max(r, D) : 0), X = ({
  index: e,
  hasOverflow: r,
  forceColor: t,
  othersColor: n,
  palette: s = b
}) => r && e === a - 1 && n ? n : (t == null ? void 0 : t[e]) ?? T(s)[e] ?? "var(--color-chart-categorical-1)", Q = (e, r, t = !1) => e.map((n) => I(n, r, t) ?? ""), ee = (e, r) => r ?? (e ? "vertical" : "horizontal"), re = (e, r, t, n, s = { hasOverflow: !1 }) => e.slice(0, a).flatMap((l, o) => {
  if (!l)
    return [];
  const u = r.slice(0, o).reduce((f, d) => f + (d ?? 0), 0), m = r[o] ?? 0, p = o + 1;
  return [
    {
      index: o,
      percentage: m,
      dashoffset: z(u),
      dasharray: F(m),
      color: X({ ...s, index: o }),
      label: t[o] ?? "",
      value: n[o] ?? "",
      chartClass: `progress-circle__circle progress-circle__circle--slice progress-circle__circle--chart${p}`,
      testId: `circle${p}`,
      pointerEvents: "visibleStroke"
    }
  ];
}).reverse(), te = (e) => [...e].reverse().map((r) => ({
  label: r.label,
  value: r.value,
  color: r.color
}));
export {
  S as CHART_GEOMETRY,
  _ as DEFAULT_ROOT_FONT_SIZE_PX,
  y as FONT_BREAK_SCALE,
  A as INNER_RADIUS_RATIO,
  R as LABEL_WHEN_MAX_SLICES_REACHED,
  a as MAX_DONUT_SLICES,
  V as MIN_CENTER_VALUE_FONT_SIZE_PX,
  D as MIN_SLICE_PERCENT,
  J as applyMinSlicePercent,
  Y as arraysAreEqual,
  te as buildDonutLegendItems,
  re as buildDonutSliceItems,
  w as formatBrazilianCurrency,
  Q as formatDonutValues,
  K as formatMonetarySliceValue,
  G as getRootFontSizePx,
  x as groupOverflowSlices,
  M as isMonetaryValue,
  H as orderDonutSlices,
  P as parseBrazilianCurrency,
  j as processDonutSlices,
  Z as resolveChartDonutCenterTextMaxWidth,
  X as resolveDonutSliceColor,
  ee as resolveLegendOrientation,
  F as resolveSliceDasharray,
  z as resolveSliceDashoffset,
  q as shouldBreakDonutLayout
};
