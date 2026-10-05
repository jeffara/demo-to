import { jsx as p, Fragment as g, jsxs as v } from "react/jsx-runtime";
import { g as w } from "../../../../_commonjsHelpers-DaMA6jEr.js";
import y from "react";
import '../../../../assets/index4.css';var s = {}, _;
function b() {
  if (_) return s;
  _ = 1, Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = void 0;
  var u = f(y);
  function f(t, n) {
    if (typeof WeakMap == "function") var i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (f = function(e, m) {
      if (!m && e && e.__esModule) return e;
      var c, d, o = { __proto__: null, default: e };
      if (e === null || typeof e != "object" && typeof e != "function") return o;
      if (c = m ? a : i) {
        if (c.has(e)) return c.get(e);
        c.set(e, o);
      }
      for (const l in e) l !== "default" && {}.hasOwnProperty.call(e, l) && ((d = (c = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, l)) && (d.get || d.set) ? c(o, l, d) : o[l] = e[l]);
      return o;
    })(t, n);
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(t) {
      for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        for (var a in i) ({}).hasOwnProperty.call(i, a) && (t[a] = i[a]);
      }
      return t;
    }, r.apply(null, arguments);
  }
  const h = (t) => /* @__PURE__ */ u.createElement("svg", r({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    color: t.color
  }, t), /* @__PURE__ */ u.createElement("path", {
    fill: t.color,
    fillRule: "evenodd",
    d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm3.696-11.782a1 1 0 1 0-1.392-1.436l-3.429 3.325-1.179-1.143A1 1 0 1 0 8.304 13.4l1.875 1.818a1 1 0 0 0 1.392 0l4.125-4Z",
    clipRule: "evenodd"
  }));
  return s.default = h, s;
}
var j = /* @__PURE__ */ b();
const k = /* @__PURE__ */ w(j), R = ({ hints: u, showIcon: f }) => /* @__PURE__ */ p(g, { children: u.filter((r) => r.trim() !== "").map((r) => /* @__PURE__ */ v("div", { className: "success", children: [
  !f && /* @__PURE__ */ p(
    k,
    {
      "aria-hidden": "true",
      color: "var(--color-text-feedback-success-default)",
      height: 16,
      width: 16
    }
  ),
  /* @__PURE__ */ p("span", { className: "type-label-medium-regular", children: r }, `success-${r.split(" ")}`)
] }, r)) });
export {
  R as default
};
