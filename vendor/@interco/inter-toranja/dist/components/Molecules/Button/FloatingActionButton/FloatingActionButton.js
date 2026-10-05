import { jsx as T } from "react/jsx-runtime";
import { useRef as h } from "react";
import { Button as _ } from "../Button.js";
import { FLOATING_ACTION_BUTTON_BEHAVIOR as i } from "./constants.js";
import { classNamesMerge as u } from "../../../../utils/classNamesMerge.js";
import { SIZE as B, STATE as p, VARIANT as g, TAGGING_EVENT as R } from "../../../../utils/pattern.js";
import { useScrollBehavior as S } from "./hooks/useScrollBehavior.js";
const U = (C) => {
  const {
    label: o,
    icon: l,
    hierarchy: s = "primary",
    size: r = B.LARGE,
    state: n = p.ENABLED,
    variant: c = g.DEFAULT,
    behavior: e = i.DEFAULT,
    onClick: m,
    onTag: f,
    className: b,
    ...A
  } = C, t = n === p.LOADING, d = h(null), { isExpanded: a, isVisible: L, handleScrollToTopClick: N, handleHideLabelOnScrollClick: E } = S({
    behavior: e,
    label: o,
    fabRef: d,
    isLoading: t
  });
  return /* @__PURE__ */ T("div", { ref: d, style: { display: "contents" }, children: /* @__PURE__ */ T(
    _,
    {
      ...A,
      hierarchy: s,
      leadingIcon: l,
      label: a && !t ? o : void 0,
      onClick: (I) => {
        f && f((O) => ({
          ...O,
          name: R.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "FloatingActionButton",
            variant: c,
            size: r,
            hierarchy: s,
            state: n,
            icon: l,
            label: o,
            hasLabel: !!o,
            behavior: e
          }
        })), e === i.SCROLL_TO_TOP && N(), e === i.HIDE_LABEL_ON_SCROLL && o && E(), m && m(I);
      },
      size: r,
      state: n,
      typeButton: "btn-fab",
      variant: c,
      className: u(
        "btn-fab",
        {
          "btn-fab--expanded": a && !t,
          "btn-fab--hidden": !L
        },
        b
      ),
      "aria-label": (!a || t) && o ? o : void 0
    }
  ) });
};
export {
  U as FloatingActionButton
};
