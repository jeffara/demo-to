import { useMemo as v, useState as y, useEffect as T, useCallback as A } from "react";
import { THEME as a } from "../pattern.js";
const i = "toranja-theme", l = "toranja-theme", g = [
  a.PF_LIGHT,
  a.PF_DARK,
  a.PJ_LIGHT,
  a.PJ_DARK
];
function f() {
  return typeof window < "u" && typeof document < "u";
}
function u(e) {
  return typeof e == "string" && g.includes(e);
}
function s() {
  if (!f())
    return;
  const e = document.documentElement.getAttribute(i);
  return u(e) ? e : void 0;
}
function w(e) {
  if (!f())
    return;
  document.documentElement.getAttribute(i) !== e && document.documentElement.setAttribute(i, e);
}
function _(e) {
  if (f())
    try {
      const t = window.localStorage.getItem(e);
      return u(t) ? t : void 0;
    } catch {
      return;
    }
}
function h(e, t) {
  if (f())
    try {
      window.localStorage.setItem(e, t);
    } catch {
      window.console.error("Error writing theme to storage", t);
    }
}
function H() {
  return s();
}
function I(e, t) {
  u(e) && (w(e), (t == null ? void 0 : t.storage) === "localStorage" && h(t.storageKey ?? l, e));
}
function K(e) {
  const t = (e == null ? void 0 : e.defaultTheme) ?? a.PF_LIGHT, n = (e == null ? void 0 : e.storage) ?? "localStorage", o = (e == null ? void 0 : e.storageKey) ?? l, E = v(() => {
    const r = s();
    return r || ((n === "localStorage" ? _(o) : void 0) ?? t);
  }, [t, n, o]), [c, d] = y(E);
  T(() => {
    w(c), n === "localStorage" && h(o, c);
  }, [c, n, o]), T(() => {
    if (n !== "localStorage")
      return () => {
      };
    const r = (m) => {
      m.key === o && u(m.newValue) && d(m.newValue);
    };
    return window.addEventListener("storage", r), () => window.removeEventListener("storage", r);
  }, [n, o]);
  const S = A((r) => {
    u(r) && d(r);
  }, []);
  return {
    theme: c,
    setTheme: S,
    themes: g
  };
}
export {
  H as getToranjaTheme,
  I as setToranjaTheme,
  K as useToranjaTheme
};
