import { ACTION_CHECKLIST_ENTRIES as i, CHART_CHECKLIST_ENTRIES as _, CONTAINER_CHECKLIST_ENTRIES as s, CONTENT_DISPLAY_CHECKLIST_ENTRIES as N, FORM_CONTROL_CHECKLIST_ENTRIES as r, ICONOGRAPHY_CHECKLIST_ENTRIES as o, NAVIGATION_CHECKLIST_ENTRIES as m, PROGRESS_INDICATOR_CHECKLIST_ENTRIES as R, STATUS_CHECKLIST_ENTRIES as l } from "./constants.js";
const T = (e, E, C, I) => I ? { name: e, path: E, status: C, issueHint: I } : { name: e, path: E, status: C }, t = (e) => e.map(
  ([E, C, I, S]) => T(E, C, I, S)
), a = [
  {
    title: "Actions",
    items: t(i)
  },
  {
    title: "Charts",
    items: t(_)
  },
  {
    title: "Containers",
    items: t(s)
  },
  {
    title: "Content Display",
    items: t(N)
  },
  {
    title: "Form Controls",
    items: t(r)
  },
  {
    title: "Iconography",
    items: t(o)
  },
  {
    title: "Navigation",
    items: t(m)
  },
  {
    title: "Progress Indicators",
    items: t(R)
  },
  {
    title: "Status",
    items: t(l)
  },
  {
    title: "Templates",
    items: [T("FeedbackScreen", "Templates/FeedbackScreen", "EXISTS_IDENTICAL")]
  }
];
export {
  a as HOME_IB_CHECKLIST,
  T as createChecklistItem
};
