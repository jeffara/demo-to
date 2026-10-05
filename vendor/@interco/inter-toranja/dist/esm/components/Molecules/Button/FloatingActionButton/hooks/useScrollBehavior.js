import { useState as a, useRef as R, useEffect as w, useCallback as _ } from "react";
import { FLOATING_ACTION_BUTTON_BEHAVIOR as i, ANIMATION_CONFIG as B, SCROLL_CONFIG as d } from "../constants.js";
import { calculateDynamicWidth as g } from "../utils/calculateDynamicWidth.js";
const x = ({
  behavior: o,
  label: e,
  fabRef: O,
  isLoading: E
}) => {
  const S = () => e ? o === i.HIDE_LABEL_ON_SCROLL ? !0 : o !== i.SCROLL_TO_TOP : !1, [T, s] = a(S()), [p, f] = a(
    o !== i.SCROLL_TO_TOP
  ), H = R(0);
  w(() => {
    if (o === i.DEFAULT) {
      s(!!e);
      return;
    }
    const t = () => {
      const n = window.scrollY || document.documentElement.scrollTop, l = document.documentElement.scrollHeight, r = window.innerHeight, m = n + r, c = n <= d.TOP_THRESHOLD, u = m >= l - d.BOTTOM_THRESHOLD;
      o === i.HIDE_LABEL_ON_SCROLL ? s(c || u) : o === i.SCROLL_TO_TOP && (H.current = n, s(u && !!e), f(!c));
    };
    return t(), window.addEventListener("scroll", t, { passive: !0 }), () => window.removeEventListener("scroll", t);
  }, [o, e]);
  const h = _(() => {
    s(!1);
    const t = window.scrollY, n = B.SCROLL_TO_TOP_DURATION, l = performance.now(), r = (m) => {
      const c = m - l, u = Math.min(c / n, 1), C = ((N) => 1 - Math.pow(1 - N, 3))(u), I = t * (1 - C);
      window.scrollTo(0, I), u < 1 && requestAnimationFrame(r);
    };
    requestAnimationFrame(r);
  }, []), A = _(() => {
    s(!0), setTimeout(() => {
      const t = window.scrollY || document.documentElement.scrollTop, n = t <= d.TOP_THRESHOLD, l = document.documentElement.scrollHeight, r = window.innerHeight, c = t + r >= l - d.BOTTOM_THRESHOLD;
      !n && !c && s(!1);
    }, d.INTERACTION_LABEL_DELAY);
  }, []);
  return w(() => {
    if (!O.current)
      return;
    const t = O.current.querySelector("button");
    if (t) {
      if (!e) {
        t.style.removeProperty("--fab-expanded-width");
        return;
      }
      g(e, t);
    }
  }, [e, T, E, O]), {
    isExpanded: T,
    isVisible: p,
    handleScrollToTopClick: h,
    handleHideLabelOnScrollClick: A
  };
};
export {
  x as useScrollBehavior
};
