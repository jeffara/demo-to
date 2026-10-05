import { PREDEFINED_CONTENT as S } from "../constants.js";
import { FeedbackScreenVariant as l } from "../types.js";
import { classNamesMerge as u } from "../../../../utils/classNamesMerge.js";
import { HIERARCHY as m, FEEDBACK as E } from "../../../../utils/pattern.js";
const d = (t) => {
  const n = t === l.CUSTOM_INFORMATION, e = t === l.CUSTOM_DESTRUCTIVE, o = t === l.CUSTOM || e || n;
  return { isCustomInformation: n, isCustomDestructive: e, isCustomVariant: o };
}, h = (t, n) => {
  const { title: e, description: o, value: a, signalVariant: i, primaryButton: r, variant: c } = t, s = n ? null : S[c];
  return {
    finalTitle: e ?? (s == null ? void 0 : s.title) ?? "",
    finalDescription: o ?? (s == null ? void 0 : s.description) ?? "",
    finalValue: a ?? "",
    finalSignalVariant: i ?? (s == null ? void 0 : s.signalVariant) ?? E.INFORMATION,
    finalPrimaryButton: r ?? (s ? { label: s.primaryButtonLabel } : null)
  };
}, y = (t) => ({
  shouldShowAdditionalContent: t.showAdditionalContent ?? t.showCrossSelling ?? !1,
  shouldShowPoweredBy: t.showPoweredBy === !0
}), F = (t) => {
  const { variant: n, className: e } = t, { isCustomInformation: o, isCustomDestructive: a, isCustomVariant: i } = d(n), r = h(t, i), c = y(t), s = u("feedback-screen__buttons"), C = a ? m.TERTIARY : m.SECONDARY, f = !a, b = u("feedback-screen", e, {
    "feedback-screen--custom-information": o
  }), T = u("feedback-screen__content", {
    "feedback-screen__content--custom-information": o
  });
  return {
    ...r,
    isCustomInformation: o,
    isCustomDestructive: a,
    isCustomVariant: i,
    ...c,
    shouldShowTertiaryButton: f,
    secondaryButtonHierarchy: C,
    buttonContainerClasses: s,
    containerClasses: b,
    contentClasses: T
  };
};
export {
  F as useFeedbackScreen
};
