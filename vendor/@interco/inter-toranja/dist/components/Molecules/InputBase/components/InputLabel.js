import { jsx as f } from "react/jsx-runtime";
import { useInputContext as d } from "../context/InputContext.js";
import { getInputLabelClassName as h } from "../utils/classNames.js";
import { getAnimationConfig as g } from "../utils/getAnimationConfig.js";
import { m as b } from "../../../../proxy-BBnpZ6GV.js";
const L = () => {
  const { state: i, config: l, handlers: r } = d(), { isDisabled: a, isReadOnly: s, showFlag: t, isFocused: e, hasValueInput: n } = i, { label: m, inputId: p } = l, { labelRef: u, handleLabelClick: c } = r, o = e || n;
  return /* @__PURE__ */ f(
    b.label,
    {
      ref: u,
      htmlFor: p,
      "aria-disabled": a,
      className: h({
        isReadOnly: s,
        hasFlag: t,
        isFocused: e,
        hasValue: n
      }),
      style: {
        transformOrigin: "left"
      },
      animate: g({
        isDisabled: a,
        isFocused: o,
        isReadOnly: s,
        hasValueInput: o,
        hasFlag: t
      }),
      transition: { type: "spring", stiffness: 300, damping: 20 },
      onClick: c,
      children: m
    }
  );
};
export {
  L as InputLabel
};
