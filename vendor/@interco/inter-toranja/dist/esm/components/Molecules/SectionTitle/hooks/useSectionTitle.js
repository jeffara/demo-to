import { classNamesMerge as a } from "../../../../utils/classNamesMerge.js";
import { STATE as l, TAGGING_EVENT as P } from "../../../../utils/pattern.js";
const M = '[data-testid="section-title-icon"]', V = (I) => {
  const {
    title: r = "Title",
    showDescription: N = !1,
    description: _,
    maxLines: d,
    showIcon: g = !0,
    icon: h,
    state: i = l.ENABLED,
    iconState: k,
    variant: u = "default",
    onClick: o,
    onTag: c
  } = I, C = i === l.SKELETON, p = i === l.DISABLED, e = u === "navigation", m = !p && !C, T = m && !!o, f = e && T, D = e || g, L = p ? l.DISABLED : k ?? i, E = () => {
    c && c((t) => ({
      ...t,
      name: P.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "SectionTitle",
        variant: u,
        state: i,
        title: r,
        description: _
      }
    }));
  }, y = (t) => {
    if (!m)
      return;
    const n = t.target;
    if (!(n instanceof HTMLElement))
      return;
    const s = n.closest(M) !== null, B = e || !s, G = T && (e || s);
    s && !e && t.stopPropagation(), B && E(), G && o && o(t);
  }, O = (t) => {
    if (!m)
      return;
    const n = t.key === "Enter", s = t.key === " ";
    !n && !s || (t.preventDefault(), E(), T && o && o(t));
  }, A = (t) => {
    c && c((n) => ({
      ...n,
      ...t(),
      CustomParameters: {
        nested_in: "SectionTitle",
        nested_title: r
      }
    }));
  }, v = a("section-title", {
    "section-title--interactive": f,
    "section-title--disabled": p
  }), K = a("section-title__icon", {
    "section-title__icon--default": !e
  }), b = a("section-title__icon--skeleton", {
    "section-title__icon--skeleton-navigation": e
  }), S = typeof d == "number" && d > 0, w = S ? { "--section-title-max-lines": String(d) } : void 0, x = a("section-title__description", {
    "section-title__description--clamped": S
  });
  return {
    title: r,
    showDescription: N,
    description: _,
    icon: h,
    state: i,
    resolvedIconState: L,
    isSkeleton: C,
    isNavigation: e,
    isInteractive: f,
    shouldShowIcon: D,
    sectionClassName: v,
    iconClassName: K,
    skeletonClassName: b,
    descriptionClassName: x,
    descriptionStyle: w,
    handleClick: y,
    handleKeyDown: O,
    handleNeutralIconTag: A
  };
};
export {
  V as useSectionTitle
};
