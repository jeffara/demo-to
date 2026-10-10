import { classNamesMerge as e } from "../../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as i } from "../../../../utils/pattern.js";
const m = "Breadcrumb", I = (b) => {
  const { items: s, ariaLabel: d = m, onTag: o } = b, u = s.length - 1, _ = (r) => {
    o && o((a) => ({
      ...a,
      name: i.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Breadcrumb",
        label: r.label,
        deeplink: r.href
      }
    }));
  }, p = s.map((r, a) => {
    const n = a === u, l = !n && !!(r.href || r.onClick), C = l ? (t) => {
      var c;
      r.href || t.preventDefault(), _(r), (c = r.onClick) == null || c.call(r, t);
    } : void 0;
    return {
      id: r.id,
      label: r.label,
      href: r.href,
      isCurrent: n,
      isInteractive: l,
      showSeparator: !n,
      handleClick: C
    };
  });
  return {
    shouldRender: s.length > 0,
    ariaLabel: d,
    rootClasses: e("breadcrumb"),
    listClasses: e("breadcrumb__list"),
    itemClasses: e("breadcrumb__item"),
    ancestorLinkClasses: e("breadcrumb__ancestor-link"),
    currentClasses: e("breadcrumb__current", "type-body-small-bold"),
    separatorClasses: e("breadcrumb__separator"),
    trailItems: p
  };
};
export {
  I as useBreadcrumb
};
