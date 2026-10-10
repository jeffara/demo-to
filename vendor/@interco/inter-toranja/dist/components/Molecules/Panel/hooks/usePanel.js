import { useId as y, useEffect as _ } from "react";
import { getPanelFeedbackCopy as k, DEFAULT_SEARCH_TERM as m, SERVICE_UNAVAILABLE_RETRY_LABEL as A } from "../constants.js";
import { classNamesMerge as c } from "../../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as p } from "../../../../utils/pattern.js";
const C = (e) => {
  if (e.type !== "feedback")
    return null;
  const a = k(e.feedbackType, e.searchTerm ?? m);
  return {
    ...a,
    title: e.feedbackTitle ?? a.title,
    description: e.feedbackDescription ?? a.description
  };
}, u = (e) => e.type !== "feedback" ? {} : e.feedbackType === "serviceUnavailable" && e.feedbackPrimaryAction ? {
  primary: {
    ...e.feedbackPrimaryAction,
    label: e.feedbackPrimaryAction.label || A
  },
  secondary: e.feedbackSecondaryAction
} : {
  primary: e.feedbackPrimaryAction,
  secondary: e.feedbackSecondaryAction
}, N = (e) => {
  const { size: a = "4", minHeight: l, bodyPadding: i = "default", footer: n, onTag: t } = e, d = `panel-title-${y().replace(/:/g, "")}`, o = e.type === "feedback", r = C(e), { primary: s, secondary: f } = u(e);
  return _(() => {
    t && t((b) => ({
      ...b,
      name: p.DISPLAY,
      ComponentProperties: {
        component_name: "Panel"
      }
    }));
  }, [t]), {
    rootClasses: c("panel", {
      "panel--size-4": a === "4",
      "panel--size-8": a === "8",
      "panel--tall": l === "tall"
    }),
    titleClasses: "panel__title",
    bodyClasses: c("panel__body", {
      "panel__body--feedback": o,
      "panel__body--with-footer": !!n,
      "panel__body--flush": i === "flush"
    }),
    footerClasses: c("panel__footer", {
      "panel__footer--loading": (n == null ? void 0 : n.type) === "loading"
    }),
    footerActionsClasses: "panel__footer-actions",
    feedbackActionsClasses: "panel__feedback-actions",
    actionClassName: "panel__action",
    feedbackClassName: "panel__feedback",
    feedbackCopyClassName: "panel__feedback-copy",
    titleId: d,
    isFeedback: o,
    feedbackCopy: r,
    feedbackPrimaryAction: s,
    feedbackSecondaryAction: f
  };
};
export {
  N as usePanel
};
