import { CHART_HORIZONTAL_PADDING as h, resolveAxisLabelLeft as M, CHART_VERTICAL_PADDING as $, formatValue as L, maskValue as A, filterLabelsByInterval as H, buildAutoLabelIndices as E, resolveTickDecimals as D, getChartPaletteColors as C } from "../shared/chart.helper.js";
import { DEFAULT_LARGE_CHART_HEIGHT as O, DEFAULT_SMALL_CHART_HEIGHT as W, MAX_AXIS_LABELS as x, isPointerInsideRect as Z, resolveGridY as q } from "../shared/chart.helper.js";
const G = M, _ = 4, V = (l, t) => D(l, t, _), P = (l, t, n) => `${l}-${t}-${n.map((e) => e === null ? "gap" : e).join(",")}`, b = "categorical", I = (l, t) => {
  const n = l.flatMap((a) => a.values);
  if (t !== void 0 && n.push(t), n.length === 0)
    return { min: 0, max: 1 };
  const e = Math.min(...n), o = Math.max(...n);
  if (e === o) {
    const a = Math.abs(e) || 1;
    return { min: e - a, max: o + a };
  }
  return { min: e, max: o };
}, X = (l, t, n, e, o, a = !1) => {
  if (n && n.length > 0) {
    const r = H(n, e);
    return a ? r.map((s) => ({
      ...s,
      label: A(s.label)
    })) : r;
  }
  const u = _, c = E(u), i = {
    ...o,
    decimals: (o == null ? void 0 : o.decimals) ?? V(l, t)
  };
  return c.map((r) => {
    const s = r / (u - 1), f = t - (t - l) * s, m = L(f, i);
    return {
      index: r,
      label: a ? A(m) : m,
      position: s
    };
  });
}, v = (l, t, n, e = h) => {
  const o = Math.max(n - e * 2, 0);
  return t <= 1 ? e + o / 2 : e + l / (t - 1) * o;
}, R = (l, t, n, e, o = $) => {
  const a = Math.max(e - o * 2, 0);
  if (n === t)
    return o + a / 2;
  const u = (l - t) / (n - t);
  return o + a * (1 - u);
}, S = (l) => {
  const t = [];
  let n = !0;
  return l.forEach((e) => {
    if (e.value === null) {
      n = !0;
      return;
    }
    t.push(`${n ? "M" : "L"} ${e.x} ${e.y}`), n = !1;
  }), t.join(" ");
}, T = (l, t, n, e = b) => {
  if (t.color)
    return t.color;
  if (n != null && n[l])
    return n[l];
  const o = C(e);
  return o[l % o.length];
}, Y = (l, t, n, e, o, a, u = b) => l.map((c, i) => {
  const r = t.map((f, m) => {
    const p = c.values[m];
    return p === void 0 ? {
      x: v(m, t.length, n),
      y: 0,
      value: null
    } : {
      x: v(m, t.length, n),
      y: R(p, o.min, o.max, e),
      value: p
    };
  }), s = `series-${i + 1}`;
  return {
    key: `${c.label}-${i}`,
    label: c.label,
    color: T(i, c, a, u),
    path: S(r),
    points: r,
    testId: s,
    animationKey: P(
      s,
      n,
      r.map((f) => f.value)
    )
  };
}), d = (l, t, n = b) => l.map((e, o) => ({
  label: e.label,
  color: T(o, e, t, n)
})), y = (l, t, n, e, o = b, a, u = !1) => l < 0 || l >= t.length ? null : {
  categoryIndex: l,
  category: t[l] ?? "",
  points: n.flatMap((c, i) => {
    const r = c.values[l];
    if (r === void 0)
      return [];
    const s = L(r, a);
    return [
      {
        seriesIndex: i,
        label: c.label,
        value: r,
        formattedValue: u ? A(s) : s,
        color: T(i, c, e, o)
      }
    ];
  })
}, F = (l) => l.points.map((t) => ({
  label: t.label,
  value: t.formattedValue,
  color: t.color
})), N = (l) => {
  if (l.points.length === 0)
    return l.category;
  const t = l.points.map((n) => `${n.label} ${n.formattedValue}`).join(", ");
  return `${l.category}: ${t}`;
}, U = (l, t, n, e, o = h) => {
  if (e <= 0)
    return null;
  if (e === 1)
    return 0;
  const a = Math.max(n - o * 2, 1), u = Math.min(Math.max(l - t - o, 0), a);
  return Math.round(u / a * (e - 1));
};
export {
  h as CHART_HORIZONTAL_PADDING,
  $ as CHART_VERTICAL_PADDING,
  O as DEFAULT_LARGE_CHART_HEIGHT,
  W as DEFAULT_SMALL_CHART_HEIGHT,
  x as MAX_AXIS_LABELS,
  _ as Y_TICK_COUNT,
  E as buildAutoLabelIndices,
  y as buildHighlight,
  N as buildHighlightAnnouncement,
  d as buildLegendItems,
  S as buildPolylinePath,
  P as buildSeriesAnimationKey,
  Y as buildSeriesPaths,
  F as buildTooltipItems,
  X as buildYTickLabels,
  H as filterLabelsByInterval,
  I as getYDomain,
  Z as isPointerInsideRect,
  U as resolveCategoryIndexFromClientX,
  q as resolveGridY,
  T as resolveSeriesColor,
  G as resolveXLabelLeft,
  V as resolveYTickDecimals,
  v as scaleX,
  R as scaleY
};
