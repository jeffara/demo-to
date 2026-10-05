import { classNamesMerge as e } from "../../../../utils/classNamesMerge.js";
function u({
  status: $,
  state: r,
  isSmaller: m,
  showLine: C
}) {
  const s = "timelineItem", n = `${s}__container`, l = `${n}__marker`, a = `${n}__header`, c = `${a}__title`, i = `${n}__content`, t = `${s}__line`, o = m ? "--small" : "--large", _ = C ? "--line" : "", N = e(
    s,
    `${s}--${$}`,
    `${s}--${r}`,
    `${s}${o}`
  ), d = e(a, `${a}${o}`), h = e(c, `${c}${o}`), p = e(l, {
    [`${l}${_}`]: !0
  }), L = e(i, `${i}${o}`), f = e(t, `${t}--top`), g = e(t, `${t}--bottom`);
  return {
    // Base classes
    rootClass: s,
    containerClass: n,
    markerClass: l,
    headerClass: a,
    titleClass: c,
    contentClass: i,
    lineClass: t,
    // Class names with modifiers
    itemClassName: N,
    headerClassName: d,
    titleClassName: h,
    markerLineClassName: p,
    contentClassName: L,
    topLineClassName: f,
    bottomLineClassName: g
  };
}
export {
  u as getTimelineClasses
};
