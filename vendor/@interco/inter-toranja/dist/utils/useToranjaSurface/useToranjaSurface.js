import { useState as m, useEffect as i } from "react";
import { SURFACE as t } from "../pattern.js";
const n = "toranja-surface", f = [t.WEBVIEW, t.DESKTOP], a = () => typeof window < "u" && typeof document < "u", c = (e) => typeof e == "string" && f.includes(e), s = () => {
  if (!a())
    return;
  const e = document.documentElement.getAttribute(n);
  return c(e) ? e : void 0;
}, d = (e) => {
  if (!a())
    return;
  document.documentElement.getAttribute(n) !== e && document.documentElement.setAttribute(n, e);
}, W = () => s() ?? t.WEBVIEW, j = (e) => {
  c(e) && d(e);
}, l = (e) => {
  const u = (e == null ? void 0 : e.defaultSurface) ?? t.WEBVIEW, [r, S] = m(
    () => s() ?? u
  );
  return i(() => {
    d(r);
  }, [r]), {
    surface: r,
    setSurface: (o) => {
      c(o) && S(o);
    },
    surfaces: f
  };
};
export {
  W as getToranjaSurface,
  c as isToranjaSurface,
  j as setToranjaSurface,
  l as useToranjaSurface
};
