import { jsx as d } from "react/jsx-runtime";
import { DividerOrientation as t, DividerVariant as s } from "./types.js";
import { classNamesMerge as a } from "../../../utils/classNamesMerge.js";
import '../../../assets/Divider.css';const n = ({
  variant: i = s.SOLID,
  orientation: r = t.HORIZONTAL
}) => {
  const e = a(
    "divider",
    `divider--${i}`,
    `divider--${r}`
  );
  return /* @__PURE__ */ d("hr", { "data-testid": "divider", className: e });
};
export {
  n as Divider
};
