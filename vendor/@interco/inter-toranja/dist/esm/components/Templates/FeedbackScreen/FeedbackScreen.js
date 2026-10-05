import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { useFeedbackScreen as w } from "./hooks/useFeedbackScreen.js";
import { useFeedbackScreenDisplayTag as N } from "./hooks/useFeedbackScreenDisplayTag.js";
import { STATE as x } from "../../../utils/pattern.js";
import '../../../assets/components/Templates/FeedbackScreen/FeedbackScreen.modules.css';/* empty css                            */
import { FeedbackContentList as A } from "./components/FeedbackContentList/FeedbackContentList.js";
import { FeedbackAdditionalContent as _ } from "./components/FeedbackAdditionalContent/FeedbackAdditionalContent.js";
import { FeedbackButtons as D } from "./components/FeedbackButtons/FeedbackButtons.js";
import { FeedbackHero as E } from "./components/FeedbackHero/FeedbackHero.js";
const M = (a) => {
  const {
    variant: c,
    state: e = x.ENABLED,
    secondaryButton: l,
    tertiaryButton: d,
    alert: m,
    contentItems: u,
    children: f,
    onTag: i
  } = a, {
    finalTitle: n,
    finalDescription: h,
    finalValue: o,
    finalSignalVariant: b,
    finalPrimaryButton: p,
    isCustomInformation: C,
    shouldShowAdditionalContent: k,
    shouldShowPoweredBy: y,
    shouldShowTertiaryButton: B,
    secondaryButtonHierarchy: S,
    buttonContainerClasses: v,
    containerClasses: g,
    contentClasses: F
  } = w(a);
  N({
    onTag: i,
    state: e,
    variant: c,
    title: n,
    value: o
  });
  const T = { title: n, value: o }, r = /* @__PURE__ */ t(
    E,
    {
      state: e,
      title: n,
      value: o,
      description: h,
      signalVariant: b,
      shouldShowPoweredBy: y,
      alert: m
    }
  );
  return /* @__PURE__ */ t("div", { className: g, "data-testid": "feedback-screen", children: /* @__PURE__ */ s("div", { className: F, children: [
    C ? /* @__PURE__ */ s("div", { className: "feedback-screen__body", children: [
      r,
      /* @__PURE__ */ t(A, { state: e, contentItems: u }),
      /* @__PURE__ */ t(_, { shouldShow: k, children: f })
    ] }) : /* @__PURE__ */ t("div", { className: "feedback-screen__content-container", children: r }),
    /* @__PURE__ */ t(
      D,
      {
        state: e,
        buttonContainerClasses: v,
        secondaryButton: l,
        secondaryButtonHierarchy: S,
        primaryButton: p,
        tertiaryButton: d,
        shouldShowTertiaryButton: B,
        onTag: i,
        taggingContext: T
      }
    )
  ] }) });
};
export {
  M as FeedbackScreen
};
