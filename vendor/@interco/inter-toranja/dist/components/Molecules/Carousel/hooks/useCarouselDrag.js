import { useState as A, useRef as J } from "react";
import { CAROUSEL_VARIANTS as K, SCROLL_END_SPACING as Q } from "../constants.js";
const ot = ({
  variant: w,
  snapToGrid: N,
  items: h,
  pageSpacing: O = 8,
  showPreview: R,
  slideWidth: E,
  currentIndex: r,
  carouselRef: l,
  viewportRef: D,
  prevTranslate: m,
  currentTranslate: L,
  setCurrentIndex: S,
  setCurrentTranslate: u,
  setPrevTranslate: _
}) => {
  const [y, V] = A(!1), [M, q] = A(0), [G, T] = A(0), [x, B] = A(0), P = J(0), F = (t) => t.type.includes("mouse") ? t.clientX : t.touches[0].clientX, X = () => {
    y && (P.current = requestAnimationFrame(X));
  }, C = () => {
    const t = L - m, o = E / 4;
    if (t < -o && r < h.length - 1)
      S(r + 1);
    else if (t > o && r > 0)
      S(r - 1);
    else {
      let n = r * -(E + O);
      if (R) {
        const e = (D.current.offsetWidth - E) / 2;
        n += e;
      }
      u(n), _(n);
    }
  }, U = (t, o) => {
    var g, d, f;
    const n = L - m, e = ((d = (g = l.current) == null ? void 0 : g.firstChild) == null ? void 0 : d.offsetWidth) / 4 || 50, a = Array.from(((f = l.current) == null ? void 0 : f.children) ?? []), i = a.findIndex(
      (W) => W.offsetLeft >= -L
    );
    let c = i;
    n < -e && i < h.length - 1 ? c = i + 1 > h.length - 1 ? h.length - 1 : i + 1 : n > e && i > 0 && (c = i), S(c);
    let s = -a[c].offsetLeft;
    s = Math.max(t, Math.min(o, s)), u(s), _(s);
  }, j = (t, o) => {
    var d, f;
    const n = Date.now() - G, a = (x - M) / n * 250;
    let i = m + (x - M) + a;
    i = Math.max(t, Math.min(o, i)), u(i), _(i);
    const c = (d = D.current) == null ? void 0 : d.getBoundingClientRect();
    if (!c)
      return;
    const b = Array.from(((f = l.current) == null ? void 0 : f.children) ?? []);
    let s = -1, g = 0;
    b.forEach((W, z) => {
      const k = W.getBoundingClientRect(), H = Math.max(c.left, k.left), I = Math.min(c.right, k.right), p = Math.max(0, I - H);
      p > g && (g = p, s = z);
    }), s !== -1 && s !== r && S(s);
  }, v = () => {
    var a, i;
    const t = ((a = D.current) == null ? void 0 : a.clientWidth) ?? 0, o = ((i = l.current) == null ? void 0 : i.scrollWidth) ?? 0, n = 0, e = o > t ? t - o - Q : 0;
    N ? U(e, n) : j(e, n);
  };
  return {
    dragStart: (t) => {
      var n;
      V(!0);
      const o = F(t);
      q(o), B(o), T(Date.now()), P.current = requestAnimationFrame(X), (n = l.current) == null || n.classList.remove("carousel__track--transitioning");
    },
    drag: (t) => {
      if (!y)
        return;
      const o = F(t);
      B(o);
      const n = m + o - M;
      u(n);
    },
    dragEnd: () => {
      var t;
      cancelAnimationFrame(P.current), V(!1), (t = l.current) == null || t.classList.add("carousel__track--transitioning"), w === K.PAGE_VIEW ? C() : v();
    },
    isDragging: y
  };
};
export {
  ot as useCarouselDrag
};
