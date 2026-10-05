import { useState as y, useRef as b, useMemo as x, useCallback as d, useEffect as C } from "react";
import { getAspectRatioClass as R } from "../utils/getImageClasses.js";
import { useToranjaTheme as D } from "../../../../utils/useToranjaTheme/useToranjaTheme.js";
function j({
  src: e,
  width: a,
  height: t,
  fillWidth: m = !1,
  fillHeight: c = !1,
  ratio: r,
  onLoad: o,
  onError: f
}) {
  const { theme: u } = D(), p = (u == null ? void 0 : u.includes("dark")) ?? !1, [g, i] = y({
    isLoading: !0,
    hasError: !1,
    isLoaded: !1
  }), n = b(!1), l = x(() => {
    if (e) {
      if (e.local)
        return e.local;
      if (e.remote)
        return p && e.remote.dark ? e.remote.dark : e.remote.light;
    }
  }, [e, p]), L = d(() => {
    i((s) => s.isLoaded ? s : {
      isLoading: !1,
      hasError: !1,
      isLoaded: !0
    }), n.current || (n.current = !0, o == null || o());
  }, [o]), S = d(() => {
    i({
      isLoading: !1,
      hasError: !0,
      isLoaded: !1
    }), f == null || f();
  }, [f]);
  C(() => {
    l && (i({
      isLoading: !0,
      hasError: !1,
      isLoaded: !1
    }), n.current = !1);
  }, [l]);
  const k = d(() => {
    const s = {};
    return a && !m && (s.width = typeof a == "number" ? `${a}px` : a), t && !c && (s.height = typeof t == "number" ? `${t}px` : t), r && !R(r).includes("--ratio-") && (s["--image-aspect-ratio"] = r.toString()), s;
  }, [a, t, m, c, r]);
  return {
    imageSrc: l,
    loadStates: g,
    handleLoad: L,
    handleError: S,
    getDimensionStyles: k
  };
}
export {
  j as useImageState
};
