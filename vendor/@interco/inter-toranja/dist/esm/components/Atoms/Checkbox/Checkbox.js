import { jsx as h } from "react/jsx-runtime";
import { useState as x, useRef as m } from "react";
import '../../../assets/components/Atoms/Checkbox/Checkbox.modules.css';/* empty css                      */
import { VARIANT as u, STATE as t } from "../../../utils/pattern.js";
const T = ({
  variant: o = u.DEFAULT,
  state: s,
  onChange: i,
  checked: e = !1,
  ...f
}) => {
  const [r, n] = x(e), k = m(e), a = o === t.ERROR;
  k.current !== e && !a && (n(e), k.current = e);
  const l = () => {
    ![t.DISABLED, t.SKELETON].includes(s) && !a && n((d) => (i && i(!d), !d));
  }, C = `checkbox--${s}--${o}--${r ? "checked" : "unchecked"}`;
  return /* @__PURE__ */ h(
    "div",
    {
      role: "checkbox",
      tabIndex: 0,
      "aria-checked": r,
      "data-testid": "Checkbox",
      className: `checkbox ${C}`,
      onClick: l,
      onKeyDown: (c) => {
        (c.key === "Enter" || c.key === " ") && l();
      },
      ...f
    }
  );
};
export {
  T as Checkbox
};
