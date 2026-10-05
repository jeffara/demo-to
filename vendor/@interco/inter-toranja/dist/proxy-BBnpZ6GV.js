import { w as Ft, c as ai, o as li, b as ui, d as en, e as ci, i as nn, g as A, h as hi, u as di, r as sn, t as Ot, n as on, j as z, k as rn, p as $, l as an, f as S, m as ne, q as fi, a as mi, v as E, x as ln, y as O, z as pi, A as gi, B as T, C as Lt, D as un, E as ie, F as cn, G as lt, H as G, I as ut, J as ct, K as hn, L as dn, M as Ut, N as yi, S as fn, O as vi, P as Tt, Q as Pi, R as xi, T as Ti, U as Si, V as Vi, W as wi, X as Ai, Y as Di, Z as Ei, _ as mn } from "./visual-element-Dhl5aGeu.js";
import { jsxs as Ci, jsx as pn } from "react/jsx-runtime";
import { createContext as X, useContext as D, useId as Mi, useEffect as gn, useCallback as yn, useMemo as mt, useRef as St, useInsertionEffect as bi, forwardRef as Li, Fragment as vn, createElement as Ri, Component as Bi } from "react";
const Pn = X({}), Nt = X(null), xn = X({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ji(t = !0) {
  const e = D(Nt);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, l = Mi();
  gn(() => {
    t && s(l);
  }, [t]);
  const o = yn(() => t && i && i(l), [l, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const Tn = X({ strict: !1 }), se = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, H = {};
for (const t in se)
  H[t] = {
    isEnabled: (e) => se[t].some((n) => !!e[n])
  };
function ki(t) {
  for (const e in t)
    H[e] = {
      ...H[e],
      ...t[e]
    };
}
const Ii = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ht(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Ii.has(t);
}
let Sn = (t) => !ht(t);
function Fi(t) {
  t && (Sn = (e) => e.startsWith("on") ? !ht(e) : t(e));
}
try {
  Fi(require("@emotion/is-prop-valid").default);
} catch {
}
function Oi(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Sn(s) || n === !0 && ht(s) || !e && !ht(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
function Ui(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...i) => (process.env.NODE_ENV !== "production" && Ft(!1, "motion() is deprecated. Use motion.create() instead."), t(...i));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
  });
}
const pt = X({});
function et(t) {
  return typeof t == "string" || Array.isArray(t);
}
function gt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const _t = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Wt = ["initial", ..._t];
function yt(t) {
  return gt(t.animate) || Wt.some((e) => et(t[e]));
}
function Vn(t) {
  return !!(yt(t) || t.variants);
}
function Ni(t, e) {
  if (yt(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || et(n) ? n : void 0,
      animate: et(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function _i(t) {
  const { initial: e, animate: n } = Ni(t, D(pt));
  return mt(() => ({ initial: e, animate: n }), [oe(e), oe(n)]);
}
function oe(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Wi = Symbol.for("motionComponentSymbol");
function U(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function $i(t, e, n) {
  return yn(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : U(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const { schedule: $t } = ai(queueMicrotask, !1), wn = X({});
function Gi(t, e, n, i, s) {
  var l, o;
  const { visualElement: r } = D(pt), a = D(Tn), u = D(Nt), c = D(xn).reducedMotion, h = St(null);
  i = i || a.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = h.current, f = D(wn);
  d && !d.projection && s && (d.type === "html" || d.type === "svg") && Hi(h.current, n, s, f);
  const m = St(!1);
  bi(() => {
    d && m.current && d.update(n, u);
  });
  const p = n[li], g = St(!!p && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, p)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, p)));
  return ui(() => {
    d && (m.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), $t.render(d.render), g.current && d.animationState && d.animationState.animateChanges());
  }), gn(() => {
    d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, p);
    }), g.current = !1));
  }), d;
}
function Hi(t, e, n, i) {
  const { layoutId: s, layout: l, drag: o, dragConstraints: r, layoutScroll: a, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : An(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: l,
    alwaysMeasureLayout: !!o || r && U(r),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof l == "string" ? l : "both",
    initialPromotionConfig: i,
    layoutScroll: a,
    layoutRoot: u
  });
}
function An(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : An(t.parent);
}
function zi({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var l, o;
  t && ki(t);
  function r(u, c) {
    let h;
    const d = {
      ...D(xn),
      ...u,
      layoutId: Xi(u)
    }, { isStatic: f } = d, m = _i(u), p = i(u, f);
    if (!f && en) {
      Ki(d, t);
      const g = Yi(d);
      h = g.MeasureLayout, m.visualElement = Gi(s, p, d, e, g.ProjectionNode);
    }
    return Ci(pt.Provider, { value: m, children: [h && m.visualElement ? pn(h, { visualElement: m.visualElement, ...d }) : null, n(s, u, $i(p, m.visualElement, c), p, f, m.visualElement)] });
  }
  r.displayName = `motion.${typeof s == "string" ? s : `create(${(o = (l = s.displayName) !== null && l !== void 0 ? l : s.name) !== null && o !== void 0 ? o : ""})`}`;
  const a = Li(r);
  return a[Wi] = s, a;
}
function Xi({ layoutId: t }) {
  const e = D(Pn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ki(t, e) {
  const n = D(Tn).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? ci(!1, i) : nn(!1, i);
  }
}
function Yi(t) {
  const { drag: e, layout: n } = H;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const qi = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Gt(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(qi.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function rt(t) {
  const e = A(t) ? t.get() : t;
  return hi(e) ? e.toValue() : e;
}
function Zi({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, l) {
  const o = {
    latestValues: Ji(i, s, l, t),
    renderState: e()
  };
  return n && (o.onMount = (r) => n({ props: i, current: r, ...o }), o.onUpdate = (r) => n(r)), o;
}
const Dn = (t) => (e, n) => {
  const i = D(pt), s = D(Nt), l = () => Zi(t, e, i, s);
  return n ? l() : di(l);
};
function Ji(t, e, n, i) {
  const s = {}, l = i(t, {});
  for (const d in l)
    s[d] = rt(l[d]);
  let { initial: o, animate: r } = t;
  const a = yt(t), u = Vn(t);
  e && u && !a && t.inherit !== !1 && (o === void 0 && (o = e.initial), r === void 0 && (r = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const h = c ? r : o;
  if (h && typeof h != "boolean" && !gt(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let f = 0; f < d.length; f++) {
      const m = sn(t, d[f]);
      if (m) {
        const { transitionEnd: p, transition: g, ...y } = m;
        for (const P in y) {
          let v = y[P];
          if (Array.isArray(v)) {
            const V = c ? v.length - 1 : 0;
            v = v[V];
          }
          v !== null && (s[P] = v);
        }
        for (const P in p)
          s[P] = p[P];
      }
    }
  }
  return s;
}
const En = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Qi = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ts = Ot.length;
function es(t, e, n) {
  let i = "", s = !0;
  for (let l = 0; l < ts; l++) {
    const o = Ot[l], r = t[o];
    if (r === void 0)
      continue;
    let a = !0;
    if (typeof r == "number" ? a = r === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(r) === 0, !a || n) {
      const u = En(r, on[o]);
      if (!a) {
        s = !1;
        const c = Qi[o] || o;
        i += `${c}(${u}) `;
      }
      n && (e[o] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Ht(t, e, n) {
  const { style: i, vars: s, transformOrigin: l } = t;
  let o = !1, r = !1;
  for (const a in e) {
    const u = e[a];
    if (z.has(a)) {
      o = !0;
      continue;
    } else if (rn(a)) {
      s[a] = u;
      continue;
    } else {
      const c = En(u, on[a]);
      a.startsWith("origin") ? (r = !0, l[a] = c) : i[a] = c;
    }
  }
  if (e.transform || (o || n ? i.transform = es(e, t.transform, n) : i.transform && (i.transform = "none")), r) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = l;
    i.transformOrigin = `${a} ${u} ${c}`;
  }
}
const ns = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, is = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ss(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const l = s ? ns : is;
  t[l.offset] = $.transform(-i);
  const o = $.transform(e), r = $.transform(n);
  t[l.array] = `${o} ${r}`;
}
function re(t, e, n) {
  return typeof t == "string" ? t : $.transform(e + n * t);
}
function os(t, e, n) {
  const i = re(e, t.x, t.width), s = re(n, t.y, t.height);
  return `${i} ${s}`;
}
function zt(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  originX: s,
  originY: l,
  pathLength: o,
  pathSpacing: r = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, h) {
  if (Ht(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: f, dimensions: m } = t;
  d.transform && (m && (f.transform = d.transform), delete d.transform), m && (s !== void 0 || l !== void 0 || f.transform) && (f.transformOrigin = os(m, s !== void 0 ? s : 0.5, l !== void 0 ? l : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), o !== void 0 && ss(d, o, r, a, !1);
}
const Xt = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Cn = () => ({
  ...Xt(),
  attrs: {}
}), Kt = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Mn(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const l in n)
    t.style.setProperty(l, n[l]);
}
const bn = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ln(t, e, n, i) {
  Mn(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(bn.has(s) ? s : an(s), e.attrs[s]);
}
const dt = {};
function rs(t) {
  Object.assign(dt, t);
}
function Rn(t, { layout: e, layoutId: n }) {
  return z.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!dt[t] || t === "opacity");
}
function Yt(t, e, n) {
  var i;
  const { style: s } = t, l = {};
  for (const o in s)
    (A(s[o]) || e.style && A(e.style[o]) || Rn(o, t) || ((i = n == null ? void 0 : n.getValue(o)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[o] = s[o]);
  return l;
}
function Bn(t, e, n) {
  const i = Yt(t, e, n);
  for (const s in t)
    if (A(t[s]) || A(e[s])) {
      const l = Ot.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[l] = t[s];
    }
  return i;
}
function as(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const ae = ["x", "y", "width", "height", "cx", "cy", "r"], ls = {
  useVisualState: Dn({
    scrapeMotionValuesFromProps: Bn,
    createRenderState: Cn,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: i, latestValues: s }) => {
      if (!n)
        return;
      let l = !!t.drag;
      if (!l) {
        for (const r in s)
          if (z.has(r)) {
            l = !0;
            break;
          }
      }
      if (!l)
        return;
      let o = !e;
      if (e)
        for (let r = 0; r < ae.length; r++) {
          const a = ae[r];
          t[a] !== e[a] && (o = !0);
        }
      o && S.read(() => {
        as(n, i), S.render(() => {
          zt(i, s, Kt(n.tagName), t.transformTemplate), Ln(n, i);
        });
      });
    }
  })
}, us = {
  useVisualState: Dn({
    scrapeMotionValuesFromProps: Yt,
    createRenderState: Xt
  })
};
function jn(t, e, n) {
  for (const i in e)
    !A(e[i]) && !Rn(i, n) && (t[i] = e[i]);
}
function cs({ transformTemplate: t }, e) {
  return mt(() => {
    const n = Xt();
    return Ht(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function hs(t, e) {
  const n = t.style || {}, i = {};
  return jn(i, n, t), Object.assign(i, cs(t, e)), i;
}
function ds(t, e) {
  const n = {}, i = hs(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
function fs(t, e, n, i) {
  const s = mt(() => {
    const l = Cn();
    return zt(l, e, Kt(i), t.transformTemplate), {
      ...l.attrs,
      style: { ...l.style }
    };
  }, [e]);
  if (t.style) {
    const l = {};
    jn(l, t.style, t), s.style = { ...l, ...s.style };
  }
  return s;
}
function ms(t = !1) {
  return (n, i, s, { latestValues: l }, o) => {
    const a = (Gt(n) ? fs : ds)(i, l, o, n), u = Oi(i, typeof n == "string", t), c = n !== vn ? { ...u, ...a, ref: s } : {}, { children: h } = i, d = mt(() => A(h) ? h.get() : h, [h]);
    return Ri(n, {
      ...c,
      children: d
    });
  };
}
function ps(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...Gt(i) ? ls : us,
      preloadedFeatures: t,
      useRender: ms(s),
      createVisualElement: e,
      Component: i
    };
    return zi(o);
  };
}
function kn(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const L = {
  x: !1,
  y: !1
};
function In() {
  return L.x || L.y;
}
function gs(t, e, n) {
  var i;
  if (t instanceof Element)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const l = (i = void 0) !== null && i !== void 0 ? i : s.querySelectorAll(t);
    return l ? Array.from(l) : [];
  }
  return Array.from(t);
}
function Fn(t, e) {
  const n = gs(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function le(t) {
  return (e) => {
    e.pointerType === "touch" || In() || t(e);
  };
}
function ys(t, e, n = {}) {
  const [i, s, l] = Fn(t, n), o = le((r) => {
    const { target: a } = r, u = e(r);
    if (typeof u != "function" || !a)
      return;
    const c = le((h) => {
      u(h), a.removeEventListener("pointerleave", c);
    });
    a.addEventListener("pointerleave", c, s);
  });
  return i.forEach((r) => {
    r.addEventListener("pointerenter", o, s);
  }), l;
}
const On = (t, e) => e ? t === e ? !0 : On(t, e.parentElement) : !1, qt = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, vs = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ps(t) {
  return vs.has(t.tagName) || t.tabIndex !== -1;
}
const q = /* @__PURE__ */ new WeakSet();
function ue(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Vt(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const xs = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = ue(() => {
    if (q.has(n))
      return;
    Vt(n, "down");
    const s = ue(() => {
      Vt(n, "up");
    }), l = () => Vt(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", l, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ce(t) {
  return qt(t) && !In();
}
function Ts(t, e, n = {}) {
  const [i, s, l] = Fn(t, n), o = (r) => {
    const a = r.currentTarget;
    if (!ce(r) || q.has(a))
      return;
    q.add(a);
    const u = e(r), c = (f, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!ce(f) || !q.has(a)) && (q.delete(a), typeof u == "function" && u(f, { success: m }));
    }, h = (f) => {
      c(f, n.useGlobalTarget || On(a, f.target));
    }, d = (f) => {
      c(f, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((r) => {
    !Ps(r) && r.getAttribute("tabindex") === null && (r.tabIndex = 0), (n.useGlobalTarget ? window : r).addEventListener("pointerdown", o, s), r.addEventListener("focus", (u) => xs(u, s), s);
  }), l;
}
function Ss(t) {
  return t === "x" || t === "y" ? L[t] ? null : (L[t] = !0, () => {
    L[t] = !1;
  }) : L.x || L.y ? null : (L.x = L.y = !0, () => {
    L.x = L.y = !1;
  });
}
const Vs = Wt.length;
function Un(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Un(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Vs; n++) {
    const i = Wt[n], s = t.props[i];
    (et(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const ws = [..._t].reverse(), As = _t.length;
function Ds(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => mi(t, n, i)));
}
function Es(t) {
  let e = Ds(t), n = he(), i = !0;
  const s = (a) => (u, c) => {
    var h;
    const d = fi(t, c, a === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: f, transitionEnd: m, ...p } = d;
      u = { ...u, ...p, ...m };
    }
    return u;
  };
  function l(a) {
    e = a(t);
  }
  function o(a) {
    const { props: u } = t, c = Un(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let f = {}, m = 1 / 0;
    for (let g = 0; g < As; g++) {
      const y = ws[g], P = n[y], v = u[y] !== void 0 ? u[y] : c[y], V = et(v), R = y === a ? P.isActive : null;
      R === !1 && (m = g);
      let st = v === c[y] && v !== u[y] && V;
      if (st && i && t.manuallyAnimateOnMount && (st = !1), P.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !P.isActive && R === null || // If we didn't and don't have any defined prop for this animation type
      !v && !P.prevProp || // Or if the prop doesn't define an animation
      gt(v) || typeof v == "boolean")
        continue;
      const Zt = Cs(P.prevProp, v);
      let vt = Zt || // If we're making this variant active, we want to always make it active
      y === a && P.isActive && !st && V || // If we removed a higher-priority variant (i is in reverse order)
      g > m && V, Jt = !1;
      const Qt = Array.isArray(v) ? v : [v];
      let K = Qt.reduce(s(y), {});
      R === !1 && (K = {});
      const { prevResolvedValues: te = {} } = P, ri = {
        ...te,
        ...K
      }, ee = (w) => {
        vt = !0, d.has(w) && (Jt = !0, d.delete(w)), P.needsAnimating[w] = !0;
        const B = t.getValue(w);
        B && (B.liveStyle = !1);
      };
      for (const w in ri) {
        const B = K[w], Pt = te[w];
        if (f.hasOwnProperty(w))
          continue;
        let xt = !1;
        ne(B) && ne(Pt) ? xt = !kn(B, Pt) : xt = B !== Pt, xt ? B != null ? ee(w) : d.add(w) : B !== void 0 && d.has(w) ? ee(w) : P.protectedKeys[w] = !0;
      }
      P.prevProp = v, P.prevResolvedValues = K, P.isActive && (f = { ...f, ...K }), i && t.blockInitialAnimation && (vt = !1), vt && (!(st && Zt) || Jt) && h.push(...Qt.map((w) => ({
        animation: w,
        options: { type: y }
      })));
    }
    if (d.size) {
      const g = {};
      d.forEach((y) => {
        const P = t.getBaseTarget(y), v = t.getValue(y);
        v && (v.liveStyle = !0), g[y] = P ?? null;
      }), h.push({ animation: g });
    }
    let p = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (p = !1), i = !1, p ? e(h) : Promise.resolve();
  }
  function r(a, u) {
    var c;
    if (n[a].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var f;
      return (f = d.animationState) === null || f === void 0 ? void 0 : f.setActive(a, u);
    }), n[a].isActive = u;
    const h = o(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: r,
    setAnimateFunction: l,
    getState: () => n,
    reset: () => {
      n = he(), i = !0;
    }
  };
}
function Cs(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !kn(e, t) : !1;
}
function k(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function he() {
  return {
    animate: k(!0),
    whileInView: k(),
    whileHover: k(),
    whileTap: k(),
    whileDrag: k(),
    whileFocus: k(),
    exit: k()
  };
}
class j {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Ms extends j {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Es(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    gt(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let bs = 0;
class Ls extends j {
  constructor() {
    super(...arguments), this.id = bs++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Rs = {
  animation: {
    Feature: Ms
  },
  exit: {
    Feature: Ls
  }
};
function nt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function it(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Bs = (t) => (e) => qt(e) && t(e, it(e));
function J(t, e, n, i) {
  return nt(t, e, Bs(n), i);
}
const de = (t, e) => Math.abs(t - e);
function js(t, e) {
  const n = de(t.x, e.x), i = de(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Nn {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: l = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = At(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = js(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: m } = h, { timestamp: p } = E;
      this.history.push({ ...m, timestamp: p });
      const { onStart: g, onMove: y } = this.handlers;
      d || (g && g(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = wt(d, this.transformPagePoint), S.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: f, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = At(h.type === "pointercancel" ? this.lastMoveEventInfo : wt(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(h, g), m && m(h, g);
    }, !qt(e))
      return;
    this.dragSnapToOrigin = l, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const o = it(e), r = wt(o, this.transformPagePoint), { point: a } = r, { timestamp: u } = E;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, At(r, this.history)), this.removeListeners = ln(J(this.contextWindow, "pointermove", this.handlePointerMove), J(this.contextWindow, "pointerup", this.handlePointerUp), J(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), O(this.updatePoint);
  }
}
function wt(t, e) {
  return e ? { point: e(t.point) } : t;
}
function fe(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function At({ point: t }, e) {
  return {
    point: t,
    delta: fe(t, _n(e)),
    offset: fe(t, ks(e)),
    velocity: Is(e, 0.1)
  };
}
function ks(t) {
  return t[0];
}
function _n(t) {
  return t[t.length - 1];
}
function Is(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = _n(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > pi(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const l = gi(s.timestamp - i.timestamp);
  if (l === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - i.x) / l,
    y: (s.y - i.y) / l
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Wn = 1e-4, Fs = 1 - Wn, Os = 1 + Wn, $n = 0.01, Us = 0 - $n, Ns = 0 + $n;
function C(t) {
  return t.max - t.min;
}
function _s(t, e, n) {
  return Math.abs(t - e) <= n;
}
function me(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = T(e.min, e.max, t.origin), t.scale = C(n) / C(e), t.translate = T(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Fs && t.scale <= Os || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Us && t.translate <= Ns || isNaN(t.translate)) && (t.translate = 0);
}
function Q(t, e, n, i) {
  me(t.x, e.x, n.x, i ? i.originX : void 0), me(t.y, e.y, n.y, i ? i.originY : void 0);
}
function pe(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + C(e);
}
function Ws(t, e, n) {
  pe(t.x, e.x, n.x), pe(t.y, e.y, n.y);
}
function ge(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + C(e);
}
function tt(t, e, n) {
  ge(t.x, e.x, n.x), ge(t.y, e.y, n.y);
}
function $s(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? T(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? T(n, t, i.max) : Math.min(t, n)), t;
}
function ye(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Gs(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: ye(t.x, n, s),
    y: ye(t.y, e, i)
  };
}
function ve(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Hs(t, e) {
  return {
    x: ve(t.x, e.x),
    y: ve(t.y, e.y)
  };
}
function zs(t, e) {
  let n = 0.5;
  const i = C(t), s = C(e);
  return s > i ? n = Lt(e.min, e.max - i, t.min) : i > s && (n = Lt(t.min, t.max - s, e.min)), un(0, 1, n);
}
function Xs(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Rt = 0.35;
function Ks(t = Rt) {
  return t === !1 ? t = 0 : t === !0 && (t = Rt), {
    x: Pe(t, "left", "right"),
    y: Pe(t, "top", "bottom")
  };
}
function Pe(t, e, n) {
  return {
    min: xe(t, e),
    max: xe(t, n)
  };
}
function xe(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Te = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), N = () => ({
  x: Te(),
  y: Te()
}), Se = () => ({ min: 0, max: 0 }), x = () => ({
  x: Se(),
  y: Se()
});
function b(t) {
  return [t("x"), t("y")];
}
function Gn({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Ys({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function qs(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Dt(t) {
  return t === void 0 || t === 1;
}
function Bt({ scale: t, scaleX: e, scaleY: n }) {
  return !Dt(t) || !Dt(e) || !Dt(n);
}
function I(t) {
  return Bt(t) || Hn(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Hn(t) {
  return Ve(t.x) || Ve(t.y);
}
function Ve(t) {
  return t && t !== "0%";
}
function ft(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function we(t, e, n, i, s) {
  return s !== void 0 && (t = ft(t, s, i)), ft(t, n, i) + e;
}
function jt(t, e = 0, n = 1, i, s) {
  t.min = we(t.min, e, n, i, s), t.max = we(t.max, e, n, i, s);
}
function zn(t, { x: e, y: n }) {
  jt(t.x, e.translate, e.scale, e.originPoint), jt(t.y, n.translate, n.scale, n.originPoint);
}
const Ae = 0.999999999999, De = 1.0000000000001;
function Zs(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let l, o;
  for (let r = 0; r < s; r++) {
    l = n[r], o = l.projectionDelta;
    const { visualElement: a } = l.options;
    a && a.props.style && a.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && W(t, {
      x: -l.scroll.offset.x,
      y: -l.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, zn(t, o)), i && I(l.latestValues) && W(t, l.latestValues));
  }
  e.x < De && e.x > Ae && (e.x = 1), e.y < De && e.y > Ae && (e.y = 1);
}
function _(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Ee(t, e, n, i, s = 0.5) {
  const l = T(t.min, t.max, s);
  jt(t, e, n, l, i);
}
function W(t, e) {
  Ee(t.x, e.x, e.scaleX, e.scale, e.originX), Ee(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Xn(t, e) {
  return Gn(qs(t.getBoundingClientRect(), e));
}
function Js(t, e, n) {
  const i = Xn(t, n), { scroll: s } = e;
  return s && (_(i.x, s.offset.x), _(i.y, s.offset.y)), i;
}
const Kn = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Qs = /* @__PURE__ */ new WeakMap();
class to {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = x(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(it(c).point);
    }, l = (c, h) => {
      const { drag: d, dragPropagation: f, onDragStart: m } = this.getProps();
      if (d && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = Ss(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), b((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (lt.test(y)) {
          const { projection: P } = this.visualElement;
          if (P && P.layout) {
            const v = P.layout.layoutBox[g];
            v && (y = C(v) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), m && S.postRender(() => m(c, h)), ie(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, o = (c, h) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: g } = h;
      if (f && this.currentDirection === null) {
        this.currentDirection = eo(g), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, g), this.updateAxis("y", h.point, g), this.visualElement.render(), p && p(c, h);
    }, r = (c, h) => this.stop(c, h), a = () => b((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Nn(e, {
      onSessionStart: s,
      onStart: l,
      onMove: o,
      onSessionEnd: r,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Kn(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: l } = this.getProps();
    l && S.postRender(() => l(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !ot(e, s, this.currentDirection))
      return;
    const l = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (o = $s(o, this.constraints[e], this.elastic[e])), l.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, l = this.constraints;
    n && U(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Gs(s.layoutBox, n) : this.constraints = !1, this.elastic = Ks(i), l !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && b((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Xs(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !U(e))
      return !1;
    const i = e.current;
    nn(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const l = Js(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Hs(s.layout.layoutBox, l);
    if (n) {
      const r = n(Ys(o));
      this.hasMutatedConstraints = !!r, r && (o = Gn(r));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: l, dragSnapToOrigin: o, onDragTransitionEnd: r } = this.getProps(), a = this.constraints || {}, u = b((c) => {
      if (!ot(c, n, this.currentDirection))
        return;
      let h = a && a[c] || {};
      o && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, f = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...l,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(r);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return ie(this.visualElement, e), i.start(cn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    b((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    b((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    b((n) => {
      const { drag: i } = this.getProps();
      if (!ot(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, l = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: r } = s.layout.layoutBox[n];
        l.set(e[n] - T(o, r, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!U(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    b((o) => {
      const r = this.getAxisMotionValue(o);
      if (r && this.constraints !== !1) {
        const a = r.get();
        s[o] = zs({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: l } = this.visualElement.getProps();
    this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), b((o) => {
      if (!ot(o, e, null))
        return;
      const r = this.getAxisMotionValue(o), { min: a, max: u } = this.constraints[o];
      r.set(T(a, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Qs.set(this.visualElement, this);
    const e = this.visualElement.current, n = J(e, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), i = () => {
      const { dragConstraints: a } = this.getProps();
      U(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, l = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), S.read(i);
    const o = nt(window, "resize", () => this.scalePositionWithinConstraints()), r = s.addEventListener("didUpdate", (({ delta: a, hasLayoutChanged: u }) => {
      this.isDragging && u && (b((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += a[c].translate, h.set(h.get() + a[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), n(), l(), r && r();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: l = !1, dragElastic: o = Rt, dragMomentum: r = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: l,
      dragElastic: o,
      dragMomentum: r
    };
  }
}
function ot(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function eo(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class no extends j {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new to(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ce = (t) => (e, n) => {
  t && S.postRender(() => t(e, n));
};
class io extends j {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new Nn(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kn(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Ce(e),
      onStart: Ce(n),
      onMove: i,
      onEnd: (l, o) => {
        delete this.session, s && S.postRender(() => s(l, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = J(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const at = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Me(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Y = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if ($.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Me(t, e.target.x), i = Me(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, so = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = ut.parse(t);
    if (s.length > 5)
      return i;
    const l = ut.createTransformer(t), o = typeof s[0] != "number" ? 1 : 0, r = n.x.scale * e.x, a = n.y.scale * e.y;
    s[0 + o] /= r, s[1 + o] /= a;
    const u = T(r, a, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), l(s);
  }
};
class oo extends Bi {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: l } = e;
    rs(ro), l && (n.group && n.group.add(l), i && i.register && s && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), l.setOptions({
      ...l.options,
      onExitComplete: () => this.safeToRemove()
    })), at.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: l } = this.props, o = i.projection;
    return o && (o.isPresent = l, s || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? o.promote() : o.relegate() || S.postRender(() => {
      const r = o.getStack();
      (!r || !r.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), $t.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Yn(t) {
  const [e, n] = ji(), i = D(Pn);
  return pn(oo, { ...t, layoutGroup: i, switchLayoutGroup: D(wn), isPresent: e, safeToRemove: n });
}
const ro = {
  borderRadius: {
    ...Y,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Y,
  borderTopRightRadius: Y,
  borderBottomLeftRadius: Y,
  borderBottomRightRadius: Y,
  boxShadow: so
};
function ao(t, e, n) {
  const i = A(t) ? t : ct(t);
  return i.start(cn("", i, e, n)), i.animation;
}
function lo(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const uo = (t, e) => t.depth - e.depth;
class co {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    hn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    dn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(uo), this.isDirty = !1, this.children.forEach(e);
  }
}
function ho(t, e) {
  const n = Ut.now(), i = ({ timestamp: s }) => {
    const l = s - n;
    l >= e && (O(i), t(l - e));
  };
  return S.read(i, !0), () => O(i);
}
const qn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], fo = qn.length, be = (t) => typeof t == "string" ? parseFloat(t) : t, Le = (t) => typeof t == "number" || $.test(t);
function mo(t, e, n, i, s, l) {
  s ? (t.opacity = T(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    po(i)
  ), t.opacityExit = T(e.opacity !== void 0 ? e.opacity : 1, 0, go(i))) : l && (t.opacity = T(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let o = 0; o < fo; o++) {
    const r = `border${qn[o]}Radius`;
    let a = Re(e, r), u = Re(n, r);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || Le(a) === Le(u) ? (t[r] = Math.max(T(be(a), be(u), i), 0), (lt.test(u) || lt.test(a)) && (t[r] += "%")) : t[r] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = T(e.rotate || 0, n.rotate || 0, i));
}
function Re(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const po = /* @__PURE__ */ Zn(0, 0.5, yi), go = /* @__PURE__ */ Zn(0.5, 0.95, G);
function Zn(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(Lt(t, e, i));
}
function Be(t, e) {
  t.min = e.min, t.max = e.max;
}
function M(t, e) {
  Be(t.x, e.x), Be(t.y, e.y);
}
function je(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ke(t, e, n, i, s) {
  return t -= e, t = ft(t, 1 / n, i), s !== void 0 && (t = ft(t, 1 / s, i)), t;
}
function yo(t, e = 0, n = 1, i = 0.5, s, l = t, o = t) {
  if (lt.test(e) && (e = parseFloat(e), e = T(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let r = T(l.min, l.max, i);
  t === l && (r -= e), t.min = ke(t.min, e, n, r, s), t.max = ke(t.max, e, n, r, s);
}
function Ie(t, e, [n, i, s], l, o) {
  yo(t, e[n], e[i], e[s], e.scale, l, o);
}
const vo = ["x", "scaleX", "originX"], Po = ["y", "scaleY", "originY"];
function Fe(t, e, n, i) {
  Ie(t.x, e, vo, n ? n.x : void 0, i ? i.x : void 0), Ie(t.y, e, Po, n ? n.y : void 0, i ? i.y : void 0);
}
function Oe(t) {
  return t.translate === 0 && t.scale === 1;
}
function Jn(t) {
  return Oe(t.x) && Oe(t.y);
}
function Ue(t, e) {
  return t.min === e.min && t.max === e.max;
}
function xo(t, e) {
  return Ue(t.x, e.x) && Ue(t.y, e.y);
}
function Ne(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Qn(t, e) {
  return Ne(t.x, e.x) && Ne(t.y, e.y);
}
function _e(t) {
  return C(t.x) / C(t.y);
}
function We(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class To {
  constructor() {
    this.members = [];
  }
  add(e) {
    hn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (dn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const l = this.members[s];
      if (l.isPresent !== !1) {
        i = l;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function So(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, l = t.y.translate / e.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || l || o) && (i = `translate3d(${s}px, ${l}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: f, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), f && (i += `skewX(${f}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const r = t.x.scale * e.x, a = t.y.scale * e.y;
  return (r !== 1 || a !== 1) && (i += `scale(${r}, ${a})`), i || "none";
}
const F = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Z = typeof window < "u" && window.MotionDebug !== void 0, Et = ["", "X", "Y", "Z"], Vo = { visibility: "hidden" }, $e = 1e3;
let wo = 0;
function Ct(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function ti(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Pi(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: l } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", S, !(s || l));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && ti(i);
}
function ei({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, r = e == null ? void 0 : e()) {
      this.id = wo++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Z && (F.totalNodes = F.resolvedTargetDeltas = F.recalculatedProjection = 0), this.nodes.forEach(Eo), this.nodes.forEach(Ro), this.nodes.forEach(Bo), this.nodes.forEach(Co), Z && window.MotionDebug.record(F);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new co());
    }
    addEventListener(o, r) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new fn()), this.eventHandlers.get(o).add(r);
    }
    notifyListeners(o, ...r) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...r);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, r = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = lo(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (u || a) && (this.isLayoutDirty = !0), t) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        t(o, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = ho(d, 250), at.hasAnimatedSinceResize && (at.hasAnimatedSinceResize = !1, this.nodes.forEach(He));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || Oo, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = c.getProps(), P = !this.targetLayout || !Qn(this.targetLayout, m) || f, v = !d && f;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (P || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, v);
          const V = {
            ...vi(p, "layout"),
            onPlay: g,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          d || He(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, O(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jo), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ti(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: r, layout: a } = this.options;
      if (r === void 0 && !a)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ge);
        return;
      }
      this.isUpdating || this.nodes.forEach(bo), this.isUpdating = !1, this.nodes.forEach(Lo), this.nodes.forEach(Ao), this.nodes.forEach(Do), this.clearAllSnapshots();
      const r = Ut.now();
      E.delta = un(0, 1e3 / 60, r - E.timestamp), E.timestamp = r, E.isProcessing = !0, Tt.update.process(E), Tt.preRender.process(E), Tt.render.process(E), E.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, $t.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Mo), this.sharedNodes.forEach(ko);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, S.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = x(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: r } = this.options;
      r && r.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let r = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (r = !1), r) {
        const a = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !Jn(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (r || I(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const r = this.measurePageBox();
      let a = this.removeElementScroll(r);
      return o && (a = this.removeTransform(a)), Uo(a), {
        animationId: this.root.animationId,
        measuredBox: r,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: r } = this.options;
      if (!r)
        return x();
      const a = r.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(No))) {
        const { scroll: c } = this.root;
        c && (_(a.x, c.offset.x), _(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var r;
      const a = x();
      if (M(a, o), !((r = this.scroll) === null || r === void 0) && r.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: d } = c;
        c !== this.root && h && d.layoutScroll && (h.wasRoot && M(a, o), _(a.x, h.offset.x), _(a.y, h.offset.y));
      }
      return a;
    }
    applyTransform(o, r = !1) {
      const a = x();
      M(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !r && c.options.layoutScroll && c.scroll && c !== c.root && W(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), I(c.latestValues) && W(a, c.latestValues);
      }
      return I(this.latestValues) && W(a, this.latestValues), a;
    }
    removeTransform(o) {
      const r = x();
      M(r, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !I(u.latestValues))
          continue;
        Bt(u.latestValues) && u.updateSnapshot();
        const c = x(), h = u.measurePageBox();
        M(c, h), Fe(r, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return I(this.latestValues) && Fe(r, this.latestValues), r;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== E.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var r;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = E.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = x(), this.relativeTargetOrigin = x(), tt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), M(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = x(), this.targetWithTransforms = x()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ws(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : M(this.target, this.layout.layoutBox), zn(this.target, this.targetDelta)) : M(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = x(), this.relativeTargetOrigin = x(), tt(this.relativeTargetOrigin, this.target, f.target), M(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Z && F.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Bt(this.parent.latestValues) || Hn(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === E.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      M(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      Zs(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = x());
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (je(this.prevProjectionDelta.x, this.projectionDelta.x), je(this.prevProjectionDelta.y, this.projectionDelta.y)), Q(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !We(this.projectionDelta.x, this.prevProjectionDelta.x) || !We(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Z && F.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var r;
      if ((r = this.options.visualElement) === null || r === void 0 || r.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = N(), this.projectionDelta = N(), this.projectionDeltaWithTransform = N();
    }
    setAnimationOrigin(o, r = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, h = N();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
      const d = x(), f = a ? a.source : void 0, m = this.layout ? this.layout.source : void 0, p = f !== m, g = this.getStack(), y = !g || g.members.length <= 1, P = !!(p && !y && this.options.crossfade === !0 && !this.path.some(Fo));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (V) => {
        const R = V / 1e3;
        ze(h.x, o.x, R), ze(h.y, o.y, R), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (tt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Io(this.relativeTarget, this.relativeTargetOrigin, d, R), v && xo(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = x()), M(v, this.relativeTarget)), p && (this.animationValues = c, mo(c, u, this.latestValues, R, P, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (O(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = S.update(() => {
        at.hasAnimatedSinceResize = !0, this.currentAnimation = ao(0, $e, {
          ...o,
          onUpdate: (r) => {
            this.mixTargetDelta(r), o.onUpdate && o.onUpdate(r);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($e), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: r, target: a, layout: u, latestValues: c } = o;
      if (!(!r || !a || !u)) {
        if (this !== o && this.layout && u && ni(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || x();
          const h = C(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + h;
          const d = C(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        M(r, a), W(r, c), Q(this.projectionDeltaWithTransform, this.layoutCorrected, r, c);
      }
    }
    registerSharedNode(o, r) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new To()), this.sharedNodes.get(o).add(r);
      const u = r.options.initialPromotionConfig;
      r.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(r) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: r } = this.options;
      return r ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: r } = this.options;
      return r ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: r, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({ transition: r });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let r = !1;
      const { latestValues: a } = o;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (r = !0), !r)
        return;
      const u = {};
      a.z && Ct("z", o, u, this.animationValues);
      for (let c = 0; c < Et.length; c++)
        Ct(`rotate${Et[c]}`, o, u, this.animationValues), Ct(`skew${Et[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var r, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Vo;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = rt(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = rt(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !I(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = So(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: f, y: m } = this.projectionDelta;
      u.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (a = (r = d.opacity) !== null && r !== void 0 ? r : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const p in dt) {
        if (d[p] === void 0)
          continue;
        const { correct: g, applyTo: y } = dt[p], P = u.transform === "none" ? d[p] : g(d[p], h);
        if (y) {
          const v = y.length;
          for (let V = 0; V < v; V++)
            u[y[V]] = P;
        } else
          u[p] = P;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? rt(o == null ? void 0 : o.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var r;
        return (r = o.currentAnimation) === null || r === void 0 ? void 0 : r.stop();
      }), this.root.nodes.forEach(Ge), this.root.sharedNodes.clear();
    }
  };
}
function Ao(t) {
  t.updateLayout();
}
function Do(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: l } = t.options, o = n.source !== t.layout.source;
    l === "size" ? b((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], f = C(d);
      d.min = i[h].min, d.max = d.min + f;
    }) : ni(l, n.layoutBox, i) && b((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], f = C(i[h]);
      d.max = d.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + f);
    });
    const r = N();
    Q(r, i, n.layoutBox);
    const a = N();
    o ? Q(a, t.applyTransform(s, !0), n.measuredBox) : Q(a, i, n.layoutBox);
    const u = !Jn(r);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: f } = h;
        if (d && f) {
          const m = x();
          tt(m, n.layoutBox, d.layoutBox);
          const p = x();
          tt(p, i, f.layoutBox), Qn(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function Eo(t) {
  Z && F.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Co(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Mo(t) {
  t.clearSnapshot();
}
function Ge(t) {
  t.clearMeasurements();
}
function bo(t) {
  t.isLayoutDirty = !1;
}
function Lo(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function He(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Ro(t) {
  t.resolveTargetDelta();
}
function Bo(t) {
  t.calcProjection();
}
function jo(t) {
  t.resetSkewAndRotation();
}
function ko(t) {
  t.removeLeadSnapshot();
}
function ze(t, e, n) {
  t.translate = T(e.translate, 0, n), t.scale = T(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Xe(t, e, n, i) {
  t.min = T(e.min, n.min, i), t.max = T(e.max, n.max, i);
}
function Io(t, e, n, i) {
  Xe(t.x, e.x, n.x, i), Xe(t.y, e.y, n.y, i);
}
function Fo(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Oo = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ke = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ye = Ke("applewebkit/") && !Ke("chrome/") ? Math.round : G;
function qe(t) {
  t.min = Ye(t.min), t.max = Ye(t.max);
}
function Uo(t) {
  qe(t.x), qe(t.y);
}
function ni(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !_s(_e(e), _e(n), 0.2);
}
function No(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const _o = ei({
  attachResizeListener: (t, e) => nt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Mt = {
  current: void 0
}, ii = ei({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Mt.current) {
      const t = new _o({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Mt.current = t;
    }
    return Mt.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Wo = {
  pan: {
    Feature: io
  },
  drag: {
    Feature: no,
    ProjectionNode: ii,
    MeasureLayout: Yn
  }
};
function Ze(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, l = i[s];
  l && S.postRender(() => l(e, it(e)));
}
class $o extends j {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ys(e, (n) => (Ze(this.node, n, "Start"), (i) => Ze(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Go extends j {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ln(nt(this.node.current, "focus", () => this.onFocus()), nt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Je(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), l = i[s];
  l && S.postRender(() => l(e, it(e)));
}
class Ho extends j {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ts(e, (n) => (Je(this.node, n, "Start"), (i, { success: s }) => Je(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const kt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), zo = (t) => {
  const e = kt.get(t.target);
  e && e(t);
}, Xo = (t) => {
  t.forEach(zo);
};
function Ko({ root: t, ...e }) {
  const n = t || document;
  bt.has(n) || bt.set(n, {});
  const i = bt.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Xo, { root: t, ...e })), i[s];
}
function Yo(t, e, n) {
  const i = Ko(e);
  return kt.set(t, n), i.observe(t), () => {
    kt.delete(t), i.unobserve(t);
  };
}
const qo = {
  some: 0,
  all: 1
};
class Zo extends j {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: l } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : qo[s]
    }, r = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, l && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(a);
    };
    return Yo(this.node.current, o, r);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Jo(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Jo({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Qo = {
  inView: {
    Feature: Zo
  },
  tap: {
    Feature: Ho
  },
  focus: {
    Feature: Go
  },
  hover: {
    Feature: $o
  }
}, tr = {
  layout: {
    ProjectionNode: ii,
    MeasureLayout: Yn
  }
}, It = { current: null }, si = { current: !1 };
function er() {
  if (si.current = !0, !!en)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => It.current = t.matches;
      t.addListener(e), e();
    } else
      It.current = !1;
}
const nr = [...xi, Ti, ut], ir = (t) => nr.find(Si(t)), Qe = /* @__PURE__ */ new WeakMap();
function sr(t, e, n) {
  for (const i in e) {
    const s = e[i], l = n[i];
    if (A(s))
      t.addValue(i, s), process.env.NODE_ENV === "development" && Ft(s.version === "11.18.2", `Attempting to mix Motion versions ${s.version} with 11.18.2 may not work as expected.`);
    else if (A(l))
      t.addValue(i, ct(s, { owner: t }));
    else if (l !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, ct(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const tn = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class or {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: l, visualState: o }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Vi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ut.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, S.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: u, onUpdate: c } = o;
    this.onUpdate = c, this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = r, this.blockInitialAnimation = !!l, this.isControllingVariants = yt(n), this.isVariantNode = Vn(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const m = d[f];
      a[f] !== void 0 && A(m) && m.set(a[f], !1);
    }
  }
  mount(e) {
    this.current = e, Qe.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), si.current || er(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : It.current, process.env.NODE_ENV !== "production" && Ft(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Qe.delete(this.current), this.projection && this.projection.unmount(), O(this.notifyUpdate), O(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = z.has(e), s = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && S.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
    }), l = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), l(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in H) {
      const n = H[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const l = this.features[e];
        l.isMounted ? l.update() : (l.mount(), l.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : x();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < tn.length; i++) {
      const s = tn[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const l = "on" + s, o = e[l];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = sr(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = ct(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (wi(s) || Ai(s)) ? s = parseFloat(s) : !ir(s) && ut.test(n) && (s = Di(e, n)), this.setBaseTarget(e, A(s) ? s.get() : s)), A(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const o = sn(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (s = o[e]);
    }
    if (i && s !== void 0)
      return s;
    const l = this.getBaseTargetFromProps(this.props, e);
    return l !== void 0 && !A(l) ? l : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new fn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class oi extends or {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ei;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    A(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function rr(t) {
  return window.getComputedStyle(t);
}
class ar extends oi {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Mn;
  }
  readValueFromInstance(e, n) {
    if (z.has(n)) {
      const i = mn(n);
      return i && i.default || 0;
    } else {
      const i = rr(e), s = (rn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Xn(e, n);
  }
  build(e, n, i) {
    Ht(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Yt(e, n, i);
  }
}
class lr extends oi {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = x;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (z.has(n)) {
      const i = mn(n);
      return i && i.default || 0;
    }
    return n = bn.has(n) ? n : an(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Bn(e, n, i);
  }
  build(e, n, i) {
    zt(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    Ln(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = Kt(e.tagName), super.mount(e);
  }
}
const ur = (t, e) => Gt(t) ? new lr(e) : new ar(e, {
  allowProjection: t !== vn
}), cr = /* @__PURE__ */ ps({
  ...Rs,
  ...Qo,
  ...Wo,
  ...tr
}, ur), yr = /* @__PURE__ */ Ui(cr);
export {
  Pn as L,
  xn as M,
  Nt as P,
  yr as m,
  ji as u
};
