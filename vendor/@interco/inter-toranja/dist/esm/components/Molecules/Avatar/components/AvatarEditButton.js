import { jsx as o } from "react/jsx-runtime";
import { DEFAULT_EDIT_ICON as i } from "../hooks/useAvatar.js";
import { STATE as n, SIZE as a } from "../../../../utils/pattern.js";
import { Icon as e } from "../../../Atoms/Icon/Icon.js";
import { IconColors as m } from "../../../Atoms/Icon/constants/iconColors.js";
const E = ({
  onClick: t,
  editIcon: r = i
}) => /* @__PURE__ */ o("button", { type: "button", tabIndex: -1, className: "icon__edit", onClick: t, "aria-label": "Edit", children: /* @__PURE__ */ o("span", { className: "icon__edit-inner", children: /* @__PURE__ */ o(
  e,
  {
    asset: r,
    size: a.SMALL,
    state: n.ENABLED,
    color: m.Brand.Strong
  }
) }) });
export {
  E as AvatarEditButton
};
