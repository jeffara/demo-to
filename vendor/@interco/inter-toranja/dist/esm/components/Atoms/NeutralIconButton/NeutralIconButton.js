import { jsxs as p, jsx as o } from "react/jsx-runtime";
import '../../../assets/components/Atoms/NeutralIconButton/NeutralIconButton.modules.css';import '../../../assets/components/Molecules/Button/Button.modules.css';/* empty css                                         */
/* empty css                               */
import { useNeutralIconButton as B } from "./hooks/useNeutralIconButton.js";
import { Badge as a } from "../Badge/Badge.js";
import { Button as g } from "../../Molecules/Button/Button.js";
const C = (r) => {
  const {
    icon: e,
    state: n,
    size: i,
    variant: t,
    count: s,
    rest: l,
    shouldShowBadge: u,
    isLargeBadge: c,
    containerClasses: d,
    handleClick: m
  } = B(r);
  return /* @__PURE__ */ p("div", { "data-testid": "NeutralIconButton", className: d, children: [
    u && (t === "label" ? /* @__PURE__ */ o(a, { variant: t, count: s, "data-large": c ? "true" : "false" }) : /* @__PURE__ */ o(a, { variant: t })),
    /* @__PURE__ */ o(
      g,
      {
        ...l,
        leadingIcon: e || void 0,
        onClick: m,
        size: i,
        state: n,
        typeButton: "btn-neutral"
      }
    )
  ] });
};
export {
  C as NeutralIconButton
};
