import { jsx as r } from "react/jsx-runtime";
import { NeutralIconButton as a } from "../../../../../Atoms/NeutralIconButton/index.js";
import { getClearFieldAriaLabel as c } from "../../../../../../utils/accessibility/formFieldAccessibility.js";
const n = ({
  onClear: o,
  label: e = "busca"
}) => /* @__PURE__ */ r(
  a,
  {
    onClick: o,
    icon: "ic_close_circle",
    "data-testid": "close-search-icon",
    "aria-label": c(e),
    tabIndex: 0
  }
);
export {
  n as SearchClearIcon
};
