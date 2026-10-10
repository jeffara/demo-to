import { jsxs as C, jsx as a } from "react/jsx-runtime";
import { SidebarBrandMark as D } from "./components/SidebarBrand.js";
import { SidebarControl as T } from "./components/SidebarControl.js";
import { SidebarFooter as g } from "./components/SidebarFooter.js";
import { SidebarNavItem as F } from "./components/SidebarNavItem.js";
import { SIDEBAR_COLLAPSED_WIDTH as u, SIDEBAR_EXPANDED_WIDTH as E } from "./constants.js";
import { useSidebar as L } from "./hooks/useSidebar.js";
import { EASING as O, DURATION as x } from "../../../utils/constants/animation.js";
import '../../../assets/components/Molecules/Sidebar/Sidebar.modules.css';/* empty css                     */
import { motion as y } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const X = (l) => {
  const {
    navItems: n,
    footer: r,
    brandSrc: s,
    brandAlt: d,
    ariaLabel: m,
    isCollapsed: o,
    rootClasses: c,
    brandClasses: A,
    controlClasses: b,
    controlIcon: p,
    controlAriaLabel: S,
    controlAriaExpanded: v,
    onTag: e,
    handleToggle: _,
    handleItemActivate: f,
    handleChildActivate: h,
    handleFooterActivate: I,
    handleFlyoutToggle: t,
    isFooterFlyoutOpen: N
  } = L(l);
  return /* @__PURE__ */ C(
    y.nav,
    {
      animate: { width: o ? u : E },
      "aria-label": m,
      className: c,
      "data-testid": "Sidebar",
      initial: !1,
      transition: {
        duration: x.SLOW_01,
        ease: O.STANDARD_FUNCTIONAL
      },
      children: [
        /* @__PURE__ */ a(
          D,
          {
            alt: d,
            brandClasses: A,
            isCollapsed: o,
            src: s
          }
        ),
        /* @__PURE__ */ a(
          T,
          {
            ariaExpanded: v,
            ariaLabel: S,
            className: b,
            icon: p,
            onClick: _,
            onTag: e
          }
        ),
        /* @__PURE__ */ a("div", { className: "sidebar__list sidebar__reveal", children: /* @__PURE__ */ a("div", { className: "sidebar__reveal-inner", children: n.map((i) => /* @__PURE__ */ a(
          F,
          {
            isCollapsed: o,
            onActivate: f,
            onChildActivate: h,
            onFlyoutToggle: t,
            onTag: e,
            view: i
          },
          i.item.id
        )) }) }),
        r && /* @__PURE__ */ a(
          g,
          {
            footer: r,
            isCollapsed: o,
            isFlyoutOpen: N,
            onActivate: I,
            onFlyoutToggle: t,
            onTag: e
          }
        )
      ]
    }
  );
};
export {
  X as Sidebar
};
