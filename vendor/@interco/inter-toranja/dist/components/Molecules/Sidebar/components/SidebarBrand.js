import { jsx as i } from "react/jsx-runtime";
import { SIDEBAR_BRAND_SYMBOL_SIZE as a, SIDEBAR_BRAND_LOGO_HEIGHT as o, SIDEBAR_BRAND_LOGO_WIDTH as d } from "../constants.js";
import { EASING as s, DURATION as _ } from "../../../../utils/constants/animation.js";
import { m as n } from "../../../../proxy-BBnpZ6GV.js";
const S = ({
  src: r,
  alt: t,
  brandClasses: e,
  isCollapsed: m
}) => /* @__PURE__ */ i("div", { className: e, children: /* @__PURE__ */ i(
  n.img,
  {
    alt: t,
    animate: m ? { width: a, height: a } : { width: d, height: o },
    className: "sidebar__brand-image",
    "data-testid": "sidebar-brand",
    initial: !1,
    src: r,
    transition: {
      duration: _.SLOW_01,
      ease: s.STANDARD_FUNCTIONAL
    }
  }
) });
export {
  S as SidebarBrandMark
};
