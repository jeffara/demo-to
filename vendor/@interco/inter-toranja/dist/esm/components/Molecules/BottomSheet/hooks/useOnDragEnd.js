import { useCallback as T } from "react";
import { DRAG_THRESHOLD as w, CLOSE_THRESHOLD_PERCENTAGE as I } from "../constants.js";
const C = ({
  variants: o,
  positionOrder: c,
  initialPosition: l,
  controls: a,
  close: i,
  currentPosition: d,
  setCurrentPosition: f
}) => {
  const u = (t, e) => t < e ? (a.start("hidden").then(() => {
    i();
  }), !0) : !1, x = (t) => t < w && d ? (a.start(d), !0) : !1, D = (t) => {
    let e = 0;
    if (d) {
      const n = t.indexOf(d);
      if (n !== -1)
        return n;
    }
    const r = l, s = t.indexOf(r);
    return s !== -1 && (e = s), e;
  }, E = (t, e, r) => {
    if (t) {
      const s = Math.min(e + 1, r.length - 1), n = r[s];
      a.start(n), f(n);
    } else {
      const s = Math.max(e - 1, 0), n = r[s];
      a.start(n), f(n);
    }
  };
  return {
    handleDragEnd: T(
      (t, e) => {
        const r = window.innerHeight, s = r * I, n = -(e.point.y - r), m = e.velocity.y < 0, p = Math.abs(e.offset.y), g = Object.keys(o).filter((h) => h !== "hidden").sort((h, H) => c[h] - c[H]);
        if (u(n, s) || x(p))
          return;
        const y = D(g);
        E(m, y, g);
      },
      [
        o,
        c,
        a,
        i,
        d,
        l,
        f
      ]
    )
  };
};
export {
  C as useOnDragEnd
};
