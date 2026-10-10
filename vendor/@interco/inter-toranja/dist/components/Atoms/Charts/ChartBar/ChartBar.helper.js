import { resolveAxisLabelLeft as N, filterLabelsByInterval as P, formatDisplayValue as v, maskValue as g, resolveTickDecimals as k, getChartPaletteColors as B, CHART_HORIZONTAL_PADDING as H, CHART_VERTICAL_PADDING as D } from "../shared/chart.helper.js";
import { DEFAULT_LARGE_CHART_HEIGHT as ot, DEFAULT_SMALL_CHART_HEIGHT as rt, MAX_AXIS_LABELS as at, buildAutoLabelIndices as lt, clampTooltipAnchor as it, isPointerInsideRect as ct, resolveGridX as ut, resolveGridY as ht } from "../shared/chart.helper.js";
const Y = N, $ = 4, I = 1 / 6, K = "var(--color-chart-brand-default)", U = (t, s) => k(t, s, $), X = (t, s, e = $) => {
  if (e <= 1)
    return [s];
  if (t >= s)
    return [s];
  if (t < 0 && s > 0 && e >= 3) {
    const o = e - 1, n = Math.min(
      Math.max(Math.round(o * (s / (s - t))), 1),
      o - 1
    ), r = o - n, a = [];
    for (let l = 0; l <= n; l += 1)
      a.push(s - s * l / n);
    for (let l = 1; l <= r; l += 1)
      a.push(-(Math.abs(t) * l) / r);
    return a;
  }
  return Array.from({ length: e }, (o, n) => {
    const r = n / (e - 1);
    return s - (s - t) * r;
  });
}, d = (t, s) => `${t}-${s}`, y = (t, s) => {
  const e = Math.min(t.length, s.length);
  return {
    categories: t.slice(0, e),
    values: s.slice(0, e)
  };
}, W = (t, s) => {
  if (t.length === 0)
    return { min: 0, max: 1, shouldShowThreshold: !1 };
  const e = Math.min(...t), o = Math.max(...t);
  let n = Math.min(e, 0), r = Math.max(o, 0);
  if (n === r) {
    const l = Math.abs(n) || 1;
    n -= l, r += l;
  }
  const a = s !== void 0 && s <= o;
  return a && (n = Math.min(n, s), r = Math.max(r, s)), { min: n, max: r, shouldShowThreshold: a };
}, Z = (t, s) => {
  const e = t.length;
  return P(t, s).map((o) => ({
    ...o,
    position: e <= 0 ? 0.5 : (o.index + 0.5) / e
  }));
}, j = (t, s, e, o, n, r = !1) => {
  if (e && e.length > 0) {
    const h = P(e, o);
    return r ? h.map((i) => ({
      ...i,
      label: g(i.label)
    })) : h;
  }
  const a = X(t, s), l = {
    ...n,
    decimals: (n == null ? void 0 : n.decimals) ?? U(t, s)
  }, c = s - t;
  return a.map((h, i) => {
    const f = c === 0 ? 0.5 : (s - h) / c;
    return {
      index: i,
      label: v(h, l, r) ?? "-",
      position: f
    };
  });
}, E = (t, s, e, o, n, r) => {
  const a = Math.max(o - n * 2, 0);
  if (e === s)
    return n + a / 2;
  const l = (t - s) / (e - s);
  return r ? n + a * (1 - l) : n + a * l;
}, _ = (t, s, e) => {
  if (s != null && s[t])
    return s[t];
  if (e) {
    const o = B(e);
    return o[t % o.length];
  }
  return K;
}, q = ({
  categories: t,
  values: s,
  width: e,
  height: o,
  domain: n,
  orientation: r,
  forceColor: a,
  palette: l
}) => {
  const c = y(t, s), h = c.categories.length;
  if (h === 0)
    return [];
  const i = r === "vertical", f = i ? H : D, L = i ? D : H, p = Math.max(i ? e - f * 2 : o - f * 2, 0) / h, S = p * I, V = Math.max(p - S * 2, 0), A = E(
    0,
    n.min,
    n.max,
    i ? o : e,
    L,
    i
  );
  return c.categories.map((M, u) => {
    const b = c.values[u], m = E(
      b,
      n.min,
      n.max,
      i ? o : e,
      L,
      i
    ), R = f + u * p + S, T = `bar-${u + 1}`;
    if (i) {
      const O = Math.min(A, m), z = Math.abs(A - m);
      return {
        key: `${M}-${u}`,
        categoryIndex: u,
        category: M,
        value: b,
        color: _(u, a, l),
        x: R,
        y: O,
        width: V,
        height: z,
        testId: T,
        animationKey: d(T, b)
      };
    }
    const C = Math.min(A, m), G = Math.abs(A - m);
    return {
      key: `${M}-${u}`,
      categoryIndex: u,
      category: M,
      value: b,
      color: _(u, a, l),
      x: C,
      y: R,
      width: G,
      height: V,
      testId: T,
      animationKey: d(T, b)
    };
  });
}, J = (t, s, e, o, n, r = !1) => {
  const a = y(t, s);
  return a.categories.map((l, c) => ({
    label: l,
    value: v(a.values[c], n, r) ?? "-",
    color: _(c, e, o)
  }));
}, Q = (t, s, e, o, n = !1) => {
  if (t < 0 || t >= s.length)
    return null;
  const r = e[t];
  return r === void 0 ? null : {
    categoryIndex: t,
    category: s[t] ?? "",
    value: r,
    formattedValue: v(r, o, n) ?? "-"
  };
}, x = (t) => [
  {
    label: t.category,
    value: t.formattedValue
  }
], tt = (t) => `${t.category}: ${t.formattedValue}`, st = (t, s, e, o, n) => {
  if (o <= 0)
    return null;
  if (o === 1)
    return 0;
  const r = Math.max(e - n * 2, 1), a = Math.min(Math.max(t - s - n, 0), r - 1e-3);
  return Math.floor(a / r * o);
};
export {
  I as BAR_SLOT_INSET_RATIO,
  K as BRAND_BAR_COLOR,
  H as CHART_HORIZONTAL_PADDING,
  D as CHART_VERTICAL_PADDING,
  ot as DEFAULT_LARGE_CHART_HEIGHT,
  rt as DEFAULT_SMALL_CHART_HEIGHT,
  at as MAX_AXIS_LABELS,
  $ as VALUE_TICK_COUNT,
  lt as buildAutoLabelIndices,
  d as buildBarAnimationKey,
  q as buildBarRects,
  Z as buildCategoryAxisLabels,
  Q as buildHighlight,
  tt as buildHighlightAnnouncement,
  J as buildLegendItems,
  x as buildTooltipItems,
  j as buildValueTickLabels,
  X as buildValueTickValues,
  it as clampTooltipAnchor,
  P as filterLabelsByInterval,
  W as getValueDomain,
  ct as isPointerInsideRect,
  _ as resolveBarColor,
  st as resolveCategoryIndexFromClientPosition,
  Y as resolveCategoryLabelLeft,
  ut as resolveGridX,
  ht as resolveGridY,
  U as resolveValueTickDecimals,
  E as scaleValueAxis,
  y as syncChartBarSeries
};
