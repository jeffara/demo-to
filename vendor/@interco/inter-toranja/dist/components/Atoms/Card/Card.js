import { jsx as C } from "react/jsx-runtime";
import { useState as h } from "react";
import { STATE as a, TAGGING_EVENT as T } from "../../../utils/pattern.js";
import '../../../assets/Card.css';const k = (e) => e.tagName === "INPUT" || e.closest("input") !== null || e.getAttribute("role") === "checkbox" || e.closest('[role="checkbox"]') !== null, A = (e, n) => {
  const c = e.querySelector("input"), o = e.querySelector('[role="checkbox"]');
  return (c == null ? void 0 : c.contains(n)) || (o == null ? void 0 : o.contains(n)) || !1;
}, m = (e) => {
  const n = e.target, c = e.currentTarget;
  return k(n) || A(c, n);
}, D = (e) => ![a.DISABLED, a.SKELETON].includes(e), _ = ({
  children: e,
  state: n = a.ENABLED,
  isSelected: c = !1,
  onSelect: o,
  onClick: l,
  onTag: i
}) => {
  const [f, E] = h(c ?? !1), s = D(n), I = () => {
    i && i((t) => ({
      ...t,
      name: T.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Card"
      }
    }));
  }, N = () => {
    l && s && l();
  }, S = () => {
    s && E((t) => {
      const r = !t;
      return o && o(r), r;
    });
  }, d = (t) => {
    const r = m(t);
    s && (I(), r || N());
  }, p = (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), d(t));
  }, g = (t) => {
    m(t) || S();
  }, u = `card-component--${(s && (f || c) ? "selected" : "") || n}`;
  return /* @__PURE__ */ C(
    "div",
    {
      "data-testid": "card-component",
      onClick: d,
      role: "button",
      tabIndex: n === a.ENABLED ? 0 : -1,
      onKeyDown: p,
      "aria-selected": c,
      className: u,
      children: /* @__PURE__ */ C("div", { className: `${u}__children`, onClick: g, children: e })
    }
  );
};
export {
  _ as Card
};
