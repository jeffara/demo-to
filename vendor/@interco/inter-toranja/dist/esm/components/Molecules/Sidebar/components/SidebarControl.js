import { jsx as r } from "react/jsx-runtime";
import { IconButton as d } from "../../Button/IconButton/IconButton.js";
const m = ({
  className: a,
  icon: o,
  ariaLabel: e,
  ariaExpanded: i,
  onClick: t,
  onTag: n
}) => /* @__PURE__ */ r("div", { className: a, children: /* @__PURE__ */ r(
  d,
  {
    "aria-expanded": i,
    "aria-label": e,
    hierarchy: "secondary",
    icon: o,
    onClick: t,
    onTag: n,
    size: "small",
    variant: "default"
  }
) });
export {
  m as SidebarControl
};
