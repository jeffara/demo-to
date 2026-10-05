import { jsx as e } from "react/jsx-runtime";
import { ListItemViewTrailingTypeEnum as p } from "../enums.js";
import { HIERARCHY as s, SIZE as c } from "../../../../utils/pattern.js";
import { Button as I } from "../../Button/Button.js";
import { IconButton as T } from "../../Button/IconButton/IconButton.js";
const E = ({
  trailing: t,
  trailingType: o,
  isEnabled: d,
  className: i,
  onActionTrailing: r,
  onTag: m,
  label: u
}) => {
  const f = (n) => {
    m && m((h) => ({
      ...h,
      ...n(),
      ComponentProperties: {
        nested_in: "ListItemView",
        nested_label: u
      }
    }));
  };
  if (!t)
    return null;
  if (!d)
    return /* @__PURE__ */ e("div", { className: i });
  if (o === p.BUTTON && typeof t == "string" && r)
    return /* @__PURE__ */ e("div", { className: i, children: /* @__PURE__ */ e(
      I,
      {
        size: c.SMALL,
        hierarchy: s.TERTIARY,
        label: t,
        typeButton: "btn",
        onClick: () => r(),
        onTag: f,
        style: { minWidth: "var(--spacing-16)" }
      }
    ) });
  if (o === p.ICON && r) {
    const n = t;
    return /* @__PURE__ */ e("div", { className: i, children: /* @__PURE__ */ e(
      T,
      {
        size: c.SMALL,
        hierarchy: s.TERTIARY,
        icon: n,
        onClick: () => r(),
        onTag: f
      }
    ) });
  }
};
export {
  E as TrailingSection
};
