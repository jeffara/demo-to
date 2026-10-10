import { resolveColumnValue as B } from "../domain/resolveColumnValue.js";
import { PAYMENT as A } from "../../../Atoms/PaymentMethods/types.js";
import { parseTagAccessor as g } from "../../../Atoms/Tag/constants.js";
import { AvatarColor as M, AvatarVariant as h } from "../../../Molecules/Avatar/types.js";
import { SIZE as s, FEEDBACK as P } from "../../../../utils/pattern.js";
import { isIconName as m } from "../../../Atoms/Icon/constants/iconNames.js";
const c = (t) => typeof t == "object" && t !== null, y = (t) => typeof t == "string" ? t : typeof t == "number" || typeof t == "boolean" ? String(t) : "", b = (t) => {
  if (t == null)
    return;
  const n = y(t);
  return n.length > 0 ? n : void 0;
}, E = new Set(Object.values(A)), L = (t) => typeof t == "string" && E.has(t), k = new Set(Object.values(M)), T = /* @__PURE__ */ new Set([s.SMALL, s.MEDIUM, s.LARGE]), S = /* @__PURE__ */ new Set([s.SMALL, s.MEDIUM, s.LARGE]), f = {
  variant: h.Icon,
  icon: "ic_user",
  color: M.Soft,
  size: s.SMALL
}, x = (t) => typeof t == "string" && k.has(t), D = (t) => typeof t == "string" && T.has(t), R = (t) => typeof t == "string" && S.has(t), U = (t) => {
  if (!c(t) || t.variant !== h.Icon)
    return f;
  const n = t.icon;
  return typeof n != "string" || !m(n) ? f : {
    variant: h.Icon,
    icon: n,
    color: x(t.color) ? t.color : f.color,
    size: D(t.size) ? t.size : f.size
  };
}, H = (t, n) => n.minWidth === void 0 ? t : { ...t, minWidth: n.minWidth }, d = (t, n, o) => c(t) && "label" in t ? {
  type: "text",
  label: y(t.label),
  description: b(t.description),
  icon: typeof t.icon == "string" && m(t.icon) ? t.icon : void 0,
  align: n,
  visualState: o
} : {
  type: "text",
  label: y(t),
  align: n,
  visualState: o
}, G = (t, n, o) => c(t) && "value" in t ? {
  type: "value",
  value: y(t.value),
  description: b(t.description),
  align: n,
  visualState: o
} : {
  type: "value",
  value: y(t),
  align: n,
  visualState: o
}, C = (t) => t.map((n) => g(n)).filter((n) => n !== null), W = (t) => {
  if (Array.isArray(t))
    return C(t);
  if (c(t) && Array.isArray(t.tags))
    return C(t.tags);
  const n = g(t);
  return n ? [n] : [];
}, j = (t, n, o) => ({
  type: "tags",
  tags: W(t),
  align: n,
  visualState: o
}), F = (t, n, o) => {
  const e = g(t);
  return e ? { type: "status", tag: e, align: n, visualState: o } : {
    type: "status",
    tag: { label: y(t), color: "neutral", hierarchy: "soft", size: "small" },
    align: n,
    visualState: o
  };
}, N = (t, n, o) => ({
  type: "avatar",
  avatar: U(t),
  align: n,
  visualState: o
}), O = (t, n, o) => ({
  type: "paymentMethod",
  paymentMethod: L(t) ? t : A.CARDDEFAULT,
  align: n,
  visualState: o
}), _ = (t, n, o) => c(t) && "variant" in t ? {
  type: "signal",
  variant: String(t.variant),
  size: R(t.size) ? t.size : s.MEDIUM,
  align: n,
  visualState: o
} : {
  type: "signal",
  variant: P.SUCCESS,
  size: s.MEDIUM,
  align: n,
  visualState: o
}, K = (t, n, o) => ({
  type: "icon",
  icon: typeof t == "string" && m(t) ? t : "ic_orange",
  align: n,
  visualState: o
}), X = (t, n, o) => {
  if (c(t)) {
    const { value: e, min: r, max: i } = t;
    return {
      type: "counter",
      value: typeof e == "number" ? e : void 0,
      min: typeof r == "number" ? r : void 0,
      max: typeof i == "number" ? i : void 0,
      align: n,
      visualState: o
    };
  }
  return {
    type: "counter",
    value: typeof t == "number" ? t : void 0,
    align: n,
    visualState: o
  };
}, z = (t) => t === "primary" || t === "secondary" || t === "tertiary", I = (t) => t === "small" || t === "medium" || t === "large", Y = (t) => typeof t == "function", Z = (t) => t === "primary" || t === "secondary" || t === "tertiary", q = (t) => t === "small" || t === "medium" || t === "large", J = (t) => typeof t == "function", Q = (t, n, o) => {
  if (c(t) && "label" in t && "onClick" in t) {
    const { label: e, onClick: r, hierarchy: i, size: p } = t;
    if (typeof e == "string" && e.length > 0 && J(r))
      return {
        type: "button",
        button: {
          label: e,
          hierarchy: Z(i) ? i : "secondary",
          size: q(p) ? p : "small",
          onClick: r
        },
        align: n,
        visualState: o
      };
  }
  return d(t, n, o);
}, $ = (t, n, o) => {
  if (c(t) && "icon" in t) {
    const { icon: e, onClick: r, hierarchy: i, size: p } = t;
    if (typeof e == "string" && m(e) && Y(r))
      return {
        type: "iconButton",
        iconButton: {
          icon: e,
          hierarchy: z(i) ? i : "secondary",
          size: I(p) ? p : "small",
          onClick: r
        },
        align: n,
        visualState: o
      };
  }
  return d(t, n, o);
}, v = (t) => typeof t == "function", a = (t) => typeof t == "string" && t.length > 0, V = (t) => {
  if (!c(t))
    return !1;
  const { id: n, label: o, icon: e, onSelect: r } = t;
  return !a(n) || !a(o) || typeof e != "string" || !m(e) ? !1 : v(r);
}, w = (t) => !Array.isArray(t) || t.length === 0 ? !1 : t.every(V), tt = (t) => t === s.SMALL || t === s.MEDIUM || t === s.LARGE || t === s.EXTRA_LARGE, nt = (t, n, o) => {
  if (c(t) && "icon" in t && "menuItems" in t) {
    const { icon: e, hierarchy: r, size: i, menuItems: p, menuAriaLabel: l, menuSize: u } = t;
    if (typeof e == "string" && m(e) && w(p))
      return {
        type: "iconButtonMenu",
        iconButton: {
          icon: e,
          hierarchy: z(r) ? r : "secondary",
          size: I(i) ? i : "small"
        },
        menuItems: p,
        menuAriaLabel: typeof l == "string" ? l : void 0,
        menuSize: tt(u) ? u : void 0,
        align: n,
        visualState: o
      };
  }
  return d(t, n, o);
}, ot = (t, n, o) => c(t) && "checked" in t ? {
  type: "checkbox",
  checked: !!t.checked,
  align: n,
  visualState: o
} : {
  type: "checkbox",
  checked: !!t,
  align: n,
  visualState: o
}, yt = (t, n, o = "enabled") => {
  const e = B(n, t.accessor), r = t.align, i = (() => {
    switch (t.cellType) {
      case "value":
        return G(e, r, o);
      case "status":
        return F(e, r, o);
      case "tags":
        return j(e, r, o);
      case "button":
        return Q(e, r, o);
      case "avatar":
        return N(e, r, o);
      case "paymentMethod":
        return O(e, r, o);
      case "signal":
        return _(e, r, o);
      case "icon":
        return K(e, r, o);
      case "checkbox":
        return ot(e, r, o);
      case "counter":
        return X(e, r, o);
      case "iconButton":
        return $(e, r, o);
      case "iconButtonMenu":
        return nt(e, r, o);
      default:
        return d(e, r, o);
    }
  })();
  return H(i, t);
};
export {
  yt as mapColumnToCellProps
};
