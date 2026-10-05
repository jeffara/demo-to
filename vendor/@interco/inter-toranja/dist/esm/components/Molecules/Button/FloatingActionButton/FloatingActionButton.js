import { jsx as p } from "react/jsx-runtime";
import { useRef as h } from "react";
import { Button as _ } from "../Button.js";
import { FLOATING_ACTION_BUTTON_BEHAVIOR as a } from "./constants.js";
import { classNamesMerge as u } from "../../../../utils/classNamesMerge.js";
import { SIZE as B, STATE as T, VARIANT as g, TAGGING_EVENT as R } from "../../../../utils/pattern.js";
import '../../../../assets/components/Molecules/Button/Button.modules.css';/* empty css                     */
import { useScrollBehavior as S } from "./hooks/useScrollBehavior.js";
const P = (C) => {
  const {
    label: o,
    icon: l,
    hierarchy: r = "primary",
    size: s = B.LARGE,
    state: n = T.ENABLED,
    variant: c = g.DEFAULT,
    behavior: e = a.DEFAULT,
    onClick: m,
    onTag: f,
    className: b,
    ...A
  } = C, t = n === T.LOADING, d = h(null), { isExpanded: i, isVisible: L, handleScrollToTopClick: N, handleHideLabelOnScrollClick: E } = S({
    behavior: e,
    label: o,
    fabRef: d,
    isLoading: t
  });
  return /* @__PURE__ */ p("div", { ref: d, style: { display: "contents" }, children: /* @__PURE__ */ p(
    _,
    {
      ...A,
      hierarchy: r,
      leadingIcon: l,
      label: i && !t ? o : void 0,
      onClick: (I) => {
        f && f((O) => ({
          ...O,
          name: R.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "FloatingActionButton",
            variant: c,
            size: s,
            hierarchy: r,
            state: n,
            icon: l,
            label: o,
            hasLabel: !!o,
            behavior: e
          }
        })), e === a.SCROLL_TO_TOP && N(), e === a.HIDE_LABEL_ON_SCROLL && o && E(), m && m(I);
      },
      size: s,
      state: n,
      typeButton: "btn-fab",
      variant: c,
      className: u(
        "btn-fab",
        {
          "btn-fab--expanded": i && !t,
          "btn-fab--hidden": !L
        },
        b
      ),
      "aria-label": (!i || t) && o ? o : void 0
    }
  ) });
};
export {
  P as FloatingActionButton
};
