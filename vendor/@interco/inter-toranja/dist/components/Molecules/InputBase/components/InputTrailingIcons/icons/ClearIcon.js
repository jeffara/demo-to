import { jsx as n } from "react/jsx-runtime";
import { NeutralIconButton as l } from "../../../../../Atoms/NeutralIconButton/index.js";
import { getClearFieldAriaLabel as c } from "../../../../../../utils/accessibility/formFieldAccessibility.js";
const f = ({
  onClear: r,
  onTag: o,
  label: t,
  componentType: a
}) => /* @__PURE__ */ n(
  l,
  {
    onMouseDown: (e) => {
      e.preventDefault();
    },
    onClick: r,
    onTag: (e) => {
      o && o((i) => ({
        ...i,
        ...e(),
        CustomParameters: { nested_in: a, nested_label: t }
      }));
    },
    icon: "ic_close_circle",
    "data-testid": "close-icon",
    "aria-label": c(t),
    tabIndex: 0
  }
);
export {
  f as ClearIcon
};
