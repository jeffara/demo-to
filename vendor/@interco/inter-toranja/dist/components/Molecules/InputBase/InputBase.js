import { jsx as r, jsxs as e } from "react/jsx-runtime";
import '../../../assets/InputBase.css';/* empty css                                  */
import { InputProvider as I } from "./context/InputContext.js";
import { useInputBase as h } from "./hooks/useInputBase.js";
import { getInputContainerClassNames as b, getFieldSetClassName as C } from "./utils/classNames.js";
import { InputLabel as N } from "./components/InputLabel.js";
import { InputLeadingContent as v } from "./components/InputLeadingContent.js";
import { InputField as B } from "./components/InputField.js";
import { InputTrailingIcons as g } from "./components/InputTrailingIcons/InputTrailingIcons.js";
import { InputHints as x } from "./components/InputHints.js";
import { ForceBar as F } from "./components/ForceBar/ForceBar.js";
import { InputCounter as S } from "./components/InputCounter.js";
const H = (t) => {
  const {
    contextValue: a,
    forceBar: o,
    restProps: n,
    shouldRenderLabel: l,
    isSkeleton: s,
    isDisabled: i,
    isError: m,
    isSuccess: p,
    isReadOnly: d,
    isTypeSearch: u,
    containerClassName: c,
    handleInputContainerFocusOut: f
  } = h(t);
  return /* @__PURE__ */ r(I, { value: a, children: /* @__PURE__ */ e(
    "fieldset",
    {
      className: C(s),
      "aria-busy": s,
      "aria-disabled": i,
      children: [
        /* @__PURE__ */ e("div", { "aria-disabled": i, className: c, children: [
          l && /* @__PURE__ */ r(N, {}),
          /* @__PURE__ */ e(
            "div",
            {
              className: b({
                isError: m,
                isSuccess: p,
                isReadOnly: d,
                isTypeSearch: u
              }),
              "aria-disabled": i,
              onBlur: f,
              children: [
                /* @__PURE__ */ r(v, {}),
                /* @__PURE__ */ r(B, { restProps: n }),
                /* @__PURE__ */ r(g, {})
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "fieldset__hints-wrapper", children: [
          /* @__PURE__ */ r(x, {}),
          /* @__PURE__ */ r(F, { ...o }),
          /* @__PURE__ */ r(S, {})
        ] })
      ]
    }
  ) });
};
export {
  H as InputBase
};
