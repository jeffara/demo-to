import { useState as I, useRef as P, useEffect as p } from "react";
import { buildHighlight as B, resolveCategoryIndexFromClientX as K } from "../ChartLine.helper.js";
import { TAGGING_EVENT as M } from "../../../../../utils/pattern.js";
import { isPointerInsideRect as O } from "../../shared/chart.helper.js";
const V = (r) => {
  if (r === null)
    return "null";
  const c = r.points.map((t) => `${t.value}:${t.formattedValue}:${t.color}`).join("|");
  return `${r.categoryIndex}:${r.category}:${c}`;
}, J = ({
  isInteractive: r,
  isSelectionSticky: c,
  categories: t,
  series: D,
  forceColor: S,
  palette: T,
  valueBuilder: $,
  isSensitiveText: b,
  taggingProperties: g,
  chartRef: A,
  containerRef: x,
  onHighlightChange: s,
  onTag: h
}) => {
  const [o, u] = I(null), [d, f] = I(!1), E = P("null"), i = o !== null && o >= 0 && o < t.length ? o : null, a = i === null ? null : B(
    i,
    t,
    D,
    S,
    T,
    $,
    b
  ), y = V(a);
  p(() => {
    E.current !== y && (E.current = y, s == null || s(a));
  }, [y, a, s]), p(() => {
    if (!r) {
      f(!1), u(null);
      return;
    }
    o !== null && o >= t.length && (u(null), f(!1));
  }, [r, o, t.length]), p(() => {
    c || f(!1);
  }, [c]);
  const m = () => {
    f(!1), u(null);
  }, L = P(m);
  L.current = m;
  const w = (n) => {
    u(n), c && f(!0);
  }, C = (n) => {
    var l;
    const e = (l = A.current) == null ? void 0 : l.getBoundingClientRect();
    return !e || t.length === 0 || !Number.isFinite(n.clientX) || Number.isFinite(n.clientY) && !O(n.clientX, n.clientY, e) ? null : K(n.clientX, e.left, e.width, t.length);
  }, N = (n) => {
    if (!h || t.length === 0)
      return;
    const e = {
      component_name: "ChartLine",
      ...g,
      dot_label: t[n]
    };
    h((l) => ({
      ...l,
      name: M.INTERACTION_CLICK,
      ComponentProperties: e
    }));
  }, R = (n) => {
    if (!r || d)
      return;
    const e = C(n);
    e !== null && u(e);
  }, F = () => {
    !r || d || u(null);
  }, X = (n) => {
    if (!r)
      return;
    const e = C(n);
    e !== null && (w(e), N(e));
  }, _ = (n) => {
    if (!(!r || t.length === 0)) {
      if (n.key === "ArrowRight") {
        n.preventDefault();
        const e = i === null ? 0 : Math.min(i + 1, t.length - 1);
        u(e);
        return;
      }
      if (n.key === "ArrowLeft") {
        n.preventDefault();
        const e = i === null ? t.length - 1 : Math.max(i - 1, 0);
        u(e);
        return;
      }
      if (n.key === "Enter" || n.key === " ") {
        n.preventDefault();
        const e = i ?? 0;
        w(e), N(e);
        return;
      }
      n.key === "Escape" && (n.preventDefault(), m());
    }
  }, G = (n) => {
    var l;
    if (!r)
      return;
    const e = n.relatedTarget;
    e instanceof Node && ((l = x.current) != null && l.contains(e)) || m();
  };
  return p(() => {
    if (!r || !d)
      return;
    const n = (e) => {
      var k;
      const l = e.target;
      l instanceof Node && ((k = x.current) != null && k.contains(l) || L.current());
    };
    return document.addEventListener("pointerdown", n), () => {
      document.removeEventListener("pointerdown", n);
    };
  }, [r, d, x]), {
    highlight: a,
    handlePointerPreview: R,
    handlePointerLeave: F,
    handleClick: X,
    handleKeyDown: _,
    handleBlur: G
  };
};
export {
  J as useChartLineInteraction
};
