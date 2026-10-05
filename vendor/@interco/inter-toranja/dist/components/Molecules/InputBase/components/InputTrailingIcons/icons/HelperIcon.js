import { jsx as r } from "react/jsx-runtime";
import { Icon as s } from "../../../../../Atoms/Icon/Icon.js";
import { classNamesMerge as d } from "../../../../../../utils/classNamesMerge.js";
import { STATE as n, SIZE as u } from "../../../../../../utils/pattern.js";
import { IconColors as I } from "../../../../../Atoms/Icon/constants/iconColors.js";
const A = ({
  onHelper: e,
  onTag: o,
  label: c,
  componentType: i,
  isDisabled: t
}) => {
  const a = (m) => {
    !t && e && e(m), o && o((p) => ({
      ...p,
      name: "interaction_click",
      ComponentProperties: {
        component_name: "Icon",
        state: t ? "disabled" : "enabled",
        icon: "ic_help_circle"
      },
      ProductProperties: {
        nested_in: i,
        nested_label: c
      }
    }));
  }, l = d(
    "trailing-icon-button",
    !t && "trailing-icon-button--clickable"
  );
  return /* @__PURE__ */ r(
    "div",
    {
      className: l,
      "data-testid": "helper-button",
      onClick: a,
      role: "button",
      "aria-label": "Ajuda",
      tabIndex: t ? -1 : 0,
      children: /* @__PURE__ */ r(
        s,
        {
          asset: "ic_help_circle",
          contentDescription: "Ajuda",
          size: u.MEDIUM,
          state: t ? n.DISABLED : n.ENABLED,
          color: I.Neutral.Primary
        }
      )
    }
  );
};
export {
  A as HelperIcon
};
