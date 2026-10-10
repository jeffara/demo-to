import { jsx as e } from "react/jsx-runtime";
import { SIDEBAR_MENU_POPUP_SIZE as m, SIDEBAR_MENU_POPUP_PLACEMENT as c, SIDEBAR_MENU_POPUP_OFFSET as d, SIDEBAR_FOOTER_FLYOUT_ID as _ } from "../constants.js";
import { resolveCollapsedFooterMenuPopupItems as p } from "../utils/mapSidebarChildrenToMenuPopupItems.js";
import { ListItemGeneral as P } from "../../ListItemGeneral/ListItemGeneral.js";
import { MenuPopup as b } from "../../MenuPopup/MenuPopup.js";
import { NeutralIconButton as u } from "../../../Atoms/NeutralIconButton/index.js";
const v = ({
  footer: i,
  isCollapsed: s,
  isFlyoutOpen: a,
  onActivate: r,
  onFlyoutToggle: n,
  onTag: o
}) => {
  const l = i["aria-label"] ?? i.label;
  return s ? /* @__PURE__ */ e("div", { className: "sidebar__footer", children: /* @__PURE__ */ e("div", { className: "sidebar__item-hit", children: /* @__PURE__ */ e(
    b,
    {
      ariaLabel: l,
      isOpen: a,
      items: p(i, r),
      offset: d,
      onTag: o,
      onToggle: (t) => n(_, t),
      openOnHover: !0,
      placement: c,
      size: m,
      children: /* @__PURE__ */ e(
        u,
        {
          "aria-label": l,
          icon: i.icon,
          onClick: r,
          onTag: o,
          size: "medium"
        }
      )
    }
  ) }) }) : /* @__PURE__ */ e("div", { className: "sidebar__footer sidebar__reveal", children: /* @__PURE__ */ e("div", { className: "sidebar__reveal-inner", children: /* @__PURE__ */ e(
    P,
    {
      label: i.label,
      leadingProps: {
        type: "icon",
        iconProps: {
          asset: i.icon,
          size: "medium",
          color: "Icon/Neutral/Primary",
          contentDescription: l
        }
      },
      onClick: r,
      onTag: o,
      showDivider: !1,
      testId: "sidebar-footer"
    }
  ) }) });
};
export {
  v as SidebarFooter
};
