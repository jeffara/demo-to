import { jsx as s } from "react/jsx-runtime";
import { useInputContext as u } from "../context/InputContext.js";
import e from "../../../Atoms/Hints/Hints.js";
import { EHintsType as r } from "../../../Atoms/Hints/types.js";
const H = () => {
  const { state: n, config: o } = u(), { isDisabled: i } = n, {
    hintsId: t,
    errorMessages: d,
    infoHints: l,
    success: a,
    shouldShowErrors: h,
    shouldShowSuccess: c,
    shouldShowInfoHints: f
  } = o;
  return h ? /* @__PURE__ */ s("div", { id: t, className: "fieldset__hints", role: "alert", "aria-disabled": i, children: /* @__PURE__ */ s(e, { type: r.ERROR, hints: d }) }) : c ? /* @__PURE__ */ s("div", { id: t, className: "fieldset__hints", "aria-live": "polite", "aria-disabled": i, children: /* @__PURE__ */ s(e, { type: r.SUCCESS, hints: [a] }) }) : f ? /* @__PURE__ */ s("div", { id: t, className: "fieldset__hints", "aria-disabled": i, children: /* @__PURE__ */ s(e, { type: r.INFO, hints: l }) }) : null;
};
export {
  H as InputHints
};
