import { jsxs as B, jsx as o } from "react/jsx-runtime";
import { Button as g } from "../../Molecules/Button/Button.js";
import { useNeutralIconButton as p } from "./hooks/useNeutralIconButton.js";
import { Badge as a } from "../Badge/Badge.js";
import '../../../assets/index5.css';const v = (n) => {
  const {
    icon: e,
    state: r,
    size: s,
    variant: t,
    count: i,
    rest: l,
    shouldShowBadge: u,
    isLargeBadge: c,
    containerClasses: d,
    handleClick: m
  } = p(n);
  return /* @__PURE__ */ B("div", { "data-testid": "NeutralIconButton", className: d, children: [
    u && (t === "label" ? /* @__PURE__ */ o(a, { variant: t, count: i, "data-large": c ? "true" : "false" }) : /* @__PURE__ */ o(a, { variant: t })),
    /* @__PURE__ */ o(
      g,
      {
        ...l,
        leadingIcon: e || void 0,
        onClick: m,
        size: s,
        state: r,
        typeButton: "btn-neutral"
      }
    )
  ] });
};
export {
  v as NeutralIconButton
};
