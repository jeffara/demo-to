import { jsx as t } from "react/jsx-runtime";
import { Suspense as f } from "react";
import { useIcon as p } from "./hooks/useIcon.js";
import '../../../assets/Icon.css';const v = ({
  asset: e,
  contentDescription: r = "",
  size: n,
  state: a,
  color: i,
  id: s,
  isFlag: l = !1
}) => {
  const { iconSvgSrc: c, iconClasses: o, isLoading: d, containerStyles: m } = p({
    asset: e,
    size: n,
    state: a,
    color: i,
    isFlag: l
  });
  return !d && /* @__PURE__ */ t(f, { fallback: /* @__PURE__ */ t("div", { className: o, "data-state": a }), children: /* @__PURE__ */ t(
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
  v as Icon
};
