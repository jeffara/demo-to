import { jsxs as d, jsx as e } from "react/jsx-runtime";
import '../../../assets/components/Molecules/MenuItem/MenuItem.modules.css';/* empty css                      */
import { useMenuItemAvatar as u } from "./useMenuItemAvatar.js";
import { Icon as x } from "../../Atoms/Icon/Icon.js";
import { Tag as N } from "../../Atoms/Tag/Tag.js";
import { Text as b } from "../../Atoms/Text/Text.js";
import { TextWeight as g, TextSize as v, TextType as C } from "../../Atoms/Text/types.js";
import { Avatar as L } from "../Avatar/Avatar.js";
import { VARIANT as n, SIZE as I, TAGGING_EVENT as z } from "../../../utils/pattern.js";
const _ = (o) => {
  const {
    tag: s,
    size: t = "large",
    skeleton: i,
    label: m = "Label",
    variant: a = n.ICON,
    onTag: l,
    onClick: r,
    hierarchy: T,
    color: A
  } = o, p = a === n.AVATAR ? o : null, c = u(p, m), h = () => {
    l && l((f) => ({
      ...f,
      name: z.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "MenuItem",
        label: m,
        variant: a,
        size: t,
        hierarchy: T,
        color: A
      }
    })), r && (r == null || r());
  };
  return /* @__PURE__ */ d(
    "div",
    {
      tabIndex: i ? 1 : 0,
      className: `menuItem--${t}${i ? "--skeleton" : ""}`,
      "data-testid": "menuItem",
      "aria-hidden": !0,
      onClick: h,
      children: [
        !i && s && /* @__PURE__ */ e(N, { color: "brand", hierarchy: "strong", label: s, size: I.SMALL }),
        /* @__PURE__ */ d("div", { className: `menuItem--container--${t}`, children: [
          t === I.LARGE && a === n.AVATAR && c && /* @__PURE__ */ e(L, { state: "enabled", size: "small", ...c }),
          a === n.ICON && /* @__PURE__ */ e("div", { "data-testid": "icon", children: /* @__PURE__ */ e(x, { asset: o.icon, state: "enabled" }) }),
          /* @__PURE__ */ e(
            b,
            {
              as: "span",
              textType: C.Label,
              textSize: v.Small,
              textWeight: g.Medium,
              children: m
            }
          )
        ] })
      ]
    }
  );
};
export {
  _ as MenuItem
};
