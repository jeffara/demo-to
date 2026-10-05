import { useState as P, useRef as T, useEffect as p } from "react";
import { buildHighlight as X, resolveCategoryIndexFromClientPosition as h } from "../ChartBar.helper.js";
import { TAGGING_EVENT as Y } from "../../../../../utils/pattern.js";
import { isPointerInsideRect as $, CHART_HORIZONTAL_PADDING as g, CHART_VERTICAL_PADDING as V } from "../../shared/chart.helper.js";
const M = (t) => t === null ? "null" : `${t.categoryIndex}:${t.category}:${t.value}:${t.formattedValue}`, q = ({
  isInteractive: t,
  isSelectionSticky: x,
  orientation: k,
  categories: r,
  values: L,
  valueBuilder: R,
  isSensitiveText: b,
  taggingProperties: _,
  chartRef: F,
  containerRef: y,
  onHighlightChange: s,
  onTag: N
}) => {
  const [i, o] = P(null), [d, f] = P(!1), w = T("null"), c = i !== null && i >= 0 && i < r.length ? i : null, a = c === null ? null : X(c, r, L, R, b), A = M(a), m = () => {
    f(!1), o(null);
  }, C = T(m);
  C.current = m;
  const D = (n) => {
    o(n), x && f(!0);
  }, I = (n) => {
    var l;
    const e = (l = F.current) == null ? void 0 : l.getBoundingClientRect();
    return !e || r.length === 0 || Number.isFinite(n.clientX) && Number.isFinite(n.clientY) && !$(n.clientX, n.clientY, e) ? null : k === "vertical" ? Number.isFinite(n.clientX) ? h(
      n.clientX,
      e.left,
      e.width,
      r.length,
      g
    ) : null : Number.isFinite(n.clientY) ? h(
      n.clientY,
      e.top,
      e.height,
      r.length,
      V
    ) : null;
  }, E = (n) => {
    if (!N || r.length === 0)
      return;
    const e = {
      component_name: "ChartBar",
      ..._,
      bar_label: r[n]
    };
    N((l) => ({
      ...l,
      name: Y.INTERACTION_CLICK,
      ComponentProperties: e
    }));
  }, G = (n) => {
    if (!t || d)
      return;
    const e = I(n);
    e !== null && o(e);
  }, S = () => {
    !t || d || o(null);
  }, B = (n) => {
    if (!t)
      return;
    const e = I(n);
    e !== null && (D(e), E(e));
  }, K = (n) => {
    if (!t || r.length === 0)
      return;
    const e = n.key === "ArrowRight" || n.key === "ArrowDown", l = n.key === "ArrowLeft" || n.key === "ArrowUp";
    if (e) {
      n.preventDefault();
      const u = c === null ? 0 : Math.min(c + 1, r.length - 1);
      o(u);
      return;
    }
    if (l) {
      n.preventDefault();
      const u = c === null ? r.length - 1 : Math.max(c - 1, 0);
      o(u);
      return;
    }
    if (n.key === "Enter" || n.key === " ") {
      n.preventDefault();
      const u = c ?? 0;
      D(u), E(u);
      return;
    }
    n.key === "Escape" && (n.preventDefault(), m());
  }, O = (n) => {
    var l;
    if (!t)
      return;
    const e = n.relatedTarget;
    e instanceof Node && ((l = y.current) != null && l.contains(e)) || m();
  };
  return p(() => {
    w.current !== A && (w.current = A, s == null || s(a));
  }, [A, a, s]), p(() => {
    if (!t) {
      f(!1), o(null);
      return;
    }
    i !== null && i >= r.length && (o(null), f(!1));
  }, [t, i, r.length]), p(() => {
    x || f(!1);
  }, [x]), p(() => {
    if (!t || !d)
      return;
    const n = (e) => {
      var u;
      const l = e.target;
      l instanceof Node && ((u = y.current) != null && u.contains(l) || C.current());
    };
    return document.addEventListener("pointerdown", n), () => {
      document.removeEventListener("pointerdown", n);
    };
  }, [t, d, y]), {
    highlight: a,
    handlePointerPreview: G,
    handlePointerLeave: S,
    handleClick: B,
    handleKeyDown: K,
    handleBlur: O
  };
};
export {
  q as useChartBarInteraction
};
