import { useState as f, useEffect as n } from "react";
import { HEADER_SCROLL_THRESHOLD_PX as u } from "../constants.js";
const d = ({
  isEnabled: r,
  scrollContainer: e
}) => {
  const [l, s] = f(!1);
  return n(() => {
    if (!r)
      return s(!1), () => {
      };
    const o = e ?? window, c = () => e ? e.scrollTop : window.scrollY, t = () => {
      s(c() > u);
    };
    return t(), o.addEventListener("scroll", t, { passive: !0 }), () => {
      o.removeEventListener("scroll", t);
    };
  }, [r, e]), r ? { isCollapsed: l } : { isCollapsed: !1 };
};
export {
  d as useHeaderScrollCollapse
};
