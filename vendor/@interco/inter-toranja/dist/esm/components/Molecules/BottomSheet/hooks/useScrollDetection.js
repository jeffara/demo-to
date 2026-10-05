import { useRef as a, useState as A, useCallback as S, useEffect as T } from "react";
import { BOTTOM_TOLERANCE_PX as h } from "../constants.js";
const m = (t) => ({
  hasScroll: t.scrollHeight > t.clientHeight,
  isAtTop: t.scrollTop <= 0,
  isAtBottom: t.scrollTop + t.clientHeight >= t.scrollHeight - h
}), f = (t, o) => t.hasScroll === o.hasScroll && t.isAtTop === o.isAtTop && t.isAtBottom === o.isAtBottom, E = () => {
  const t = a(null), [o, n] = A({
    hasScroll: !1,
    isAtTop: !0,
    isAtBottom: !1
  }), u = S((s) => {
    var c;
    if ((c = t.current) == null || c.call(t), t.current = null, !s)
      return;
    const r = () => {
      const l = m(s);
      n((i) => f(i, l) ? i : l);
    };
    r(), s.addEventListener("scroll", r, { passive: !0 });
    const e = new ResizeObserver(r);
    e.observe(s), t.current = () => {
      s.removeEventListener("scroll", r), e.disconnect();
    };
  }, []);
  return T(
    () => () => {
      var s;
      (s = t.current) == null || s.call(t), t.current = null;
    },
    []
  ), { slotRef: u, ...o };
};
export {
  E as useScrollDetection
};
