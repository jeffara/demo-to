import { jsx as f } from "react/jsx-runtime";
import { useInputContext as d } from "../context/InputContext.js";
import { getInputLabelClassName as h } from "../utils/classNames.js";
import { getAnimationConfig as g } from "../utils/getAnimationConfig.js";
import { motion as b } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const L = () => {
  const { state: i, config: l, handlers: r } = d(), { isDisabled: t, isReadOnly: a, showFlag: s, isFocused: e, hasValueInput: n } = i, { label: m, inputId: p } = l, { labelRef: u, handleLabelClick: c } = r, o = e || n;
  return /* @__PURE__ */ f(
    b.label,
    {
      ref: u,
      htmlFor: p,
      "aria-disabled": t,
      className: h({
        isReadOnly: a,
        hasFlag: s,
        isFocused: e,
        hasValue: n
      }),
      style: {
        transformOrigin: "left"
      },
      animate: g({
        isDisabled: t,
        isFocused: o,
        isReadOnly: a,
        hasValueInput: o,
        hasFlag: s
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
