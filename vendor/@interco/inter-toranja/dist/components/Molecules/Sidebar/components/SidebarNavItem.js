import { jsx as i, jsxs as h } from "react/jsx-runtime";
import { SIDEBAR_MENU_POPUP_SIZE as b, SIDEBAR_MENU_POPUP_PLACEMENT as _, SIDEBAR_MENU_POPUP_OFFSET as f } from "../constants.js";
import { resolveCollapsedMenuPopupItems as u } from "../utils/mapSidebarChildrenToMenuPopupItems.js";
import { ListItemGeneral as a } from "../../ListItemGeneral/ListItemGeneral.js";
import { MenuPopup as N } from "../../MenuPopup/MenuPopup.js";
import { NeutralIconButton as v } from "../../../Atoms/NeutralIconButton/index.js";
const D = ({
  view: t,
  isCollapsed: n,
  onActivate: l,
  onChildActivate: o,
  onFlyoutToggle: d,
  onTag: r
}) => {
  const { item: e, hasChildren: m, isNestedOpen: p, isFlyoutOpen: c, itemClasses: P } = t;
  return n ? /* @__PURE__ */ i("div", { className: P, children: /* @__PURE__ */ i("div", { className: "sidebar__item-hit", children: /* @__PURE__ */ i(
    N,
    {
      ariaLabel: e.label,
      isOpen: c,
      items: u(e, l, o),
      offset: f,
      onTag: r,
      onToggle: (s) => d(e.id, s),
      openOnHover: !0,
      placement: _,
      size: b,
      children: /* @__PURE__ */ i(
        v,
        {
          "aria-label": e.label,
          icon: e.icon,
          onClick: () => l(e),
          onTag: r,
          size: "medium"
        }
      )
    }
  ) }) }) : /* @__PURE__ */ h("div", { className: "sidebar__item", children: [
    /* @__PURE__ */ i(
      a,
      {
        label: e.label,
        leadingProps: {
          type: "icon",
          iconProps: {
            asset: e.icon,
            size: "medium",
            color: "Icon/Neutral/Primary",
            contentDescription: e.label
          }
        },
        onClick: () => l(e),
        onTag: r,
        selected: e.selected,
        showDivider: !1,
        testId: `sidebar-item-${e.id}`,
        trailingProps: m ? { type: "tagChevron", tagChevronProps: { showTag: !1 } } : void 0
      }
    ),
    p && e.children ? /* @__PURE__ */ i("div", { className: "sidebar__nested", children: e.children.map((s) => /* @__PURE__ */ i(
      a,
      {
        label: s.label,
        leadingProps: { type: "none" },
        onClick: () => o(s),
        onTag: r,
        showDivider: !1,
        showLeading: !1,
        testId: `sidebar-child-${s.id}`,
        trailingProps: { type: "tagChevron", tagChevronProps: { showTag: !1 } }
      },
      s.id
    )) }) : null
  ] });
};
export {
  D as SidebarNavItem
};
