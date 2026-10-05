import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { useState as w } from "react";
import { STATE as r } from "../../../utils/pattern.js";
import '../../../assets/Switch.css';const u = ({
  checked: n = !1,
  onChange: c,
  state: s = r.ENABLED
}) => {
  const [d, o] = w(n), i = s === r.DISABLED, a = s === r.SKELETON, l = () => {
    if (i || a)
      return;
    const t = !d;
    o(t), c == null || c(t);
  };
  return /* @__PURE__ */ h("div", { "data-testid": "switch", className: "switch", children: [
    /* @__PURE__ */ e(
      "input",
      {
        "data-testid": "switch-input",
        "aria-checked": d,
        "aria-disabled": i,
        checked: d,
        className: "switch__input",
        disabled: i,
        type: "checkbox",
        readOnly: !0
      }
    ),
    /* @__PURE__ */ e(
      "span",
      {
        "data-testid": "switch-slider",
        "aria-disabled": i,
        className: `switch__slider--${s}`,
        onClick: l,
        onKeyDown: (t) => {
          t.key === "Enter" && l();
        },
        tabIndex: i || a ? -1 : 0,
        role: "button",
        children: /* @__PURE__ */ e("div", { "data-testid": "switch-slider-icon", className: `switch__slider__icon--${s}`, children: /* @__PURE__ */ e(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "8",
            viewBox: "0 0 12 8",
            fill: "none",
            children: /* @__PURE__ */ e("path", { d: "M11.1586 0.290383C11.5985 0.691316 11.6155 1.35761 11.1965 1.77859L5.32988 7.67332C5.12681 7.87737 4.84672 7.99499 4.5523 7.99984C4.25788 8.0047 3.97372 7.8964 3.76341 7.69917L0.830079 4.9483C0.396185 4.54139 0.38915 3.87493 0.814366 3.45973C1.23958 3.04452 1.93603 3.03778 2.36992 3.44469L4.50632 5.4482L9.60345 0.326681C10.0224 -0.0942986 10.7187 -0.11055 11.1586 0.290383Z" })
          }
        ) })
      }
    )
  ] });
};
export {
  u as Switch
};
