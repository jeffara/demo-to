import { jsx as x, Fragment as K } from "react/jsx-runtime";
import * as M from "react";
import { useId as $, useRef as v, useContext as A, useInsertionEffect as N, useCallback as O, useMemo as R, Children as S, isValidElement as U, useState as b } from "react";
import { M as V, P as _, u as B, L as F } from "./proxy-BBnpZ6GV.js";
import { u as I, b as G } from "./visual-element-Dhl5aGeu.js";
class H extends M.Component {
  getSnapshotBeforeUpdate(c) {
    const e = this.props.childRef.current;
    if (e && c.isPresent && !this.props.isPresent) {
      const t = this.props.sizeRef.current;
      t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function W({ children: i, isPresent: c }) {
  const e = $(), t = v(null), m = v({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: u } = A(V);
  return N(() => {
    const { width: f, height: s, top: h, left: n } = m.current;
    if (c || !t.current || !f || !s)
      return;
    t.current.dataset.motionPopId = e;
    const r = document.createElement("style");
    return u && (r.nonce = u), document.head.appendChild(r), r.sheet && r.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${s}px !important;
            top: ${h}px !important;
            left: ${n}px !important;
          }
        `), () => {
      document.head.removeChild(r);
    };
  }, [c]), x(H, { isPresent: c, childRef: t, sizeRef: m, children: M.cloneElement(i, { ref: t }) });
}
const Y = ({ children: i, initial: c, isPresent: e, onExitComplete: t, custom: m, presenceAffectsLayout: u, mode: f }) => {
  const s = I(q), h = $(), n = O((d) => {
    s.set(d, !0);
    for (const C of s.values())
      if (!C)
        return;
    t && t();
  }, [s, t]), r = R(
    () => ({
      id: h,
      initial: c,
      isPresent: e,
      custom: m,
      onExitComplete: n,
      register: (d) => (s.set(d, !1), () => s.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    u ? [Math.random(), n] : [e, n]
  );
  return R(() => {
    s.forEach((d, C) => s.set(C, !1));
  }, [e]), M.useEffect(() => {
    !e && !s.size && t && t();
  }, [e]), f === "popLayout" && (i = x(W, { isPresent: e, children: i })), x(_.Provider, { value: r, children: i });
};
function q() {
  return /* @__PURE__ */ new Map();
}
const y = (i) => i.key || "";
function k(i) {
  const c = [];
  return S.forEach(i, (e) => {
    U(e) && c.push(e);
  }), c;
}
const ee = ({ children: i, custom: c, initial: e = !0, onExitComplete: t, presenceAffectsLayout: m = !0, mode: u = "sync", propagate: f = !1 }) => {
  const [s, h] = B(f), n = R(() => k(i), [i]), r = f && !s ? [] : n.map(y), d = v(!0), C = v(n), g = I(() => /* @__PURE__ */ new Map()), [D, T] = b(n), [a, z] = b(n);
  G(() => {
    d.current = !1, C.current = n;
    for (let l = 0; l < a.length; l++) {
      const o = y(a[l]);
      r.includes(o) ? g.delete(o) : g.get(o) !== !0 && g.set(o, !1);
    }
  }, [a, r.length, r.join("-")]);
  const w = [];
  if (n !== D) {
    let l = [...n];
    for (let o = 0; o < a.length; o++) {
      const p = a[o], P = y(p);
      r.includes(P) || (l.splice(o, 0, p), w.push(p));
    }
    u === "wait" && w.length && (l = w), z(k(l)), T(n);
    return;
  }
  process.env.NODE_ENV !== "production" && u === "wait" && a.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: E } = A(F);
  return x(K, { children: a.map((l) => {
    const o = y(l), p = f && !s ? !1 : n === a || r.includes(o), P = () => {
      if (g.has(o))
        g.set(o, !0);
      else
        return;
      let L = !0;
      g.forEach((j) => {
        j || (L = !1);
      }), L && (E == null || E(), z(C.current), f && (h == null || h()), t && t());
    };
    return x(Y, { isPresent: p, initial: !d.current || e ? void 0 : !1, custom: p ? void 0 : c, presenceAffectsLayout: m, mode: u, onExitComplete: p ? void 0 : P, children: l }, o);
  }) });
};
export {
  ee as A
};
