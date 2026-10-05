import { jsx as l } from "react/jsx-runtime";
import { ListItemViewValueColorEnum as o, ListItemViewValueTypeEnum as n, ListItemViewOrientationEnum as t } from "../../../../Molecules/ListItemView/enums.js";
import { ListItemView as u } from "../../../../Molecules/ListItemView/ListItemView.js";
const T = ({ state: i, contentItems: a }) => a != null && a.length ? /* @__PURE__ */ l("div", { className: "feedback-screen__content-list", "data-testid": "feedback-screen-content-list", children: a.map((e, r) => /* @__PURE__ */ l(
  u,
  {
    orientation: e.orientation ?? t.HORIZONTAL,
    label: e.label,
    value: e.value,
    valueType: n.TEXT,
    valueColor: o.PRIMARY,
    state: i,
    onTag: e.onTag
  },
  `${e.label}-${e.value}-${r}`
)) }) : null;
export {
  T as FeedbackContentList
};
