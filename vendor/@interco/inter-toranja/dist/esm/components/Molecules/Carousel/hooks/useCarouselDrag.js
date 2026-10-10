import { useState as E, useRef as I } from "react";
import { CAROUSEL_VARIANTS as J, CAROUSEL_SCROLL_END_SPACING_FALLBACK_PX as Q } from "../constants.js";
import { resolveCarouselScrollEndSpacing as Y } from "./resolveCarouselScrollEndSpacing.js";
const st = ({
  variant: b,
  snapToGrid: k,
  items: m,
  pageSpacing: N = 8,
  showPreview: R,
  slideWidth: L,
  currentIndex: r,
  carouselRef: l,
  viewportRef: h,
  prevTranslate: S,
  currentTranslate: _,
  setCurrentIndex: u,
  setCurrentTranslate: A,
  setPrevTranslate: D
}) => {
  const [P, p] = E(!1), [y, q] = E(0), [w, G] = E(0), [B, F] = E(0), M = I(0), V = (t) => t.type.includes("mouse") ? t.clientX : t.touches[0].clientX, X = () => {
    P && (M.current = requestAnimationFrame(X));
  }, T = () => {
    const t = _ - S, o = L / 4;
    if (t < -o && r < m.length - 1)
      u(r + 1);
    else if (t > o && r > 0)
      u(r - 1);
    else {
      let n = r * -(L + N);
      if (R) {
        const c = (h.current.offsetWidth - L) / 2;
        n += c;
      }
      A(n), D(n);
    }
  }, U = (t, o) => {
    var g, d, f;
    const n = _ - S, c = ((d = (g = l.current) == null ? void 0 : g.firstChild) == null ? void 0 : d.offsetWidth) / 4 || 50, a = Array.from(((f = l.current) == null ? void 0 : f.children) ?? []), i = a.findIndex(
      (W) => W.offsetLeft >= -_
    );
    let s = i;
    n < -c && i < m.length - 1 ? s = i + 1 > m.length - 1 ? m.length - 1 : i + 1 : n > c && i > 0 && (s = i), u(s);
    let e = -a[s].offsetLeft;
    e = Math.max(t, Math.min(o, e)), A(e), D(e);
  }, K = (t, o) => {
    var d, f;
    const n = Date.now() - w, a = (B - y) / n * 250;
    let i = S + (B - y) + a;
    i = Math.max(t, Math.min(o, i)), A(i), D(i);
    const s = (d = h.current) == null ? void 0 : d.getBoundingClientRect();
    if (!s)
      return;
    const x = Array.from(((f = l.current) == null ? void 0 : f.children) ?? []);
    let e = -1, g = 0;
    x.forEach((W, v) => {
      const C = W.getBoundingClientRect(), z = Math.max(s.left, C.left), H = Math.min(s.right, C.right), O = Math.max(0, H - z);
      O > g && (g = O, e = v);
    }), e !== -1 && e !== r && u(e);
  }, j = () => {
    var i, s;
    const t = ((i = h.current) == null ? void 0 : i.clientWidth) ?? 0, o = ((s = l.current) == null ? void 0 : s.scrollWidth) ?? 0, n = 0, c = Y(
      h.current,
      Q
    ), a = o > t ? t - o - c : 0;
    k ? U(a, n) : K(a, n);
  };
  return {
    dragStart: (t) => {
      var n;
      p(!0);
      const o = V(t);
      q(o), F(o), G(Date.now()), M.current = requestAnimationFrame(X), (n = l.current) == null || n.classList.remove("carousel__track--transitioning");
    },
    drag: (t) => {
      if (!P)
        return;
      const o = V(t);
      F(o);
      const n = S + o - y;
      A(n);
    },
    dragEnd: () => {
      var t;
      cancelAnimationFrame(M.current), p(!1), (t = l.current) == null || t.classList.add("carousel__track--transitioning"), b === J.PAGE_VIEW ? T() : j();
    },
    isDragging: P
  };
};
export {
  st as useCarouselDrag
};
