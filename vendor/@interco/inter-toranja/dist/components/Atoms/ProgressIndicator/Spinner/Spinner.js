import { jsx as e } from "react/jsx-runtime";
import '../../../../assets/Spinner.css';const a = ({
  size: i = "medium",
  variant: r = "default",
  ariaLabel: n = "Carregando"
}) => /* @__PURE__ */ e(
  "span",
  {
    "data-testid": "spinner",
    className: `spinner spinner--${i} spinner--${r}`,
    "aria-label": n ?? void 0,
    ...n === null && { "aria-hidden": "true" },
    children: /* @__PURE__ */ e("svg", { className: "spinner__svg", viewBox: "22 22 44 44", children: /* @__PURE__ */ e(
      "circle",
      {
        className: "spinner__circle--indeterminate",
        cx: "44",
        cy: "44",
        r: "20.2",
        fill: "none",
        strokeWidth: "3.6"
      }
    ) })
  }
);
export {
  a as Spinner
};
