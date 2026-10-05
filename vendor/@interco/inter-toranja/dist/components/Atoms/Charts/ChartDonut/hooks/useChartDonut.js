import { useRef as _, useState as g, useMemo as r, useLayoutEffect as re, useEffect as B } from "react";
import { shouldBreakDonutLayout as O, getRootFontSizePx as F, processDonutSlices as ce, applyMinSlicePercent as ie, formatDonutValues as ae, buildDonutLegendItems as ue, arraysAreEqual as de, resolveLegendOrientation as he } from "../ChartDonut.helper.js";
import { buildChartDonutClasses as me } from "./buildChartDonutClasses.js";
import { resolveChartDonutFlags as fe, resolveBaseSliceItems as Se, applySliceHighlightClasses as Ee, resolveShouldShowLegend as ge, resolveCenterPresentation as Le, resolveChartDonutAccessibility as pe, fitCenterValueFontSize as Ce } from "../utils/resolveChartDonutState.js";
import { STATE as ve, SIZE as be, TAGGING_EVENT as ye } from "../../../../../utils/pattern.js";
const De = [0, 0, 0, 0, 0], Ie = [""], we = [""], R = (o) => {
  var l;
  return o instanceof Element && !!((l = o.getAttribute("data-testid")) != null && l.startsWith("circle"));
}, _e = ({
  slice: o = De,
  label: l = Ie,
  value: L = we,
  isLoading: M = !1,
  state: N = ve.ENABLED,
  size: x = be.LARGE,
  showDefaultLegend: z,
  legendOrientation: G,
  valueBuilder: u,
  isSensitiveText: d = !1,
  forceColor: p,
  forceIndex: C,
  othersColor: v,
  palette: b,
  totalLabel: H,
  totalValue: Y,
  onTag: y
}) => {
  const { isSmall: c, isSkeleton: n, isInteractive: D } = fe(x, N, M), h = _(null), I = _(null), [w, i] = g(null), [K, q] = g(
    () => O(F())
  ), t = r(
    () => ce({ slice: o, label: l, value: L, forceIndex: C, forceColor: p }),
    [o, l, L, C, p]
  ), s = r(() => ie(t.slice), [t.slice]), m = r(
    () => ae(t.value, u, d),
    [t.value, u, d]
  ), [a, U] = g(() => s.map(() => 0)), A = me(c, K, n), f = r(
    () => Se(n, s, a, t.label, m, {
      hasOverflow: t.hasOverflow,
      forceColor: t.forceColor,
      othersColor: v,
      palette: b
    }),
    [
      n,
      s,
      a,
      t.label,
      t.hasOverflow,
      t.forceColor,
      m,
      v,
      b
    ]
  ), W = Ee(
    f,
    w,
    A.dimmedSlice
  ), T = r(() => ue(f), [f]), Z = he(c, G), j = ge(
    z,
    c,
    n,
    T.length
  ), { shouldShowCenterLabel: J, shouldShowCenterText: S, centerLabel: Q, centerValue: k } = Le({
    isSmall: c,
    isSkeleton: n,
    highlightedIndex: w,
    labels: t.label,
    formattedValues: m,
    slices: t.slice,
    totalLabel: H,
    totalValue: Y,
    valueBuilder: u,
    isSensitiveText: d
  }), { trackColor: X, containerAccessibility: $, chartAccessibility: ee } = pe(n), P = (e) => {
    D && i(e.index);
  }, te = (e) => {
    e.preventDefault();
  }, ne = () => {
    const e = document.activeElement;
    R(e) || i(null);
  }, oe = (e) => {
    P(e);
  }, se = (e) => {
    R(e.relatedTarget) || i(null);
  }, V = (e) => {
    i(e.index), y && y((E) => ({
      ...E,
      name: ye.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "ChartDonut",
        slices: o.length,
        slice_label: e.label,
        slice_percentage: String(e.percentage)
      }
    }));
  }, le = (e, E) => {
    e.key !== "Enter" && e.key !== " " || (e.preventDefault(), V(E));
  };
  return re(() => {
    Ce(I.current, S);
  }, [k, S]), B(() => (h.current = setTimeout(() => {
    de(s, a) || U(s);
  }, 500), () => {
    h.current && clearTimeout(h.current);
  }), [s, a]), B(() => {
    const e = () => {
      q(O(F()));
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e);
    };
  }, []), {
    classes: A,
    sliceItems: W,
    legendItems: T,
    legendOrientation: Z,
    shouldShowLegend: j,
    shouldShowCenterText: S,
    shouldShowCenterLabel: J,
    isSkeleton: n,
    isInteractive: D,
    centerLabel: Q,
    centerValue: k,
    centerValueRef: I,
    trackColor: X,
    containerAccessibility: $,
    chartAccessibility: ee,
    handleSliceClick: V,
    handleSliceHighlight: P,
    handlePreventFocus: te,
    handleChartPointerLeave: ne,
    handleSliceFocus: oe,
    handleSliceBlur: se,
    handleSliceKeyDown: le
  };
};
export {
  _e as useChartDonut
};
