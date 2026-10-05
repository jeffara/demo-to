import { jsx as p, Fragment as v, jsxs as h } from "react/jsx-runtime";
import { g as w } from "../../../../_commonjsHelpers-DaMA6jEr.js";
import y from "react";
import '../../../../assets/index3.css';var f = {}, m;
function b() {
  if (m) return f;
  m = 1, Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.default = void 0;
  var u = s(y);
  function s(t, n) {
    if (typeof WeakMap == "function") var i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (s = function(e, _) {
      if (!_ && e && e.__esModule) return e;
      var l, d, c = { __proto__: null, default: e };
      if (e === null || typeof e != "object" && typeof e != "function") return c;
      if (l = _ ? a : i) {
        if (l.has(e)) return l.get(e);
        l.set(e, c);
      }
      for (const o in e) o !== "default" && {}.hasOwnProperty.call(e, o) && ((d = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, o)) && (d.get || d.set) ? l(c, o, d) : c[o] = e[o]);
      return c;
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
  const g = (t) => /* @__PURE__ */ u.createElement("svg", r({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    color: t.color
  }, t), /* @__PURE__ */ u.createElement("path", {
    fill: t.color,
    fillRule: "evenodd",
    d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z",
    clipRule: "evenodd"
  }));
  return f.default = g, f;
}
var j = /* @__PURE__ */ b();
const x = /* @__PURE__ */ w(j), R = ({ hints: u, showIcon: s }) => /* @__PURE__ */ p(v, { children: u.filter((r) => r.trim() !== "").map((r) => /* @__PURE__ */ h("div", { className: "error", children: [
  !s && /* @__PURE__ */ p(
    x,
    {
      "aria-hidden": "true",
      color: "var(--color-text-feedback-error-default)",
      height: 16,
      width: 16
    }
  ),
  /* @__PURE__ */ p("span", { className: "type-label-medium-regular", children: r }, `error-${r.split(" ")}`)
] }, r)) });
export {
  R as default
};
