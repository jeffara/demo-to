import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { getHintsClassNames as A, getTextCounterClassName as C } from "../utils/classNames.js";
import r from "../../../Atoms/Hints/Hints.js";
import { STATE as N } from "../../../../utils/pattern.js";
import { CHARACTER_LIMIT_REACHED_MESSAGE as R } from "../../../../utils/accessibility/formFieldAccessibility.js";
const g = ({
  shouldShowHints: s,
  shouldShowErrors: e,
  errorMessages: m,
  infoHints: n,
  isDisabled: i,
  hintsId: l,
  showCounter: o,
  counterId: d,
  characterCount: p,
  counter: c,
  isOverLimit: f,
  isAtCharacterLimit: v,
  limitMessageId: x
}) => /* @__PURE__ */ a("div", { className: "fieldset-textarea__hints", children: [
  s && /* @__PURE__ */ t(
    "div",
    {
      id: l,
      className: A(i),
      role: e ? "alert" : void 0,
      "aria-live": e ? "assertive" : void 0,
      "aria-disabled": i,
      children: /* @__PURE__ */ t(
        r,
        {
          type: e ? N.ERROR : "info",
          hints: e ? m : n
        }
      )
    }
  ),
  o && /* @__PURE__ */ a(
    "div",
    {
      id: d,
      className: C({ isDisabled: i, isOverLimit: f }),
      "aria-live": "polite",
      "aria-disabled": i,
      children: [
        /* @__PURE__ */ t(r, { type: "info", hints: [`${p}/${c ?? 0}`] }),
        v && /* @__PURE__ */ t("span", { id: x, className: "sr-only", children: R })
      ]
    }
  )
] });
export {
  g as TextAreaHintsFooter
};
