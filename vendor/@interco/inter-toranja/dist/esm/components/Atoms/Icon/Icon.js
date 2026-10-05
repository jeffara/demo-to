import { jsx as t } from "react/jsx-runtime";
import { Suspense as p } from "react";
import { useIcon as f } from "./hooks/useIcon.js";
import '../../../assets/components/Atoms/Icon/Icon.modules.css';/* empty css                  */
const y = ({
  asset: e,
  contentDescription: r = "",
  size: i,
  state: a,
  color: n,
  id: s,
  isFlag: l = !1
}) => {
  const { iconSvgSrc: c, iconClasses: o, isLoading: d, containerStyles: m } = f({
    asset: e,
    size: i,
    state: a,
    color: n,
    isFlag: l
  });
  return !d && /* @__PURE__ */ t(p, { fallback: /* @__PURE__ */ t("div", { className: o, "data-state": a }), children: /* @__PURE__ */ t(
    "div",
    {
      id: s,
      "data-testid": "data-testid-" + s,
      "data-state": a,
      className: o,
      style: m,
      role: "img",
      "data-asset": e,
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: c ?? "" }
    }
  ) });
};
export {
  y as Icon
};
