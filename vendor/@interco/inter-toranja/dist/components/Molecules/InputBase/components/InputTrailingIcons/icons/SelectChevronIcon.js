import { jsx as o } from "react/jsx-runtime";
import { Icon as n } from "../../../../../Atoms/Icon/Icon.js";
import { STATE as t, SIZE as i } from "../../../../../../utils/pattern.js";
const m = ({ isDisabled: e }) => /* @__PURE__ */ o("div", { className: "trailing-icon-button", children: /* @__PURE__ */ o(
  n,
  {
    asset: "ic_chevron_down",
    contentDescription: "Expandir seleção",
    size: i.MEDIUM,
    state: e ? t.DISABLED : t.ENABLED
  }
) });
export {
  m as SelectChevronIcon
};
