import { classNamesMerge as l } from "../../../../utils/classNamesMerge.js";
import { STATE as s } from "../../../../utils/pattern.js";
const E = ({
  onTag: r,
  state: a = s.ENABLED,
  title: n,
  link: e,
  description: c,
  showDescription: p = !0,
  showLink: m = !0
}) => {
  const d = l("alert__texts", {
    "alert__texts--skeleton": a === s.SKELETON
  }), h = p && !!c, L = m && !!(e != null && e.href && (e != null && e.label)), i = (t) => {
    r && r((o) => ({
      ...o,
      ComponentProperties: {
        ...t
      }
    }));
  };
  return {
    textsClassName: d,
    hasDescription: h,
    hasLink: L,
    handleLinkClick: (t) => {
      e != null && e.onClick && (t.preventDefault(), e.onClick(t));
    },
    handleLinkTag: (t) => {
      const o = {
        ...t().ComponentProperties,
        nested_in: "Alert",
        nested_title: n
      };
      i(o);
    }
  };
};
export {
  E as useAlert
};
