import { jsx as n } from "react/jsx-runtime";
import { useMemo as E } from "react";
import { TABLE_ICON_BUTTON_MENU_DEFAULT_SIZE as u, TABLE_ICON_BUTTON_MENU_DEFAULT_ARIA_LABEL as _, TABLE_ICON_BUTTON_MENU_PLACEMENT as A, TABLE_ICON_BUTTON_MENU_OFFSET as B } from "./constants.js";
import { mapTableIconButtonMenuItems as I } from "./utils/mapTableIconButtonMenuItems.js";
import { IconButton as N } from "../../../../../../Molecules/Button/IconButton/IconButton.js";
import { mapTableVisualStateToAtomState as L, isTableVisualStateInteractive as M } from "../../../shared/mapTableVisualState.js";
import { STATE as f, SIZE as b } from "../../../../../../../utils/pattern.js";
import '../../../../../../../assets/components/Organisms/Table/components/TableCell/components/TableIconButtonMenu/TableIconButtonMenu.modules.css';/* empty css                                 */
import { MenuPopup as g } from "../../../../../../Molecules/MenuPopup/MenuPopup.js";
const O = (o) => {
  o.stopPropagation();
}, U = (o) => {
  o.key === "Enter" && o.stopPropagation();
}, F = ({
  cellProps: o,
  visualState: a
}) => {
  const {
    iconButton: t,
    menuItems: e,
    menuAriaLabel: i = _,
    menuSize: s = u
  } = o, r = L(a), p = M(a) && r === f.ENABLED && e.length > 0, c = E(() => I(e), [e]), T = (l) => {
    l.stopPropagation();
  }, m = /* @__PURE__ */ n(
    N,
    {
      icon: t.icon,
      hierarchy: t.hierarchy,
      size: t.size ?? b.SMALL,
      state: r,
      "aria-label": i,
      onClick: T
    }
  );
  return /* @__PURE__ */ n(
    "span",
    {
      className: "table-icon-button-menu",
      "data-testid": "TableIconButtonMenu",
      onClick: O,
      onKeyDown: U,
      children: p ? /* @__PURE__ */ n(
        g,
        {
          ariaLabel: i,
          items: c,
          offset: B,
          placement: A,
          size: s,
          children: m
        }
      ) : m
    }
  );
};
export {
  F as TableIconButtonMenu
};
