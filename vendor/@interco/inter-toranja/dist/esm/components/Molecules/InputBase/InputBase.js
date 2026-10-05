import { jsx as e, jsxs as r } from "react/jsx-runtime";
import '../../../assets/components/Molecules/InputBase/InputBase.modules.css';/* empty css                       */
import { InputProvider as f } from "./context/InputContext.js";
import { useInputBase as I } from "./hooks/useInputBase.js";
import { getFieldSetClassName as h, getContainerClassName as C, getInputContainerClassNames as b } from "./utils/classNames.js";
import { InputLabel as N } from "./components/InputLabel.js";
import { InputLeadingContent as g } from "./components/InputLeadingContent.js";
import { InputField as v } from "./components/InputField.js";
import { InputTrailingIcons as B } from "./components/InputTrailingIcons/InputTrailingIcons.js";
import { InputHints as x } from "./components/InputHints.js";
import { ForceBar as F } from "./components/ForceBar/ForceBar.js";
import { InputCounter as S } from "./components/InputCounter.js";
const H = (a) => {
  const {
    contextValue: o,
    forceBar: n,
    restProps: l,
    shouldRenderLabel: m,
    isSkeleton: t,
    isDisabled: i,
    isError: p,
    isSuccess: d,
    isReadOnly: u,
    isTypeSearch: s,
    handleInputContainerFocusOut: c
  } = I(a);
  return /* @__PURE__ */ e(f, { value: o, children: /* @__PURE__ */ r(
    "fieldset",
    {
      className: h(t),
      "aria-busy": t,
      "aria-disabled": i,
      children: [
        /* @__PURE__ */ r("div", { "aria-disabled": i, className: C({ isTypeSearch: s }), children: [
          m && /* @__PURE__ */ e(N, {}),
          /* @__PURE__ */ r(
            "div",
            {
              className: b({
                isError: p,
                isSuccess: d,
                isReadOnly: u,
                isTypeSearch: s
              }),
              "aria-disabled": i,
              onBlur: c,
              children: [
                /* @__PURE__ */ e(g, {}),
                /* @__PURE__ */ e(v, { restProps: l }),
                /* @__PURE__ */ e(B, {})
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "fieldset__hints-wrapper", children: [
          /* @__PURE__ */ e(x, {}),
          /* @__PURE__ */ e(F, { ...n }),
          /* @__PURE__ */ e(S, {})
        ] })
      ]
    }
  ) });
};
export {
  H as InputBase
};
