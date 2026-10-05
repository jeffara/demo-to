import { jsx as t, jsxs as h } from "react/jsx-runtime";
import { useInputContext as f } from "../context/InputContext.js";
import _ from "../../../Atoms/Hints/Hints.js";
import { STATE as p } from "../../../../utils/pattern.js";
import { CHARACTER_LIMIT_REACHED_MESSAGE as C } from "../../../../utils/accessibility/formFieldAccessibility.js";
const N = () => {
  const { state: e, config: n } = f(), { isError: a, isDisabled: s, characterCount: o } = e, { showCounter: c, mask: d, counter: i, counterId: m, limitMessageId: l } = n, r = c && d === void 0, u = r && o >= (i ?? 0);
  return r ? /* @__PURE__ */ h("div", { id: m, className: "fieldset__hints", "aria-disabled": s, children: [
    /* @__PURE__ */ t(
      _,
      {
        className: "fieldset__hints__counter",
        type: a ? p.ERROR : "info",
        showIcon: !0,
        hints: [`${o}/${i ?? 0}`]
      }
    ),
    u && /* @__PURE__ */ t("span", { role: "status", id: l, className: "sr-only", children: C })
  ] }) : /* @__PURE__ */ t("div", { className: "fieldset__hints", "aria-disabled": s });
};
export {
  N as InputCounter
};
