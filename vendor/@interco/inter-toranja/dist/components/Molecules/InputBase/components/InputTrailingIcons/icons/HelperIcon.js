import { jsx as r } from "react/jsx-runtime";
import { Icon as I } from "../../../../../Atoms/Icon/Icon.js";
import { classNamesMerge as _ } from "../../../../../../utils/classNamesMerge.js";
import { STATE as n, SIZE as f } from "../../../../../../utils/pattern.js";
import { IconColors as E } from "../../../../../Atoms/Icon/constants/iconColors.js";
const P = ({
  onHelper: t,
  onTag: o,
  label: c,
  componentType: i,
  isDisabled: e,
  id: a,
  onFocus: l,
  onBlur: s,
  "aria-describedby": m
}) => {
  const p = (b) => {
    !e && t && t(b), o && o((u) => ({
      ...u,
      name: "interaction_click",
      ComponentProperties: {
        component_name: "Icon",
        state: e ? "disabled" : "enabled",
        icon: "ic_help_circle"
      },
      ProductProperties: {
        nested_in: i,
        nested_label: c
      }
    }));
  }, d = _(
    "trailing-icon-button",
    !e && "trailing-icon-button--clickable"
  );
  return /* @__PURE__ */ r(
    "div",
    {
      id: a,
      "aria-describedby": m,
      className: d,
      "data-testid": "helper-button",
      onClick: p,
      onFocus: l,
      onBlur: s,
      role: "button",
      "aria-label": "Ajuda",
      tabIndex: e ? -1 : 0,
      children: /* @__PURE__ */ r(
        I,
        {
          asset: "ic_help_circle",
          contentDescription: "Ajuda",
          size: f.MEDIUM,
          state: e ? n.DISABLED : n.ENABLED,
          color: E.Neutral.Primary
        }
      )
    }
  );
};
export {
  P as HelperIcon
};
