import { useRef as L, useState as h, useMemo as a, useLayoutEffect as M, useEffect as N } from "react";
import { shouldBreakDonutLayout as x, getRootFontSizePx as G, processDonutSlices as me, applyMinSlicePercent as fe, formatDonutValues as Se, buildDonutLegendItems as ge, arraysAreEqual as Ee, resolveLegendOrientation as Ce } from "../ChartDonut.helper.js";
import { buildChartDonutClasses as pe } from "./buildChartDonutClasses.js";
import { resolveChartDonutFlags as Le, resolveBaseSliceItems as ve, applySliceHighlightClasses as we, resolveShouldShowLegend as be, resolveCenterPresentation as ye, resolveChartDonutAccessibility as Ae, fitCenterValueFontSize as Ie } from "../utils/resolveChartDonutState.js";
import { STATE as De, SIZE as Re, TAGGING_EVENT as Te } from "../../../../../utils/pattern.js";
const ke = [0, 0, 0, 0, 0], Oe = [""], Pe = [""], W = (s) => {
  var c;
  return s instanceof Element && !!((c = s.getAttribute("data-testid")) != null && c.startsWith("circle"));
}, Me = ({
  slice: s = ke,
  label: c = Oe,
  value: v = Pe,
  isLoading: H = !1,
  state: Y = De.ENABLED,
  size: q = Re.LARGE,
  showDefaultLegend: K,
  legendOrientation: U,
  valueBuilder: m,
  isSensitiveText: f = !1,
  forceColor: w,
  forceIndex: b,
  othersColor: y,
  palette: A,
  totalLabel: Z,
  totalValue: j,
  onTag: I
}) => {
  const { isSmall: i, isSkeleton: n, isInteractive: D } = Le(q, Y, H), S = L(null), R = L(null), T = L(null), [g, J] = h(0), [k, u] = h(null), [O, Q] = h(
    () => x(G())
  ), t = a(
    () => me({ slice: s, label: c, value: v, forceIndex: b, forceColor: w }),
    [s, c, v, b, w]
  ), r = a(() => fe(t.slice), [t.slice]), E = a(
    () => Se(t.value, m, f),
    [t.value, m, f]
  ), [d, X] = h(() => r.map(() => 0)), P = pe(i, O, n), C = a(
    () => ve(n, r, d, t.label, E, {
      hasOverflow: t.hasOverflow,
      forceColor: t.forceColor,
      othersColor: y,
      palette: A
    }),
    [
      n,
      r,
      d,
      t.label,
      t.hasOverflow,
      t.forceColor,
      E,
      y,
      A
    ]
  ), $ = we(
    C,
    k,
    P.dimmedSlice
  ), V = a(() => ge(C), [C]), ee = Ce(i, U), te = be(
    K,
    i,
    n,
    V.length
  ), { shouldShowCenterLabel: ne, shouldShowCenterText: p, centerLabel: oe, centerValue: B } = ye({
    isSmall: i,
    isSkeleton: n,
    highlightedIndex: k,
    labels: t.label,
    formattedValues: E,
    slices: t.slice,
    totalLabel: Z,
    totalValue: j,
    valueBuilder: m,
    isSensitiveText: f
  }), { trackColor: se, containerAccessibility: re, chartAccessibility: le } = Ae(n), F = (e) => {
    D && u(e.index);
  }, ce = (e) => {
    e.preventDefault();
  }, ie = () => {
    const e = document.activeElement;
    W(e) || u(null);
  }, ae = (e) => {
    F(e);
  }, ue = (e) => {
    W(e.relatedTarget) || u(null);
  }, _ = (e) => {
    u(e.index), I && I((o) => ({
      ...o,
      name: Te.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "ChartDonut",
        slices: s.length,
        slice_label: e.label,
        slice_percentage: String(e.percentage)
      }
    }));
  }, de = (e, o) => {
    e.key !== "Enter" && e.key !== " " || (e.preventDefault(), _(o));
  };
  return M(() => {
    const e = R.current;
    if (!e)
      return;
    const o = () => {
      const z = e.getBoundingClientRect();
      z.width > 0 && J(z.width);
    };
    o();
    const he = requestAnimationFrame(o), l = typeof ResizeObserver > "u" ? void 0 : new ResizeObserver(o);
    return l == null || l.observe(e), () => {
      cancelAnimationFrame(he), l == null || l.disconnect();
    };
  }, [i, n, O]), M(() => {
    const e = g > 0 ? g : void 0;
    Ie(T.current, p, e);
  }, [B, p, g]), N(() => (S.current = setTimeout(() => {
    Ee(r, d) || X(r);
  }, 500), () => {
    S.current && clearTimeout(S.current);
  }), [r, d]), N(() => {
    const e = () => {
      Q(x(G()));
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e);
    };
  }, []), {
    classes: P,
    sliceItems: $,
    legendItems: V,
    legendOrientation: ee,
    shouldShowLegend: te,
    shouldShowCenterText: p,
    shouldShowCenterLabel: ne,
    isSkeleton: n,
    isInteractive: D,
    centerLabel: oe,
    centerValue: B,
    centerValueRef: T,
    chartRef: R,
    trackColor: se,
    containerAccessibility: re,
    chartAccessibility: le,
    handleSliceClick: _,
    handleSliceHighlight: F,
    handlePreventFocus: ce,
    handleChartPointerLeave: ie,
    handleSliceFocus: ae,
    handleSliceBlur: ue,
    handleSliceKeyDown: de
  };
};
export {
  Me as useChartDonut
};
