import { jsx as d } from "react/jsx-runtime";
import '../../../assets/components/Atoms/Divider/Divider.modules.css';/* empty css                     */
import { DividerOrientation as t, DividerVariant as s } from "./types.js";
import { classNamesMerge as o } from "../../../utils/classNamesMerge.js";
const p = ({
  variant: i = s.SOLID,
  orientation: r = t.HORIZONTAL
}) => {
  const e = o(
    "divider",
    `divider--${i}`,
    `divider--${r}`
  );
  return /* @__PURE__ */ d("hr", { "data-testid": "divider", className: e });
};
export {
  p as Divider
};
