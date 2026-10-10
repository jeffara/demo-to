import { jsx as i } from "react/jsx-runtime";
import { SIDEBAR_BRAND_SYMBOL_SIZE as a, SIDEBAR_BRAND_LOGO_HEIGHT as o, SIDEBAR_BRAND_LOGO_WIDTH as d } from "../constants.js";
import { EASING as _, DURATION as s } from "../../../../utils/constants/animation.js";
import { motion as n } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
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
      duration: s.SLOW_01,
      ease: _.STANDARD_FUNCTIONAL
    }
  }
) });
export {
  S as SidebarBrandMark
};
