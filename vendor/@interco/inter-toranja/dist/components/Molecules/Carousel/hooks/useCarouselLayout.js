import { useState as u, useLayoutEffect as E } from "react";
import { CAROUSEL_VARIANTS as W } from "../constants.js";
const C = ({
  variant: l,
  showPreview: s,
  pageWidth: o,
  pageSpacing: a = 8,
  currentIndex: f,
  viewportRef: t,
  carouselRef: d
}) => {
  const [n, i] = u(0), [A, T] = u(0), [L, m] = u(0);
  return E(() => {
    const r = t.current;
    if (!r)
      return;
    const e = new ResizeObserver(() => {
      i(s ? o : r.offsetWidth);
    });
    return e.observe(r), () => {
      e.disconnect();
    };
  }, [s, s ? o : void 0]), E(() => {
    var r, e;
    if (l === W.PAGE_VIEW) {
      if (n === 0)
        return;
      (r = d.current) == null || r.classList.add("carousel__track--transitioning");
      let c = -(f * (n + a));
      if (s) {
        const S = (t.current.offsetWidth - n) / 2;
        c += S, t.current && ((e = t == null ? void 0 : t.current) == null || e.focus({ preventScroll: !0 }));
      }
      m(c), T(c);
    }
  }, [f, l, a, n, s, d]), { slideWidth: n, currentTranslate: A, prevTranslate: L, setCurrentTranslate: T, setPrevTranslate: m };
};
export {
  C as useCarouselLayout
};
