import { useState as A } from "react";
import { SIDEBAR_DEFAULT_EXPANSION as U, SIDEBAR_DEFAULT_BRAND as k, SIDEBAR_DEFAULT_ARIA_LABEL as w, SIDEBAR_BASE_CLASS as G, SIDEBAR_COLLAPSE_LABEL as X, SIDEBAR_EXPAND_LABEL as K, SIDEBAR_FOOTER_FLYOUT_ID as M } from "../constants.js";
import { resolveSidebarBrand as V } from "../utils/resolveSidebarBrand.js";
import { classNamesMerge as c } from "../../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as Y } from "../../../../utils/pattern.js";
const C = (s) => {
  var t;
  return !!((t = s.children) != null && t.length);
}, j = (s, t) => {
  s && s((a) => ({
    ...a,
    name: Y.INTERACTION_CLICK,
    ComponentProperties: {
      component_name: "Sidebar",
      expansion: t
    }
  }));
}, Z = (s) => {
  const {
    items: t,
    expansion: a,
    defaultExpansion: L = U,
    onExpansionChange: p,
    brand: B = k,
    footer: l,
    ariaLabel: f = w,
    onTag: E
  } = s, I = a !== void 0, [D, h] = A(L), [m, S] = A(() => /* @__PURE__ */ new Set()), [b, _] = A(null), o = (I ? a : D) === "expanded", r = !o, F = (n) => {
    I || h(n), n === "collapsed" && S(/* @__PURE__ */ new Set()), _(null), p == null || p(n), j(E, n);
  }, N = () => {
    F(o ? "collapsed" : "expanded");
  }, u = V(B, r), T = (n) => {
    var e;
    o && C(n) && S((d) => {
      const i = new Set(d);
      return i.has(n.id) ? i.delete(n.id) : i.add(n.id), i;
    }), (e = n.onClick) == null || e.call(n);
  }, x = (n) => {
    var e;
    _(null), (e = n.onClick) == null || e.call(n);
  }, O = () => {
    l == null || l.onClick();
  }, R = (n, e) => {
    _((d) => e ? n : d === n ? null : d);
  }, v = t.map((n) => {
    const e = C(n);
    return {
      item: n,
      hasChildren: e,
      isNestedOpen: o && e && m.has(n.id),
      isFlyoutOpen: r && b === n.id,
      itemClasses: c("sidebar__item")
    };
  }), g = c(G, {
    "sidebar--expanded": o,
    "sidebar--collapsed": r
  }), y = c("sidebar__brand", {
    "sidebar__brand--symbol": r
  }), P = c("sidebar__control");
  return {
    navItems: v,
    footer: l,
    brandSrc: u.src,
    brandAlt: u.alt,
    ariaLabel: f,
    isExpanded: o,
    isCollapsed: r,
    rootClasses: g,
    brandClasses: y,
    controlClasses: P,
    controlIcon: o ? "ic_chevron_left" : "ic_chevron_right",
    controlAriaLabel: o ? X : K,
    controlAriaExpanded: o,
    onTag: E,
    handleToggle: N,
    handleItemActivate: T,
    handleChildActivate: x,
    handleFooterActivate: O,
    handleFlyoutToggle: R,
    isFooterFlyoutOpen: r && b === M
  };
};
export {
  Z as useSidebar
};
