import { jsxs as r, jsx as a, Fragment as g } from "react/jsx-runtime";
import { r as x } from "../../../_virtual/index.js";
import '../../../assets/components/Molecules/MenuPopup/MenuPopup.modules.css';/* empty css                       */
import { useMenuPopup as y } from "./hooks/useMenuPopup.js";
import { Icon as I } from "../../Atoms/Icon/Icon.js";
const w = (o) => {
  const {
    shouldRender: t,
    isOpen: i,
    ariaLabel: d,
    menuId: c,
    rootClasses: p,
    triggerClasses: u,
    panelClasses: m,
    listClasses: b,
    iconClasses: h,
    skeletonClasses: f,
    trigger: C,
    triggerRef: v,
    panelRef: P,
    panelStyle: l,
    viewItems: N,
    handleHoverOpen: n,
    handleHoverClose: s
  } = y(o);
  return t ? /* @__PURE__ */ r(
    "div",
    {
      className: p,
      "data-testid": "MenuPopup",
      onPointerEnter: n,
      onPointerLeave: s,
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: u,
            ref: v,
            onPointerEnter: n,
            onPointerLeave: s,
            children: C
          }
        ),
        i && x.createPortal(
          /* @__PURE__ */ a(
            "div",
            {
              ref: P,
              className: m,
              id: c,
              role: "menu",
              "aria-label": d,
              style: { top: l.top, left: l.left },
              onPointerEnter: n,
              onPointerLeave: s,
              children: /* @__PURE__ */ a("div", { className: b, role: "none", children: N.map((e) => /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  className: e.itemClasses,
                  tabIndex: e.tabIndex,
                  "aria-disabled": e.isAriaDisabled,
                  "aria-label": e.ariaLabel,
                  onClick: e.handleClick,
                  onKeyDown: e.handleKeyDown,
                  ref: e.setItemRef,
                  children: e.isSkeleton ? /* @__PURE__ */ a(
                    "span",
                    {
                      className: f,
                      "data-testid": "menu-item-skeleton",
                      "aria-hidden": !0
                    }
                  ) : /* @__PURE__ */ r(g, { children: [
                    e.icon && /* @__PURE__ */ a("span", { className: h, children: /* @__PURE__ */ a(
                      I,
                      {
                        asset: e.icon,
                        size: "medium",
                        state: "enabled",
                        color: e.iconColor
                      }
                    ) }),
                    /* @__PURE__ */ a("span", { className: e.labelClasses, children: e.label })
                  ] })
                },
                e.id
              )) })
            }
          ),
          document.body
        )
      ]
    }
  ) : null;
};
export {
  w as MenuPopup
};
