import { useState as u, useRef as i, useEffect as g } from "react";
import { getLazyIconRegistry as d } from "../utils/registryUtils.js";
import { processSvgContent as y } from "../utils/svgUtils.js";
const m = ({ name: o }) => {
  const [c, n] = u(null), [f, e] = u(!0), t = i(!0), l = async () => {
    e(!0);
    try {
      const s = await d(o);
      if (!t.current || !s) {
        t.current && (n(null), e(!1));
        return;
      }
      const r = await s();
      if (!t.current)
        return;
      if (!(r != null && r.default) || typeof r.default != "string") {
        n(null), e(!1);
        return;
      }
      const a = y(r.default, o);
      t.current && (n(a), e(!1));
    } catch {
      t.current && (n(null), e(!1));
    }
  };
  return g(() => (t.current = !0, l(), () => {
    t.current = !1;
  }), [o]), { iconSvgSrc: c, isLoading: f };
};
export {
  m as useLazyIconSvg
};
