import { createElement as s } from "react";
import { getLinkSizeClass as i } from "./linkUtils.js";
const u = (t) => t, m = (t, e, n, c, r) => {
  const p = e.size || "medium", S = e.color || "brand", o = e.trigger, a = (h) => {
    if (r) {
      h.preventDefault();
      return;
    }
    o && (c != null && c[o]) && (h.preventDefault(), c[o]());
  };
  return s(
    "a",
    {
      key: t,
      href: e.href || "#",
      className: i(p),
      "data-color": S,
      onClick: a,
      style: r ? { pointerEvents: "none", opacity: 0.5 } : void 0,
      target: e.target,
      rel: e.rel
    },
    ...n
  );
}, l = (t, e, n) => s("div", { key: t, style: { textAlign: e } }, ...n), A = (t, e) => s("span", { key: t, style: { textDecoration: "line-through" } }, ...e), f = (t, e, n) => s(t, { key: e }, ...n), y = (t, e, n) => s(t, { key: e }, ...n), E = /* @__PURE__ */ new Set(["s", "strike", "del"]), _ = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), v = /* @__PURE__ */ new Set(["p", "br", "sub", "sup", "span", "div"]), G = /* @__PURE__ */ new Set(["strong", "b"]), N = /* @__PURE__ */ new Set(["em", "i"]), I = {
  a: (t, e, n, c, r) => m(t, e, n, c, r),
  center: (t, e, n) => l(t, "center", n),
  right: (t, e, n) => l(t, "right", n)
}, L = (t, e, n, c) => {
  if (t.type === "text")
    return u(t.content);
  const { tagName: r = "span", attributes: p = {}, children: S = [] } = t, o = S.map(
    (h, d) => L(h, d, n, c)
  ), a = I[r];
  return a ? a(e, p, o, n, c) : E.has(r) ? A(e, o) : G.has(r) ? f("strong", e, o) : N.has(r) ? f("em", e, o) : _.has(r) ? y(r, e, o) : v.has(r) ? f(r, e, o) : f("span", e, o);
};
export {
  L as default,
  L as elementToReact
};
