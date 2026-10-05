const l = "categorical", T = 8, L = 216, I = 48, m = 16, v = 16, s = "•••••", A = /^([^\d]*)/, h = {
  categorical: [
    "var(--color-chart-categorical-1)",
    "var(--color-chart-categorical-2)",
    "var(--color-chart-categorical-3)",
    "var(--color-chart-categorical-4)",
    "var(--color-chart-categorical-5)",
    "var(--color-chart-categorical-6)"
  ],
  warm: [
    "var(--color-chart-warm-1)",
    "var(--color-chart-warm-2)",
    "var(--color-chart-warm-3)",
    "var(--color-chart-warm-4)",
    "var(--color-chart-warm-5)",
    "var(--color-chart-warm-6)"
  ],
  cool: [
    "var(--color-chart-cool-1)",
    "var(--color-chart-cool-2)",
    "var(--color-chart-cool-3)",
    "var(--color-chart-cool-4)",
    "var(--color-chart-cool-5)",
    "var(--color-chart-cool-6)"
  ]
}, E = (r = l) => h[r], _ = (r, o) => {
  if (r === void 0)
    return "-";
  if (typeof r == "string")
    return r;
  const { prefix: t = "", suffix: c = "", decimals: n = 0 } = o ?? {};
  return `${t}${r.toFixed(n)}${c}`;
}, i = (r) => {
  var t;
  return `${((t = A.exec(r)) == null ? void 0 : t[1]) ?? ""}${s}`;
}, R = (r, o, t = !1) => {
  if (r === void 0)
    return;
  const c = _(r, o);
  return t ? i(c) : c;
}, H = (r, o, t) => {
  const c = Math.abs(o - r) / (t - 1);
  return c <= 0 ? 0 : Math.max(0, Math.ceil(-Math.log10(c)) + 1);
}, g = (r, o, t = 16) => {
  const c = Math.max(o - t * 2, 0);
  return t + c * r;
}, D = (r, o, t = 16) => {
  const c = Math.max(o - t * 2, 0);
  return t + c * r;
}, C = (r, o = 16) => `calc(${o}px + ${r} * (100% - ${o * 2}px))`, f = (r, o = 8) => {
  if (r <= 0)
    return [];
  if (r <= o)
    return Array.from({ length: r }, (n, a) => a);
  const t = (r - 1) / (o - 1), c = Array.from({ length: o }, (n, a) => Math.round(a * t));
  return [...new Set(c)];
}, u = (r, o, t) => {
  if (r.length === 0 || o < 0)
    return r;
  const c = r[r.length - 1] === o ? r : [...r, o];
  return c.length <= t ? c : [...c.slice(0, t - 1), o];
}, M = (r, o, t = 8) => {
  if (r.length === 0)
    return [];
  const c = r.length - 1;
  return (o && o > 0 ? u(
    r.map((a, e) => e).filter((a) => a % o === 0),
    c,
    t
  ) : f(r.length, t)).map((a) => ({
    index: a,
    label: r[a] ?? "",
    position: r.length === 1 ? 0.5 : a / (r.length - 1)
  }));
}, p = (r, o, t) => r >= t.left && r <= t.right && o >= t.top && o <= t.bottom, G = (r, o, t) => {
  if (o <= 0 || t <= 0)
    return r;
  if (t <= o)
    return t / 2;
  const c = o / 2;
  return Math.min(Math.max(r, c), t - c);
};
export {
  m as CHART_HORIZONTAL_PADDING,
  v as CHART_VERTICAL_PADDING,
  l as DEFAULT_CHART_PALETTE,
  L as DEFAULT_LARGE_CHART_HEIGHT,
  I as DEFAULT_SMALL_CHART_HEIGHT,
  T as MAX_AXIS_LABELS,
  f as buildAutoLabelIndices,
  G as clampTooltipAnchor,
  M as filterLabelsByInterval,
  R as formatDisplayValue,
  _ as formatValue,
  E as getChartPaletteColors,
  p as isPointerInsideRect,
  i as maskValue,
  C as resolveAxisLabelLeft,
  D as resolveGridX,
  g as resolveGridY,
  H as resolveTickDecimals
};
